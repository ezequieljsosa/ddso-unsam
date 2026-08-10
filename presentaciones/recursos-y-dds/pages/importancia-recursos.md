---
layout: two-cols
layoutClass: gap-8 items-center
---

# ¿Por qué tener en cuenta los recursos al diseñar?
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-4 block">El costo no es gratis, aunque la abstracción lo esconda</span>

<div class="gamma-card p-2.5 relative mb-2 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-amber-400"><carbon:code class="text-base" /></div>
    C → Java / C#
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">
    El mismo problema, resuelto en lenguajes con distinto nivel de abstracción sobre el hardware, tiene costos de recursos muy diferentes.
  </p>
</div>

<div class="gamma-card p-2.5 relative mb-2 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:network-3 class="text-base" /></div>
    Enviar un mensaje por la red
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">
    No es lo mismo invocar una función local que atravesar la red: hay latencia, serialización y falla parcial.
  </p>
</div>

<div class="gamma-card p-2.5 relative text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-emerald-400"><carbon:sql class="text-base" /></div>
    SQL (sin optimizador de consultas)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug font-mono">
    "where a=b and b=c and a=c" &lt;&lt; "where a=b and b=c"
  </p>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-amber-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-amber-400 mb-3 tracking-wider uppercase">La ley de las abstracciones fugadas</div>
  <p class="text-sm text-slate-200 leading-snug italic">
    "Todas las abstracciones de un problema suficientemente complejo son incompletas"
  </p>
  <p class="text-[11px] text-slate-500 mt-3">(leaky abstractions)</p>
</div>
