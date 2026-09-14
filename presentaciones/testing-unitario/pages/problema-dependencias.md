---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Y si mi unidad depende de otra?
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-2 block">El problema que Calculadora no tenía</span>

`Calculadora` no dependía de nada más: fácil de testear. Pero un `PedidoService` real suele depender de un `PedidoRepository` que habla con una base de datos.

Testearlo "de verdad" significa:

- Levantar una base de datos para cada corrida de tests.
- Tests **lentos** (segundos en vez de milisegundos).
- Tests **frágiles**: fallan por la red, por datos sucios, no por bugs reales.
- Ya no estás probando <em>una</em> unidad, sino todo el sistema.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-amber-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-amber-400"><carbon:idea class="text-base" /></div>
    La idea clave
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Para un test <strong>unitario</strong>, no queremos la base de datos real: queremos algo que se comporte como ella, pero que nosotros controlemos.</p>
</div>

::right::

<div class="gamma-card p-4 text-center relative">
  <div class="glow-bg bg-amber-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-amber-400 mb-2 tracking-wider uppercase">Lo que queremos evitar</div>

```mermaid
graph LR
  T["Test"] --> S["PedidoService"]
  S --> R["PedidoRepository"]
  R --> DB[("Base de datos<br/>real")]

  classDef default fill:#f59e0b14,stroke:#f59e0b66,stroke-width:1.5px,color:#fbbf24;
  classDef db fill:#f43f5e14,stroke:#f43f5e66,stroke-width:1.5px,color:#fb7185,stroke-dasharray: 4 3;
  class DB db;
```

</div>
