---
layout: two-cols
layoutClass: gap-10 items-center
transition: fade-out
class: zoom-07
---

# Para llevarse

<div class="kw-row flex-col items-start! mt-6">
<span class="kw kw-v">1. Separar la Vista</span>
<span class="kw kw-m">2. El Modelo no cambia</span>
<span class="kw kw-c">3. Elegir según el usuario</span>
</div>

::right::

```mermaid
graph LR
  M(("🧠 Modelo"))
  M --- A["⌨️ CLI"]
  M --- B["🎨 Escritorio"]
  M --- C["🌐 Web"]
  M --- D["🔌 API"]
  M --- E["📱 App"]
  M --- F["💬 Chat e IA"]

  classDef default fill:#a855f733,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  class M m;
```

<!--
- Tres ideas:
  1. La presentación es una capa separada. MVC nos ayuda a ordenarla.
  2. Si el dominio está bien separado, puedo agregar una cara nueva (una API, una app) sin tocarlo.
  3. No hay interfaz mejor en abstracto: depende de quién la usa y para qué.
- Pregunta de cierre para la clase: un sistema de control de stock para un depósito donde los operarios escanean cajas y a veces no hay WiFi. ¿Qué interfaz eligen? (Respuesta esperable: app móvil nativa que funcione offline + API en el servidor; y quizás una web con render server para la oficina.)
-->
