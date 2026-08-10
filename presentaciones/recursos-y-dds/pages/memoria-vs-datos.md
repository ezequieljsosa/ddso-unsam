---
layout: two-cols
layoutClass: gap-8 items-center
---

# Consecuencias de que Mem &lt;&lt;&lt; Datos
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs mb-4 block">El mundo feliz de objetos no entra completo en memoria</span>

<div class="gamma-card p-3 relative mb-3 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-rose-400"><carbon:warning class="text-base" /></div>
    La memoria es un recurso a administrar
  </div>
  <ul class="text-[11px] text-slate-400 leading-snug space-y-1 list-disc pl-4 mt-1">
    <li>Hay que definir <strong>prioridades</strong>: qué objetos viven en memoria y cuáles no.</li>
    <li>Solo puedo operar sobre una <strong>parte limitada</strong> de los datos a la vez.</li>
  </ul>
</div>

::right::

<div class="gamma-card p-4 max-w-[360px] mx-auto relative">
  <div class="glow-bg bg-rose-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-rose-400 mb-2 tracking-wider uppercase text-center">Memoria Disponible vs. Memoria Infinita</div>

```mermaid
graph TB
  subgraph MD["Memoria Disponible"]
    direction LR
    A((" ")) --- B((" "))
    A --- C((" "))
  end
  subgraph MI["Memoria Infinita: todos los datos"]
    direction LR
    C --- D((" "))
    D --- E((" "))
  end

  classDef default fill:transparent,stroke:#ffffff14,stroke-width:1px,color:#94a3b8;
  classDef disp fill:#ef444414,stroke:#ef444466,stroke-width:1.5px,color:#fca5a5;

  class MD disp;
  style MI fill:transparent,stroke:#ffffff14,stroke-width:1px,color:#94a3b8
```

<p class="text-[10px] text-slate-500 mt-2 italic text-center">Solo la porción marcada cabe en memoria; el resto del grafo de objetos queda afuera.</p>
</div>
