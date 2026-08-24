---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Estructura de un proyecto
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-2 block">La convención que Maven y Spring Boot esperan</span>

- **`pom.xml`:** dependencias y configuración de build, en la raíz.
- **`src/main/java`:** todo el código de la aplicación.
- **`src/main/resources`:** configuración y recursos (`application.properties`).
- **`src/test/java`:** los tests, en paralelo a la estructura de `main`.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:idea class="text-base" /></div>
    Convención sobre configuración
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Si respetás estos nombres y ubicaciones, Maven y Spring Boot encuentran todo solos: no hace falta declarar rutas a mano.</p>
</div>

::right::

<div class="gamma-card p-3 font-mono text-[11px] text-slate-300 leading-relaxed">
<div>tareas-app/</div>
<div>├── pom.xml</div>
<div>└── src/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;├── main/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── java/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── ar/edu/unsam/tareas/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span class="text-emerald-400">TareasApplication.java</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span class="text-amber-400">Tarea.java</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span class="text-blue-400">TareaRepository.java</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span class="text-purple-400">TareaService.java</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="text-cyan-400">TareaController.java</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── resources/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── application.properties</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;└── test/java/...</div>
</div>
