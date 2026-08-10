---
transition: slide-left
---

# Conclusiones
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Lo que nos llevamos de esta introducción</span>

<div class="space-y-3 mt-5 text-xs">

  <div class="flex gap-2.5 items-start">
    <span class="step-number">1</span>
    <div><strong>Dos valores:</strong> el software vale por su comportamiento (qué hace) y por su estructura (qué tan fácil es cambiarlo). Descuidar el segundo termina matando al primero.</div>
  </div>

  <div class="flex gap-2.5 items-start">
    <span class="step-number">2</span>
    <div><strong>El foco de la materia:</strong> diseño de una pieza de software y sus interacciones puntuales (otro sistema, la base de datos) — no arquitectura de sistemas distribuidos.</div>
  </div>

  <div class="flex gap-2.5 items-start">
    <span class="step-number">3</span>
    <div><strong>Layering:</strong> Presentación, Service, Dominio y Fuente de Datos separan responsabilidades y aíslan los cambios de cada aspecto de la aplicación.</div>
  </div>

  <div class="flex gap-2.5 items-start">
    <span class="step-number">4</span>
    <div><strong>Son muy comunes los proyectos con un Dominio anémico:</strong>  toda la lógica termina en el Service y el Dominio es solo una estructura de datos.</div>
  </div>

</div>

<div class="gamma-card p-3 relative mt-6 text-xs text-center">
  <div class="glow-bg bg-indigo-500/5 top-[-20px] left-[-20px]"></div>
  Con estas ideas como base, en las próximas clases vamos a profundizar en cada capa: cómo se diseñan sus objetos, sus responsabilidades y sus límites.
</div>
