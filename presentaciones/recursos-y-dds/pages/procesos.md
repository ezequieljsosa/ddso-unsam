---
layout: two-cols
layoutClass: gap-8 items-center
---

# Procesos
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-2 block">La unidad de asignación de recursos de un SO</span>

Un <strong>proceso</strong> es una instancia de un programa en ejecución. El sistema operativo le asigna sus propios recursos (memoria, CPU, archivos abiertos) y lo aísla del resto.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-purple-400"><carbon:id-management class="text-base" /></div>
    PCB (Process Control Block)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Estructura interna que el SO mantiene <strong>por cada proceso</strong> para poder administrarlo: identificador (PID), estado actual, registros de CPU, punteros a su memoria y sus archivos abiertos.</p>
</div>

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-emerald-400"><carbon:calculator class="text-base" /></div>
    Ejemplo
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Las 2 calculadoras de la slide anterior son <strong>2 procesos distintos</strong>: mismo código, pero cada uno con su propio PCB, su propia memoria y su propio estado.</p>
</div>

::right::

<div class="gamma-card p-4 max-w-[360px] mx-auto relative">
  <div class="glow-bg bg-blue-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-blue-400 mb-3 tracking-wider uppercase text-center">Estados de un proceso</div>

```mermaid
stateDiagram-v2
  [*] --> Nuevo
  Nuevo --> Listo
  Listo --> Ejecutando
  Ejecutando --> Listo
  Ejecutando --> Esperando
  Esperando --> Listo
  Ejecutando --> Terminado
  Terminado --> [*]

  classDef estado fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#93c5fd
  class Nuevo,Listo,Ejecutando,Esperando,Terminado estado
```

<p class="text-[11px] text-slate-400 leading-snug mt-3">El planificador del SO decide, entre los procesos <strong>Listos</strong>, cuál pasa a <strong>Ejecutando</strong> en cada momento.</p>
</div>
