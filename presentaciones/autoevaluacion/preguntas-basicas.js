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
    id: 'B05', tema: 'Capas', caso: 'giftcards',
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
    enunciado: '<p>¿Cuál es la diferencia de alcance entre <strong>Arquitectura</strong> y <strong>Diseño</strong> de software, según la materia?</p>',
    opciones: [
      { t: 'La arquitectura organiza varios sistemas; el diseño, una sola pieza por dentro.', ok: true,
        fb: 'Son dos niveles de zoom. La materia se enfoca en el diseño de una pieza, con algunas interacciones puntuales hacia afuera (la base de datos u otro sistema).' },
      { t: 'Son sinónimos: las dos describen cómo se organizan las clases.',
        fb: 'En clase los distinguimos como dos niveles de zoom distintos sobre el mismo problema.' },
      { t: 'La arquitectura trata el código y el diseño trata las pantallas y los colores.',
        fb: 'Ninguna de las dos se limita a eso: el diseño de software trata la organización interna del código, no lo visual.' },
      { t: 'El diseño se hace una vez al principio; la arquitectura cambia todo el tiempo.',
        fb: 'El diseño también evoluciona: nunca está cerrado, porque los requerimientos cambian.' }
    ]
  },

  // ---------------------------- Testing (5) ----------------------------
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
  {
    id: 'B18', tema: 'Testing',
    enunciado: '<p>¿Para qué sirve <code>@Profile("test")</code> sobre una implementación de un repositorio?</p>',
    opciones: [
      { t: 'Para que Spring registre esa implementación solo con el profile test activo.', ok: true,
        fb: 'Con el profile se elige qué bean se registra; el Service sigue pidiendo la interfaz y no nota la diferencia.' },
      { t: 'Para marcar que la clase es un test y que JUnit la ejecute.',
        fb: 'Los tests se marcan con @Test. @Profile elige qué beans se crean según el entorno.' },
      { t: 'Para que el repositorio sea más rápido cuando corre en producción.',
        fb: 'Con @Profile("test") esa implementación ni siquiera existe en producción.' },
      { t: 'Para que Spring ignore la clase y no la registre nunca.',
        fb: 'No la ignora siempre: la registra únicamente cuando el profile test está activo.' }
    ]
  },

  // ----------------------- Diseño y principios (3) -----------------------
  {
    id: 'B19', tema: 'Diseño y principios',
    enunciado: '<p>Según “una historia de dos valores”, ¿cuál es el valor <strong>importante pero no urgente</strong> del software?</p>',
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
    enunciado: '<p>Un cambio chico obliga a modificar muchas clases, una tras otra, en cascada. ¿Qué <strong>design smell</strong> describe esta situación?</p>',
    opciones: [
      { t: 'Rigidez.', ok: true,
        fb: 'Rigidez: el diseño es difícil de modificar porque cada cambio arrastra a otros.' },
      { t: 'Opacidad.',
        fb: 'Opacidad es cuando cuesta entender qué hace el diseño o cómo lo resuelve.' },
      { t: 'Inmovilidad.',
        fb: 'Inmovilidad es cuando cuesta reutilizar partes del diseño en otro contexto.' },
      { t: 'Complejidad innecesaria.',
        fb: 'Es sobrediseño: agregar estructura que el problema no necesita.' }
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
    enunciado: '<p>¿Cuál de estos métodos HTTP <strong>no</strong> es típicamente idempotente?</p>',
    opciones: [
      { t: 'POST.', ok: true,
        fb: 'Repetir un POST suele crear otro recurso o disparar otra vez la acción: el efecto no es el mismo que hacerlo una sola vez.' },
      { t: 'GET.',
        fb: 'GET es idempotente: obtiene un recurso sin modificarlo.' },
      { t: 'PUT.',
        fb: 'PUT es idempotente: reemplazar el recurso varias veces con lo mismo deja el mismo resultado.' },
      { t: 'DELETE.',
        fb: 'DELETE es idempotente: una vez eliminado, repetirlo no cambia nada más.' }
    ]
  },

  // ------------------------------ Spring (2) ------------------------------
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
  {
    id: 'B26', tema: 'Spring',
    enunciado: '<p>¿Por qué se recomienda la <strong>inyección por constructor</strong> (el Service recibe su Repository en el constructor, en vez de crearlo con <code>new</code>)?</p>',
    opciones: [
      { t: 'Deja explícitas las dependencias y permite pasarle un mock en un test.', ok: true,
        fb: 'Es lo que hacemos en los tests del Service: le pasamos repositorios mock por constructor.' },
      { t: 'Porque así el Service puede crear su propio Repository cuando lo necesita.',
        fb: 'Es justamente lo contrario: con inyección, el Service no crea sus dependencias, se las dan.' },
      { t: 'Porque hace que la aplicación consuma menos memoria al arrancar.',
        fb: 'No es una cuestión de memoria, sino de diseño y testeabilidad.' },
      { t: 'Porque Java no permite usar <code>new</code> dentro de una clase con <code>@Service</code>.',
        fb: 'Java lo permite; el problema es el acoplamiento que genera.' }
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

  // ------------------------------ Datos (1) ------------------------------
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

  // ----------------------- Tipos de aplicación (1) -----------------------
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
  }
];
