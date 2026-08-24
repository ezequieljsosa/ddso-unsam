---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Las capas, ahora con anotaciones
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Controller, Service, Entity y Repository</span>

Las mismas capas de Presentación / Service / Dominio / Fuente de Datos que ya vimos, con su nombre y anotación en Spring:

- **`@RestController`** → recibe el pedido HTTP (Presentación).
- **`@Service`** → orquesta el caso de uso.
- **Entity (`@Entity`)** → el modelo de Dominio, mapeado a una tabla.
- **`Repository`** → la Fuente de Datos, habla con la base.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-purple-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-purple-400"><carbon:rule class="text-base" /></div>
    Nada nuevo conceptualmente
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Spring no inventa una arquitectura nueva: le pone anotaciones y auto-configuración a las capas que ya conocemos.</p>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-purple-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-purple-400 mb-2 tracking-wider uppercase">Del pedido a la base</div>

```mermaid
graph LR
  Client(["Cliente HTTP"]) --> Controller["@RestController<br/>Presentación"]
  Controller --> Service["@Service<br/>Orquestación"]
  Service --> Entity["Entity<br/>Dominio"]
  Service --> Repository["Repository<br/>Fuente de Datos"]
  Repository --> DB[("Base de Datos")]

  classDef default fill:#a855f714,stroke:#a855f766,stroke-width:1.5px,color:#c084fc;
```

</div>
