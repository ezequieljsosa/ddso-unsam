/* Preguntas avanzadas: casos nuevos (Club de Puntos, Préstamos de Biblioteca).
 * Cada pregunta combina varios conceptos entre sí. Mismo formato que preguntas-basicas.js.
 */
window.PREGUNTAS_AVANZADAS = [
  // ---------------------------- Capas (13) ----------------------------
  {
    id: 'A01', tema: 'Capas', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Un desarrollador implementa la regla de vigencia (“solo cuentan los puntos de los últimos 12 meses”) dentro de <code>CanjeService</code>, recorriendo los movimientos del socio. Después, el proceso de vencimiento nocturno necesita la misma regla. ¿Qué evaluación es la más completa?</p>',
    opciones: [
      { t: 'Es un Dominio anémico: la regla se duplica y solo se testea con mocks; va en <code>Socio</code>.', ok: true,
        fb: 'Combina tres ideas: dónde vive la regla (Dominio), qué pasa al reutilizarla (redundancia) y cómo afecta a los tests (CP-T1 no necesita mocks).' },
      { t: 'Está bien: el Service concentra las reglas, y el proceso nocturno puede llamar a <code>CanjeService</code> para reutilizarla.',
        fb: 'El Service orquesta pero no decide: las reglas de negocio son del Dominio. Además, el proceso nocturno no hace canjes: tendría que depender de un caso de uso ajeno para reutilizar una regla.' },
      { t: 'El único problema es de rendimiento: recorrer los movimientos en memoria es lento con muchos socios.',
        fb: 'El problema principal es de diseño (ubicación de la regla y su repetición), no de rendimiento.' },
      { t: 'Debería estar en <code>CanjeController</code>, que recibe el pedido y puede rechazarlo antes de llegar al Service.',
        fb: 'El proceso nocturno no pasa por el Controller, así que la regla igual tendría que copiarse. Y quedaría atada a HTTP.' }
    ]
  },
  {
    id: 'A02', tema: 'Capas', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Durante un canje, el sistema del comercio no responde y <code>ComercioClient</code> lanza un error. Según las reglas del caso (“si el comercio no confirma, el socio conserva sus puntos”), ¿qué diseño lo garantiza?</p>',
    opciones: [
      { t: 'Una sola transacción en el Service, que guarda recién después de la confirmación.', ok: true,
        fb: 'Une el límite transaccional del Service con el orden de la secuencia. Es lo que verifica CP-T4: nunca se llama a guardar.' },
      { t: 'Que <code>ComercioClient</code>, al detectar el error, le devuelva los puntos al socio en la base.',
        fb: 'El Client es Fuente de datos: no conoce al Socio ni tiene reglas de negocio. Mezclaría responsabilidades.' },
      { t: 'Que el <code>CanjeController</code> atrape el error y haga el rollback antes de responder.',
        fb: 'El Controller no conoce los pasos del caso de uso; la transacción la define el Service.' },
      { t: 'Ninguno: si el comercio no responde, es aceptable que el socio pierda los puntos.', fija: true,
        fb: 'El caso dice explícitamente que el socio conserva sus puntos.' }
    ]
  },
  {
    id: 'A03', tema: 'Capas', caso: 'clubpuntos',
    enunciado: '<p>Se propone este cambio en el modelo: que <code>Socio</code> se guarde a sí mismo. ¿Qué problema tiene?</p>',
    diagrama: [
      'classDiagram',
      '  direction LR',
      '  class CanjeService {',
      '    <<Servicio de aplicacion>>',
      '    +canjear(nroSocio, codigoPremio)',
      '  }',
      '  class Socio {',
      '    <<Dominio>>',
      '    -repositorio SocioRepository',
      '    +descontarPuntos(cantidad, fecha)',
      '    +guardarme()',
      '  }',
      '  class SocioRepository {',
      '    <<Repositorio>>',
      '    +guardar(socio)',
      '  }',
      '  CanjeService --> Socio',
      '  Socio --> SocioRepository : usa'
    ].join('\n'),
    opciones: [
      { t: 'El Dominio depende de la Fuente de datos y el Service pierde el control de la transacción.', ok: true,
        fb: 'Une dependencias entre capas, testeabilidad y transacción. El Dominio debería quedar independiente de la infraestructura.' },
      { t: 'Ninguno: es más orientado a objetos que cada objeto sepa guardarse a sí mismo.',
        fb: 'Datos + comportamiento se refiere a reglas de negocio; persistirse es un detalle de infraestructura.' },
      { t: 'Solo el nombre: el método debería llamarse <code>guardar</code>, como en el repositorio.',
        fb: 'El nombre no cambia el problema: la dirección de la dependencia.' },
      { t: 'Que <code>SocioRepository</code> debería depender de <code>CanjeService</code> para saber cuándo guardar.',
        fb: 'La Fuente de datos no depende del Service; sería otra dependencia en la dirección equivocada.' }
    ]
  },
  {
    id: 'A04', tema: 'Capas', caso: 'clubpuntos', fragmento: 'capas',
    enunciado: '<p>Para “ahorrarse” el DTO, alguien propone que <code>POST /canjes</code> devuelva directamente la entidad <code>Socio</code>, con toda su lista de <code>MovimientoPuntos</code>. ¿Qué consecuencias tiene?</p>',
    opciones: [
      { t: 'Acopla la API al modelo, expone datos internos y carga todos los movimientos.', ok: true,
        fb: 'Une el rol del DTO (contrato entre capas) con el costo de datos: traer el grafo completo de objetos cuando solo hacía falta un número.' },
      { t: 'Ninguna: es la forma recomendada, porque evita mantener una clase DTO por endpoint.',
        fb: 'Una clase menos no compensa el acoplamiento entre la API y el Dominio.' },
      { t: 'Que el canje deja de ser transaccional, porque la entidad sale de la capa de Service.',
        fb: 'La transacción la define el Service; el tipo de respuesta no la afecta.' },
      { t: 'Que el endpoint tiene que pasar a GET, porque ahora devuelve datos del socio.',
        fb: 'El canje modifica estado: sigue siendo POST. El problema está en qué se devuelve.' }
    ]
  },
  {
    id: 'A05', tema: 'Capas', caso: 'biblioteca',
    enunciado: '<p>En la Biblioteca, un compañero implementó “prestar” así. ¿Cuál es la evaluación más completa?</p>',
    diagrama: [
      'sequenceDiagram',
      '  actor B as Bibliotecario',
      '  participant C as PrestamoController',
      '  participant RS as SocioRepository',
      '  participant RE as EjemplarRepository',
      '  participant RP as PrestamoRepository',
      '  B->>+C: POST /prestamos { nroSocio: 77, codigoEjemplar: LIB-0042 }',
      '  C->>+RS: buscarPorNumero(77)',
      '  RS-->>-C: socio',
      '  Note over C: si socio.getMultas() no esta vacio, responde 400',
      '  Note over C: si socio.getPrestamos().size() es 3 o mas, responde 400',
      '  C->>+RE: buscarPorCodigo(LIB-0042)',
      '  RE-->>-C: ejemplar',
      '  C->>+RP: guardar(new Prestamo(...))',
      '  RP-->>-C: ok',
      '  C-->>-B: 201 Created'
    ].join('\n'),
    opciones: [
      { t: 'Saltea el Service: reglas en la Presentación, sin transacción y testeables solo vía HTTP.', ok: true,
        fb: 'Capas, ubicación de las reglas y testeabilidad están conectadas: cuando falta el Service, la Presentación termina haciendo todo.' },
      { t: 'Está bien: si las reglas son simples, pueden quedar en el Controller sin pasar por un Service.',
        fb: 'Que sean simples no cambia de quién son. Cuando aparezca otra Presentación (un tótem, un bot), habría que copiarlas.' },
      { t: 'El único problema es el código de estado: al crear un préstamo debería responder 200 OK.',
        fb: '201 Created es correcto al crear un préstamo. Los problemas son de diseño.' },
      { t: 'El único problema es que el Controller usa tres repositorios, cuando debería usar uno solo.',
        fb: 'La cantidad no es el problema: el problema es que el Controller los use.' }
    ]
  },
  {
    id: 'A06', tema: 'Capas', caso: 'biblioteca', fragmento: 'prestamo',
    enunciado: '<p>¿Dónde conviene ubicar la regla “un socio no puede tener más de 3 préstamos activos ni multas impagas”?</p>',
    opciones: [
      { t: 'En <code>Socio.puedePedirPrestamo()</code>, que el Service consulta al orquestar.', ok: true,
        fb: 'Regla de negocio en el Dominio, orquestación en el Service y un test unitario simple: las tres cosas van juntas.' },
      { t: 'En <code>PrestamoRepository</code>, con una consulta que cuente los préstamos activos y devuelva si puede.',
        fb: 'El Repository puede aportar datos (por ejemplo, cuántos préstamos hay), pero decidir si se permite es una regla de negocio. Así la regla quedaría escondida en la Fuente de datos.' },
      { t: 'En <code>PrestamoController</code>, para rechazar el pedido antes de llamar al Service.',
        fb: 'Quedaría atada a HTTP y cualquier otra Presentación podría saltearla.' },
      { t: 'En el manejador global de errores, que centraliza todos los rechazos de la aplicación.',
        fb: 'Ese componente traduce excepciones a códigos HTTP; no evalúa reglas.' }
    ]
  },
  {
    id: 'A07', tema: 'Capas', caso: 'biblioteca', fragmento: 'prestamo',
    enunciado: '<p>Al devolver un libro 3 días tarde, ¿qué reparto de responsabilidades es coherente con el diseño de la Biblioteca?</p>',
    opciones: [
      { t: '<code>Prestamo.devolver</code> calcula la multa; el Service persiste todo en una transacción.', ok: true,
        fb: 'Cada capa hace lo suyo: el Dominio calcula (BI-T2 lo prueba sin mocks), el Service orquesta y persiste, la Presentación traduce.' },
      { t: 'El Service calcula los días de atraso y el monto; <code>Prestamo</code> solo guarda las fechas.',
        fb: 'Sería un Dominio anémico: el cálculo de la multa es una regla de negocio y le corresponde a Prestamo.' },
      { t: 'El <code>PrestamoRepository</code> calcula la multa con una consulta SQL al guardar la devolución.',
        fb: 'Pondría la regla en la Fuente de datos: no se puede testear sin base de datos y queda lejos del negocio.' },
      { t: 'El Controller calcula la multa y la incluye en la respuesta para que el bibliotecario la cobre.',
        fb: 'La Presentación no decide reglas; además, la multa tiene que quedar registrada, no solo mostrarse.' }
    ]
  },
  {
    id: 'A08', tema: 'Capas', caso: 'biblioteca', fragmento: 'entradas',
    enunciado: '<p>En el recordatorio por mail, <code>RecordatorioListener</code> recibe un mensaje de la cola y llama a <code>PrestamoService.recordarVencimiento</code>. ¿Por qué este diseño tiene sentido?</p>',
    opciones: [
      { t: 'El listener es otra Presentación: reutiliza el Service y el mail sale por un Client.', ok: true,
        fb: 'Une tipos de aplicación (un Worker que consume mensajes) con capas: cambia el disparador, no el núcleo.' },
      { t: 'No tiene sentido: el listener debería conectarse por SMTP y armar el mail él mismo, sin el Service.',
        fb: 'Así el listener tendría el caso de uso completo y además detalles de infraestructura: baja cohesión y nada reutilizable.' },
      { t: 'El listener es parte del Dominio, porque es el que decide a qué socios hay que avisarles.',
        fb: 'Quién debe recibir el aviso lo resuelven el Service y el Dominio; el listener solo traduce el mensaje en una llamada.' },
      { t: 'Debería ser un endpoint HTTP que el servidor de mail llama cada dos días para pedir los avisos.',
        fb: 'En cliente-servidor el servidor de mail no inicia pedidos hacia nosotros: es al revés. Además, el disparador del caso es un mensaje en una cola.' }
    ]
  },
  {
    id: 'A09', tema: 'Capas', caso: 'clubpuntos',
    enunciado: '<p>Esta versión del canje tiene los pasos en otro orden. ¿Qué problema aparece?</p>',
    diagrama: [
      'sequenceDiagram',
      '  participant S as CanjeService',
      '  participant CC as ComercioClient',
      '  participant So as s1:Socio',
      '  activate S',
      '  S->>+CC: confirmarCanje(1001, TERMO)',
      '  CC-->>-S: confirmado',
      '  S->>+So: puedeCanjear(termo, hoy)',
      '  So-->>-S: false',
      '  Note over S: lanza error, la transaccion se revierte',
      '  deactivate S'
    ].join('\n'),
    opciones: [
      { t: 'El comercio confirma un canje que después rechazamos, y el rollback no lo deshace.', ok: true,
        fb: 'La transacción protege nuestra base, no al sistema del comercio. Por eso primero valida el Dominio y después se llama al externo.' },
      { t: 'Ninguno: como la transacción se revierte al final, todo queda como estaba antes del canje.',
        fb: 'Se revierte lo nuestro. La confirmación en el sistema del comercio ya ocurrió.' },
      { t: 'Que <code>puedeCanjear</code> debería estar en <code>ComercioClient</code>, que es quien confirma.',
        fb: 'La regla es nuestra y vive en el Dominio. El problema es el orden, no la ubicación.' },
      { t: 'Que falta un <code>verify</code> en el diagrama para comprobar que se llamó al comercio.',
        fb: 'verify es parte de un test, no del diseño de la secuencia.' }
    ]
  },
  {
    id: 'A10', tema: 'Capas', caso: 'biblioteca', fragmento: 'prestamo',
    enunciado: '<p>Se agrega una regla nueva: “un ejemplar <strong>reservado</strong> por otro socio no se le puede prestar a nadie más”. Con el diseño del caso (la disponibilidad la decide <code>Ejemplar</code>), ¿qué cambia?</p>',
    opciones: [
      { t: 'Sobre todo el Dominio (Ejemplar y una nueva Reserva) y su persistencia.', ok: true,
        fb: 'Como la regla de disponibilidad ya estaba encapsulada, el cambio queda acotado: es la flexibilidad que buscamos con las capas.' },
      { t: 'El <code>PrestamoController</code>, que tiene que validar las reservas antes de llamar al Service.',
        fb: 'Es una regla de negocio: no le corresponde a la Presentación.' },
      { t: 'Todas las clases del diagrama, porque la regla afecta a todo el préstamo.', fija: true,
        fb: 'Si una regla nueva obligara a tocar todo, el diseño sería rígido.' },
      { t: 'Solo la base de datos, con un trigger que impida el INSERT del préstamo.',
        fb: 'La regla quedaría fuera del Dominio y de los tests unitarios; solo se descubriría al guardar.' }
    ]
  },
  {
    id: 'A11', tema: 'Capas', caso: 'clubpuntos', fragmento: 'capas',
    enunciado: '<p>Se canjea desde dos lugares: la app móvil (API JSON) y la pantalla de la caja del comercio (web). Hay dos tipos de validación: de <strong>formato</strong> (“el número de socio no puede venir vacío”) y de <strong>negocio</strong> (“los puntos vigentes alcanzan”). ¿Dónde va cada una?</p>',
    opciones: [
      { t: 'Formato en cada Presentación; la regla de negocio, una sola vez en el Dominio.', ok: true,
        fb: 'El formato depende de cada cara; la regla es única. Así ninguna Presentación puede saltear el negocio y no hay reglas duplicadas.' },
      { t: 'Las dos validaciones en cada Controller, para rechazar rápido sin llegar al Service.',
        fb: 'La regla de negocio quedaría duplicada en dos Controllers, con riesgo de que se desfasen.' },
      { t: 'Las dos validaciones en el Dominio, para tener todas las validaciones juntas.',
        fb: 'Revisar si un campo del pedido vino vacío es un detalle de cómo llega el pedido, no del negocio.' },
      { t: 'Las dos en la base de datos, con restricciones sobre las columnas.',
        fb: 'Las restricciones de la base son una última barrera, no el lugar de las reglas.' }
    ]
  },
  {
    id: 'A12', tema: 'Capas', caso: 'clubpuntos', tests: ['CP-T1', 'CP-T3'],
    enunciado: '<p>El club decide pasar de H2 a PostgreSQL. Con el diseño del caso, ¿qué pasa con los tests CP-T1 a CP-T5?</p>',
    opciones: [
      { t: 'Hay que reescribirlos todos, porque cambia la base.',
        fb: 'Ninguno de esos tests usa la base: o no tienen dependencias o las tienen mockeadas.' },
      { t: 'Solo hay que cambiar los de <code>Socio</code> (CP-T1 y CP-T2).',
        fb: 'Los tests de Socio son los más independientes: no tocan ni repositorios ni base.' },
      { t: 'Solo hay que cambiar los de <code>CanjeService</code> (CP-T3 a CP-T5), porque el Service usa repositorios.',
        fb: 'El Service usa los repositorios a través de su interfaz, y en estos tests son mocks: no cambian con el motor.' },
      { t: 'Ninguna de las anteriores: siguen igual.', fija: true, ok: true,
        fb: 'Aislar la Fuente de datos rinde en dos lados: el cambio de motor no toca el núcleo y tampoco sus tests.' }
    ]
  },
  {
    id: 'A13', tema: 'Capas', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Hay que implementar el vencimiento nocturno de puntos. ¿Qué propuesta es la mejor?</p>',
    opciones: [
      { t: 'Un proceso por horario que use un Service de vencimiento y la regla de <code>Socio</code>.', ok: true,
        fb: 'Cambia el disparador (un horario en vez de un pedido) pero se reutilizan el Dominio y la Fuente de datos: la regla existe en un solo lugar.' },
      { t: 'Que el proceso nocturno haga un pedido HTTP a la API de canjes por cada socio.',
        fb: 'Acopla el batch a la Presentación de otro canal: millones de pedidos HTTP para algo que puede hacer reutilizando el Service directamente.' },
      { t: 'Un UPDATE SQL nocturno que borre los movimientos de más de 12 meses.',
        fb: 'La regla de vigencia quedaría duplicada en SQL, fuera del Dominio y sin tests unitarios.' },
      { t: 'Copiar <code>CanjeService</code> en el proyecto del batch y adaptarlo al vencimiento.',
        fb: 'Copiar código es redundancia: cualquier cambio en la regla habría que hacerlo dos veces.' }
    ]
  },

  // ---------------------------- Testing (5) ----------------------------
  {
    id: 'A14', tema: 'Testing', caso: 'clubpuntos', tests: ['CP-T1', 'CP-T3', 'CP-T4'],
    enunciado: '<p>Si la regla de vigencia estuviera en <code>CanjeService</code> (y <code>Socio</code> solo tuviera getters y setters), ¿cuál de los tests del caso <strong>no</strong> se podría escribir como está?</p>',
    opciones: [
      { t: 'CP-T1, que le pregunta a <code>Socio</code> cuántos puntos vigentes tiene, sin mocks.', ok: true,
        fb: 'Sin el comportamiento en Socio no hay a quién preguntarle: la regla solo se podría probar a través del Service, con mocks de repositorios.' },
      { t: 'CP-T3, el del premio sin stock, que mockea los repositorios.',
        fb: 'Ese test es del Service y usa mocks: se puede escribir igual.' },
      { t: 'CP-T4, el de la falla del comercio, que mockea el client.',
        fb: 'También es un test del Service con mocks; no depende de dónde esté la regla de vigencia.' },
      { t: 'Ninguno: cambiar dónde está la regla no afecta a los tests.', fija: true,
        fb: 'Afecta: los tests prueban unidades, y mover la regla cambia qué unidad la contiene.' }
    ]
  },
  {
    id: 'A15', tema: 'Testing', caso: 'clubpuntos',
    diagramaTitulo: 'Escenario del test CP-T3: el Service real, sus dependencias mockeadas y los objetos de prueba (el premio sin stock, resaltado)',
    diagrama: [
      'classDiagram',
      '  direction LR',
      '  class test["test : CanjeServiceTest"] {',
      '  }',
      '  class s["s : CanjeService"] {',
      '  }',
      '  class repoSocios["repoSocios : SocioRepository"] {',
      '    <<mock>>',
      '  }',
      '  class repoPremios["repoPremios : PremioRepository"] {',
      '    <<mock>>',
      '  }',
      '  class comercio["comercio : ComercioClient"] {',
      '    <<mock>>',
      '  }',
      '  class s1["s1 : Socio"] {',
      '    nroSocio = 1001',
      '    puntos vigentes = 900',
      '  }',
      '  class termo["termo : Premio"] {',
      '    codigo = "TERMO"',
      '    costoEnPuntos = 400',
      '    stock = 0',
      '  }',
      '  test --> s : canjear(1001, TERMO)',
      '  s --> repoSocios',
      '  s --> repoPremios',
      '  s --> comercio',
      '  repoSocios ..> s1',
      '  repoPremios ..> termo',
      '  style termo fill:#f59e0b33,stroke:#fbbf24,stroke-width:2px'
    ].join('\n'),
    enunciado: '<p>¿Cuál es la descripción correcta del test CP-T3 (premio sin stock) en términos de Arrange, Act y Assert?</p>',
    opciones: [
      { t: 'Arrange: mocks devuelven socio con puntos y premio sin stock. Act: canjear. Assert: error, y <code>verify</code> de que nunca se confirmó ni se guardó.', ok: true,
        fb: 'when programa el escenario, assertThrows verifica el resultado y verify(never) confirma que no hubo efectos.' },
      { t: 'Arrange: base de datos real con un premio sin stock. Act: canjear. Assert: error, y consulta a la base para ver que el stock no cambió.',
        fb: 'Un test unitario del Service no usa la base real: usa mocks.' },
      { t: 'Arrange: se mockea <code>CanjeService</code> para que lance el error. Act: se llama al mock. Assert: el error es el esperado.',
        fb: 'Se mockearía la unidad bajo test: no se estaría probando nada real.' },
      { t: 'Arrange: mocks devuelven socio con puntos y premio sin stock. Act: canjear. Assert: no hace falta, alcanza con que no explote.',
        fb: 'Sin verificaciones, el test pasa aunque el Service no haga lo que debe (por ejemplo, aunque confirme el canje igual).' }
    ]
  },
  {
    id: 'A16', tema: 'Testing', caso: 'clubpuntos', tests: ['CP-T2'],
    enunciado: '<p>En producción, socios con 0 puntos vigentes lograron canjear premios. CP-T2 (<code>puedeCanjear</code> devuelve <code>false</code>) pasa. Se descubre que, tras un refactor, <code>CanjeService</code> dejó de llamar a <code>puedeCanjear</code>. ¿Qué test faltaba?</p>',
    opciones: [
      { t: 'Uno del Service: socio que no puede canjear ⇒ error, y nunca se confirma ni se guarda.', ok: true,
        fb: 'Los tests de Dominio prueban que la regla existe; los del Service, que el caso de uso la usa. Hacen falta los dos niveles.' },
      { t: 'Otro test de <code>Socio</code> con más combinaciones de puntos vencidos y vigentes.',
        fb: 'La regla de Socio funciona (CP-T2 pasa). El error está en la orquestación.' },
      { t: 'Ninguno: este tipo de error no se puede detectar con tests.', fija: true,
        fb: 'Un test del Service con verify lo detecta en milisegundos.' },
      { t: 'Un test del repositorio de premios que verifique que el stock se descuenta bien.',
        fb: 'El stock no tiene que ver con este error.' }
    ]
  },
  {
    id: 'A17', tema: 'Testing', caso: 'biblioteca', fragmento: 'secuenciaClases', tests: ['BI-T2', 'BI-T3', 'BI-T4'],
    enunciado: '<p>En la secuencia a nivel clases de la Biblioteca aparece el paso “<code>p9:Prestamo</code>.devolver(hoy) ⇒ Multa de 1500”. ¿Qué test lo cubre y qué tipo de test es?</p>',
    opciones: [
      { t: 'BI-T2: unitario de Dominio, sin mocks.', ok: true,
        fb: 'El paso ocurre dentro de un objeto de Dominio, así que se prueba directamente sobre ese objeto.' },
      { t: 'BI-T3: unitario del Service, con mocks de los repositorios.',
        fb: 'BI-T3 prueba que no se presta a un socio con multas; no ejercita la devolución.' },
      { t: 'BI-T4: unitario del Service, con mock del NotificadorClient.',
        fb: 'BI-T4 verifica que se envíe un mail; no calcula multas.' },
      { t: 'Ninguno: un cálculo de multa solo se puede probar a través de HTTP.', fija: true,
        fb: 'Como la regla vive en el Dominio, se prueba sin HTTP, sin Spring y sin base de datos.' }
    ]
  },
  {
    id: 'A18', tema: 'Testing', caso: 'clubpuntos',
    diagramaTitulo: 'Diagrama de objetos del test de integración (profile test)',
    diagrama: [
      'classDiagram',
      '  direction LR',
      '  class test["test : CanjeIntegracionTest"] {',
      '  }',
      '  class s["s : CanjeService"] {',
      '  }',
      '  note for s "Real, creado por Spring con el profile test"',
      '  class repoSocios["repoSocios : SocioRepositoryEnMemoria"] {',
      '  }',
      '  class repoPremios["repoPremios : PremioRepositoryEnMemoria"] {',
      '  }',
      '  class comercio["comercio : ComercioClientFalso"] {',
      '    siempre confirma',
      '  }',
      '  note for comercio "Reemplaza al client real con el profile test"',
      '  test --> s : canjear(1001, TERMO)',
      '  s --> repoSocios',
      '  s --> repoPremios',
      '  s --> comercio'
    ].join('\n'),
    enunciado: '<p>Se arma un test que levanta toda la aplicación con el profile <code>test</code>: repositorios en memoria y un <code>ComercioClient</code> <strong>falso</strong> que siempre confirma. ¿Por qué también hace falta reemplazar el client?</p>',
    opciones: [
      { t: 'Porque el client real llamaría al comercio: el test sería lento, frágil y con efectos reales.', ok: true,
        fb: 'Une profiles, el rol del Client en la Fuente de datos y las propiedades de un buen test (rápido, repetible, aislado).' },
      { t: 'No hace falta: con reemplazar los repositorios por versiones en memoria ya alcanza.',
        fb: 'La base no es la única dependencia externa: el comercio también lo es.' },
      { t: 'Porque Spring no permite mezclar beans reales con beans en memoria en la misma app.',
        fb: 'Spring lo permite; el problema es depender de un sistema externo en un test.' },
      { t: 'Para que el test pruebe que el sistema del comercio confirma bien los canjes.',
        fb: 'Al contrario: lo reemplazamos para no depender de él.' }
    ]
  },

  // ----------------------- Diseño y principios (5) -----------------------
  {
    id: 'A19', tema: 'Diseño y principios', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Con el tiempo, <code>CanjeService</code> también calcula cuántos puntos corresponden a una compra, arma el PDF del comprobante y envía el mail de “canje exitoso” conectándose al servidor de correo. ¿Qué diagnóstico es el más preciso?</p>',
    opciones: [
      { t: 'Viola SRP: puntos, PDF y mail son motivos de cambio de capas distintas.', ok: true,
        fb: 'Detrás de cada motivo de cambio hay una capa. Separarlos sube la cohesión y baja el acoplamiento.' },
      { t: 'Está bien: el Service es el lugar donde se juntan todas las tareas que forman el canje.',
        fb: 'El Service coordina tareas; no las hace todas él.' },
      { t: 'Es un problema de rendimiento: hay que dividirlo para que las tareas corran en paralelo.',
        fb: 'El problema es de cohesión y de costo de cambio, no de velocidad.' },
      { t: 'Viola LSP, porque el Service deja de comportarse como prometía su contrato.',
        fb: 'LSP trata sobre subtipos que no cumplen el contrato de su tipo base; acá no hay herencia involucrada.' }
    ]
  },
  {
    id: 'A20', tema: 'Diseño y principios', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Aparecen tipos de premio: producto físico (se reserva stock), descuento (genera un código) y donación (se avisa a una ONG). Una propuesta pone un <code>switch</code> por tipo dentro de <code>CanjeService</code>. Otra le agrega a <code>Premio</code> un método <code>entregar()</code>, con una implementación por cada tipo. ¿Cuál conviene?</p>',
    opciones: [
      { t: 'La de <code>Premio.entregar()</code>: cumple OCP y deja la regla en el Dominio.', ok: true,
        fb: 'Abierto a extensión, cerrado a modificación. Además evita que el Service vuelva a concentrar reglas (Dominio anémico).' },
      { t: 'La del <code>switch</code>: con todo en un solo lugar es más simple de leer y de cambiar.',
        fb: 'Cada tipo nuevo obliga a modificar el Service: es rigidez, y las reglas vuelven al Service.' },
      { t: 'Da igual: las dos propuestas tienen el mismo costo cuando aparece un tipo nuevo.',
        fb: 'No: con el switch, cada tipo nuevo implica tocar código que ya funcionaba.' },
      { t: 'Ninguna: cada tipo de premio necesita su propio Controller.', fija: true,
        fb: 'El tipo de premio es una variación del negocio, no una cara distinta de la aplicación.' }
    ]
  },
  {
    id: 'A21', tema: 'Diseño y principios', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Cada vez que el comercio cambia el formato de su API, el equipo termina modificando <code>CanjeService</code>, <code>Socio</code> y <code>CanjeController</code>. ¿Qué cualidad hay que mejorar y cómo?</p>',
    opciones: [
      { t: 'Bajar el acoplamiento con el sistema externo, aislando todo lo del comercio en <code>ComercioClient</code>.', ok: true,
        fb: 'Con bajo acoplamiento, un cambio externo queda acotado a la Fuente de datos y no se propaga por las otras capas: mejora la flexibilidad (mantenibilidad).' },
      { t: 'Mejorar la consistencia, usando los mismos nombres de campos que el comercio en todas las clases.',
        fb: 'Copiar los nombres del comercio en todas las capas aumenta el acoplamiento: cada cambio externo seguiría atravesando todo.' },
      { t: 'Mejorar la robustez, agregando manejo de excepciones en <code>CanjeController</code>.',
        fb: 'Manejar errores no evita que haya que modificar tres clases ante cada cambio del comercio.' },
      { t: 'Subir la cohesión de <code>CanjeService</code>, moviendo ahí todo lo que tenga que ver con el comercio.',
        fb: 'El Service quedaría con dos responsabilidades (orquestar y hablar con el comercio): baja su cohesión.' }
    ]
  },
  {
    id: 'A35', tema: 'Diseño y principios', caso: 'clubpuntos', tests: ['CP-T1', 'CP-T2'],
    enunciado: '<p>El equipo nota que los tests CP-T1 y CP-T2 se escriben en pocas líneas, sin mocks ni base de datos. ¿Qué dice eso del diseño?</p>',
    opciones: [
      { t: 'Que <code>Socio</code> es cohesivo y está desacoplado de la infraestructura.', ok: true,
        fb: 'La facilidad de prueba suele habilitar o reflejar otras cualidades: alta cohesión y bajo acoplamiento.' },
      { t: 'Que los tests son pobres: un buen test unitario siempre usa mocks.',
        fb: 'Los mocks se usan cuando hay dependencias que aislar. Si la unidad no las tiene, mejor.' },
      { t: 'Que <code>Socio</code> es anémico, porque no depende de ninguna otra clase.',
        fb: 'Anémico es no tener comportamiento. Socio tiene reglas (puntos vigentes, si puede canjear); no depender de la infraestructura es una virtud.' },
      { t: 'Nada: la facilidad de prueba no tiene relación con la calidad del diseño.',
        fb: 'Tiene relación directa: es una de las cualidades que buscamos y suele ir de la mano con las demás.' }
    ]
  },
  {
    id: 'A36', tema: 'Diseño y principios', caso: 'biblioteca', fragmento: 'prestamo',
    enunciado: '<p>Se agrega: “los socios docentes pueden tener hasta 5 préstamos”. Como la regla está en <code>Socio.puedePedirPrestamo()</code>, el cambio queda en un solo lugar y no toca el Controller ni el Service. ¿Qué cualidades explican eso?</p>',
    opciones: [
      { t: 'Alta cohesión (un único lugar con la verdad sobre la regla) que da flexibilidad.', ok: true,
        fb: 'Como la regla vive en un solo lugar, el cambio es puntual: es la mantenibilidad que buscamos.' },
      { t: 'Robustez, porque la regla nueva no lanza excepciones distintas.',
        fb: 'Las excepciones no cambian el costo de este cambio; lo que lo abarata es dónde está la regla.' },
      { t: 'Consistencia, porque ahora todos los socios tienen el mismo límite.',
        fb: 'Al contrario: ahora hay límites distintos según el tipo de socio.' },
      { t: 'Reusabilidad del Controller, que ahora sirve también para docentes.',
        fb: 'El Controller no participa de la regla; ya servía para todos los socios.' }
    ]
  },

  // --------------------------- Web y HTTP (3) ---------------------------
  {
    id: 'A22', tema: 'Web y HTTP', caso: 'clubpuntos',
    enunciado: '<p>El sistema de un comercio informa una compra con <code>POST /compras</code>. Si no recibe respuesta a tiempo, reintenta (como dice la ficha de API: “si falla, el cliente reintenta”). Algunos socios terminaron con puntos duplicados. ¿Qué solución es correcta?</p>',
    opciones: [
      { t: 'Identificar la compra por número de ticket y no sumar si ya fue registrada.', ok: true,
        fb: 'POST no es idempotente; ante reintentos esperables hay que diseñar para que repetir el pedido no repita el efecto.' },
      { t: 'Cambiar el endpoint a GET, que es idempotente, para que los reintentos no dupliquen.',
        fb: 'GET no debe modificar nada, y registrar una compra modifica el estado. El problema de los duplicados seguiría ahí.' },
      { t: 'Pedirles a los comercios que nunca reintenten y que llamen a soporte si no hay respuesta.',
        fb: 'Los reintentos son esperables en una API; el diseño tiene que contemplarlos.' },
      { t: 'Que el Controller recuerde en una variable en memoria los últimos tickets recibidos.',
        fb: 'Se pierde al reiniciar y no funciona con varias instancias o muchos pedidos a la vez. Además, mezcla una regla del negocio con la Presentación.' }
    ]
  },
  {
    id: 'A23', tema: 'Web y HTTP', caso: 'biblioteca', fragmento: 'secuenciaMultas', fragmentoTipo: 'la secuencia de este escenario, con los signos de pregunta donde está la respuesta',
    enunciado: '<p>¿Qué cadena es coherente de punta a punta cuando se intenta prestar un libro a un socio con multas impagas?</p>',
    opciones: [
      { t: '<code>Socio</code> rechaza; el Service lanza una excepción de negocio; la Presentación responde 400.', ok: true,
        fb: 'Cada capa habla su idioma: el Dominio en términos del negocio y la Presentación en HTTP.' },
      { t: '<code>Socio</code> lanza directamente un error HTTP 400, que el Controller devuelve tal cual.',
        fb: 'El Dominio quedaría atado a HTTP y no se podría reutilizar desde el listener de mensajes o un bot.' },
      { t: 'El Service atrapa el error y responde <code>200 OK</code> con <code>{"ok": false}</code> en el cuerpo.',
        fb: 'Un 2xx le dice al cliente que salió bien; los códigos de estado existen para comunicar el resultado.' },
      { t: 'La aplicación responde <code>500 Internal Server Error</code>, porque se lanzó una excepción.',
        fb: 'No es una falla del servidor: es un pedido que no cumple una regla. Corresponde un 4xx.' }
    ]
  },
  {
    id: 'A24', tema: 'Web y HTTP', caso: 'biblioteca',
    enunciado: '<p>¿Qué pedido HTTP es más adecuado para registrar la <strong>devolución</strong> del préstamo 9, que puede generar una multa?</p>',
    opciones: [
      { t: '<code>POST /prestamos/9/devolucion</code>', ok: true,
        fb: 'Es una acción que cambia el estado y puede crear una Multa: POST dispara acciones. El préstamo sigue existiendo como historial.' },
      { t: '<code>DELETE /prestamos/9</code>',
        fb: 'DELETE eliminaría el préstamo, pero devolverlo no lo borra: queda registrado y puede generar una multa.' },
      { t: '<code>GET /prestamos/9/devolver</code>',
        fb: 'GET no debería modificar nada en el servidor.' },
      { t: 'Cualquiera de las anteriores: HTTP no distingue.', fija: true,
        fb: 'Cada método expresa una intención distinta, y los clientes y las herramientas se apoyan en eso.' }
    ]
  },

  // ------------------------------ Spring (1) ------------------------------
  {
    id: 'A26', tema: 'Spring', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Un compañero dice: “<code>Socio</code> tiene <code>@Entity</code>, así que ya es parte del Dominio y está bien diseñado”. ¿Qué le responderías?</p>',
    opciones: [
      { t: 'La anotación solo define el mapeo a tabla; lo que importa es si tiene las reglas.', ok: true,
        fb: 'El framework no reemplaza el diseño: decidir qué va en la Entity y qué en el Service sigue siendo nuestra responsabilidad.' },
      { t: 'Tiene razón: <code>@Entity</code> hace que la clase sea parte de un Dominio rico.',
        fb: 'Una Entity con solo getters y setters es exactamente un Dominio anémico.' },
      { t: 'Al contrario: una clase con <code>@Entity</code> no puede tener métodos de negocio.',
        fb: 'Puede tenerlos sin problema, como Cuenta.transferir en la Billetera.' },
      { t: 'Con <code>@Entity</code>, <code>Socio</code> pasa a ser parte de la Fuente de datos.',
        fb: 'La anotación es para que JPA la mapee; la clase sigue siendo del Dominio.' }
    ]
  },

  // ---------------------- Presentación y MVC (2) ----------------------
  {
    id: 'A27', tema: 'Presentación y MVC', caso: 'clubpuntos', fragmento: 'capas',
    enunciado: '<p>La app móvil arma sus pantallas en el teléfono con los datos JSON de la API. La pantalla de la caja del comercio es una página web que se arma en el servidor con una plantilla HTML. ¿Qué afirmación es correcta?</p>',
    opciones: [
      { t: 'Dos Presentaciones con distinta Vista; sus Controladores usan el mismo Service.', ok: true,
        fb: 'Lo que cambia es dónde se dibuja la Vista; el Modelo, es decir, el Service y el Dominio, es uno solo.' },
      { t: 'La app móvil necesita su propio Dominio, porque la Vista se arma en el teléfono.',
        fb: 'El teléfono arma la Vista con datos que le da el servidor; las reglas siguen en el servidor.' },
      { t: 'La página de la caja no tiene Controlador, porque el HTML lo arma el servidor.',
        fb: 'Con render en el servidor también hay un Controlador que recibe el pedido, llama al Modelo y elige la plantilla.' },
      { t: 'Hay que elegir una sola de las dos, porque MVC no permite tener dos Vistas.',
        fb: '“Cambia la cara, el Modelo se queda”: MVC justamente facilita tener varias Vistas.' }
    ]
  },
  {
    id: 'A28', tema: 'Presentación y MVC', caso: 'biblioteca', fragmento: 'entradas',
    enunciado: '<p>La biblioteca suma un bot de Telegram (“/mis_prestamos”) y ya tiene el <code>RecordatorioListener</code> que manda mails. ¿Qué análisis es correcto?</p>',
    opciones: [
      { t: 'El bot es un Controlador con Vista prestada; el mail sale por un Client (Fuente de datos).', ok: true,
        fb: 'Distingue por dónde entra un pedido (Presentación) de a quién llamamos nosotros (Fuente de datos), aunque en los dos casos haya mensajes de por medio.' },
      { t: 'El mail es la Vista del listener, así que <code>NotificadorClient</code> pertenece a la Presentación.',
        fb: 'NotificadorClient es un Client hacia un servicio externo que nosotros llamamos: según lo visto en clase, los servicios de mail están en la Fuente de datos.' },
      { t: 'El bot debería leer las tablas directamente para responder más rápido a cada comando.',
        fb: 'Saltearía al Service y al Dominio, y duplicaría la lógica de qué préstamos mostrar.' },
      { t: 'El bot y el listener necesitan cada uno su propio <code>PrestamoService</code> adaptado.',
        fb: 'Los dos son caras distintas del mismo núcleo: comparten el Service.' }
    ]
  },

  // ------------------------------ Datos (3) ------------------------------
  {
    id: 'A29', tema: 'Datos', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>El vencimiento nocturno recorre los 2 millones de socios y, por cada uno, accede a sus movimientos, que se cargan de forma <em>lazy</em> (uno por uno, cuando se los necesita). El proceso no termina dentro de su ventana de 00 a 06 h. ¿Qué está pasando?</p>',
    opciones: [
      { t: 'Es el problema N + 1: una consulta por socio, millones en total.', ok: true,
        fb: 'Une ORM (lazy y N + 1) con la ficha de Batch: millones de registros y una hora límite. Hay que traer los datos en bloques o con un join.' },
      { t: 'Falta un índice en la tabla de socios; con eso el proceso entra en la ventana.',
        fb: 'Un índice puede ayudar a cada consulta, pero no cambia que se hagan millones de consultas.' },
      { t: 'El problema es que el Batch usa el Dominio; debería trabajar solo con SQL.',
        fb: 'Reutilizar la regla de vigencia del Dominio está bien; el problema es cómo se traen los datos.' },
      { t: 'Hay que convertirlo en una API, para que responda en milisegundos.',
        fb: 'El tipo de aplicación no cambia la cantidad de consultas: una API con N + 1 también sería lenta.' }
    ]
  },
  {
    id: 'A37', tema: 'Datos', caso: 'biblioteca',
    diagramas: [
      { titulo: 'Modelo de objetos: Socio con dos subtipos', codigo: [
        'classDiagram',
        '  direction TB',
        '  class Socio {',
        '    <<Dominio>>',
        '    nroSocio',
        '    email',
        '    +puedePedirPrestamo() boolean',
        '  }',
        '  class Estudiante {',
        '    <<Dominio>>',
        '    limite = 3',
        '  }',
        '  class Docente {',
        '    <<Dominio>>',
        '    limite = 5',
        '    departamento',
        '  }',
        '  class Prestamo {',
        '    <<Dominio>>',
        '    fechaVencimiento',
        '  }',
        '  Socio <|-- Estudiante',
        '  Socio <|-- Docente',
        '  Socio "1" --> "0..*" Prestamo : prestamos'
      ].join('\n') },
      { titulo: 'Estrategia 1: tabla única (una columna indica el tipo)', codigo: [
        'erDiagram',
        '  SOCIO ||--o{ PRESTAMO : tiene',
        '  SOCIO {',
        '    int nro_socio PK',
        '    string tipo "ESTUDIANTE o DOCENTE"',
        '    string email',
        '    string departamento "solo docentes"',
        '  }',
        '  PRESTAMO {',
        '    int id PK',
        '    int nro_socio FK',
        '    date fecha_vencimiento',
        '  }'
      ].join('\n') },
      { titulo: 'Estrategia 2: una tabla por clase concreta', codigo: [
        'erDiagram',
        '  ESTUDIANTE ||--o{ PRESTAMO : tiene',
        '  DOCENTE ||--o{ PRESTAMO : tiene',
        '  ESTUDIANTE {',
        '    int nro_socio PK',
        '    string email',
        '  }',
        '  DOCENTE {',
        '    int nro_socio PK',
        '    string email',
        '    string departamento',
        '  }',
        '  PRESTAMO {',
        '    int id PK',
        '    int nro_estudiante FK "vacio si es de un docente"',
        '    int nro_docente FK "vacio si es de un estudiante"',
        '    date fecha_vencimiento',
        '  }'
      ].join('\n') }
    ],
    enunciado: '<p><code>Socio</code> pasa a tener dos subtipos, Estudiante y Docente, que casi solo difieren en el límite de préstamos. Los préstamos apuntan a un socio. Al mapearlos con el ORM, ¿qué estrategia de herencia es más razonable?</p>',
    opciones: [
      { t: 'Tabla única con una columna que indique el tipo de socio.', ok: true,
        fb: 'Los subtipos casi no difieren, así que una sola tabla es simple, y los préstamos apuntan con una FK a una única tabla de socios.' },
      { t: 'Una tabla por clase concreta: estudiantes y docentes por separado.',
        fb: 'Los préstamos tendrían que apuntar a dos tablas distintas, lo que complica la FK y las consultas por socio.' },
      { t: 'Ninguna: el ORM no puede persistir herencia, hay que eliminar los subtipos.',
        fb: 'El ORM soporta herencia con varias estrategias: tabla única, joined o por clase concreta.' },
      { t: 'Guardar el límite de préstamos en el Controller, según el tipo de socio.',
        fb: 'Sacaría una regla de negocio del Dominio y no resuelve cómo persistir los subtipos.' }
    ]
  },
  {
    id: 'A38', tema: 'Datos', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>Queda una sola unidad de un premio. Dos socios lo canjean al mismo tiempo, los dos canjes leen <code>stock = 1</code> y los dos se confirman: el stock queda en −1. ¿Qué está pasando y qué se necesita?</p>',
    opciones: [
      { t: 'Concurrencia: la transacción del Service debe proteger juntas la lectura y la actualización del stock.', ok: true,
        fb: 'El servidor atiende a muchos usuarios a la vez. La transacción tiene que evitar que dos canjes trabajen sobre el mismo dato viejo, y Premio no debería aceptar quedar en negativo.' },
      { t: 'No puede pasar: un servidor atiende un pedido por vez, así que el segundo canje espera al primero.',
        fb: 'Un servidor atiende a muchos clientes a la vez: los dos canjes se ejecutan en simultáneo.' },
      { t: 'Es un problema de la app móvil: se resuelve deshabilitando el botón después del primer toque.',
        fb: 'Son dos socios distintos en dos teléfonos: el problema está en el servidor, no en un doble clic.' },
      { t: 'Es un problema de testing: se resuelve mockeando <code>PremioRepository</code> en los tests.',
        fb: 'Los mocks aíslan una unidad en un test; no cambian lo que pasa en producción con usuarios concurrentes.' }
    ]
  },

  // ----------------------- Tipos de aplicación (3) -----------------------
  {
    id: 'A30', tema: 'Tipos de aplicación', caso: 'clubpuntos',
    enunciado: '<p>¿Qué clasificación de las partes del Club de Puntos es correcta?</p>',
    opciones: [
      { t: 'Canje y acumulación: API. Vencimiento: Batch. Mail: Worker. Tablero: Analítica.', ok: true,
        fb: 'Un sistema real combina varios tipos, y todos pueden reutilizar el mismo Dominio.' },
      { t: 'Canje y acumulación: Web. Vencimiento: Worker. Mail: Batch. Tablero: API.',
        fb: 'El canje lo espera alguien en el momento (API), el vencimiento lo dispara un horario (Batch), el mail lo dispara un mensaje (Worker) y el tablero es una consulta de una persona (Analítica).' },
      { t: 'Canje y acumulación: API. Vencimiento: API. Mail: Worker. Tablero: Batch.',
        fb: 'El vencimiento no lo pide nadie: lo dispara un horario (Batch). Y el tablero lo consulta una persona que espera el resultado: es Analítica, no Batch.' },
      { t: 'Todo es una sola aplicación Web, porque se accede por internet.',
        fb: 'Cada parte tiene otro usuario, otro disparador y otro tiempo de respuesta; la ficha las distingue. Un sistema real combina varios tipos.' }
    ]
  },
  {
    id: 'A39', tema: 'Tipos de aplicación', caso: 'biblioteca', fragmento: 'entradas',
    enunciado: '<p>¿Por qué el aviso por mail se manda con un Worker que consume mensajes, en lugar de enviarlo dentro de <code>POST /prestamos</code>?</p>',
    opciones: [
      { t: 'Nadie espera el mail: el préstamo responde rápido y, si el mail falla, se reintenta aparte.', ok: true,
        fb: 'Separar por “quién espera” es la clave de la ficha: el préstamo es sincrónico; el mail, no. El Worker reintenta solo.' },
      { t: 'Los Workers responden en milisegundos, más rápido que una API.',
        fb: 'Es al revés: un Worker tarda segundos o minutos, y está bien porque nadie lo espera.' },
      { t: 'El Worker no necesita Service ni Dominio, así que es más simple.',
        fb: 'El Worker es otra Presentación sobre el mismo Service y Dominio.' },
      { t: 'Así el mail sale exactamente en el mismo instante en que se crea el préstamo.',
        fb: 'Con un Worker el mail sale después, de forma asincrónica.' }
    ]
  },
  {
    id: 'A40', tema: 'Tipos de aplicación', caso: 'clubpuntos',
    enunciado: '<p>Durante un Hot Sale, cada vez que la gerencia abre el tablero de puntos canjeados, los canjes desde la app se vuelven lentos. Los dos usan la misma base de datos. ¿Cuál es el diagnóstico?</p>',
    opciones: [
      { t: 'Cargas mezcladas: las consultas analíticas compiten con las transaccionales; el tablero necesita su copia.', ok: true,
        fb: 'Transaccional ≠ analítico. Una copia nocturna (Batch) para el tablero separa las cargas, como en el e-commerce visto en clase.' },
      { t: 'Faltan índices; con agregarlos en todas las tablas se resuelve sin cambiar el diseño de la aplicación.',
        fb: 'Los índices ayudan a algunas consultas, pero no cambian que dos cargas muy distintas compitan por la misma base.' },
      { t: 'El tablero debería ser una CLI, para que corra en la computadora del gerente.',
        fb: 'Cambiar la cara no cambia que la consulta pesada siga pegándole a la misma base.' },
      { t: 'La app móvil tiene que reintentar más veces cuando el canje tarda.',
        fb: 'Reintentar agrega más carga sobre una base que ya está saturada.' }
    ]
  },
  // ------------------------- Modelado REST (4) -------------------------
  {
    id: 'A31', tema: 'Modelado REST', caso: 'biblioteca', fragmento: 'entradas',
    enunciado: '<p>¿Qué conjunto de endpoints modela mejor la API de la Biblioteca?</p>',
    opciones: [
      { t: '<code>POST /prestamos</code>, <code>POST /prestamos/{id}/devolucion</code>, <code>GET /socios/{nro}/prestamos?estado=activo</code>', ok: true,
        fb: 'Recursos con sustantivos, el método expresa la intención, la devolución es una acción que genera estado (y quizás una Multa), y el filtro va en la query.' },
      { t: '<code>POST /prestar</code>, <code>POST /devolver</code>, <code>POST /consultarPrestamosActivos</code>',
        fb: 'Todo con POST y verbos en la URL: se pierde la semántica de los métodos (una consulta no es idempotente así) y no hay recursos.' },
      { t: '<code>PUT /prestamos</code>, <code>DELETE /prestamos/{id}</code>, <code>GET /prestamos?socio={nro}&amp;borrar=no</code>',
        fb: 'PUT sobre la colección reemplazaría todos los préstamos, y DELETE borraría el historial que justifica la multa.' },
      { t: '<code>GET /prestamos/nuevo?socio=77</code>, <code>GET /prestamos/9/devolver</code>, <code>GET /socios/77</code>',
        fb: 'Usa GET para acciones que modifican: un caché, un reintento o un navegador podrían crear préstamos o devoluciones sin querer.' }
    ]
  },
  {
    id: 'A32', tema: 'Modelado REST', caso: 'clubpuntos', fragmento: 'capas',
    enunciado: '<p>El canje se hizo bien. La app necesita mostrar los puntos restantes y el código de retiro. ¿Qué respuesta es la más adecuada?</p>',
    opciones: [
      { t: '<code>201 Created</code> con un <code>CanjeResponse</code> (puntos restantes y código de retiro).', ok: true,
        fb: 'Se creó un canje (201) y el DTO trae exactamente lo que la app necesita, sin exponer el modelo interno.' },
      { t: '<code>200 OK</code> con la entidad <code>Socio</code> completa, incluidos todos sus movimientos.',
        fb: 'Acopla la app al Dominio, expone datos internos y obliga a cargar todos los movimientos.' },
      { t: '<code>204 No Content</code>, porque el canje ya quedó guardado en la base.',
        fb: 'Sin cuerpo, la app no tiene el código de retiro que necesita mostrar.' },
      { t: '<code>302 Found</code>, redirigiendo a la pantalla del premio.',
        fb: 'Los 3xx son redirecciones; una API le informa el resultado al cliente, que decide qué mostrar.' }
    ]
  },
  {
    id: 'A33', tema: 'Modelado REST', caso: 'clubpuntos', fragmento: 'canje',
    enunciado: '<p>La app quiere mostrar “cuántos puntos te vencen antes de fin de año”. ¿Qué diseño es el más coherente de punta a punta?</p>',
    opciones: [
      { t: '<code>GET /socios/1001/puntos?vencenAntesDe=2026-12-31</code> → Service → regla de vigencia en <code>Socio</code>.', ok: true,
        fb: 'Es una lectura (GET, idempotente), el filtro va en la query y el cálculo reutiliza la regla de vigencia del Dominio.' },
      { t: '<code>POST /socios/1001/consultarVencimientos</code> → Service → regla de vigencia en <code>Socio</code>.',
        fb: 'Las capas están bien, pero una consulta modelada como POST con un verbo pierde la semántica: no se puede cachear ni reintentar con tranquilidad.' },
      { t: '<code>GET /socios/1001/puntos?vencenAntesDe=...</code> → el Controller consulta el Repository con un SQL propio.',
        fb: 'El recurso está bien, pero saltea al Service y duplica la regla de vigencia en SQL, fuera del Dominio.' },
      { t: '<code>GET /puntos/vencer</code> → ejecuta el vencimiento y devuelve cuántos puntos se vencieron.',
        fb: 'Un GET que vence puntos modifica el estado: cualquier reintento o caché los vencería. Además, eso es tarea del proceso nocturno.' }
    ]
  },
  {
    id: 'A34', tema: 'Modelado REST', caso: 'biblioteca', fragmento: 'prestamo',
    enunciado: '<p>Dos pedidos fallan: uno pide un ejemplar que <strong>no existe</strong>; otro, uno que <strong>ya está prestado</strong>. ¿Qué tratamiento es coherente con las capas y con REST?</p>',
    opciones: [
      { t: 'Inexistente: el Service no lo encuentra → <code>404</code>. Prestado: <code>Ejemplar.prestar()</code> lo rechaza → <code>400</code>.', ok: true,
        fb: 'El 404 dice “ese recurso no existe”; el 400, “el pedido no cumple una regla”. Cada caso lo detecta la capa que corresponde, y la Presentación traduce.' },
      { t: 'Los dos son <code>404</code>, porque en ambos casos el ejemplar “no está” para prestar.',
        fb: 'El ejemplar prestado existe: es una regla de negocio que no se cumple. Responder 404 confunde al cliente.' },
      { t: 'Los dos son <code>500</code>, porque en ambos casos se lanza una excepción.',
        fb: 'El servidor funcionó bien: los dos son problemas del pedido (4xx).' },
      { t: 'Inexistente: <code>400</code> lanzado por <code>Ejemplar</code>. Prestado: <code>404</code> lanzado por el Repository.',
        fb: 'Si no existe, no hay objeto Ejemplar que pueda decir nada; y el Repository no conoce HTTP ni decide reglas.' }
    ]
  }
];
