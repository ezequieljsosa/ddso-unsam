---
layout: two-cols
layoutClass: gap-8 items-center
---

# Una Historia de Dos Valores
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-4 block"> del libro "Clean Architecture"</span>

<div class="gamma-card p-3 relative mb-3 text-xs">
  <div class="glow-bg bg-blue-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:code class="text-base" /></div>
    Comportamiento (la función)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">
    Los programadores hacen que la máquina se comporte como piden los stakeholders. Los requerimientos funcionales son el valor <strong>urgente</strong>: el que genera ingresos hoy.
  </p>
</div>

<div class="gamma-card p-3 relative text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-purple-400"><carbon:settings class="text-base" /></div>
    Estructura (el diseño)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug mb-2">
    "Software" = <em>soft</em> + <em>ware</em>: debe ser fácil de cambiar. El diseño es el valor <strong>importante</strong>: mantiene al sistema vivo frente a los requisitos futuros.
  </p>
  <p class="text-[10px] text-slate-500 italic border-t border-white/10 pt-2">
    Un sistema que funciona pero es rígido morirá con el próximo cambio. Uno flexible, aunque imperfecto, siempre puede arreglarse.
  </p>
</div>

::right::

<div class="gamma-card p-3 max-w-[360px] mx-auto relative">
  <div class="glow-bg bg-purple-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-purple-400 mb-2 tracking-wider uppercase text-center">¿Qué es urgente? ¿Qué es importante?</div>
  <div class="grid grid-cols-2 gap-1.5 text-[10px]">
    <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2">
      <div class="font-bold text-blue-400 mb-0.5">Urgente + Importante</div>
      <div class="text-slate-400">Features que el negocio pide ya. Es el <strong>Comportamiento</strong>.</div>
    </div>
    <div class="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2">
      <div class="font-bold text-purple-400 mb-0.5">No urgente + Importante</div>
      <div class="text-slate-400">El <strong>Diseño</strong>. Nadie lo pide, pero sin él el sistema muere.</div>
    </div>
    <div class="bg-white/5 border border-white/10 rounded-lg p-2">
      <div class="font-bold text-slate-400 mb-0.5">Urgente + No importante</div>
      <div class="text-slate-500">Interrupciones, bugs cosméticos.</div>
    </div>
    <div class="bg-white/5 border border-white/10 rounded-lg p-2">
      <div class="font-bold text-slate-400 mb-0.5">No urgente + No importante</div>
      <div class="text-slate-500">"Nice to have" sin impacto real.</div>
    </div>
  </div>
  <p class="text-[10px] text-slate-500 mt-2.5 italic text-center">
    Los stakeholders saben pedir comportamiento urgente. <strong class="text-slate-300">Diseño de Software</strong> es la disciplina que defiende lo importante.
  </p>
</div>
