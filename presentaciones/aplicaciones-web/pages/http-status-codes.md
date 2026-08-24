---
transition: fade-out
---

# Códigos de estado (Status Codes)
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs">El primer número de la respuesta ya cuenta la historia</span>

<div class="grid grid-cols-3 gap-3 mt-6">

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-emerald-400 mb-1 font-mono">2xx — Éxito</div>
    <p class="text-[11px] text-slate-400 leading-snug"><strong>200</strong> OK — pedido resuelto.<br><strong>201</strong> Created — recurso creado.<br><strong>204</strong> No Content — sin cuerpo de respuesta.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-blue-400 mb-1 font-mono">3xx — Redirección</div>
    <p class="text-[11px] text-slate-400 leading-snug"><strong>301</strong> Moved Permanently.<br><strong>302</strong> Found (redirección temporal).<br><strong>304</strong> Not Modified (caché).</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-amber-400 mb-1 font-mono">4xx — Error del cliente</div>
    <p class="text-[11px] text-slate-400 leading-snug"><strong>400</strong> Bad Request.<br><strong>401</strong> Unauthorized.<br><strong>403</strong> Forbidden.<br><strong>404</strong> Not Found.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-rose-400 mb-1 font-mono">5xx — Error del servidor</div>
    <p class="text-[11px] text-slate-400 leading-snug"><strong>500</strong> Internal Server Error.<br><strong>503</strong> Service Unavailable.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-slate-400 mb-1 font-mono">1xx — Informativo</div>
    <p class="text-[11px] text-slate-400 leading-snug"><strong>100</strong> Continue — poco usado a mano, más común en detalles del protocolo.</p>
  </div>

  <div class="gamma-card p-3 relative text-xs">
    <div class="glow-bg bg-purple-500/5 bottom-[-20px] right-[-20px]"></div>
    <div class="font-bold text-white mb-1 flex items-center gap-1.5">
      <div class="text-purple-400"><carbon:rule class="text-base" /></div>
      Regla mnemotécnica
    </div>
    <p class="text-[11px] text-slate-400 leading-snug">2 = "salió bien", 4 = "el error es del pedido del cliente", 5 = "el error es del servidor".</p>
  </div>

</div>
