---
transition: slide-left
---

# Fowler vs. Clean Architecture
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs">Comparativa de Enfoques</span>

Aunque ambas buscan separar responsabilidades, difieren en cómo manejan las dependencias y la infraestructura.

<div class="grid grid-cols-2 gap-4 mt-6 text-xs">

  <!-- Fowler -->
  <div class="gamma-card p-4 relative flex flex-col justify-between border-l-2 border-l-blue-500">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
        Layering Tradicional (Fowler)
      </div>
      <p class="text-[11px] text-slate-400 leading-snug mb-3">
        Propone una estructura lineal y jerárquica de 3 capas: Presentación ➡️ Dominio ➡️ Datos.
      </p>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li><strong>Dirección:</strong> La interfaz depende del negocio, y el negocio suele depender del acceso a datos.</li>
        <li><strong>Acoplamiento:</strong> Cambiar el motor de base de datos puede impactar o forzar cambios en la capa de dominio.</li>
        <li><strong>Centrado en:</strong> La estructura y persistencia de las tablas de datos (data-driven).</li>
      </ul>
    </div>
  </div>

  <!-- Clean Architecture -->
  <div class="gamma-card p-4 relative flex flex-col justify-between border-l-2 border-l-emerald-500">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        Clean Architecture (Uncle Bob)
      </div>
      <p class="text-[11px] text-slate-400 leading-snug mb-3">
        Propone círculos concéntricos donde el núcleo (Dominio/Entities) está en el centro absoluto.
      </p>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li><strong>Dirección:</strong> Las dependencias van hacia adentro. La base de datos es externa y depende del núcleo.</li>
        <li><strong>Acoplamiento:</strong> La base de datos se trata como un "plugin" intercambiable; no altera las reglas de negocio.</li>
        <li><strong>Centrado en:</strong> Los casos de uso operacionales de la aplicación (use case-driven).</li>
      </ul>
    </div>
  </div>

</div>
