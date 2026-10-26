---
layout: two-cols
layoutClass: gap-10 items-center
transition: fade-out
---

# MVC y las capas

<span class="kicker">¿Dónde vive cada letra?</span>

<div class="kw-row flex-col items-start! mt-4">
<span class="kw kw-v">V + C → Presentación</span>
<span class="kw kw-m">M → puerta al Dominio</span>
</div>

<p class="mt-8 text-2xl font-bold text-white">Cambia la cara.<br>El Modelo se queda.</p>

::right::

```mermaid
graph TD
  subgraph PRES["Presentación"]
    V["🖼️ Vista"]
    C["🎮 Controlador"]
  end
  subgraph DOM["Dominio + Datos"]
    M["🧠 Modelo"]
  end
  C --> M
  V --> M

  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V v;
  class C c;
```

<!--
- MVC NO es una arquitectura de todo el sistema: es un patrón para organizar la capa de presentación.
- Vista y Controlador viven en Presentación. El "Modelo" es lo que la presentación ve del dominio (en Spring: los Services y las entidades).
- Frase para que se lleven: "cambia la cara, el Modelo se queda". En cada tipo de app vamos a ver que cambian V y C, pero M es el mismo.
-->
