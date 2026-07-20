---
layout: two-cols
layoutClass: gap-12 items-center
---

<div class="inline-flex bg-white/95 p-2.5 px-4 rounded-xl mb-6 shadow-md"><img src="../../public/logo_unsam.svg" class="h-7 object-contain" alt="UNSAM Logo" /></div>

# Clean Architecture
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs block mb-3">Principios, Capas y Comparativa con Fowler</span>

Propuesta por Robert C. Martin ("Uncle Bob"), es una evolución en el diseño de software enfocada en la mantenibilidad, desacoplamiento y testeabilidad extrema.

<div class="mt-8 pt-4 border-t border-white/10 flex gap-6 text-xs text-slate-400">
  <div><span class="text-slate-500 font-medium">Docente</span><br><strong class="text-slate-300">Ezequiel Sosa</strong></div>
  <div><span class="text-slate-500 font-medium">Clase</span><br><strong class="text-slate-300">Arquitecturas Limpias</strong></div>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-indigo-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-indigo-400 mb-2 tracking-wider uppercase">La Regla de Dependencia</div>

```mermaid
graph BT
  subgraph FD["Frameworks & Drivers (DB, Web, Devices)"]
    subgraph IA["Interface Adapters (Controllers, Gateways)"]
      subgraph UC["Use Cases (Reglas específicas de la App)"]
        subgraph EN["Entities (Reglas críticas de Negocio)"]
        end
      end
    end
  end

  classDef default fill:transparent,stroke:#ffffff14,stroke-width:1px,color:#94a3b8;
  classDef ent fill:#10b98114,stroke:#10b98166,stroke-width:1.5px,color:#34d399;
  classDef use fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#60a5fa;
  classDef ada fill:#a855f714,stroke:#a855f766,stroke-width:1.5px,color:#c084fc;
  
  class EN ent;
  class UC use;
  class IA ada;
```

</div>
