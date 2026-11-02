/* Preguntas medias: casos conocidos (Gift Cards, Billetera Virtual, Tareas).
 * Mismo formato que preguntas-basicas.js.
 */
window.PREGUNTAS_MEDIAS = [
  // ---------------------------- Capas (13) ----------------------------
  {
    id: 'M01', tema: 'Capas', caso: 'giftcards', fragmento: 'capas',
    enunciado: '<p>En el diagrama de clases de Gift Cards, ¿en qué capa está <code>ProveedorGiftCardClient</code> y por qué?</p>',
    opciones: [
      { t: 'En la Fuente de datos: aísla la comunicación con el proveedor.', ok: true,
        fb: 'Igual que un Repository aísla la base de datos, el Client aísla a un sistema externo.' },
      { t: 'En el Dominio, porque confirmar el consumo es una regla del negocio.',
        fb: 'La decisión de negocio está en GiftCard.puedeUsarse. El Client solo transporta el pedido al proveedor: si el proveedor cambia de protocolo, no debería cambiar el Dominio.' },
      { t: 'En la Presentación, porque recibe una respuesta HTTP del proveedor.',
        fb: 'La Presentación atiende los pedidos que nos hacen. El Client es por donde nosotros llamamos a otro: está del otro lado.' },
      { t: 'En el Service, porque es el Service quien lo llama.',
        fb: 'Que el Service lo use no lo convierte en Service; también usa al Repository y el Repository sigue siendo Fuente de datos.' }
    ]
  },
  {
    id: 'M02', tema: 'Capas', caso: 'giftcards', fragmento: 'secuenciaClases',
    enunciado: '<p>Mirando la secuencia a nivel clases de Gift Cards, ¿quién <strong>decide</strong> si la gift card puede usarse para pagar $3.500?</p>',
    opciones: [
      { t: 'El objeto <code>gf1:GiftCard</code>, con <code>puedeUsarse(3500)</code>.', ok: true,
        fb: 'La regla vive en el Dominio, junto a los datos que necesita: es un Dominio rico, no anémico.' },
      { t: 'El <code>GiftCardService</code>, comparando el saldo con el monto pedido.',
        fb: 'En este diseño el Service orquesta y le pregunta a la GiftCard. Si comparara él los valores, tendríamos un Dominio anémico.' },
      { t: 'El <code>GiftCardController</code>, antes de llamar al Service.',
        fb: 'El Controller solo traduce el pedido y delega. Si decidiera ahí, la regla quedaría atada a HTTP.' },
      { t: 'El <code>GiftCardRepository</code>, cuando busca la tarjeta por código.',
        fb: 'El Repository solo busca y guarda; no toma decisiones de negocio.' }
    ]
  },
  {
    id: 'M03', tema: 'Capas', caso: 'giftcards', fragmento: 'capas',
    enunciado: '<p>El proveedor de gift cards anuncia que deja su API REST y ahora hay que avisarle los consumos a través de una cola de mensajes. Con el diseño del caso, ¿qué debería cambiar?</p>',
    opciones: [
      { t: 'Solo <code>ProveedorGiftCardClient</code> (Fuente de datos).', ok: true,
        fb: 'Por eso la comunicación está aislada: el Service sigue llamando a confirmarConsumo y el Dominio no se entera.' },
      { t: 'La clase <code>GiftCard</code>, porque cambia cómo se confirma el consumo.',
        fb: 'GiftCard no sabe cómo se habla con el proveedor; sus reglas (vigencia, saldo) siguen iguales.' },
      { t: 'El <code>GiftCardController</code>, porque cambia el protocolo.',
        fb: 'El Controller atiende a nuestros usuarios. El protocolo que cambió es el del proveedor, que se maneja en otra capa.' },
      { t: 'Todas las clases del diagrama.', fija: true,
        fb: 'Si un cambio de protocolo externo obligara a tocar todo, el diseño sería rígido. Las capas existen para evitarlo.' }
    ]
  },
  {
    id: 'M04', tema: 'Capas', caso: 'billetera', fragmento: 'transferir',
    enunciado: '<p>En la Billetera Virtual, la regla “no se puede transferir desde ni hacia una cuenta inactiva” está en <code>Cuenta.transferir</code>. ¿Es una buena ubicación?</p>',
    opciones: [
      { t: 'Sí: es una regla de negocio y está en el Dominio.', ok: true,
        fb: 'Además se puede testear sin mocks (test BV-T3) y cualquier otro caso de uso que transfiera la respeta automáticamente.' },
      { t: 'No: debería estar en el <code>CuentaController</code>, que es lo primero que se ejecuta.',
        fb: 'Si estuviera en el Controller, otra Presentación (un bot, una CLI) podría saltearla. Además mezcla negocio con HTTP.' },
      { t: 'No: debería estar en <code>CuentaRepository</code>, filtrando las cuentas inactivas.',
        fb: 'El Repository busca y guarda; decidir si una operación está permitida es una regla de Dominio.' },
      { t: 'No: debería estar en el manejador global de errores, que conoce todos los casos.',
        fb: 'El manejador traduce excepciones a códigos HTTP; no decide reglas.' }
    ]
  },
  {
    id: 'M05', tema: 'Capas', caso: 'billetera', fragmento: 'secuenciaTransferir',
    enunciado: '<p>Según las secuencias de la Billetera, ¿qué hace <code>CuentaService.transferir</code>?</p>',
    opciones: [
      { t: 'Busca las cuentas, le delega la regla a la cuenta origen y guarda todo junto.', ok: true,
        fb: 'Es orquestación pura: coordina pasos, define la transacción y traduce al DTO de salida, sin decidir reglas.' },
      { t: 'Compara el saldo con el monto y, si alcanza, resta del origen y suma al destino.',
        fb: 'Esa decisión la toma Cuenta.transferir. Si la tomara el Service, el Dominio sería anémico.' },
      { t: 'Arma el JSON de la respuesta y elige el código HTTP según el resultado.',
        fb: 'El JSON y el código HTTP son asunto de la Presentación (Controller y manejador de errores).' },
      { t: 'Ejecuta directamente los UPDATE e INSERT contra la base de datos.',
        fb: 'Para eso usa a los Repositories (Fuente de datos); el Service no habla SQL.' }
    ]
  },
  {
    id: 'M06', tema: 'Capas', caso: 'billetera', fragmento: 'transferir',
    enunciado: '<p>¿Por qué el <code>CuentaController</code> devuelve un <code>MovimientoResponse</code> (DTO) en lugar de la entidad <code>Movimiento</code>?</p>',
    opciones: [
      { t: 'Para desacoplar la forma de la respuesta del modelo de Dominio.', ok: true,
        fb: 'El DTO desacopla el contrato con el cliente del modelo de Dominio; el Service hace la traducción.' },
      { t: 'Porque una entidad de JPA no se puede convertir a JSON automáticamente.',
        fb: 'Técnicamente se puede; el problema es de diseño (acoplamiento), no de posibilidad.' },
      { t: 'Porque los DTO hacen que la consulta a la base de datos sea más rápida.',
        fb: 'El DTO no cambia cómo se consulta la base: es un tema de contrato entre capas.' },
      { t: 'Ninguna: es indistinto devolver uno u otro.', fija: true,
        fb: 'No es indistinto: devolver la entidad ata a los clientes de la API al modelo interno.' }
    ]
  },
  {
    id: 'M07', tema: 'Capas', caso: 'billetera',
    fragmento: 'secuenciaTransferir',
    enunciado: '<p><code>CuentaService.transferir</code> recibe <code>(aliasOrigen, aliasDestino, monto)</code> y no el pedido HTTP completo. ¿Qué ganamos con eso?</p>',
    opciones: [
      { t: 'El Service no depende de HTTP: se reutiliza y se testea sin servidor.', ok: true,
        fb: 'Cada capa conoce solo lo suyo. HTTP termina en el Controller.' },
      { t: 'Que el Service pueda elegir el código de estado de la respuesta HTTP.',
        fb: 'Justamente lo contrario: como no conoce HTTP, los códigos los decide la Presentación.' },
      { t: 'Nada: es solo una preferencia de estilo del equipo.',
        fb: 'Tiene consecuencias concretas en reutilización y testeabilidad.' },
      { t: 'Que la base de datos reciba menos datos en cada transferencia.',
        fb: 'No cambia lo que se guarda; cambia de qué depende el Service.' }
    ]
  },
  {
    id: 'M08', tema: 'Capas', caso: 'giftcards',
    enunciado: '<p>Un compañero propone esta versión “más corta” del uso de una gift card. ¿Qué problema tiene?</p>',
    diagrama: [
      'sequenceDiagram',
      '  actor U as Usuario',
      '  participant C as GiftCardController',
      '  participant R as GiftCardRepository',
      '  participant G as gf1:GiftCard',
      '  U->>+C: POST /giftcards/CN-7K2P/usos { monto: 3500 }',
      '  C->>+R: buscarPorCodigo(CN-7K2P)',
      '  R-->>-C: gf1',
      '  C->>+G: puedeUsarse(3500)',
      '  G-->>-C: true',
      '  C->>+G: descontar(3500)',
      '  G-->>-C: ok',
      '  C->>+R: guardar(gf1)',
      '  R-->>-C: ok',
      '  C-->>-U: 200 OK'
    ].join('\n'),
    opciones: [
      { t: 'Saltea al Service: el caso de uso queda atado a HTTP y sin transacción.', ok: true,
        fb: 'Sin el Service no hay quien orqueste. Otra Presentación tendría que repetir todos los pasos (y es fácil olvidarse alguno, como pasó acá con el proveedor).' },
      { t: 'Ninguno: es más corta y por eso más simple de mantener.',
        fb: 'Más corta no es más simple: mezcla responsabilidades de dos capas en el Controller.' },
      { t: 'El único problema es que debería usar GET en lugar de POST.',
        fb: 'Usar una gift card modifica el saldo, así que POST está bien. El problema es de capas.' },
      { t: 'Que la GiftCard decida si puede usarse; eso le toca al Controller.',
        fb: 'Eso está bien: la regla es del Dominio. Lo que está mal es quién orquesta.' }
    ]
  },
  {
    id: 'M09', tema: 'Capas', caso: 'billetera',
    enunciado: '<p>Imaginemos una versión <strong>anémica</strong> de la Billetera: <code>Cuenta</code> solo tiene getters y setters, y la validación (cuenta activa y saldo suficiente) está escrita dentro de <code>CuentaService.transferir</code>. Ahora se agrega un caso de uso nuevo, <code>PagoQrService.pagar</code> (en amarillo), que <strong>también tiene que debitar una cuenta</strong>. ¿Qué problema de diseño es el más probable?</p>',
    diagramaTitulo: 'Versión anémica de la Billetera, con el caso de uso nuevo resaltado',
    diagrama: [
      'classDiagram',
      '  direction LR',
      '  class CuentaService {',
      '    <<Servicio de aplicacion>>',
      '    +transferir(aliasOrigen, aliasDestino, monto)',
      '  }',
      '  class PagoQrService {',
      '    <<Servicio de aplicacion - NUEVO>>',
      '    +pagar(alias, comercio, monto)',
      '  }',
      '  class Cuenta {',
      '    <<Dominio - anemico>>',
      '    -saldo',
      '    -activa',
      '    +getSaldo()',
      '    +setSaldo(saldo)',
      '    +isActiva()',
      '  }',
      '  CuentaService --> Cuenta : lee y modifica el saldo',
      '  PagoQrService --> Cuenta : tambien tiene que debitar',
      '  note for CuentaService "transferir: si la cuenta no esta activa o el saldo no alcanza, error. Si no, resta y suma"',
      '  note for PagoQrService "NUEVO: pagar con QR debita una cuenta"',
      '  style PagoQrService fill:#f59e0b33,stroke:#fbbf24,stroke-width:2px'
    ].join('\n'),
    opciones: [
      { t: 'Que la validación se copie en <code>PagoQrService</code> y, con el tiempo, las dos copias dejen de coincidir.', ok: true,
        fb: 'Redundancia: la regla vive en un Service y no en Cuenta, así que el caso de uso nuevo la tiene que repetir. Si la regla estuviera en Cuenta (por ejemplo, en un método debitar), PagoQrService la reutilizaría sin copiarla.' },
      { t: 'Ninguno: un Dominio anémico se extiende más fácil, porque <code>Cuenta</code> no tiene reglas que respetar.',
        fb: 'Que Cuenta no tenga reglas no las elimina: quedan en los Services, y cada caso de uso nuevo las tiene que repetir.' },
      { t: 'Que la base de datos no pueda guardar las cuentas que modifica <code>PagoQrService</code>.',
        fb: 'La persistencia no depende de dónde estén las reglas: las cuentas se guardan igual.' },
      { t: 'Que <code>PagoQrService</code> tenga que llamar a <code>CuentaController</code> para reutilizar la validación.',
        fb: 'Un Service no debe depender de la Presentación (sería una dependencia hacia arriba), y el Controller tampoco tiene la regla.' }
    ]
  },
  {
    id: 'M10', tema: 'Capas', caso: 'billetera',
    diagramas: [
      { titulo: 'Secuencia de este escenario (los ? son parte de la pregunta)', codigo: [
        'sequenceDiagram',
        '  actor Cl as Cliente HTTP',
        '  participant C as CuentaController',
        '  participant S as CuentaService',
        '  participant RC as CuentaRepository',
        '  Cl->>+C: GET /api/cuentas/no.existe/saldo',
        '  C->>+S: consultarSaldo(no.existe)',
        '  S->>+RC: findByAlias(no.existe)',
        '  RC-->>-S: vacio',
        '  Note over S: lanza CuentaNoEncontradaException',
        '  S-->>-C: ?',
        '  C-->>-Cl: ?'
      ].join('\n') }
    ],
    enunciado: '<p>Cuando un alias no existe, el Service lanza <code>CuentaNoEncontradaException</code> y el cliente recibe un <code>404</code>. ¿Quién hace esa traducción y por qué está bien ubicada?</p>',
    opciones: [
      { t: 'El manejador global de errores, porque HTTP es asunto de la Presentación.', ok: true,
        fb: 'Si mañana el caso de uso se usa desde una CLI, la misma excepción se traduce a un mensaje y un código de salida, sin tocar el Service.' },
      { t: 'El <code>CuentaService</code>, que devuelve un 404 cuando no encuentra la cuenta.',
        fb: 'Entonces el Service dependería de HTTP y no se podría reutilizar desde otra Presentación.' },
      { t: 'El <code>CuentaRepository</code>, que es el que sabe si encontró la cuenta.',
        fb: 'El Repository informa que no encontró nada (por ejemplo, con un resultado vacío); no conoce los códigos HTTP.' },
      { t: 'La clase <code>Cuenta</code>, que conoce sus propios errores.',
        fb: 'Si la cuenta no existe, no hay objeto Cuenta que pueda decir nada. Y el Dominio no conoce HTTP.' }
    ]
  },
  {
    id: 'M11', tema: 'Capas', caso: 'tareas', fragmento: 'secuenciaCrear',
    enunciado: '<p>En la secuencia de “crear una tarea”, ¿qué afirmación es correcta?</p>',
    opciones: [
      { t: 'Cada capa habla solo con la siguiente.', ok: true,
        fb: 'Es la conclusión de la secuencia vista en clase.' },
      { t: 'El Repository responde <code>201 Created</code> cuando el INSERT sale bien.',
        fb: 'El 201 lo arma el Controller; el Repository solo devuelve la Tarea guardada (con su id).' },
      { t: 'El Service ejecuta el INSERT y le devuelve el id al Controller.',
        fb: 'El INSERT lo genera la Fuente de datos (Repository + JPA).' },
      { t: 'El Controller ejecuta el INSERT para ahorrar pasos.',
        fb: 'Saltear capas mezcla responsabilidades; no es un ahorro, es acoplamiento.' }
    ]
  },
  {
    id: 'M12', tema: 'Capas', caso: 'billetera', fragmento: 'repositorios',
    enunciado: '<p>En la Billetera, <code>CuentaRepository</code> es una interfaz con dos implementaciones: <code>CuentaRepositoryJpa</code> (profiles <code>local</code> y <code>prod</code>) y <code>CuentaRepositoryEnMemoria</code> (profile <code>test</code>). Si la aplicación arranca con el profile <code>test</code>, ¿qué implementación de <code>CuentaRepository</code> se instancia?</p>',
    opciones: [
      { t: '<code>CuentaRepositoryEnMemoria</code>, porque es la que tiene el profile test.', ok: true,
        fb: 'Spring solo registra los beans cuyo profile está activo. CuentaService recibe la interfaz por constructor y no se entera de cuál le tocó.' },
      { t: '<code>CuentaRepositoryJpa</code>, porque es la que usa la base de datos real.',
        fb: 'Esa implementación solo se registra con los profiles local y prod; con test ni siquiera se crea.' },
      { t: 'Las dos, y <code>CuentaService</code> elige cuál usar en cada llamada.',
        fb: 'Con el profile test se registra una sola. Y el Service no elige: depende de la interfaz y recibe lo que Spring le inyecta.' },
      { t: 'Ninguna: <code>CuentaService</code> tiene que crearla con <code>new</code> según el profile.',
        fb: 'El Service no crea sus dependencias ni conoce los profiles: Spring decide qué implementación inyectarle.' }
    ]
  },
  {
    id: 'M13', tema: 'Capas', caso: 'giftcards', fragmento: 'secuenciaClases',
    enunciado: '<p>En la secuencia de Gift Cards, el Service pregunta <code>puedeUsarse(3500)</code> <strong>antes</strong> de llamar a <code>confirmarConsumo</code> en el proveedor. ¿Por qué importa ese orden?</p>',
    opciones: [
      { t: 'Para no confirmarle al proveedor un consumo que el Dominio rechazaría.', ok: true,
        fb: 'Lo que pasa afuera de nuestra base no se deshace con un rollback; primero se valida y después se llama al externo.' },
      { t: 'No importa: el orden de los mensajes en una secuencia es solo estético.',
        fb: 'La secuencia muestra el orden en que ocurren las cosas; cambiarlo cambia el comportamiento.' },
      { t: 'Porque el proveedor rechaza pedidos si antes no se llamó a <code>puedeUsarse</code>.',
        fb: 'El proveedor no sabe nada de nuestros objetos; es una decisión de nuestro diseño.' },
      { t: 'Porque así el Controller puede devolver el saldo más rápido.',
        fb: 'No es una cuestión de velocidad sino de consistencia con el sistema externo.' }
    ]
  },

  // ---------------------------- Testing (5) ----------------------------
  {
    id: 'M14', tema: 'Testing', caso: 'giftcards', tests: ['GC-T1'],
    enunciado: '<p>El test GC-T1 (descontar 3500 de una gift card con saldo 8000) no usa ningún mock. ¿Por qué no hace falta?</p>',
    opciones: [
      { t: 'Porque <code>GiftCard</code> no depende de repositorios ni de clients.', ok: true,
        fb: 'Un Dominio independiente de la infraestructura es fácil de testear: alcanza con crear el objeto y llamarlo.' },
      { t: 'Porque los tests de Dominio no verifican nada, solo ejecutan.',
        fb: 'Verifican el resultado (el saldo queda en 4500) con un assert.' },
      { t: 'Porque usa la base de datos real en lugar de un mock.',
        fb: 'No toca ninguna base: trabaja con un objeto en memoria.' },
      { t: 'Está mal: todo test unitario necesita al menos un mock.',
        fb: 'Los mocks se usan cuando la unidad tiene dependencias que queremos aislar. Si no las tiene, no hacen falta.' }
    ]
  },
  {
    id: 'M15', tema: 'Testing', caso: 'giftcards', tests: ['GC-T4'],
    enunciado: '<p>En GC-T4 (saldo insuficiente) se verifica que <strong>nunca</strong> se llamó a <code>confirmarConsumo</code> ni a <code>guardar</code>. ¿Qué está comprobando ese <code>verify(..., never())</code>?</p>',
    opciones: [
      { t: 'Que, si la regla rechaza el uso, no se avisa al proveedor ni se guarda nada.', ok: true,
        fb: 'El efecto esperado acá es que algo no pase. verify revisa interacciones, no solo valores devueltos.' },
      { t: 'Que los mocks fallan y por eso el Service no puede llamar al proveedor ni guardar.',
        fb: 'Los mocks funcionan: registran cada llamada, y por eso podemos verificar que no la hubo.' },
      { t: 'Que la gift card tiene saldo suficiente y por eso no hace falta confirmar nada.',
        fb: 'Es al revés: el escenario es de saldo insuficiente.' },
      { t: 'Que el Controller responde 400 sin llegar a llamar al Service ni al proveedor.',
        fb: 'Este test es del Service; el Controller no participa.' }
    ]
  },
  {
    id: 'M16', tema: 'Testing', caso: 'billetera', tests: ['BV-T6'],
    enunciado: '<p>El test BV-T6 levanta la aplicación completa con el profile <code>test</code> (repositorio en memoria). ¿Qué agrega respecto de los tests unitarios con mocks?</p>',
    opciones: [
      { t: 'Prueba que las piezas reales funcionan juntas, sin una base de datos real.', ok: true,
        fb: 'Mocks y profiles resuelven el mismo problema (aislar de la infraestructura) en niveles distintos: se complementan.' },
      { t: 'Reemplaza a los tests unitarios: con este test ya no hacen falta.',
        fb: 'Se complementan. El unitario sigue siendo el más rápido y el que mejor señala dónde está el error.' },
      { t: 'Prueba que la base de datos de producción está bien configurada.',
        fb: 'Con el profile test ni siquiera se usa la base de producción.' },
      { t: 'Hace que producción también use el repositorio en memoria.',
        fb: 'El repositorio en memoria solo se registra con el profile test.' }
    ]
  },
  {
    id: 'M17', tema: 'Testing', caso: 'billetera', tests: ['BV-T4'],
    enunciado: '<p>El test BV-T4 (“el repositorio no encuentra <code>no.existe</code> ⇒ <code>CuentaNoEncontradaException</code>”) prueba un paso puntual del diseño. ¿Cuál?</p>',
    opciones: [
      { t: 'El caso “no encontrada” de la búsqueda en <code>CuentaService</code>.', ok: true,
        fb: 'Con el repositorio mockeado devolviendo vacío, se prueba la reacción del Service a ese caso.' },
      { t: 'La regla de fondos insuficientes de <code>Cuenta.transferir</code>.',
        fb: 'Esa regla la prueban BV-T2 y BV-T3, sobre Cuenta directamente.' },
      { t: 'La traducción a <code>404</code> que hace el manejador global de errores.',
        fb: 'En este test unitario no participa la Presentación; el 404 se probaría en otro nivel.' },
      { t: 'El SELECT que se ejecuta contra la base de datos.',
        fb: 'El repositorio es un mock: no hay ninguna base involucrada.' }
    ]
  },
  {
    id: 'M18', tema: 'Testing', caso: 'giftcards', tests: ['GC-T1', 'GC-T2', 'GC-T4'],
    enunciado: '<p>Un cambio introduce un error: <code>descontar(monto)</code> ahora resta el monto <strong>dos veces</strong>. ¿Qué test del caso lo detecta?</p>',
    opciones: [
      { t: 'GC-T1: espera que 8000 − 3500 deje el saldo en 4500.', ok: true,
        fb: 'Con el error el saldo daría 1000, así que el assert falla. Es el test que ejercita exactamente descontar.' },
      { t: 'GC-T2: la gift card vencida.',
        fb: 'Ese test prueba puedeUsarse con una tarjeta vencida; nunca llega a descontar.' },
      { t: 'GC-T4: saldo insuficiente.',
        fb: 'En ese escenario el Service corta antes de descontar.' },
      { t: 'Ninguno: este tipo de errores solo se encuentra probando a mano.', fija: true,
        fb: 'Un test unitario sobre el Dominio lo detecta en milisegundos.' }
    ]
  },

  // ----------------------- Diseño y principios (5) -----------------------
  {
    id: 'M19', tema: 'Diseño y principios', caso: 'giftcards',
    diagramas: [
      { titulo: 'Diseño propuesto, con lo nuevo resaltado', codigo: [
        'classDiagram',
        '  direction LR',
        '  class GiftCardController {',
        '    <<Presentacion>>',
        '  }',
        '  class GiftCardService {',
        '    <<Servicio de aplicacion>>',
        '    +usar(codigo, monto)',
        '    +armarJson(respuesta) String',
        '    +ejecutarSql(sql)',
        '  }',
        '  class GiftCard {',
        '    <<Dominio>>',
        '  }',
        '  GiftCardController --> GiftCardService',
        '  GiftCardService --> GiftCard',
        '  note for GiftCardService "NUEVO: ademas de orquestar, arma el JSON y escribe el SQL"',
        '  style GiftCardService fill:#f59e0b33,stroke:#fbbf24,stroke-width:2px'
      ].join('\n') }
    ],
    enunciado: '<p>Supongamos que <code>GiftCardService</code>, además de orquestar el uso, arma el JSON de la respuesta y escribe a mano el SQL para guardar la tarjeta. ¿Qué principio se ve afectado y por qué?</p>',
    opciones: [
      { t: 'SRP: la clase tiene varios motivos para cambiar.', ok: true,
        fb: 'Cada uno de esos motivos tiene su capa: Presentación, Service y Fuente de datos.' },
      { t: 'Ninguno: es más simple tener todo en un solo lugar.',
        fb: 'Simple no es lo mismo que junto: obliga a pensar en tres problemas a la vez (complejidad accidental).' },
      { t: 'Solo afecta al rendimiento, por hacer tres cosas en el mismo método.',
        fb: 'Es un problema de cohesión y de costo de cambio, no de rendimiento.' },
      { t: 'Mejora la cohesión, porque todo lo de gift cards queda en la misma clase.',
        fb: 'La cohesión se mide por responsabilidad y nivel de abstracción, no por tema. Mezclar SQL y JSON con orquestación la baja.' }
    ]
  },
  {
    id: 'M20', tema: 'Diseño y principios', caso: 'giftcards',
    diagramas: [
      { titulo: 'Diseño propuesto, con lo nuevo resaltado', codigo: [
        'classDiagram',
        '  direction LR',
        '  class GiftCardService {',
        '    <<Servicio de aplicacion>>',
        '    +usar(codigo, monto)',
        '  }',
        '  class GiftCard {',
        '    <<Dominio>>',
        '    saldo',
        '    +descontar(monto)',
        '  }',
        '  class ProveedorGiftCardClient {',
        '    <<Client externo>>',
        '    +confirmarConsumo(giftCard, monto)',
        '  }',
        '  GiftCardService --> GiftCard',
        '  GiftCard --> ProveedorGiftCardClient : NUEVO - confirma desde descontar',
        '  note for GiftCard "NUEVO: descontar llama al proveedor"',
        '  style GiftCard fill:#f59e0b33,stroke:#fbbf24,stroke-width:2px'
      ].join('\n') }
    ],
    enunciado: '<p>Otra propuesta: que <code>GiftCard.descontar(monto)</code> llame directamente a <code>ProveedorGiftCardClient</code> para confirmar el consumo. ¿Qué consecuencia tiene?</p>',
    opciones: [
      { t: 'Acopla el Dominio a la infraestructura y complica testear <code>descontar</code>.', ok: true,
        fb: 'El Dominio debería quedar independiente de los detalles externos; la coordinación con el proveedor es tarea del Service.' },
      { t: 'Disminuye el acoplamiento, porque el Service pasa a tener menos dependencias.',
        fb: 'El acoplamiento no desaparece: se mueve al Dominio, que es la capa que más queremos proteger.' },
      { t: 'Ninguna: da lo mismo desde qué clase se llame al proveedor.',
        fb: 'Impacta en la testeabilidad y en el costo de cambio del Dominio.' },
      { t: 'Mejora la cohesión de <code>GiftCard</code>, que ahora resuelve todo el consumo.',
        fb: 'GiftCard pasaría a resolver dos problemas a distinto nivel de abstracción (regla de saldo y comunicación por red): baja la cohesión.' }
    ]
  },
  {
    id: 'M21', tema: 'Diseño y principios', caso: 'billetera',
    enunciado: '<p>En una versión vieja de la Billetera, la validación “saldo suficiente” estaba copiada en tres Services distintos. Cuando se permitió un descubierto de $5.000, se cambió en dos lugares y el tercero quedó con la regla vieja. ¿Qué describe mejor el problema?</p>',
    opciones: [
      { t: 'Redundancia: la misma regla repetida vuelve frágil al diseño.', ok: true,
        fb: 'Lo que buscamos es un único lugar donde encontrar la verdad sobre un tema: en este caso, Cuenta.' },
      { t: 'Opacidad: el código de los Services era difícil de entender.',
        fb: 'El código podía ser perfectamente claro; el problema es que la regla estaba repetida.' },
      { t: 'Complejidad heredada: el descubierto es una regla difícil del negocio.',
        fb: 'El descubierto es una regla simple. La complejidad la agregó el diseño (es accidental).' },
      { t: 'Ninguno: es un error de tipeo del programador.', fija: true,
        fb: 'El diseño facilitó el error: con una sola copia de la regla, no había nada que olvidar.' }
    ]
  },
  {
    id: 'M35', tema: 'Diseño y principios', caso: 'billetera',
    diagramas: [
      { titulo: 'Jerarquía de excepciones de la Billetera', codigo: [
        'classDiagram',
        '  direction TB',
        '  class RuntimeException {',
        '    <<Java>>',
        '  }',
        '  class TransferenciaException {',
        '    mensaje: fondos insuficientes',
        '  }',
        '  class CuentaNoEncontradaException {',
        '    alias',
        '  }',
        '  class Cuenta {',
        '    <<Dominio>>',
        '    +transferir(destino, monto)',
        '  }',
        '  class CuentaService {',
        '    <<Servicio de aplicacion>>',
        '  }',
        '  class ManejadorGlobalDeErrores {',
        '    <<Presentacion>>',
        '  }',
        '  RuntimeException <|-- TransferenciaException',
        '  RuntimeException <|-- CuentaNoEncontradaException',
        '  Cuenta ..> TransferenciaException : lanza',
        '  CuentaService ..> CuentaNoEncontradaException : lanza',
        '  ManejadorGlobalDeErrores ..> TransferenciaException : traduce',
        '  ManejadorGlobalDeErrores ..> CuentaNoEncontradaException : traduce'
      ].join('\n') }
    ],
    enunciado: '<p>Cuando una transferencia no se puede hacer, <code>Cuenta</code> lanza <code>TransferenciaException</code> con un mensaje claro (“fondos insuficientes”), en lugar de una excepción genérica con “hubo un error”. ¿Qué cualidad mejora?</p>',
    opciones: [
      { t: 'Robustez: errores claros, al nivel de abstracción del negocio.', ok: true,
        fb: 'Una jerarquía de excepciones propia describe la situación excepcional en términos del dominio, y permite que la Presentación la traduzca a la respuesta correcta.' },
      { t: 'Rendimiento: una excepción específica se procesa más rápido.',
        fb: 'No hay diferencia de rendimiento relevante: es una cuestión de claridad.' },
      { t: 'Simplicidad: hay menos clases que con una excepción genérica.',
        fb: 'Hay más clases, no menos. Lo que se gana es claridad sobre qué falló.' },
      { t: 'Ninguna: el tipo de excepción da igual mientras la operación falle.', fija: true,
        fb: 'No da igual: con una excepción genérica no se puede distinguir un error de negocio (400) de una falla del servidor (500).' }
    ]
  },
  {
    id: 'M36', tema: 'Diseño y principios', caso: 'giftcards',
    enunciado: '<p>En Gift Cards, validar la vigencia y el saldo es parte del problema. En cambio, tener que convertir los mismos datos tres veces entre formatos distintos es algo que agregamos nosotros. ¿Cómo se clasifican esas dos complejidades?</p>',
    opciones: [
      { t: 'La primera es heredada (del dominio) y la segunda es accidental.', ok: true,
        fb: 'Un buen diseño oculta la complejidad heredada y minimiza la accidental.' },
      { t: 'La primera es accidental y la segunda es heredada del dominio.',
        fb: 'Está invertido: la vigencia y el saldo vienen del negocio; las conversiones las agregamos nosotros.' },
      { t: 'Las dos son heredadas, porque las dos están en el sistema.',
        fb: 'Que algo esté en el sistema no lo hace parte del dominio; las conversiones son decisiones nuestras.' },
      { t: 'Las dos son accidentales y se pueden eliminar por completo.',
        fb: 'La complejidad heredada no se puede eliminar: viene del problema. Se puede ocultar.' }
    ]
  },

  // --------------------------- Web y HTTP (3) ---------------------------
  {
    id: 'M22', tema: 'Web y HTTP', caso: 'billetera',
    enunciado: '<p>¿Qué pedido corresponde a “consultar el saldo de la cuenta <code>juan.perez</code>”?</p>',
    opciones: [
      { t: '<code>GET /api/cuentas/juan.perez/saldo</code>', ok: true,
        fb: 'Obtener un recurso sin modificar nada es exactamente GET (y es idempotente).' },
      { t: '<code>POST /api/cuentas/juan.perez/saldo</code>',
        fb: 'POST se usa para crear o disparar acciones; consultar no cambia nada.' },
      { t: '<code>DELETE /api/cuentas/juan.perez/saldo</code>',
        fb: 'DELETE elimina un recurso: no tiene sentido para consultar.' },
      { t: '<code>PUT /api/cuentas/juan.perez/saldo</code>',
        fb: 'PUT reemplaza un recurso completo; no corresponde a una consulta.' }
    ]
  },
  {
    id: 'M23', tema: 'Web y HTTP', caso: 'billetera',
    enunciado: '<p>Para transferir se usa <code>POST /api/transferencias</code>. Si el cliente reenvía el mismo pedido porque se le cortó la conexión, ¿qué puede pasar y por qué?</p>',
    opciones: [
      { t: 'Que se haga una segunda transferencia, porque POST no es idempotente.', ok: true,
        fb: 'Por eso hay que pensar bien qué pasa ante los reintentos en las operaciones que modifican estado.' },
      { t: 'Nada: HTTP detecta y descarta automáticamente los pedidos repetidos.',
        fb: 'HTTP no tiene estado: cada pedido se trata como nuevo.' },
      { t: 'Que el servidor responda <code>304 Not Modified</code> al segundo pedido.',
        fb: '304 es para caché de recursos que se consultan, no para acciones.' },
      { t: 'Que la primera transferencia se deshaga sola al llegar la segunda.',
        fb: 'Nada se deshace solo: el segundo pedido se procesa igual que el primero.' }
    ]
  },
  {
    id: 'M24', tema: 'Web y HTTP', caso: 'billetera',
    enunciado: '<p>¿Qué combinación de respuestas es coherente con el diseño de la Billetera?</p>',
    opciones: [
      { t: 'Éxito: <code>201</code>. Alias inexistente: <code>404</code>. Sin fondos: <code>400</code>.', ok: true,
        fb: 'El 2xx dice que salió bien (y que se creó un Movimiento); los 4xx dicen que el problema está en el pedido.' },
      { t: 'Éxito: <code>201</code>. Alias inexistente: <code>404</code>. Sin fondos: <code>500</code>.',
        fb: 'No es una falla del servidor: el servidor funcionó bien y rechazó un pedido que no cumple una regla.' },
      { t: 'Éxito: <code>200</code>. Alias inexistente: <code>200</code> vacío. Sin fondos: <code>400</code>.',
        fb: 'Un 2xx diría que salió bien; el cliente no se enteraría de que el alias no existe.' },
      { t: 'Éxito: <code>301</code>. Alias inexistente: <code>404</code>. Sin fondos: <code>400</code>.',
        fb: 'Los 3xx son redirecciones, no éxito de una operación.' }
    ]
  },

  // ------------------------------ Spring (1) ------------------------------
  {
    id: 'M25', tema: 'Spring', caso: 'tareas',
    diagramas: [
      { titulo: 'TareaRepository y JpaRepository', codigo: [
        'classDiagram',
        '  direction LR',
        '  class TareaService {',
        '    <<Servicio de aplicacion>>',
        '  }',
        '  class TareaRepository {',
        '    <<interface>>',
        '    +findByCompletadaFalse()',
        '  }',
        '  class JpaRepository {',
        '    <<interface de Spring Data>>',
        '    +save(entidad)',
        '    +findAll()',
        '    +findById(id)',
        '    +deleteById(id)',
        '  }',
        '  TareaService --> TareaRepository : recibe por constructor',
        '  JpaRepository <|-- TareaRepository : extiende',
        '  note for TareaRepository "Ninguna clase escrita a mano la implementa"'
      ].join('\n') }
    ],
    enunciado: '<p><code>TareaRepository</code> es una interfaz que extiende <code>JpaRepository</code> y no tiene ninguna clase que la implemente a mano. ¿Qué pasa?</p>',
    opciones: [
      { t: 'Es Fuente de datos y Spring Data genera la implementación al arrancar.', ok: true,
        fb: 'Spring crea un proxy en tiempo de ejecución; incluso arma queries a partir del nombre de los métodos.' },
      { t: 'La aplicación no compila, porque a la interfaz le falta la implementación.',
        fb: 'Compila y funciona: Spring provee la implementación.' },
      { t: 'Es parte del Dominio, porque es la clase que maneja las Tareas.',
        fb: 'Manejar Tareas no la hace Dominio: su responsabilidad es guardarlas y buscarlas.' },
      { t: 'El Service tiene que escribir el SQL que la interfaz no implementa.',
        fb: 'No hace falta SQL para el CRUD básico, y en todo caso no le correspondería al Service.' }
    ]
  },

  // ---------------------- Presentación y MVC (2) ----------------------
  {
    id: 'M27', tema: 'Presentación y MVC', caso: 'tareas', fragmento: 'capas',
    enunciado: '<p>En Tareas, <code>TareaWebController</code> devuelve una página HTML y <code>TareaController</code> devuelve JSON; ambos usan <code>TareaService</code>. ¿Qué cambia entre una y otra forma de mostrar las tareas?</p>',
    opciones: [
      { t: 'Solo la Presentación; el Service y el Dominio son los mismos.', ok: true,
        fb: '“Misma app, otra Vista”: el dominio no se entera de si lo están mirando en HTML o en JSON.' },
      { t: 'Hace falta un <code>TareaService</code> distinto para cada forma de mostrar.',
        fb: 'Si los casos de uso son los mismos, el Service se comparte.' },
      { t: 'La entidad <code>Tarea</code> tiene que saber generar su HTML y su JSON.',
        fb: 'Eso mezclaría Dominio con Presentación. Generar HTML o JSON es tarea de la Vista.' },
      { t: 'Cambia la base de datos, porque cada vista lee de su propia tabla.',
        fb: 'La forma de mostrar no afecta cómo se guarda.' }
    ]
  },
  {
    id: 'M28', tema: 'Presentación y MVC', caso: 'giftcards',
    enunciado: '<p>Se quiere que los usuarios consulten el saldo de sus gift cards desde un bot de Telegram. ¿Qué hay que agregar?</p>',
    opciones: [
      { t: 'Un Controller nuevo que llame al mismo Service; la Vista la dibuja Telegram.', ok: true,
        fb: 'En el bot la Vista es “prestada”: Telegram dibuja y nosotros decidimos qué responder. El dominio es el mismo.' },
      { t: 'Una copia de <code>GiftCard</code> adaptada a los mensajes de Telegram.',
        fb: 'Copiar el Dominio duplicaría las reglas. La nueva cara se conecta al mismo Modelo.' },
      { t: 'Un nuevo Repository que lea las gift cards desde Telegram.',
        fb: 'Telegram es la interfaz con el usuario, no el lugar donde están los datos.' },
      { t: 'Nada: no se puede, porque un bot no tiene capas.',
        fb: 'Un bot es otra Presentación: tiene Controlador y Vista como cualquier otra.' }
    ]
  },

  // ------------------------------ Datos (3) ------------------------------
  {
    id: 'M29', tema: 'Datos', caso: 'billetera', fragmento: 'secuenciaTransferir',
    enunciado: '<p>Durante una transferencia, los saldos de las dos cuentas ya se actualizaron y falla el <code>save</code> del Movimiento. ¿Qué debería pasar?</p>',
    opciones: [
      { t: 'Se revierte toda la transacción y los saldos vuelven a como estaban.', ok: true,
        fb: 'Todo-o-nada: si quedaran los saldos sin el Movimiento, el sistema sería inconsistente.' },
      { t: 'Quedan los saldos actualizados y el Movimiento se reintenta al día siguiente.',
        fb: 'Mientras tanto la plata se movió sin registro: es justo la inconsistencia que evita la transacción.' },
      { t: 'El Controller restaura los saldos a mano antes de responder el error.',
        fb: 'El Controller no conoce los pasos del caso de uso; el límite transaccional lo pone el Service.' },
      { t: 'Nada: el Movimiento es opcional y la transferencia ya se hizo.',
        fb: 'El enunciado de la práctica pide registrar el Movimiento como parte de la transferencia.' }
    ]
  },
  {
    id: 'M37', tema: 'Datos', caso: 'billetera',
    diagramas: [
      { titulo: 'Modelo de objetos a mapear', codigo: [
        'classDiagram',
        '  direction LR',
        '  class Cuenta {',
        '    <<Dominio>>',
        '    alias',
        '    saldo',
        '  }',
        '  class Movimiento {',
        '    <<Dominio>>',
        '    monto',
        '    fecha',
        '  }',
        '  Movimiento "0..*" --> "0..1" Cuenta : origen',
        '  Movimiento "0..*" --> "1" Cuenta : destino'
      ].join('\n') }
    ],
    enunciado: '<p>Cada Movimiento tiene una cuenta origen y una cuenta destino; una cuenta tiene muchos movimientos. En la base relacional, ¿dónde conviene poner la clave foránea?</p>',
    opciones: [
      { t: 'En la tabla de movimientos: cada fila apunta a su cuenta origen y destino.', ok: true,
        fb: 'En una relación uno a muchos, la FK va del lado “muchos”. Así la base garantiza que cada movimiento apunte a cuentas que existen.' },
      { t: 'En la tabla de cuentas: una columna por cada movimiento de la cuenta.',
        fb: 'La cantidad de movimientos crece sin límite: no se puede modelar con columnas.' },
      { t: 'En las dos tablas a la vez, para poder navegar en ambos sentidos.',
        fb: 'Duplicaría la relación y podría quedar inconsistente. La navegabilidad la resuelve el modelo de objetos, no una segunda FK.' },
      { t: 'En ninguna: alcanza con guardar el alias como texto en el movimiento.',
        fb: 'Sin FK se pierde la integridad referencial: podría quedar un movimiento apuntando a un alias que ya no existe.' }
    ]
  },
  {
    id: 'M38', tema: 'Datos', caso: 'giftcards',
    diagramas: [
      { titulo: 'Opción 1: el saldo se guarda como columna', codigo: [
        'erDiagram',
        '  GIFT_CARD ||--o{ CONSUMO : tiene',
        '  GIFT_CARD {',
        '    string codigo PK',
        '    decimal saldo "se actualiza en cada consumo"',
        '    date vence_el',
        '  }',
        '  CONSUMO {',
        '    int id PK',
        '    string codigo_gift_card FK',
        '    decimal monto',
        '    date fecha',
        '  }'
      ].join('\n') },
      { titulo: 'Opción 2: el saldo se calcula sumando los consumos', codigo: [
        'erDiagram',
        '  GIFT_CARD ||--o{ CONSUMO : tiene',
        '  GIFT_CARD {',
        '    string codigo PK',
        '    decimal saldo_inicial',
        '    date vence_el',
        '  }',
        '  CONSUMO {',
        '    int id PK',
        '    string codigo_gift_card FK',
        '    decimal monto',
        '    date fecha',
        '  }'
      ].join('\n') }
    ],
    enunciado: '<p>El saldo de una gift card se puede guardar como columna o calcular sumando sus consumos. ¿Qué evaluación es correcta?</p>',
    opciones: [
      { t: 'Guardarlo agiliza las lecturas, pero duplica un dato que hay que mantener consistente.', ok: true,
        fb: 'Es el trade-off de desnormalizar: lecturas más rápidas a cambio de duplicación. Si se guarda, el consumo y el saldo tienen que actualizarse en la misma transacción.' },
      { t: 'Guardarlo es siempre un error: un campo calculado nunca se persiste.',
        fb: 'No es un error en sí: es una decisión con costos y beneficios que hay que hacer explícita.' },
      { t: 'Calcularlo siempre es gratis, así que nunca conviene guardarlo.',
        fb: 'Calcularlo implica leer todos los consumos en cada consulta; con mucho volumen eso tiene un costo.' },
      { t: 'Da igual: la base de datos mantiene sincronizados los dos valores sola.',
        fb: 'La base no sabe que el saldo depende de los consumos: mantenerlos consistentes es responsabilidad nuestra.' }
    ]
  },

  // ----------------------- Tipos de aplicación (3) -----------------------
  {
    id: 'M30', tema: 'Tipos de aplicación', caso: 'giftcards',
    enunciado: '<p>Cada proveedor quiere un tablero mensual con “cuántas gift cards se usaron por sucursal”. Comparado con “usar una gift card al pagar”, ¿cómo se clasifica?</p>',
    opciones: [
      { t: 'El tablero es analítico; usar la gift card es transaccional.', ok: true,
        fb: 'Registrar el día a día y entender el negocio son necesidades distintas, con exigencias distintas.' },
      { t: 'Los dos son transaccionales, porque usan la misma base de datos.',
        fb: 'Lo que define el tipo es cómo se usa (volumen, lectura o escritura, quién espera), no dónde están los datos.' },
      { t: 'El tablero es un Worker, porque se procesa en segundo plano.',
        fb: 'Lo dispara una persona con una consulta y espera el resultado (aunque tolera más tiempo): es analítico.' },
      { t: 'Usar la gift card es Batch, porque se repite muchas veces por día.',
        fb: 'Batch lo dispara un horario y nadie espera. Al pagar, la persona espera la respuesta en el momento.' }
    ]
  },
  {
    id: 'M39', tema: 'Tipos de aplicación', caso: 'billetera',
    enunciado: '<p>¿Qué ficha corresponde a “consultar el saldo” en la Billetera Virtual?</p>',
    opciones: [
      { t: 'Usuario: persona o app. Disparador: un pedido. Tiempo: menos de 1 s. Alguien espera.', ok: true,
        fb: 'Es una operación chica, que alguien espera mirando la pantalla: ficha Web/API.' },
      { t: 'Usuario: nadie. Disparador: un horario. Tiempo: horas. Nadie espera.',
        fb: 'Esa es la ficha Batch, por ejemplo para generar los resúmenes mensuales de todas las cuentas.' },
      { t: 'Usuario: otro sistema. Disparador: un mensaje. Tiempo: minutos. Nadie espera.',
        fb: 'Esa es la ficha Worker, por ejemplo para mandar un aviso por cada transferencia recibida.' },
      { t: 'Usuario: un analista. Disparador: una consulta enorme. Tiempo: minutos. Tolera esperar.',
        fb: 'Esa es la ficha Analítica, por ejemplo “cuánto se transfirió por mes”.' }
    ]
  },
  {
    id: 'M40', tema: 'Tipos de aplicación', caso: 'tareas',
    fragmento: 'c4', fragmentoTipo: 'el diagrama C4 (contexto y despliegue)',
    enunciado: '<p>Se agrega un comando <code>tareas listar --pendientes</code> para usar desde la terminal. ¿Qué tipo de aplicación es y qué se reutiliza?</p>',
    opciones: [
      { t: 'CLI: la usa un técnico frente a la terminal; reutiliza el Service y el Dominio.', ok: true,
        fb: 'Es otra Presentación (otra cara) sobre el mismo núcleo, con la ficha CLI: un usuario a la vez, que espera el resultado.' },
      { t: 'Batch: corre sin que nadie espere; necesita su propio Dominio de tareas.',
        fb: 'Alguien la ejecuta y espera la respuesta en la terminal, y no hace falta duplicar el Dominio.' },
      { t: 'API: la usa otro sistema; la CLI llama directo al Repository por HTTP.',
        fb: 'La usa una persona, y el Repository no se expone por HTTP: la CLI pasa por el Service.' },
      { t: 'Web: necesita un navegador; solo reutiliza la base de datos.',
        fb: 'Se usa desde una terminal, y reutilizar solo la base obligaría a duplicar las reglas.' }
    ]
  },
  // ------------------------- Modelado REST (4) -------------------------
  {
    id: 'M31', tema: 'Modelado REST', caso: 'billetera',
    enunciado: '<p>Para transferir dinero, ¿qué modelado REST es el adecuado y por qué?</p>',
    opciones: [
      { t: '<code>POST /api/transferencias</code>: crea una transferencia, que queda registrada.', ok: true,
        fb: 'La transferencia es un recurso propio, que involucra a dos cuentas: va en su propia colección, sin anidarla debajo de cuentas. POST con los datos en el body y respuesta 201. Las reglas las aplica Cuenta.' },
      { t: '<code>PUT /api/cuentas/juan.perez</code> con el saldo nuevo calculado por el cliente.',
        fb: 'El cliente estaría haciendo la cuenta: la regla de negocio saldría del Dominio, nadie validaría y no quedaría ningún Movimiento.' },
      { t: '<code>GET /api/transferir?origen=...&destino=...&monto=1000</code>',
        fb: 'GET no debe modificar nada, y además tiene un verbo en la URL. Un navegador o un caché podrían repetirlo.' },
      { t: '<code>DELETE /api/cuentas/juan.perez/saldo?monto=1000</code>',
        fb: 'DELETE elimina un recurso; no sirve para expresar un movimiento de dinero.' }
    ]
  },
  {
    id: 'M32', tema: 'Modelado REST', caso: 'giftcards',
    enunciado: '<p>Se quiere consultar las gift cards del usuario <code>u-42</code>. ¿Qué pedido sigue mejor el estilo REST?</p>',
    opciones: [
      { t: '<code>GET /usuarios/u-42/giftcards</code>', ok: true,
        fb: 'Las gift cards del usuario son una colección que depende de él (sub-recurso). Es una lectura: GET.' },
      { t: '<code>POST /usuarios/u-42/giftcards</code>',
        fb: 'Sobre esa colección, POST crearía una gift card nueva para el usuario.' },
      { t: '<code>GET /getGiftCardsDeUsuario?id=u-42</code>',
        fb: 'El verbo en la URL duplica lo que ya dice el método. En REST la URL nombra recursos.' },
      { t: '<code>DELETE /usuarios/u-42</code>',
        fb: 'Eliminaría al usuario.' }
    ]
  },
  {
    id: 'M33', tema: 'Modelado REST', caso: 'tareas',
    diagramas: [
      { titulo: 'Estado actual de la tarea 7 (diagrama de objetos)', codigo: [
        'classDiagram',
        '  class tarea7["tarea7 : Tarea"] {',
        '    id = 7',
        '    titulo = "Estudiar MVC"',
        '    completada = false',
        '  }'
      ].join('\n') }
    ],
    enunciado: '<p>Se quiere marcar como completada la tarea 7, sin cambiar su título. ¿Qué pedido corresponde?</p>',
    opciones: [
      { t: '<code>PATCH /tareas/7</code> con <code>{ "completada": true }</code>', ok: true,
        fb: 'PATCH modifica parcialmente un recurso existente: solo cambia lo que viaja en el body.' },
      { t: '<code>PUT /tareas/7</code> con <code>{ "completada": true }</code>',
        fb: 'PUT reemplaza el recurso completo: la tarea quedaría sin título, porque no viajó en el body.' },
      { t: '<code>POST /tareas</code> con <code>{ "id": 7, "completada": true }</code>',
        fb: 'POST sobre la colección crea una tarea nueva; no modifica la 7.' },
      { t: '<code>GET /tareas/7/completar</code>',
        fb: 'GET no debería modificar nada en el servidor.' }
    ]
  },
  {
    id: 'M34', tema: 'Modelado REST', caso: 'billetera',
    enunciado: '<p>Llega <code>POST /api/transferencias</code> con un JSON. ¿Cuál es el recorrido correcto entre capas?</p>',
    opciones: [
      { t: 'Controller arma el DTO → Service orquesta → Cuenta decide → Controller responde 201.', ok: true,
        fb: 'El JSON se convierte en TransferenciaRequest en la Presentación; el Service trabaja con datos simples; Cuenta aplica la regla; la respuesta vuelve como MovimientoResponse.' },
      { t: 'Controller le pasa el JSON tal cual a <code>Cuenta</code>, que lo interpreta y decide.',
        fb: 'El Dominio quedaría atado al formato del pedido HTTP. Interpretar JSON es tarea de la Presentación.' },
      { t: 'Controller le pasa el DTO al Repository, que lo guarda como Movimiento.',
        fb: 'Saltea al Service y al Dominio: nadie valida saldo ni cuentas activas.' },
      { t: 'Service arma la respuesta HTTP con su código y se la devuelve al Controller.',
        fb: 'El Service no conoce HTTP: devuelve un DTO o lanza una excepción, y la Presentación elige el código.' }
    ]
  }
];
