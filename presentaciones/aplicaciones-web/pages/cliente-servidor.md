---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Arquitectura Cliente-Servidor
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Dos roles, una conversación</span>

- **Cliente:** inicia la comunicación. Pide algo y espera una respuesta. Ejemplos: el navegador, una app mobile, otro servidor.
- **Servidor:** espera pedidos, los procesa y responde. Ejemplos: una API, una base de datos, un servidor de archivos.

<div class="gamma-card p-3 relative mt-4 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:document class="text-base" /></div>
    Una regla clave
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">El <strong>cliente siempre inicia</strong> la comunicación. El servidor nunca "llama" espontáneamente a un cliente para avisarle algo (sin mecanismos especiales como WebSockets o polling).</p>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-cyan-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-cyan-400 mb-2 tracking-wider uppercase">Un servidor, muchos clientes</div>

```mermaid
graph LR
  C1(["Cliente 1"]) --> S(["Servidor"])
  C2(["Cliente 2"]) --> S
  C3(["Cliente 3"]) --> S
  S --> DB[("Base de datos")]

  classDef default fill:#06b6d414,stroke:#06b6d466,stroke-width:1.5px,color:#67e8f9;
```

</div>

<div class="text-[10px] text-slate-400 text-center mt-3 max-w-[300px] mx-auto">El servidor comparte procesador, memoria y conexiones entre todos los clientes que lo usan al mismo tiempo.</div>
