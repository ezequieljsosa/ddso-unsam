---
layout: two-cols
layoutClass: gap-8 items-center
---

# ¿Qué hago cuando llego al límite de recursos en un nodo?
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-4 block">De un nodo a una red de nodos</span>

```mermaid
graph LR
  N["Nodo"] --> Dist["Distribución"] --> Com["Comunicación / Red"]

  classDef default fill:transparent,stroke:#ffffff14,stroke-width:1px,color:#94a3b8;
  classDef foco fill:#10b98114,stroke:#10b98166,stroke-width:1.5px,color:#34d399;

  class Dist,Com foco;
```

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="font-bold text-white mb-1">Nota al pie</div>
  <p class="text-[11px] text-slate-400 leading-snug">No es la única razón para distribuir o tener una red.</p>
</div>

::right::

<div class="gamma-card p-4 max-w-[320px] mx-auto relative">
  <div class="glow-bg bg-emerald-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-emerald-400 mb-3 tracking-wider uppercase text-center">Red de nodos</div>

```mermaid
graph TD
  N1["N1"] --- N2["N2"]
  N1 --- N3["N3"]

  classDef default fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#60a5fa;
```

</div>
