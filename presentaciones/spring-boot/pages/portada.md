---
layout: two-cols
layoutClass: gap-12 items-center
---

<div class="inline-flex bg-white/95 p-2.5 px-4 rounded-xl mb-6 shadow-md"><img src="../../public/logo_unsam.svg" class="h-7 object-contain" alt="UNSAM Logo" /></div>

# De Maven a Spring Boot
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs block mb-3">Construyendo una aplicación web real</span>

Con la teoría de cliente-servidor y HTTP resuelta, ahora vamos a **escribir código**: un proyecto Maven, un mini framework Spring Boot y un endpoint que responde de verdad.

<div class="mt-8 pt-4 border-t border-white/10 flex gap-6 text-xs text-slate-400">
  <div><span class="text-slate-500 font-medium">Docente</span><br><strong class="text-slate-300">Ezequiel Sosa</strong></div>
  <div><span class="text-slate-500 font-medium">Clase</span><br><strong class="text-slate-300">Aplicaciones Web — Parte 2: Implementación</strong></div>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-emerald-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-emerald-400 mb-2 tracking-wider uppercase">De abajo hacia arriba</div>

```mermaid
graph BT
  M["Maven<br/>(gestiona dependencias)"] --> S["Spring<br/>(IoC + DI)"]
  S --> B["Spring Boot<br/>(auto-config + servidor embebido)"]
  B --> A["Tu aplicación<br/>(Controller · Service · Entity · Repository)"]

  classDef default fill:#10b98114,stroke:#10b98166,stroke-width:1.5px,color:#6ee7b7;
```

</div>
