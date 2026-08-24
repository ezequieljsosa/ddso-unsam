---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Una mini introducción a Spring
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Un contenedor que arma objetos por vos</span>

Spring es un framework cuyo núcleo es un contenedor de **Inversión de Control (IoC)**: en lugar de que tus clases creen sus propias dependencias con `new`, se las declarás y Spring te las **inyecta**.

- Marcás una clase como componente gestionado por Spring (ej. `@Service`, `@Repository`).
- Pedís lo que necesitás en el constructor.
- Spring resuelve el grafo de dependencias y te entrega instancias listas para usar.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-indigo-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-indigo-400"><carbon:connect class="text-base" /></div>
    Inyección de dependencias (DI)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Es la técnica; IoC es el principio detrás. Menos acoplamiento, clases más fáciles de testear.</p>
</div>

::right::

<div class="gamma-card p-4 text-center relative">
  <div class="glow-bg bg-indigo-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-indigo-400 mb-2 tracking-wider uppercase">Quién arma las dependencias</div>

```mermaid
%%{init: {"theme":"dark","themeVariables":{"fontFamily":"Inter","fontSize":"16px"}} }%%
graph LR
  IOC["Contenedor Spring"] -->|"crea e inyecta"| S["TareaService"]
  IOC -->|"crea e inyecta"| R["TareaRepository"]
  S -->|"usa"| R
  Manual["new RepositoryImpl()"] -.->|"sin Spring"| S

  classDef default fill:#6366f114,stroke:#6366f166,stroke-width:1.5px,color:#a5b4fc;
  classDef manual fill:#64748b14,stroke:#64748b66,stroke-width:1px,color:#94a3b8,stroke-dasharray: 4 3;
  class Manual manual;
```

</div>
