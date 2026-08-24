---
transition: fade-out
---

# Conclusiones
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs">Lo que nos llevamos de esta clase</span>

<div class="grid grid-cols-2 gap-3 mt-6">

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Maven gestiona dependencias</div>
      <p class="text-[11px] text-slate-400 leading-snug">Declarás coordenadas GAV en el <span class="font-mono">pom.xml</span> y Maven resuelve el árbol completo.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Spring inyecta dependencias</div>
      <p class="text-[11px] text-slate-400 leading-snug">Un contenedor IoC crea tus objetos y les da lo que necesitan, sin `new` manual.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Spring Boot ahorra configuración</div>
      <p class="text-[11px] text-slate-400 leading-snug">Auto-configuración, servidor embebido y starters para arrancar rápido.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Cuatro clases, un CRUD real</div>
      <p class="text-[11px] text-slate-400 leading-snug">Entity, Repository, Service y Controller alcanzan para exponer un recurso completo por HTTP.</p>
    </div>
  </div>

</div>

<div class="gamma-card p-4 relative mt-5 text-sm max-w-2xl">
  <div class="glow-bg bg-indigo-500/10 top-[-30px] right-[-30px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-2">
    <div class="text-indigo-400"><carbon:idea class="text-base" /></div>
    Para llevarse pensando
  </div>
  <p class="text-slate-400 leading-snug">El framework no reemplaza el diseño: sigue siendo tu responsabilidad decidir qué va en el Service y qué va en la Entity.</p>
</div>
