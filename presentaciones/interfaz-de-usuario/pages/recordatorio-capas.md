---
layout: two-cols
layoutClass: gap-10 items-center
transition: fade-out
---

# Las capas de Fowler

<span class="kicker">Recordatorio</span>

<div class="kw-row flex-col items-start! mt-4">
<span class="kw kw-v">👉 Hoy: Presentación</span>
<span class="kw">Dominio</span>
<span class="kw">Fuente de datos</span>
</div>

::right::

```mermaid
graph TD
  P["🖥️ Presentación"] --> D["🧠 Dominio"]
  D --> F["🗄️ Fuente de datos"]

  classDef default fill:#ffffff14,stroke:#64748b,stroke-width:2px,color:#cbd5e1;
  classDef hoy fill:#a855f74d,stroke:#c084fc,stroke-width:3px,color:#ffffff;
  class P hoy;
```

<!--
- Repaso rápido de las tres capas que ya vieron:
  - Presentación: cómo el usuario interactúa con el sistema.
  - Dominio: las reglas del negocio (qué es una venta, cuándo se aplica un descuento).
  - Fuente de datos: dónde y cómo se guarda (base de datos, archivos, otros servicios).
- Las dependencias van hacia abajo: la presentación conoce al dominio, el dominio NO conoce a la presentación.
- Hoy nos concentramos en la capa de arriba.
-->
