---
layout: two-cols
layoutClass: gap-8 items-center
---

# Las Capas de Uncle Bob
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Anatomía de los 4 círculos</span>

Cada nivel representa un grado de abstracción distinto de la lógica del sistema:

<div class="space-y-3.5 mt-4 text-[11px]">
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-emerald-500/15 text-emerald-400">1</span>
    <div>
      <strong>Entidades (Entities):</strong> Reglas críticas de negocio a nivel empresarial. Modela los objetos con su lógica interna más pura.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400">2</span>
    <div>
      <strong>Casos de Uso (Use Cases):</strong> Reglas específicas de la aplicación. Orquesta el flujo de datos desde y hacia las Entidades.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-purple-500/15 text-purple-400">3</span>
    <div>
      <strong>Adaptadores (Interface Adapters):</strong> Traductores. Controllers web, presenters y gateways de base de datos.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-slate-500/15 text-slate-400">4</span>
    <div>
      <strong>Frameworks & Drivers:</strong> Herramientas externas como bases de datos relacionales, routers web y SDKs de terceros.
    </div>
  </div>
</div>

::right::

<div class="gamma-card p-4 max-w-[320px] mx-auto relative flex flex-col justify-between">
  <div class="glow-bg bg-emerald-500/5 bottom-[-50px] left-[-50px]"></div>
  <div class="text-[10px] font-bold text-emerald-400 mb-4 tracking-wider uppercase text-center">La Inversión de Control (IoC)</div>
  <p class="text-[11px] text-slate-400 leading-snug mb-3">
    ¿Cómo hace un Caso de Uso para guardar datos si la Base de Datos está en la capa más externa y no puede ser importada?
  </p>
  <div class="bg-white/5 border border-white/10 p-2.5 rounded-lg text-[10px] text-slate-300 font-mono">
    // En capa Use Cases (Core)
    interface UserRepository {
      save(u: User): void;
    }
    <br>
    // En capa DB (Detalle/Infraestructura)
    class SQLUserRepository implements UserRepository {
      save(u: User) { /* SQL query */ }
    }
  </div>
  <p class="text-[10px] text-slate-500 mt-2 italic">
    El Caso de Uso define la interfaz; la Base de Datos se adapta a ella. La dependencia se invierte.
  </p>
</div>
