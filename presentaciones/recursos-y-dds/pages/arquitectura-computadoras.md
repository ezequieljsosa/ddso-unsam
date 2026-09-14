---
layout: two-cols
layoutClass: gap-8 items-center
---

# Arquitectura de computadoras
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs mb-4 block">El hardware que sostiene todo lo demás</span>

<div class="space-y-3.5 mt-2 text-xs max-w-xl">
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-purple-500/15 text-purple-400"><carbon:chip /></span>
    <div><strong>Procesador (CPU):</strong> ejecuta instrucciones. Es el recurso que se agota cuando hay demasiado cálculo al mismo tiempo.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400"><carbon:block-storage /></span>
    <div><strong>Memoria (RAM):</strong> guarda datos y programas mientras se ejecutan. Es volátil y limitada en tamaño.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-emerald-500/15 text-emerald-400"><carbon:data-base /></span>
    <div><strong>E/S:</strong> entrada/salida hacia disco (almacenamiento) o hacia otros nodos (comunicación).</div>
  </div>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto relative">
  <div class="glow-bg bg-purple-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-purple-400 mb-3 tracking-wider uppercase">Ejemplo</div>
  <p class="text-sm text-slate-200 leading-snug">
    Un servicio que procesa imágenes usa <strong>CPU</strong> para transformarlas, <strong>RAM</strong> para tenerlas cargadas mientras trabaja y <strong>E/S de disco</strong> para leerlas y guardarlas.
  </p>
  <p class="text-[11px] text-slate-500 mt-3">Si el servidor no tiene suficiente RAM, ese mismo código empieza a fallar o a volverse lento: el recurso físico condiciona el resultado.</p>
</div>
