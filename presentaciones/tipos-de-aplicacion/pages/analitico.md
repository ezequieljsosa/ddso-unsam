---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
class: zoom-08
---

# 📊 Analítica

<span class="kicker">El tablero de la gerencia</span>

```mermaid
graph TD
  T["🧾 Transaccional"] -->|"copia de anoche"| A["📊 Analítico"]
  A --> G(["📈 Gerencia"])

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef app fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class A app;
```

::right::

<div class="gamma-card p-5">
<div class="text-lg font-bold text-white mb-4">Ventas 2025 por provincia</div>
<div class="barra"><span>Buenos Aires</span><div style="width: 75%"></div></div>
<div class="barra"><span>Córdoba</span><div style="width: 42%"></div></div>
<div class="barra"><span>Santa Fe</span><div style="width: 36%"></div></div>
<div class="barra"><span>Mendoza</span><div style="width: 20%"></div></div>
<div class="barra"><span>Tucumán</span><div style="width: 14%"></div></div>
</div>

<!--
- Caso de uso: la gerencia de una cadena de supermercados abre un tablero con las ventas del año por provincia, por categoría, comparadas con el año anterior.
- ¿Por qué un sistema aparte? Si esa consulta enorme corriera sobre el mismo sistema que registra las ventas, podría ponerlo lento justo cuando los clientes están pagando en la caja. Las dos cosas compiten por los mismos recursos.
- Entonces se separan: el transaccional registra; periódicamente (por ejemplo, todas las noches) se copian los datos al analítico, que está organizado para responder preguntas grandes.
- ¿Quién hace esa copia nocturna? ¡Un proceso batch! Los tipos se combinan.
- Consecuencia: el tablero muestra los datos "de ayer". Para la mayoría de las decisiones de negocio, alcanza.
-->
