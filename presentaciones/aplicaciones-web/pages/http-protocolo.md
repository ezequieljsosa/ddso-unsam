---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Qué es HTTP?
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-2 block">HyperText Transfer Protocol</span>

Es el **protocolo de aplicación** que usan el cliente y el servidor para hablar entre sí en la web. Define el formato de los mensajes: cómo se pide algo y cómo se responde.

Corre por encima de TCP/IP: mientras TCP/IP se ocupa de que los bytes lleguen, HTTP define **qué significan** esos bytes.

::right::

<div class="space-y-3">

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-amber-400 mt-0.5"><carbon:document-blank class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Basado en texto</div>
      <p class="text-[11px] text-slate-400 leading-snug">Un mensaje HTTP es legible: líneas de texto plano con una estructura definida.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-amber-400 mt-0.5"><carbon:no-image class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Sin estado (stateless)</div>
      <p class="text-[11px] text-slate-400 leading-snug">Cada pedido es independiente. El servidor no recuerda pedidos anteriores del mismo cliente por sí solo.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-amber-400 mt-0.5"><carbon:send class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Pedido - respuesta</div>
      <p class="text-[11px] text-slate-400 leading-snug">Siempre hay un pedido del cliente seguido de una respuesta del servidor. Nunca al revés.</p>
    </div>
  </div>

</div>
