/* Autoevaluación - Diseño de Software (UNSAM)
 *
 * Página estática: los datos viven en casos.js y preguntas-*.js.
 * Rutas por hash: #basicas, #medias, #avanzadas, #casos, #casos/<id-caso>
 */
(function () {
  'use strict';

  var NIVELES = {
    basicas: {
      titulo: 'Preguntas básicas',
      descripcion: 'Repaso de conceptos: definiciones y roles tal como los vimos en clase.',
      preguntas: window.PREGUNTAS_BASICAS || []
    },
    medias: {
      titulo: 'Preguntas medias',
      descripcion: 'Casos conocidos de clase y de la práctica: relacionar los conceptos con un diseño concreto.',
      preguntas: window.PREGUNTAS_MEDIAS || []
    },
    avanzadas: {
      titulo: 'Preguntas avanzadas',
      descripcion: 'Casos nuevos, muy parecidos a los de clase: hay que combinar varios conceptos para elegir.',
      preguntas: window.PREGUNTAS_AVANZADAS || []
    }
  };

  var CASOS = window.CASOS || [];
  var CLAVE_STORAGE = 'ddso-autoevaluacion-v1';
  var LETRAS = ['A', 'B', 'C', 'D', 'E'];
  // Elegida para que la opción correcta quede repartida entre A, B, C y D en cada nivel.
  var SAL_MEZCLA = '2272:';

  var estado = cargarEstado();
  var filtroTema = { basicas: null, medias: null, avanzadas: null };
  var volverA = null;
  var contadorDiagramas = 0;

  // ---------- Estado persistido ----------

  function cargarEstado() {
    try {
      var guardado = JSON.parse(localStorage.getItem(CLAVE_STORAGE));
      if (guardado && guardado.respuestas) return guardado;
    } catch (e) { /* storage no disponible o corrupto */ }
    return { respuestas: {}, explicaciones: {} };
  }

  function guardarEstado() {
    try { localStorage.setItem(CLAVE_STORAGE, JSON.stringify(estado)); } catch (e) { /* sin storage */ }
  }

  // ---------- Utilidades ----------

  function semilla(texto) {
    var h = 2166136261;
    for (var i = 0; i < texto.length; i++) {
      h ^= texto.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function aleatorio(s) {
    return function () {
      s = (s + 0x6D2B79F5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Orden estable por pregunta: mezcla las opciones, pero "Todas / Ninguna
  // de las anteriores" (fija: true) quedan siempre al final.
  function ordenOpciones(pregunta) {
    var libres = [];
    var fijas = [];
    pregunta.opciones.forEach(function (op, i) {
      (op.fija ? fijas : libres).push(i);
    });
    var rnd = aleatorio(semilla(SAL_MEZCLA + pregunta.id));
    for (var i = libres.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = libres[i]; libres[i] = libres[j]; libres[j] = tmp;
    }
    return libres.concat(fijas);
  }

  function escapar(texto) {
    var div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }

  function buscarCaso(id) {
    for (var i = 0; i < CASOS.length; i++) if (CASOS[i].id === id) return CASOS[i];
    return null;
  }

  function nivelDePregunta(idPregunta) {
    for (var clave in NIVELES) {
      if (NIVELES[clave].preguntas.some(function (p) { return p.id === idPregunta; })) return clave;
    }
    return null;
  }

  function htmlDiagrama(codigo, titulo) {
    return (titulo ? '<p class="nota">' + titulo + '</p>' : '') +
      '<div class="diagrama" data-pendiente="1"><pre class="oculto">' + escapar(codigo) + '</pre></div>';
  }

  // ---------- Mermaid ----------

  var mermaidIniciado = false;

  function renderizarDiagramas(raiz) {
    if (!window.mermaid) return;
    if (!mermaidIniciado) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'strict',
        themeVariables: { fontFamily: 'Inter, sans-serif', fontSize: '15px' },
        sequence: { useMaxWidth: true, mirrorActors: false },
        class: { useMaxWidth: true }
      });
      mermaidIniciado = true;
    }
    var pendientes = raiz.querySelectorAll('.diagrama[data-pendiente]');
    Array.prototype.forEach.call(pendientes, function (nodo) {
      nodo.removeAttribute('data-pendiente');
      var codigo = nodo.querySelector('pre').textContent;
      var id = 'diagrama-' + (++contadorDiagramas);
      window.mermaid.render(id, codigo).then(function (res) {
        nodo.innerHTML = res.svg;
      }).catch(function (err) {
        nodo.innerHTML = '<div class="diagrama-error">No se pudo dibujar el diagrama:\n' +
          escapar(String(err && err.message || err)) + '</div>';
        var basura = document.getElementById('d' + id);
        if (basura) basura.remove();
      });
    });
  }

  // ---------- Pestañas ----------

  function actualizarPestanas(vista) {
    var botones = document.querySelectorAll('#pestanas button');
    Array.prototype.forEach.call(botones, function (b) {
      var clave = b.getAttribute('data-vista');
      b.classList.toggle('activa', clave === vista);
      if (NIVELES[clave]) {
        var total = NIVELES[clave].preguntas.length;
        var respondidas = NIVELES[clave].preguntas.filter(function (p) {
          return estado.respuestas[p.id] !== undefined;
        }).length;
        var etiqueta = b.querySelector('.contador');
        if (!etiqueta) {
          etiqueta = document.createElement('span');
          etiqueta.className = 'contador';
          b.appendChild(etiqueta);
        }
        etiqueta.textContent = respondidas + '/' + total;
      }
    });
  }

  // ---------- Vista de un nivel ----------

  function renderNivel(clave) {
    var nivel = NIVELES[clave];
    var temas = [];
    nivel.preguntas.forEach(function (p) {
      if (temas.indexOf(p.tema) === -1) temas.push(p.tema);
    });

    var correctas = nivel.preguntas.filter(function (p) {
      var r = estado.respuestas[p.id];
      return r !== undefined && p.opciones[r].ok;
    }).length;
    var respondidas = nivel.preguntas.filter(function (p) {
      return estado.respuestas[p.id] !== undefined;
    }).length;

    var html = '<section class="tarjeta"><div class="barra-nivel"><div>' +
      '<h2>' + nivel.titulo + '</h2>' +
      '<p class="descripcion">' + nivel.descripcion + '</p></div>' +
      '<div class="progreso">Respondidas <strong>' + respondidas + '/' + nivel.preguntas.length + '</strong><br>' +
      'Correctas <strong>' + correctas + '</strong>' +
      '<br><button class="boton secundario" data-accion="reiniciar-nivel">Reiniciar nivel</button></div></div>' +
      '<div class="filtros"><button data-tema="" class="' + (filtroTema[clave] ? '' : 'activo') + '">Todos los temas</button>' +
      temas.map(function (t) {
        var cantidad = nivel.preguntas.filter(function (p) { return p.tema === t; }).length;
        return '<button data-tema="' + escapar(t) + '" class="' + (filtroTema[clave] === t ? 'activo' : '') + '">' +
          escapar(t) + ' (' + cantidad + ')</button>';
      }).join('') + '</div></section>';

    nivel.preguntas.forEach(function (p, i) {
      if (filtroTema[clave] && p.tema !== filtroTema[clave]) return;
      html += '<article class="tarjeta pregunta" id="p-' + p.id + '">' + htmlPregunta(p, i + 1) + '</article>';
    });

    var contenido = document.getElementById('contenido');
    contenido.innerHTML = html;

    contenido.querySelectorAll('.filtros button').forEach(function (b) {
      b.addEventListener('click', function () {
        filtroTema[clave] = b.getAttribute('data-tema') || null;
        renderNivel(clave);
      });
    });
    contenido.querySelector('[data-accion="reiniciar-nivel"]').addEventListener('click', function () {
      nivel.preguntas.forEach(function (p) {
        delete estado.respuestas[p.id];
        delete estado.explicaciones[p.id];
      });
      guardarEstado();
      renderNivel(clave);
      actualizarPestanas(clave);
    });
    nivel.preguntas.forEach(function (p, i) {
      var tarjeta = document.getElementById('p-' + p.id);
      if (tarjeta) conectarPregunta(tarjeta, p, i + 1, clave);
    });
    renderizarDiagramas(contenido);
  }

  function htmlPregunta(p, numero) {
    var respuesta = estado.respuestas[p.id];
    var respondida = respuesta !== undefined;
    var verTodas = !!estado.explicaciones[p.id];
    var caso = p.caso ? buscarCaso(p.caso) : null;

    var html = '<div class="pregunta-cabecera">' +
      '<span class="pregunta-numero">' + numero + '.</span>' +
      '<span class="badge">' + escapar(p.tema) + '</span>';
    if (caso) {
      html += '<span class="badge ambar">Caso: ' + escapar(caso.titulo) + '</span>' +
        '<span class="acciones-caso">' +
        '<button class="boton" data-accion="ver-caso">📘 Ver caso</button>' +
        '<a class="boton secundario" href="#casos/' + caso.id + '" target="_blank" rel="noopener" title="Abrir el caso en otra pestaña del navegador">↗</a>' +
        '</span>';
    }
    html += '</div><div class="enunciado">' + p.enunciado + '</div>';
    if (p.diagrama) html += htmlDiagrama(p.diagrama, p.diagramaTitulo);

    html += '<ul class="opciones">';
    ordenOpciones(p).forEach(function (indice, posicion) {
      var op = p.opciones[indice];
      var clase = '';
      var mostrarFeedback = false;
      if (respondida) {
        if (op.ok) { clase = 'correcta'; mostrarFeedback = true; }
        else if (indice === respuesta) { clase = 'incorrecta'; mostrarFeedback = true; }
        else if (verTodas) { clase = 'neutra'; mostrarFeedback = true; }
      }
      html += '<li class="opcion ' + clase + '">' +
        '<button data-opcion="' + indice + '"' + (respondida ? ' disabled' : '') + '>' +
        '<span class="letra">' + LETRAS[posicion] + '</span><span>' + op.t + '</span></button>';
      if (mostrarFeedback) {
        var veredicto = op.ok
          ? (indice === respuesta ? '✔ Correcta.' : '✔ Esta era la correcta.')
          : '✘ No.';
        html += '<div class="feedback"><span class="veredicto">' + veredicto + '</span>' + op.fb + '</div>';
      }
      html += '</li>';
    });
    html += '</ul>';

    if (respondida) {
      html += '<div class="pregunta-pie">' +
        '<button class="boton secundario" data-accion="explicaciones">' +
        (verTodas ? 'Ocultar las otras explicaciones' : 'Ver por qué no son las demás') + '</button>' +
        '<button class="boton secundario" data-accion="reintentar">Reintentar</button></div>';
    }
    return html;
  }

  function conectarPregunta(tarjeta, p, numero, clave) {
    function repintar() {
      tarjeta.innerHTML = htmlPregunta(p, numero);
      conectarPregunta(tarjeta, p, numero, clave);
      renderizarDiagramas(tarjeta);
      actualizarPestanas(clave);
      var progreso = document.querySelector('.progreso');
      if (progreso) {
        var nivel = NIVELES[clave];
        var respondidas = nivel.preguntas.filter(function (x) { return estado.respuestas[x.id] !== undefined; }).length;
        var correctas = nivel.preguntas.filter(function (x) {
          var r = estado.respuestas[x.id];
          return r !== undefined && x.opciones[r].ok;
        }).length;
        var fuertes = progreso.querySelectorAll('strong');
        fuertes[0].textContent = respondidas + '/' + nivel.preguntas.length;
        fuertes[1].textContent = correctas;
      }
    }

    tarjeta.querySelectorAll('[data-opcion]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (estado.respuestas[p.id] !== undefined) return;
        estado.respuestas[p.id] = Number(b.getAttribute('data-opcion'));
        guardarEstado();
        repintar();
      });
    });

    var botonExplicaciones = tarjeta.querySelector('[data-accion="explicaciones"]');
    if (botonExplicaciones) {
      botonExplicaciones.addEventListener('click', function () {
        estado.explicaciones[p.id] = !estado.explicaciones[p.id];
        guardarEstado();
        repintar();
      });
    }

    var botonReintentar = tarjeta.querySelector('[data-accion="reintentar"]');
    if (botonReintentar) {
      botonReintentar.addEventListener('click', function () {
        delete estado.respuestas[p.id];
        delete estado.explicaciones[p.id];
        guardarEstado();
        repintar();
      });
    }

    var botonCaso = tarjeta.querySelector('[data-accion="ver-caso"]');
    if (botonCaso) {
      botonCaso.addEventListener('click', function () {
        volverA = { vista: clave, pregunta: p.id, numero: numero };
        location.hash = 'casos/' + p.caso;
      });
    }
  }

  // ---------- Vista de casos ----------

  function renderCasos(idCaso) {
    var caso = buscarCaso(idCaso) || CASOS[0];
    var html = '<section class="tarjeta"><div class="barra-nivel"><div>' +
      '<h2>Casos</h2><p class="descripcion">Las preguntas medias usan casos vistos en clase y en la práctica; ' +
      'las avanzadas, casos nuevos con la misma estructura. Cada caso trae requisitos, diagramas y tests ' +
      'descriptos en forma <em>dado / cuando / entonces</em>.</p></div></div></section>';

    html += '<div class="selector-casos">' + CASOS.map(function (c) {
      return '<button data-caso="' + c.id + '" class="' + (c.id === caso.id ? 'activo' : '') + '">' +
        '<span class="badge ' + (c.nuevo ? 'ambar' : 'cian') + '">' + (c.nuevo ? 'Caso nuevo' : 'Visto en clase') + '</span>' +
        '<span class="nombre">' + escapar(c.titulo) + '</span>' +
        '<span class="origen">' + escapar(c.origen) + '</span></button>';
    }).join('') + '</div>';

    html += '<article class="tarjeta caso">' +
      '<span class="badge ' + (caso.nuevo ? 'ambar' : 'cian') + '">' + (caso.nuevo ? 'Caso nuevo' : 'Visto en clase') + '</span>' +
      '<h2>' + escapar(caso.titulo) + '</h2>' +
      '<p class="nota">' + escapar(caso.origen) + '</p>' +
      caso.descripcion;

    (caso.secciones || []).forEach(function (s) {
      html += '<h3>' + s.titulo + '</h3>';
      if (s.texto) html += s.texto;
      if (s.diagrama) html += htmlDiagrama(s.diagrama);
    });

    if (caso.tests && caso.tests.length) {
      html += '<h3>Tests</h3><p class="nota">Descriptos en palabras: <em>dado</em> = Arrange (incluye qué responden los mocks), ' +
        '<em>cuando</em> = Act, <em>entonces</em> = Assert (incluye qué se verifica con <code>verify</code>).</p>' +
        '<table class="tabla-tests"><thead><tr><th>Test</th><th>Unidad bajo test</th><th>Dado</th><th>Cuando</th><th>Entonces</th></tr></thead><tbody>' +
        caso.tests.map(function (t) {
          return '<tr><td>' + t.id + '</td><td>' + t.unidad + '</td><td>' + t.dado + '</td><td>' + t.cuando + '</td><td>' + t.entonces + '</td></tr>';
        }).join('') + '</tbody></table>';
    }

    var relacionadas = [];
    Object.keys(NIVELES).forEach(function (clave) {
      NIVELES[clave].preguntas.forEach(function (p, i) {
        if (p.caso === caso.id) relacionadas.push({ clave: clave, id: p.id, numero: i + 1 });
      });
    });
    if (relacionadas.length) {
      html += '<h3>Preguntas sobre este caso</h3><p>' + relacionadas.map(function (r) {
        return '<a class="boton secundario" href="#' + r.clave + '/' + r.id + '">' +
          NIVELES[r.clave].titulo.replace('Preguntas ', '') + ' ' + r.numero + '</a>';
      }).join(' ') + '</p>';
    }
    html += '</article>';

    var contenido = document.getElementById('contenido');
    contenido.innerHTML = html;
    contenido.querySelectorAll('[data-caso]').forEach(function (b) {
      b.addEventListener('click', function () {
        location.hash = 'casos/' + b.getAttribute('data-caso');
      });
    });
    renderizarDiagramas(contenido);
  }

  // ---------- Navegación ----------

  function actualizarVolver(vista) {
    var caja = document.getElementById('volver');
    if (vista === 'casos' && volverA) {
      caja.classList.remove('oculto');
      document.getElementById('volver-boton').textContent =
        '← Volver a la pregunta ' + volverA.numero + ' (' + NIVELES[volverA.vista].titulo.replace('Preguntas ', '') + ')';
    } else {
      caja.classList.add('oculto');
    }
  }

  function navegar() {
    var partes = location.hash.replace(/^#/, '').split('/');
    var vista = partes[0] || 'basicas';
    if (vista !== 'casos' && !NIVELES[vista]) vista = 'basicas';

    if (vista === 'casos') {
      renderCasos(partes[1]);
      window.scrollTo(0, 0);
    } else {
      renderNivel(vista);
      var destino = partes[1] && document.getElementById('p-' + partes[1]);
      if (destino) destino.scrollIntoView({ block: 'start' });
      else window.scrollTo(0, 0);
    }
    actualizarPestanas(vista);
    actualizarVolver(vista);
  }

  document.querySelectorAll('#pestanas button').forEach(function (b) {
    b.addEventListener('click', function () {
      volverA = null;
      location.hash = b.getAttribute('data-vista');
    });
  });

  document.getElementById('volver-boton').addEventListener('click', function () {
    var destino = volverA;
    volverA = null;
    if (destino) {
      if (filtroTema[destino.vista]) filtroTema[destino.vista] = null;
      location.hash = destino.vista + '/' + destino.pregunta;
    }
  });

  window.addEventListener('hashchange', navegar);
  navegar();

  // Exponer para verificación automática (ver validar.mjs).
  window.__autoevaluacion = { NIVELES: NIVELES, CASOS: CASOS, nivelDePregunta: nivelDePregunta };
})();
