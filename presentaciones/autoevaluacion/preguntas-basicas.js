/* Preguntas básicas: repaso de conceptos.
 * Formato: { id, tema, caso?, enunciado, diagrama?, opciones: [{ t, ok?, fija?, fb }] }
 * Una sola opción con ok: true. "Todas / Ninguna de las anteriores" llevan fija: true (van al final).
 */
window.PREGUNTAS_BASICAS = [
  // ---------------------------- Capas (13) ----------------------------
  {
    id: 'B01', tema: 'Capas',
    enunciado: '<p>¿Cuál es la responsabilidad principal de la capa de <strong>Dominio</strong>?</p>',
    opciones: [
      { t: 'Concentrar las reglas de negocio, las validaciones y los cálculos.', ok: true,
        fb: 'El Dominio es el núcleo: resuelve cómo se ejecuta la lógica del negocio y se mantiene independiente de frameworks e infraestructura.' },
      { t: 'Recibir los pedidos HTTP y convertirlos en llamadas a los casos de uso.',
        fb: 'Eso lo hace la capa de Presentación (por ejemplo, un Controller). El Dominio no sabe que existe HTTP.' },
      { t: 'Ejecutar las consultas SQL y convertir las filas en objetos.',
        fb: 'Eso es responsabilidad de la Fuente de datos (los Repositories). El Dominio queda aislado de SQL.' },
      { t: 'Elegir los colores y la tipografía de las pantallas.',
        fb: 'Es una cuestión visual de la Presentación; no tiene nada que ver con las reglas de negocio.' }
    ]
  },
  {
    id: 'B02', tema: 'Capas',
    enunciado: '<p>Según lo visto en clase, ¿qué hace la capa de <strong>Service</strong>?</p>',
    opciones: [
      { t: 'Orquestar el caso de uso y definir los límites de la transacción.', ok: true,
        fb: 'El Service es el orquestador: recibe lo que pide la Presentación, coordina y devuelve el resultado. Orquesta, pero no decide.' },
      { t: 'Contener las reglas de negocio más importantes, para que el Dominio quede simple.',
        fb: 'Las reglas de negocio viven en el Dominio. Cuando terminan en el Service hablamos de un Dominio anémico, que es justamente lo que queremos evitar.' },
      { t: 'Escribir las consultas SQL que necesita cada caso de uso.',
        fb: 'Las consultas son de la Fuente de datos. El Service usa los Repositories, pero no habla SQL.' },
      { t: 'Nada: es una capa opcional que Spring genera automáticamente.',
        fb: 'Spring no elimina capas: solo les pone anotaciones (@Service) y las conecta por inyección de dependencias.' }
    ]
  },
  {
    id: 'B03', tema: 'Capas',
    enunciado: '<p>¿Qué capa aísla a la lógica de negocio de las consultas SQL, los protocolos de red de sistemas externos y los formatos de serialización de la infraestructura?</p>',
    opciones: [
      { t: 'La Fuente de datos.', ok: true,
        fb: 'La Fuente de datos se encarga de la comunicación con bases de datos y con proveedores externos, para que el negocio no dependa de esos detalles.' },
      { t: 'La Presentación, porque es la que se comunica con el exterior.',
        fb: 'La Presentación expone la aplicación hacia afuera (usuarios u otros sistemas que nos llaman), pero no es la que habla con la base de datos ni con los servicios que nosotros consumimos.' },
      { t: 'El Service, porque coordina a todas las demás capas.',
        fb: 'El Service usa a la Fuente de datos, pero no la reemplaza: no conoce SQL ni protocolos.' },
      { t: 'Ninguna: cada clase de negocio hace sus propias consultas.', fija: true,
        fb: 'Eso mezclaría negocio con infraestructura; es exactamente lo que el layering busca evitar.' }
    ]
  },
  {
    id: 'B04', tema: 'Capas',
    enunciado: '<p>Según el layering de Fowler visto en clase, “las capas superiores consumen de las inferiores sin saltear niveles”. ¿Cuál de estas dependencias <strong>respeta</strong> la regla?</p>',
    opciones: [
      { t: 'La Presentación llama al Service.', ok: true,
        fb: 'Es la dependencia esperada: la capa de arriba usa a la inmediatamente inferior.' },
      { t: 'El Dominio llama a la Presentación para mostrar un mensaje de error.',
        fb: 'Es una dependencia hacia arriba: el Dominio no debe conocer la interfaz de usuario.' },
      { t: 'La Presentación llama directamente al Repository para ahorrar un paso.',
        fb: 'Saltea al Service: se pierden la orquestación del caso de uso y los límites de la transacción.' },
      { t: 'El Repository le devuelve un código HTTP al Controller.',
        fb: 'La Fuente de datos no conoce HTTP; los códigos de estado son un asunto de la Presentación.' }
    ]
  },
  {
    id: 'B05', tema: 'Capas', caso: 'giftcards', fragmento: 'capas',
    enunciado: '<p>En el caso Gift Cards aparecen <code>UsoGiftCardRequest</code> (DTO entrante) y <code>UsoGiftCardResponse</code> (DTO saliente). ¿Qué son?</p>',
    opciones: [
      { t: 'Objetos que transportan datos entre la Presentación y el Service.', ok: true,
        fb: 'Los DTO desacoplan la forma del pedido o de la respuesta del modelo de Dominio; el Service traduce entre uno y otro.' },
      { t: 'Entidades de Dominio que se guardan en la base de datos con su saldo.',
        fb: 'La entidad es GiftCard. Los DTO no tienen reglas de negocio ni se persisten.' },
      { t: 'Repositorios especializados en buscar gift cards por código.',
        fb: 'El repositorio es GiftCardRepository. Un DTO solo transporta datos.' },
      { t: 'Las pantallas que ve el usuario cuando usa la gift card.',
        fb: 'Un DTO no es una pantalla: es un objeto de datos que viaja (por ejemplo, convertido a JSON).' }
    ]
  },
  {
    id: 'B06', tema: 'Capas',
    enunciado: '<p>¿Cuál de estos es un ejemplo de <strong>aspecto transversal</strong> de una aplicación?</p>',
    opciones: [
      { t: 'Seguridad, logs y observabilidad.', ok: true,
        fb: 'Son requerimientos comunes que atraviesan todas las capas, por eso se los dibuja al costado del diagrama de capas.' },
      { t: 'Calcular el saldo de una gift card.',
        fb: 'Es una regla de negocio concreta: pertenece al Dominio.' },
      { t: 'Guardar una cuenta en la base de datos.',
        fb: 'Es una tarea específica de la Fuente de datos, no algo transversal.' },
      { t: 'Todas las anteriores.', fija: true,
        fb: 'Solo la primera es transversal; las otras dos tienen una capa bien definida.' }
    ]
  },
  {
    id: 'B07', tema: 'Capas',
    enunciado: '<p>¿Qué es un <strong>Dominio anémico</strong>?</p>',
    opciones: [
      { t: 'Un Dominio cuyos objetos solo tienen datos, con la lógica en el Service.', ok: true,
        fb: 'Es el antipatrón que describe Fowler (AnemicDomainModel): el objeto deja de ser datos + comportamiento.' },
      { t: 'Un Dominio con muy pocas clases, que no alcanza a modelar todo el negocio.',
        fb: 'La cantidad de clases no tiene que ver: un Dominio con muchas clases también puede ser anémico.' },
      { t: 'Un Dominio cuyas entidades no se guardan en la base de datos.',
        fb: 'Persistir o no persistir no define si es anémico; lo define dónde vive el comportamiento.' },
      { t: 'Ninguna de las anteriores.', fija: true,
        fb: 'La primera opción es la definición vista en clase.' }
    ]
  },
  {
    id: 'B08', tema: 'Capas',
    enunciado: '<p>¿Por qué el Dominio anémico se considera un problema de diseño?</p>',
    opciones: [
      { t: 'Porque las reglas quedan fuera de los objetos, como en el estilo procedural.', ok: true,
        fb: 'Es un resabio procedural: separar las estructuras de datos de los algoritmos que operan sobre ellas. Las reglas se dispersan en los Services y cuesta más cambiarlas.' },
      { t: 'Porque el sistema deja de funcionar cuando crece la cantidad de reglas.',
        fb: 'Puede funcionar perfectamente. El problema es el costo de cambio a futuro (el valor “estructura”), no el comportamiento actual.' },
      { t: 'Porque Spring no permite declarar entidades que no tengan métodos.',
        fb: 'Spring lo permite sin problemas. Es una decisión de diseño, no una restricción del framework.' },
      { t: 'Porque los objetos sin comportamiento ocupan más memoria.',
        fb: 'No hay una diferencia relevante de memoria. Es un problema de diseño, no de recursos.' }
    ]
  },
  {
    id: 'B09', tema: 'Capas',
    enunciado: '<p>¿En qué capa ubicamos a un <strong>Client</strong> que se comunica con un sistema externo, como <code>ProveedorGiftCardClient</code>?</p>',
    opciones: [
      { t: 'En la Fuente de datos.', ok: true,
        fb: 'La Fuente de datos incluye a los sistemas externos (pasarelas de pago, servicios de mail, APIs de terceros): aísla al resto del protocolo de red.' },
      { t: 'En la Presentación.',
        fb: 'La Presentación es por donde nos llaman a nosotros. El Client es por donde nosotros llamamos a otro sistema.' },
      { t: 'En el Dominio, porque confirmar un consumo es una regla de negocio.',
        fb: 'La regla de negocio (si se puede usar la gift card) está en el Dominio, pero el Client solo resuelve la comunicación: conoce URLs, HTTP y formatos.' },
      { t: 'Es un aspecto transversal.',
        fb: 'Transversales son la seguridad, los logs o la observabilidad. Hablar con un proveedor puntual tiene una capa clara.' }
    ]
  },
  {
    id: 'B10', tema: 'Capas',
    enunciado: '<p>¿Qué capa define los <strong>límites de la transacción</strong>, es decir, qué operaciones se confirman o se revierten todas juntas?</p>',
    opciones: [
      { t: 'El Service.', ok: true,
        fb: 'El Service conoce el caso de uso completo, así que sabe qué pasos tienen que ser todo-o-nada.' },
      { t: 'El Controller.',
        fb: 'El Controller solo traduce HTTP a una llamada y delega; no conoce los pasos del caso de uso.' },
      { t: 'Cada Repository, por separado.',
        fb: 'Cada Repository solo ve su propia operación: no puede saber que guardar la cuenta y guardar el movimiento van juntos.' },
      { t: 'El navegador del usuario.',
        fb: 'El cliente no controla las transacciones del servidor.' }
    ]
  },
  {
    id: 'B11', tema: 'Capas',
    enunciado: '<p>¿Para qué sirve dividir una aplicación en capas?</p>',
    opciones: [
      { t: 'Para aislar los cambios de cada aspecto, con responsabilidades definidas.', ok: true,
        fb: 'Separar responsabilidades aísla los cambios: es una de las técnicas más comunes para manejar la complejidad.' },
      { t: 'Para que el programa se ejecute más rápido al repartir el trabajo entre capas.',
        fb: 'Las capas no buscan rendimiento; incluso agregan algunas llamadas. Buscan facilidad de cambio.' },
      { t: 'Porque Java no compila si las clases no están separadas en capas.',
        fb: 'El compilador no exige capas. Es una decisión de diseño.' },
      { t: 'Para tener más clases y que el proyecto parezca más grande.',
        fb: 'Más clases sin responsabilidades claras es complejidad innecesaria.' }
    ]
  },
  {
    id: 'B12', tema: 'Capas',
    enunciado: '<p>¿Qué hace la capa de <strong>Presentación</strong>?</p>',
    opciones: [
      { t: 'Exponer la aplicación y procesar los pedidos de usuarios o de otros sistemas.', ok: true,
        fb: 'Es el punto de interacción con el exterior: recibe la entrada, delega y devuelve la respuesta en el formato que corresponda.' },
      { t: 'Decidir si cada operación cumple las reglas del negocio antes de guardarla.',
        fb: 'Eso es del Dominio. Si las reglas quedan en la Presentación, hay que repetirlas en cada interfaz nueva.' },
      { t: 'Guardar los datos en la base y recuperarlos cuando se los pide.',
        fb: 'Eso es de la Fuente de datos.' },
      { t: 'Dibujar las pantallas: por eso solo existe en las aplicaciones web.',
        fb: 'Una CLI, una API o un bot también tienen Presentación: es la cara de la aplicación, sea cual sea.' }
    ]
  },
  {
    id: 'B13', tema: 'Capas',
    enunciado: '<p>¿Cuál es la diferencia entre la <strong>arquitectura</strong> y el <strong>diseño de un componente</strong>? ¿Cuál de los dos hacemos en la materia?</p>',
    opciones: [
      { t: 'La arquitectura organiza varios componentes y cómo se comunican; el diseño mira un componente por dentro. En la materia hacemos diseño de componentes.', ok: true,
        fb: 'Son dos niveles de zoom. La arquitectura trata cómo se reparten y comunican muchos componentes (servicios, colas, balanceo). El diseño de un componente trata sus clases, módulos y capas, con algunas interacciones puntuales hacia afuera (la base de datos u otro sistema). Eso es lo que hacemos en la materia.' },
      { t: 'Son sinónimos: las dos describen cómo se organizan las clases de un componente. En la materia hacemos las dos cosas por igual.',
        fb: 'En clase los distinguimos como dos niveles de zoom distintos, y la arquitectura de varios componentes queda fuera del alcance de la materia.' },
      { t: 'La arquitectura mira un componente por dentro; el diseño organiza varios componentes y cómo se comunican. En la materia hacemos arquitectura.',
        fb: 'Está invertido: el zoom sobre un solo componente (sus clases y capas) es el diseño, y es lo que hacemos en la materia.' },
      { t: 'La arquitectura trata el código y el diseño trata las pantallas y los colores. En la materia hacemos diseño de pantallas.',
        fb: 'El diseño de software no es diseño visual: trata la organización interna del código de un componente.' }
    ]
  },

  // ---------------------------- Testing (4) ----------------------------
  {
    id: 'B14', tema: 'Testing',
    enunciado: '<p>¿Qué características tiene un <strong>test unitario</strong>?</p>',
    opciones: [
      { t: 'Es automático: se ejecuta sin intervención humana.',
        fb: 'Es cierto, pero no es la única característica: también es rápido, repetible y aislado.' },
      { t: 'Es rápido y repetible: corre en milisegundos y da siempre el mismo resultado.',
        fb: 'Es cierto, pero también es automático y prueba una unidad aislada.' },
      { t: 'Es aislado: prueba una unidad (un método, una clase), no el sistema entero.',
        fb: 'Es cierto, pero también es automático, rápido y repetible.' },
      { t: 'Todas las anteriores.', fija: true, ok: true,
        fb: 'Automático, rápido, repetible y aislado: esas cuatro características son las que permiten correrlo miles de veces y refactorizar con confianza.' }
    ]
  },
  {
    id: 'B15', tema: 'Testing',
    enunciado: '<p>En el patrón <strong>AAA</strong>, ¿qué significa cada parte?</p>',
    opciones: [
      { t: 'Arrange: preparar. Act: ejecutar. Assert: verificar.', ok: true,
        fb: 'Casi todo test tiene esta forma. En los casos lo escribimos como dado / cuando / entonces.' },
      { t: 'Analizar el problema, Arreglar el código y Aprobar el cambio.',
        fb: 'No es un proceso de revisión de código, es la estructura interna de un test.' },
      { t: 'Arrange: ejecutar. Act: verificar. Assert: preparar los datos.',
        fb: 'El orden está mezclado: primero se prepara, después se ejecuta y al final se verifica.' },
      { t: 'Ninguna de las anteriores.', fija: true,
        fb: 'La primera opción es la correcta.' }
    ]
  },
  {
    id: 'B16', tema: 'Testing',
    enunciado: '<p>¿Para qué se usa un <strong>mock</strong> en un test unitario?</p>',
    opciones: [
      { t: 'Para reemplazar una dependencia real por un objeto que controlamos.', ok: true,
        fb: 'El mock aísla la unidad: sin red ni base de datos, el test es rápido y determinista.' },
      { t: 'Para reemplazar la clase que estamos probando por una versión más simple.',
        fb: 'La unidad bajo test es real; lo que se reemplaza son sus dependencias.' },
      { t: 'Para que el código de producción corra más rápido sin la base de datos.',
        fb: 'Los mocks solo existen en los tests; producción usa las dependencias reales.' },
      { t: 'Para no tener que escribir asserts al final del test.',
        fb: 'Igual hay que verificar el resultado. Además, con verify se suman verificaciones de interacciones.' }
    ]
  },
  {
    id: 'B17', tema: 'Testing',
    enunciado: '<p>Con Mockito, ¿cuál es la diferencia entre <code>when(...)</code> y <code>verify(...)</code>?</p>',
    opciones: [
      { t: '<code>when</code> programa respuestas (Arrange); <code>verify</code> comprueba llamadas (Assert).', ok: true,
        fb: 'when configura el escenario; verify revisa una interacción en vez de un valor devuelto.' },
      { t: '<code>when</code> comprueba llamadas (Assert); <code>verify</code> programa respuestas (Arrange).',
        fb: 'Es al revés: when prepara el escenario (Arrange) y verify revisa la interacción (Assert).' },
      { t: 'Son equivalentes: los dos programan qué responde el mock.',
        fb: 'Tienen roles distintos en el test: uno prepara y el otro verifica.' },
      { t: '<code>verify</code> solo sirve para métodos que devuelven un valor.',
        fb: 'Al contrario: verify es clave cuando el método no devuelve nada pero debería producir un efecto (por ejemplo, guardar).' }
    ]
  },

  // ----------------------- Diseño y principios (5) -----------------------
  {
    id: 'B19', tema: 'Diseño y principios',
    enunciado: '<p>¿Cuál es el valor <strong>importante pero no urgente</strong> del software?</p>',
    opciones: [
      { t: 'La estructura (el diseño).', ok: true,
        fb: 'Nadie lo pide, pero sin él el sistema muere con el próximo cambio. Defenderlo es trabajo del equipo de desarrollo.' },
      { t: 'El comportamiento: las features que pide el negocio.',
        fb: 'El comportamiento es urgente e importante: es lo que los stakeholders saben pedir.' },
      { t: 'Los bugs cosméticos.',
        fb: 'Son urgentes pero no importantes.' },
      { t: 'Los “nice to have”.',
        fb: 'No son ni urgentes ni importantes.' }
    ]
  },
  {
    id: 'B20', tema: 'Diseño y principios',
    enunciado: '<p>En líneas generales, ¿hacia dónde queremos llevar la <strong>cohesión</strong> y el <strong>acoplamiento</strong> de un diseño?</p>',
    opciones: [
      { t: 'Alta cohesión y bajo acoplamiento.', ok: true,
        fb: 'Cada componente resuelve un solo problema (cohesión) y sabe lo mínimo de los demás (acoplamiento). Suelen ir de la mano.' },
      { t: 'Baja cohesión y alto acoplamiento.',
        fb: 'Es la peor combinación: componentes que hacen de todo y dependen mucho entre sí.' },
      { t: 'Alta cohesión y alto acoplamiento.',
        fb: 'Mucho acoplamiento hace que los cambios se propaguen y los errores también.' },
      { t: 'No importa, mientras el sistema funcione.',
        fb: 'Funcionar es el valor comportamiento; cohesión y acoplamiento hablan del valor estructura (costo de cambio).' }
    ]
  },
  {
    id: 'B21', tema: 'Diseño y principios',
    enunciado: '<p>Se quiere que agregar un nuevo medio de pago tenga <strong>poco impacto</strong> en lo que ya existe, y que modificar uno existente cueste poco esfuerzo. ¿Qué cualidad de diseño se busca?</p>',
    opciones: [
      { t: 'Flexibilidad (extensibilidad y mantenibilidad).', ok: true,
        fb: 'Flexibilidad es reflejar cambios del dominio de forma simple: extensibilidad para agregar sin tocar lo que está, mantenibilidad para modificar con poco esfuerzo.' },
      { t: 'Consistencia (mismas decisiones ante problemas parecidos).',
        fb: 'La consistencia ayuda a que el diseño sea predecible, pero no habla del costo de agregar o cambiar funcionalidad.' },
      { t: 'Robustez (errores claros y deterministas).',
        fb: 'La robustez trata sobre cómo se comporta ante fallas, no sobre el costo de los cambios.' },
      { t: 'Redundancia (el mismo conocimiento en varios lugares).',
        fb: 'La redundancia es algo a evitar: hace que cada cambio haya que repetirlo en varios lugares.' }
    ]
  },
  {
    id: 'B35', tema: 'Diseño y principios',
    enunciado: '<p>Según la definición vista en clase, ¿qué es un <strong>buen diseño</strong>?</p>',
    opciones: [
      { t: 'Uno que oculta la complejidad heredada del dominio y minimiza la accidental.', ok: true,
        fb: 'Es la definición de Venkat Subramaniam que tomamos como guía: la complejidad del negocio se encapsula y no agregamos complejidad propia.' },
      { t: 'Uno sin ninguna complejidad, aunque deje casos del problema sin resolver.',
        fb: 'Eso es simplismo: lo simple siempre tiene que estar completo.' },
      { t: 'Uno que se hace completo en el primer intento y no se vuelve a tocar.',
        fb: 'Es imposible lograr un buen diseño en el primer intento; se mejora en iteraciones, a medida que entendemos el dominio.' },
      { t: 'Uno que aplica la mayor cantidad posible de patrones y principios.',
        fb: 'Aplicar principios sin criterio genera complejidad innecesaria. Se usan cuando el contexto lo pide.' }
    ]
  },
  {
    id: 'B36', tema: 'Diseño y principios',
    enunciado: '<p>Cuando ante problemas parecidos se toman decisiones de diseño parecidas, el diseño se vuelve predecible para quien lo lee. ¿Qué cualidad es esa?</p>',
    opciones: [
      { t: 'Consistencia.', ok: true,
        fb: 'Aplicar los mismos criterios en todo el diseño lo hace predecible y más fácil de entender (simetría).' },
      { t: 'Cohesión.',
        fb: 'La cohesión habla de que cada componente resuelva un solo problema, no de repetir criterios entre componentes.' },
      { t: 'Robustez.',
        fb: 'La robustez trata sobre el comportamiento ante fallas y la claridad de los errores.' },
      { t: 'Facilidad de prueba.',
        fb: 'Es otra cualidad: qué tan fácil es probar que la solución funciona.' }
    ]
  },

  // --------------------------- Web y HTTP (3) ---------------------------
  {
    id: 'B22', tema: 'Web y HTTP',
    enunciado: '<p>En la arquitectura cliente-servidor, ¿quién <strong>inicia</strong> la comunicación?</p>',
    opciones: [
      { t: 'El cliente.', ok: true,
        fb: 'El servidor espera pedidos, los procesa y responde. No “llama” espontáneamente al cliente (salvo con mecanismos especiales, como WebSockets).' },
      { t: 'El servidor, cada vez que tiene datos nuevos.',
        fb: 'Sin mecanismos especiales, el servidor no inicia la comunicación con el cliente.' },
      { t: 'La base de datos.',
        fb: 'La base de datos es un servidor más: también espera pedidos.' },
      { t: 'Cualquiera de los dos, indistintamente.',
        fb: 'Los roles están bien definidos: el cliente inicia y el servidor responde.' }
    ]
  },
  {
    id: 'B23', tema: 'Web y HTTP',
    enunciado: '<p>¿Qué familia de códigos de estado HTTP indica que el error está en el <strong>pedido del cliente</strong>?</p>',
    opciones: [
      { t: '4xx (por ejemplo, 404).', ok: true,
        fb: 'Regla mnemotécnica: 2 = salió bien, 4 = el error es del pedido, 5 = el error es del servidor.' },
      { t: '2xx (por ejemplo, 201).',
        fb: 'Los 2xx indican éxito (200 OK, 201 Created).' },
      { t: '3xx (por ejemplo, 301).',
        fb: 'Los 3xx son redirecciones.' },
      { t: '5xx (por ejemplo, 500).',
        fb: 'Los 5xx indican un error del servidor, no del pedido.' }
    ]
  },
  {
    id: 'B24', tema: 'Web y HTTP',
    enunciado: '<p>En un mensaje HTTP, ¿qué indica el header <code>Content-Type</code>?</p>',
    opciones: [
      { t: 'El formato del body (por ejemplo, <code>application/json</code>).', ok: true,
        fb: 'Los headers son metadatos del mensaje. Content-Type dice qué formato tiene el body para que el otro lado sepa interpretarlo.' },
      { t: 'El código de estado con el que terminó el pedido.',
        fb: 'El código de estado va en la línea inicial de la respuesta, no en un header.' },
      { t: 'La dirección del servidor al que se envía el pedido.',
        fb: 'El servidor se indica con la URL (y el header Host), no con Content-Type.' },
      { t: 'Las credenciales del usuario que hace el pedido.',
        fb: 'Las credenciales viajan en el header Authorization.' }
    ]
  },

  // ------------------------------ Spring (1) ------------------------------
  {
    id: 'B25', tema: 'Spring',
    enunciado: '<p>¿Qué correspondencia entre anotaciones de Spring y capas es correcta?</p>',
    opciones: [
      { t: '<code>@Service</code> → Service y <code>@Entity</code> → Dominio.', ok: true,
        fb: 'Spring no inventa una arquitectura nueva: les pone nombre y anotaciones a las capas que ya conocemos.' },
      { t: '<code>@RestController</code> → Dominio y <code>@Entity</code> → Presentación.',
        fb: 'El Controller recibe HTTP (Presentación) y la Entity es el modelo de Dominio.' },
      { t: '<code>@Service</code> → Fuente de datos y Repository → Service.',
        fb: 'Están invertidos: el Repository es la Fuente de datos y el Service orquesta.' },
      { t: 'Todas las clases de Spring pertenecen a la capa de Presentación.', fija: true,
        fb: 'Spring tiene componentes para cada capa.' }
    ]
  },
  // ---------------------- Presentación y MVC (2) ----------------------
  {
    id: 'B27', tema: 'Presentación y MVC',
    enunciado: '<p>En MVC, ¿qué representa cada letra?</p>',
    opciones: [
      { t: 'Modelo = qué sé; Vista = qué muestro; Controlador = qué hago.', ok: true,
        fb: 'El Controlador recibe la acción, pide o cambia cosas al Modelo y elige la Vista, que muestra los datos del Modelo.' },
      { t: 'Modelo = la base de datos; Vista = el SQL; Controlador = el servidor web.',
        fb: 'El Modelo no es la base de datos en sí, y la Vista no es SQL: es lo que se muestra.' },
      { t: 'Modelo = la pantalla; Vista = las reglas; Controlador = los datos guardados.',
        fb: 'Están mezclados: la pantalla es la Vista y las reglas son del Modelo.' },
      { t: 'Ninguna de las anteriores.', fija: true,
        fb: 'La primera opción es la definición vista en clase.' }
    ]
  },
  {
    id: 'B28', tema: 'Presentación y MVC',
    enunciado: '<p>¿Cómo se relaciona MVC con las capas?</p>',
    opciones: [
      { t: 'Vista y Controlador son Presentación; el Modelo es la puerta al Dominio.', ok: true,
        fb: '“Cambia la cara, el Modelo se queda”: podemos cambiar la Vista sin tocar el Dominio.' },
      { t: 'Las tres letras viven en el Dominio, porque todas manejan datos del negocio.',
        fb: 'La Vista y el Controlador son de la Presentación.' },
      { t: 'La Vista vive en la Fuente de datos, porque muestra lo que está guardado.',
        fb: 'La Vista es lo que ve el usuario; es Presentación.' },
      { t: 'MVC reemplaza a las capas: si uso MVC, no hay Service ni Dominio.',
        fb: 'MVC organiza la Presentación; detrás del Modelo siguen estando el Service, el Dominio y la Fuente de datos.' }
    ]
  },

  // ------------------------------ Datos (3) ------------------------------
  {
    id: 'B29', tema: 'Datos',
    enunciado: '<p>¿Qué garantiza una <strong>transacción</strong> en una base de datos?</p>',
    opciones: [
      { t: 'Que las operaciones se confirmen o se deshagan todas juntas.', ok: true,
        fb: 'Es el todo-o-nada: por ejemplo, en una transferencia no puede quedar el débito sin el crédito.' },
      { t: 'Que las consultas sean más rápidas porque se agrupan en un solo envío.',
        fb: 'Las transacciones buscan consistencia, no velocidad.' },
      { t: 'Que los datos queden guardados en dos bases distintas a la vez.',
        fb: 'Eso sería replicación, otro tema.' },
      { t: 'Que nunca se produzcan errores al escribir en la base.',
        fb: 'Los errores pueden ocurrir; la transacción garantiza que, si ocurren, no queden cambios a medias.' }
    ]
  },
  {
    id: 'B37', tema: 'Datos',
    enunciado: '<p>¿Qué busca principalmente la <strong>normalización</strong> de un modelo de datos?</p>',
    opciones: [
      { t: 'Aumentar la consistencia: que cada dato esté guardado en un solo lugar.', ok: true,
        fb: 'Una única fuente de verdad reduce la posibilidad de tener datos contradictorios.' },
      { t: 'Que las consultas de lectura sean siempre más rápidas que antes.',
        fb: 'Al contrario: leer de un esquema normalizado suele ser más lento. Por eso a veces se desnormaliza.' },
      { t: 'Guardar cada dato en varias tablas para no perderlo si una falla.',
        fb: 'Eso sería duplicación, justamente lo que la normalización evita.' },
      { t: 'Reemplazar todas las claves primarias por claves foráneas.',
        fb: 'Las dos claves cumplen roles distintos y se siguen usando en un modelo normalizado.' }
    ]
  },
  {
    id: 'B38', tema: 'Datos',
    enunciado: '<p>¿Para qué sirve una <strong>clave foránea</strong> (FK) en una tabla?</p>',
    opciones: [
      { t: 'Para relacionar la fila con otra tabla y mantener la integridad referencial.', ok: true,
        fb: 'La FK apunta a la clave primaria de otra tabla; la base garantiza que no queden referencias a filas que no existen.' },
      { t: 'Para identificar de forma única cada una de las filas de su propia tabla.',
        fb: 'Eso es la clave primaria (PK).' },
      { t: 'Para que las consultas de esa tabla se ejecuten más rápido.',
        fb: 'No es su objetivo: la FK expresa una relación entre tablas.' },
      { t: 'Para guardar datos que vienen de un sistema externo.',
        fb: 'No tiene que ver con el origen de los datos sino con las relaciones entre tablas.' }
    ]
  },

  // ----------------------- Tipos de aplicación (3) -----------------------
  {
    id: 'B30', tema: 'Tipos de aplicación',
    enunciado: '<p>Liquidar los sueldos de 10.000 empleados todas las noches, sin que nadie esté esperando frente a una pantalla, es típicamente una aplicación de tipo…</p>',
    opciones: [
      { t: 'Batch.', ok: true,
        fb: 'Ficha Batch: la dispara un horario (cron), procesa millones de registros en minutos u horas, nadie espera, y si falla se reanuda donde quedó.' },
      { t: 'Web.',
        fb: 'Ficha Web: una persona hace clic y espera menos de 1 segundo.' },
      { t: 'API.',
        fb: 'Ficha API: otro sistema hace un pedido HTTP y espera la respuesta en milisegundos.' },
      { t: 'CLI.',
        fb: 'Ficha CLI: un desarrollador u operador ejecuta un comando frente a la terminal.' }
    ]
  },
  {
    id: 'B39', tema: 'Tipos de aplicación',
    enunciado: '<p>¿Qué es un <strong>atributo de calidad</strong>?</p>',
    opciones: [
      { t: 'Cómo hace el sistema lo que hace: por ejemplo, “en 2 s, 24/7, sin duplicar”.', ok: true,
        fb: 'Rendimiento, disponibilidad, escalabilidad, tolerancia a fallos: no hablan de qué hace el sistema sino de cómo.' },
      { t: 'Qué hace el sistema: por ejemplo, “transferir dinero entre cuentas”.',
        fb: 'Eso es un requerimiento funcional.' },
      { t: 'La cantidad de clases y capas que tiene el diseño.',
        fb: 'Es una característica del código, no un atributo de calidad del sistema.' },
      { t: 'El lenguaje de programación con el que está hecho el sistema.',
        fb: 'Es una decisión técnica, no una exigencia sobre cómo debe comportarse el sistema.' }
    ]
  },
  {
    id: 'B40', tema: 'Tipos de aplicación',
    enunciado: '<p>Enviar el mail de “tu compra fue confirmada” un minuto después de la compra, a partir de un mensaje en una cola, sin que nadie espere, es típicamente un…</p>',
    opciones: [
      { t: 'Worker.', ok: true,
        fb: 'Ficha Worker: lo dispara un mensaje, tarda segundos o minutos, nadie espera, y si falla reintenta solo.' },
      { t: 'Batch.',
        fb: 'Batch lo dispara un horario y procesa grandes volúmenes juntos; acá cada mensaje se procesa al llegar.' },
      { t: 'API.',
        fb: 'En una API otro sistema hace un pedido HTTP y espera la respuesta en milisegundos.' },
      { t: 'Analítica.',
        fb: 'Analítica responde consultas de un analista sobre millones de filas.' }
    ]
  },
  // ------------------------- Modelado REST (4) -------------------------
  {
    id: 'B31', tema: 'Modelado REST',
    enunciado: '<p>Siguiendo el estilo REST, ¿qué pedido es el más adecuado para <strong>listar las tareas</strong>?</p>',
    opciones: [
      { t: '<code>GET /tareas</code>', ok: true,
        fb: 'La URL nombra el recurso (un sustantivo, en plural para la colección) y el método dice la intención: GET obtiene sin modificar.' },
      { t: '<code>GET /obtenerTodasLasTareas</code>',
        fb: 'La acción ya la dice el método GET; poner verbos en la URL la duplica y rompe la idea de recurso.' },
      { t: '<code>POST /listarTareas</code>',
        fb: 'POST es para crear o disparar acciones que modifican; listar es una lectura.' },
      { t: '<code>DELETE /tareas</code>',
        fb: 'DELETE eliminaría la colección: es lo contrario de lo que se quiere.' }
    ]
  },
  {
    id: 'B32', tema: 'Modelado REST', caso: 'billetera',
    enunciado: '<p>En <code>GET /api/cuentas/juan.perez/movimientos?limite=10</code>, ¿qué rol cumplen <code>juan.perez</code> y <code>limite</code>?</p>',
    opciones: [
      { t: '<code>juan.perez</code> identifica el recurso; <code>limite</code> acota la consulta.', ok: true,
        fb: 'El identificador va en la ruta (es parte de “qué recurso”); los parámetros de consulta (?limite=10) filtran o acotan el resultado.' },
      { t: '<code>juan.perez</code> es un header y <code>limite</code> es el body del pedido.',
        fb: 'Los dos son parte de la URL: uno en la ruta y otro en la query. Un GET normalmente no lleva body.' },
      { t: '<code>limite</code> identifica la cuenta y <code>juan.perez</code> es un filtro opcional.',
        fb: 'Es al revés: sin el alias no sabemos de qué cuenta hablamos; el límite es opcional (tiene un valor por defecto).' },
      { t: 'Los dos son credenciales para autenticar al usuario.',
        fb: 'Las credenciales viajan en el header Authorization, no en la URL.' }
    ]
  },
  {
    id: 'B33', tema: 'Modelado REST', caso: 'tareas',
    enunciado: '<p>En <code>POST /tareas</code>, ¿dónde viajan los datos de la tarea nueva?</p>',
    opciones: [
      { t: 'En el body, como JSON, con el header <code>Content-Type: application/json</code>.', ok: true,
        fb: 'Los datos van en el body; los headers describen el mensaje (qué formato tiene ese body).' },
      { t: 'En la URL, como parámetros de consulta: <code>/tareas?titulo=...</code>.',
        fb: 'La query sirve para filtrar o acotar lecturas; los datos de un recurso nuevo van en el body.' },
      { t: 'En el header <code>Authorization</code>, que es el que lleva los datos.',
        fb: 'Authorization lleva credenciales, no los datos del recurso.' },
      { t: 'En el código de estado del pedido.',
        fb: 'Los códigos de estado los usa la respuesta para contar el resultado; un pedido no lleva código de estado.' }
    ]
  },
  {
    id: 'B34', tema: 'Modelado REST',
    enunciado: '<p>¿Qué capa decide la URL, el método HTTP y el código de estado de cada recurso REST?</p>',
    opciones: [
      { t: 'La Presentación (los Controllers).', ok: true,
        fb: 'El modelo REST es la cara HTTP de la aplicación. El Service y el Dominio no deberían saber que existe.' },
      { t: 'El Service, porque es el que conoce el caso de uso completo.',
        fb: 'El Service expone casos de uso en términos del negocio; si conociera HTTP no se podría reutilizar desde otra Presentación.' },
      { t: 'El Dominio, porque los recursos son los objetos del negocio.',
        fb: 'Muchas veces los recursos se parecen a los objetos del Dominio, pero URLs y códigos son decisiones de Presentación.' },
      { t: 'La Fuente de datos, porque cada recurso es una tabla.',
        fb: 'Un recurso REST no tiene por qué coincidir con una tabla; y la Fuente de datos no conoce HTTP.' }
    ]
  }
];
