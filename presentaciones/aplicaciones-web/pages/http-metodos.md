---
transition: fade-out
---

# Métodos HTTP
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs">El verbo dice la intención del pedido</span>

<div class="grid grid-cols-5 gap-3 mt-6">

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-emerald-400 mb-1 font-mono">GET</div>
    <p class="text-[11px] text-slate-400 leading-snug">Obtener un recurso. No debería modificar nada en el servidor.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-blue-400 mb-1 font-mono">POST</div>
    <p class="text-[11px] text-slate-400 leading-snug">Crear un recurso nuevo o disparar una acción en el servidor.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-amber-400 mb-1 font-mono">PUT</div>
    <p class="text-[11px] text-slate-400 leading-snug">Reemplazar por completo un recurso existente.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-purple-400 mb-1 font-mono">PATCH</div>
    <p class="text-[11px] text-slate-400 leading-snug">Modificar parcialmente un recurso existente.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-rose-400 mb-1 font-mono">DELETE</div>
    <p class="text-[11px] text-slate-400 leading-snug">Eliminar un recurso existente.</p>
  </div>

</div>

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-blue-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:idea class="text-base" /></div>
    Idempotencia
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Un método es <strong>idempotente</strong> si repetirlo muchas veces produce el mismo efecto que hacerlo una sola vez. <span class="font-mono text-emerald-400">GET</span>, <span class="font-mono text-amber-400">PUT</span> y <span class="font-mono text-rose-400">DELETE</span> lo son; <span class="font-mono text-blue-400">POST</span> típicamente no.</p>
</div>
