---
layout: two-cols
layoutClass: gap-12 items-center
---

<div class="inline-flex bg-white/95 p-2.5 px-4 rounded-xl mb-6 shadow-md"><img src="../../public/logo_unsam.svg" class="h-7 object-contain" alt="UNSAM Logo" /></div>

# Aplicaciones Web y HTTP
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs block mb-3">Cliente, servidor y el protocolo que los conecta</span>

Antes de escribir la primera línea de un controller, necesitamos entender **cómo viaja un pedido** desde el navegador hasta el servidor y de vuelta.

<div class="mt-8 pt-4 border-t border-white/10 flex gap-6 text-xs text-slate-400">
  <div><span class="text-slate-500 font-medium">Docente</span><br><strong class="text-slate-300">Ezequiel Sosa</strong></div>
  <div><span class="text-slate-500 font-medium">Clase</span><br><strong class="text-slate-300">Aplicaciones Web — Parte 1: Teoría</strong></div>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-indigo-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-indigo-400 mb-2 tracking-wider uppercase">Pedido y Respuesta</div>

```mermaid
graph LR
  C(["🧑‍💻 Cliente"]) -->|"HTTP Request"| S(["🖥️ Servidor"])
  S -->|"HTTP Response"| C

  classDef default fill:#6366f114,stroke:#6366f166,stroke-width:1.5px,color:#a5b4fc;
```

</div>
