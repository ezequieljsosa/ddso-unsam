---
transition: fade-out
---

# Aplicaciones - Aspectos Importantes
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs">¿Qué aspectos tiene comúnmente una aplicación de software en su arquitectura?</span>

<!-- Grid of 6 Aspects -->
<div class="grid grid-cols-3 gap-3 mt-6">
  
  <!-- Presentación -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-purple-400 mt-0.5"><carbon:laptop class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Interfaz Gráfica <span class="text-[9px] text-purple-300 bg-purple-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Presentación</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">El punto de interacción con el usuario. Requiere un diseño intuitivo, dinámico y responsivo.</p>
    </div>
  </div>

  <!-- Datos & Volumen -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-blue-400 mt-0.5"><carbon:db2-database class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Persistencia <span class="text-[9px] text-blue-300 bg-blue-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Datos</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">El almacenamiento seguro y consistente de la información en bases de datos relacionales o NoSQL.</p>
    </div>
  </div>

  <!-- Concurrencia -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-amber-400 mt-0.5"><carbon:flash class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Altos Volúmenes <span class="text-[9px] text-amber-300 bg-amber-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Concurrencia</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">La capacidad de procesar gran cantidad de datos y soportar múltiples accesos simultáneos con eficiencia.</p>
    </div>
  </div>

  <!-- Dominio -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:flow class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Reglas de Negocio <span class="text-[9px] text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Dominio</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Lógica central de la aplicación, frecuentemente compleja y sometida a constantes cambios.</p>
    </div>
  </div>

  <!-- Integración -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-cyan-400 mt-0.5"><carbon:api class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Otros Sistemas <span class="text-[9px] text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Integración</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Conexión con servicios externos, APIs de terceros, sistemas legados o flujos asincrónicos.</p>
    </div>
  </div>

  <!-- Transversal -->
  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-rose-400 mt-0.5"><carbon:security class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Aspectos Comunes <span class="text-[9px] text-rose-300 bg-rose-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Transversal</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Seguridad, logs, gestión de sesiones y requerimientos no funcionales transversales.</p>
    </div>
  </div>

</div>
