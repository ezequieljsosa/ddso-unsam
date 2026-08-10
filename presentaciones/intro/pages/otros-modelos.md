---
transition: slide-left
---

# Un Mapa Más Grande
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs">Fowler es el punto de partida, no el único modelo</span>

Existen otros modelos para pensar la arquitectura de una aplicación. Los vamos a ver más adelante en la materia:

<div class="grid grid-cols-3 gap-3 mt-5 text-xs">

  <div class="gamma-card p-3 relative border-2 border-emerald-500/40">
    <div class="glow-bg bg-emerald-500/10 top-[-20px] left-[-20px]"></div>
    <div class="text-[9px] text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded-full font-semibold uppercase inline-block mb-2">Empezamos acá</div>
    <div class="font-bold text-white mb-1 text-sm flex items-center gap-1.5"><carbon:layers class="text-emerald-400" /> Layering (Fowler)</div>
    <p class="text-[11px] text-slate-400 leading-snug">El modelo más simple para separar responsabilidades. Ideal para empezar a razonar sobre capas.</p>
  </div>

  <div class="gamma-card p-3 relative opacity-70">
    <div class="text-[9px] text-slate-400 bg-white/10 px-1.5 py-0.5 rounded-full font-semibold uppercase inline-block mb-2">Próximas clases</div>
    <div class="font-bold text-white mb-1 text-sm flex items-center gap-1.5"><carbon:connect class="text-slate-400" /> Arquitectura Hexagonal</div>
    <p class="text-[11px] text-slate-400 leading-snug">Puertos y adaptadores: el Dominio no depende de nada externo, todo se conecta a través de interfaces.</p>
  </div>

  <div class="gamma-card p-3 relative opacity-70">
    <div class="text-[9px] text-slate-400 bg-white/10 px-1.5 py-0.5 rounded-full font-semibold uppercase inline-block mb-2">Próximas clases</div>
    <div class="font-bold text-white mb-1 text-sm flex items-center gap-1.5"><carbon:security class="text-slate-400" /> Clean Architecture</div>
    <p class="text-[11px] text-slate-400 leading-snug">Círculos concéntricos con la regla de dependencia: todo apunta hacia el Dominio. Ya vimos su idea de los "dos valores".</p>
  </div>

</div>

<p class="text-[11px] text-slate-500 italic text-center mt-4 max-w-2xl mx-auto">Todos resuelven el mismo problema — separar responsabilidades y aislar el Dominio — con distinta forma. Empezamos por Fowler porque es el más simple.</p>
