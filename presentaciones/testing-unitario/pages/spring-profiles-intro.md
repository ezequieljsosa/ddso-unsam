---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Profiles de Spring
<span class="text-violet-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Configuración distinta según el entorno</span>

Hasta ahora vimos cómo testear **una unidad** con mocks. Pero a veces querés levantar la aplicación completa para testear, sin tocar la infraestructura real (base de datos, servicios externos).

Un **profile** es una etiqueta que le dice a Spring: "activá esta configuración y estos beans, no otros".

- Típicamente: `dev`, `test`, `prod`.
- Cada profile puede tener su propia configuración y sus propios beans.
- En testing local, el profile `test` puede reemplazar la base real por una **en memoria** o por un **cliente falso**.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-violet-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:idea class="text-base" /></div>
    Dos estrategias, mismo objetivo
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Base de datos en memoria (ej. <span class="font-mono">H2</span>) para tests de persistencia reales pero rápidos, o un cliente/repositorio falso en Java cuando ni siquiera querés levantar una base.</p>
</div>

::right::

<div class="gamma-card p-4 text-center relative">
  <div class="glow-bg bg-violet-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-violet-400 mb-2 tracking-wider uppercase">Un profile activo a la vez, por entorno</div>

```mermaid
graph TD
  App["Aplicación Spring"] --> Dev["dev<br/>base local"]
  App --> Test["test<br/>base en memoria / falsa"]
  App --> Prod["prod<br/>base real"]

  classDef default fill:#8b5cf614,stroke:#8b5cf666,stroke-width:1.5px,color:#c4b5fd;
```

</div>
