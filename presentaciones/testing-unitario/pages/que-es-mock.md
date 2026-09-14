---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Qué es un mock?
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Un doble de prueba que vos controlás</span>

Un **mock** es un objeto falso que **simula** el comportamiento de una dependencia real (un repositorio, un cliente HTTP, un servicio externo), pero que:

- Vos programás: "cuando te llamen así, respondé esto".
- No accede a la red, ni a disco, ni a una base de datos.
- Permite **verificar** con qué argumentos fue llamado.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-indigo-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-indigo-400"><carbon:tree-view class="text-base" /></div>
    Mock es solo uno de los "test doubles"
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Existen otros dobles de prueba (stub, fake, spy, dummy). En esta clase nos enfocamos en <strong>mocks</strong>, los más usados en el día a día con Mockito.</p>
</div>

::right::

<div class="gamma-card p-4 text-center relative">
  <div class="glow-bg bg-indigo-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-indigo-400 mb-2 tracking-wider uppercase">Reemplazando la dependencia real</div>

```mermaid
graph LR
  T["Test"] --> S["PedidoService"]
  S --> M["PedidoRepository<br/>(mock)"]

  classDef default fill:#6366f114,stroke:#6366f166,stroke-width:1.5px,color:#a5b4fc;
```

<p class="text-[11px] text-slate-400 leading-snug mt-3 text-left">El <strong>Service</strong> es la unidad bajo test. El <strong>Repository</strong> se reemplaza por un mock: rápido, determinista, sin infraestructura.</p>

</div>
