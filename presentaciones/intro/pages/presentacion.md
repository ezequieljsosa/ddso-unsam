---
transition: fade-out
---

# Capa de Presentación
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs">Punto de interacción con el exterior</span>

Es la capa encargada de exponer el comportamiento de la aplicación y procesar los comandos o entradas de los usuarios o de otros sistemas externos.

<div class="grid grid-cols-3 gap-4 mt-6">
  
  <!-- CLI -->
  <div class="gamma-card p-4 relative flex flex-col justify-between">
    <div class="glow-bg bg-purple-500/5 top-[-20px] left-[-20px]"></div>
    <div>
      <div class="text-purple-400 mb-3"><carbon:terminal class="text-3xl" /></div>
      <div class="font-bold text-white mb-2 text-sm">CLI <span class="text-[9px] text-purple-300 bg-purple-500/15 px-1.5 py-0.5 rounded-full font-semibold uppercase">Terminal</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Interfaz de línea de comandos. Ideal para automatizaciones, utilidades rápidas y desarrolladores.</p>
    </div>
    <div class="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-500">
      Ejemplo: Scripts, Git CLI, Agentes de terminal.
    </div>
  </div>

  <!-- Web -->
  <div class="gamma-card p-4 relative flex flex-col justify-between">
    <div class="glow-bg bg-purple-500/5 top-[-20px] left-[-20px]"></div>
    <div>
      <div class="text-purple-400 mb-3"><carbon:application class="text-3xl" /></div>
      <div class="font-bold text-white mb-2 text-sm">Web / UI <span class="text-[9px] text-purple-300 bg-purple-500/15 px-1.5 py-0.5 rounded-full font-semibold uppercase">Gráfica</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Aplicaciones visuales e interactivas en navegadores o aplicaciones de escritorio/móviles orientadas a usuarios finales.</p>
    </div>
    <div class="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-500">
      Ejemplo: Single Page Apps (React, Vue), Mobile Apps.
    </div>
  </div>

  <!-- APIs -->
  <div class="gamma-card p-4 relative flex flex-col justify-between">
    <div class="glow-bg bg-purple-500/5 top-[-20px] left-[-20px]"></div>
    <div>
      <div class="text-purple-400 mb-3"><carbon:cloud-service-management class="text-3xl" /></div>
      <div class="font-bold text-white mb-2 text-sm">APIs <span class="text-[9px] text-purple-300 bg-purple-500/15 px-1.5 py-0.5 rounded-full font-semibold uppercase">Servicios</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Interfaces de comunicación programática (REST, GraphQL, gRPC) estructuradas para intercambio entre sistemas.</p>
    </div>
    <div class="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-500">
      Ejemplo: Endpoints JSON de backend, Webhooks.
    </div>
  </div>

</div>
