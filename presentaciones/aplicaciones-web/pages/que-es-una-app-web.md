---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Qué es una aplicación web?
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Software repartido entre el navegador y el servidor</span>

Una aplicación web es un sistema **distribuido**: parte de la interfaz corre en el navegador (cliente) y la lógica, los datos y las reglas de negocio viven en el servidor, comunicados por red con HTTP.

- No requiere instalación: se accede con una URL.
- El servidor concentra datos, reglas de negocio y seguridad.
- El mismo servidor puede atender a **muchos clientes a la vez**.

::right::

<div class="space-y-3">

  <div class="gamma-card p-3 relative text-xs">
    <div class="glow-bg bg-slate-500/5 top-[-20px] left-[-20px]"></div>
    <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
      <div class="text-slate-400"><carbon:laptop class="text-base" /></div>
      Aplicación de escritorio
    </div>
    <p class="text-[11px] text-slate-400 leading-snug">Se instala y corre entera en la máquina del usuario. Actualizarla implica actualizar cada instalación.</p>
  </div>

  <div class="gamma-card p-3 relative text-xs">
    <div class="glow-bg bg-indigo-500/5 top-[-20px] left-[-20px]"></div>
    <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
      <div class="text-indigo-400"><carbon:cloud class="text-base" /></div>
      Aplicación web
    </div>
    <p class="text-[11px] text-slate-400 leading-snug">Se accede desde cualquier cliente con red. Actualizar el servidor alcanza para actualizar a todos los usuarios a la vez.</p>
  </div>

</div>
