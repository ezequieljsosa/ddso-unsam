---
layout: two-cols
layoutClass: gap-12 items-center
---

# Capa de Fuente de Datos
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Acceso y almacenamiento de información</span>

Esta capa es la encargada de la comunicación con los repositorios de información física de datos y de la interacción con proveedores de servicios externos.

Aísla a la lógica de negocio de:
- Las consultas específicas de base de datos (SQL, consultas de agregación).
- Los protocolos de comunicación de red externos (HTTP, colas de mensajería).
- Los formatos de serialización de datos de la infraestructura.

::right::

<div class="space-y-4">

  <!-- Bases de datos -->
  <div class="gamma-card p-4 relative flex gap-4 items-start">
    <div class="glow-bg bg-blue-500/5 bottom-[-20px] right-[-20px]"></div>
    <div class="text-blue-400 mt-1"><carbon:db2-database class="text-3xl" /></div>
    <div>
      <div class="font-bold text-white mb-1 text-xs">Bases de Datos <span class="text-[9px] text-blue-300 bg-blue-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Persistencia</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Almacenamiento estructurado y persistente de los datos de la aplicación.</p>
      <div class="mt-2 text-[10px] text-slate-500 font-medium">
        Ejemplos: Motores Relacionales (PostgreSQL, MySQL) y NoSQL (MongoDB, Redis).
      </div>
    </div>
  </div>

  <!-- Sistemas externos -->
  <div class="gamma-card p-4 relative flex gap-4 items-start">
    <div class="glow-bg bg-cyan-500/5 bottom-[-20px] right-[-20px]"></div>
    <div class="text-cyan-400 mt-1"><carbon:api class="text-3xl" /></div>
    <div>
      <div class="font-bold text-white mb-1 text-xs">Sistemas Externos <span class="text-[9px] text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Integración</span></div>
      <p class="text-[11px] text-slate-400 leading-snug">Intercambio de datos e interactividad con plataformas o software fuera de nuestro control.</p>
      <div class="mt-2 text-[10px] text-slate-500 font-medium">
        Ejemplos: Pasarelas de pago, servicios de e-mail (SendGrid), colas de mensajería (Kafka, RabbitMQ) y APIs legadas.
      </div>
    </div>
  </div>

</div>
