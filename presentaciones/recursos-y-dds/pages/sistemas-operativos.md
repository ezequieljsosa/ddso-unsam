---
layout: two-cols
layoutClass: gap-8 items-center
---

# Sistemas operativos
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-4 block">El árbitro que reparte los recursos entre programas</span>

<div class="space-y-3.5 mt-2 text-xs max-w-xl">
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400"><carbon:settings-adjust /></span>
    <div><strong>Gestor de recursos + Planificación:</strong> decide qué programa usa el CPU, cuánta memoria le asigna a cada uno y en qué orden, para que todos puedan avanzar sin pisarse.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-emerald-500/15 text-emerald-400"><carbon:application /></span>
    <div><strong>Proceso:</strong> una instancia de un programa en ejecución, con su propia memoria aislada del resto.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-amber-500/15 text-amber-400"><carbon:flow /></span>
    <div><strong>Hilos:</strong> líneas de ejecución dentro de un mismo proceso, que comparten su memoria.</div>
  </div>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto relative">
  <div class="glow-bg bg-blue-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-blue-400 mb-3 tracking-wider uppercase">Ejemplo</div>
  <p class="text-sm text-slate-200 leading-snug">
    En tu notebook, el navegador, el editor de código y Spotify son <strong>procesos</strong> distintos corriendo "al mismo tiempo" sobre un CPU con pocos núcleos.
  </p>
  <p class="text-[11px] text-slate-500 mt-3">El sistema operativo les va dando turnos de CPU tan rápido que parece simultáneo: esa planificación es la que evita que uno bloquee a los demás.</p>
</div>
