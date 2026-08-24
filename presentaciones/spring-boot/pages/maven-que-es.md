---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Qué es Maven?
<span class="text-orange-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Herramienta de gestión y construcción de proyectos Java</span>

Maven organiza un proyecto Java siguiendo **convención sobre configuración**: si respetás la estructura de carpetas esperada, no tenés que configurar casi nada a mano.

Todo proyecto Maven se describe en un archivo **`pom.xml`** (Project Object Model): quién es el proyecto, qué versión tiene y qué necesita para compilar, testear y empaquetarse.

::right::

<div class="space-y-3">

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-orange-400 mt-0.5"><carbon:code class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Compilación</div>
      <p class="text-[11px] text-slate-400 leading-snug">Compila el código fuente siguiendo un ciclo de vida estándar.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-orange-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Testing</div>
      <p class="text-[11px] text-slate-400 leading-snug">Ejecuta los tests automáticos como parte del proceso de build.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-orange-400 mt-0.5"><carbon:package class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Empaquetado</div>
      <p class="text-[11px] text-slate-400 leading-snug">Genera un artefacto distribuible: un <span class="font-mono">.jar</span> o un <span class="font-mono">.war</span>.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs border-orange-400/30">
    <div class="text-orange-300 mt-0.5"><carbon:cube class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Gestión de dependencias <span class="text-orange-400">← foco de hoy</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Descarga las librerías que tu código necesita, y las librerías que esas librerías necesitan.</p>
    </div>
  </div>

</div>
