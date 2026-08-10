---
layout: two-cols
layoutClass: gap-12 items-center
---

# Capa de Service
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">El orquestador entre capas</span>

El Service es el punto de entrada a la lógica de la aplicación: recibe lo que pide la Presentación, coordina al Dominio y a la Fuente de Datos, y devuelve el resultado.

No contiene reglas de negocio propias:
- Expone los casos de uso de la aplicación hacia la Presentación.
- Define los límites de las transacciones (todo-o-nada).
- Traduce entre el modelo de Presentación y el modelo de Dominio.
- Delega toda regla de negocio en la capa de Dominio.

::right::

<div class="space-y-3">

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-indigo-400 mt-0.5"><carbon:flow class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Orquestación de Casos de Uso</div>
      <p class="text-[11px] text-slate-400 leading-snug">Coordina la secuencia de pasos necesarios para cumplir un pedido de la aplicación.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-indigo-400 mt-0.5"><carbon:security class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Límites Transaccionales</div>
      <p class="text-[11px] text-slate-400 leading-snug">Garantiza que las operaciones se completen enteras o se reviertan por completo.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-indigo-400 mt-0.5"><carbon:connect class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Traducción de Modelos</div>
      <p class="text-[11px] text-slate-400 leading-snug">Convierte entre lo que espera la Presentación y lo que maneja el Dominio.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-indigo-400 mt-0.5"><carbon:rule class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Sin Lógica de Negocio Propia</div>
      <p class="text-[11px] text-slate-400 leading-snug">Orquesta, pero no decide: las reglas de negocio viven en el Dominio.</p>
    </div>
  </div>

</div>
