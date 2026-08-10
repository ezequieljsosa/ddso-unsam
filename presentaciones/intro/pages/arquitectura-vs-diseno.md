---
transition: slide-left
class: compact-slide diagram-tight
---

# Arquitectura vs. Diseño de Software
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs">Dos "zooms" distintos sobre el mismo problema — el alcance de esta materia</span>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">

  <!-- Arquitectura -->
  <div class="gamma-card p-3 relative flex flex-col justify-between border-l-2 border-l-slate-500 opacity-70">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
        Arquitectura de Software
      </div>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li>Cómo se organizan <strong>múltiples</strong> sistemas y servicios distribuidos.</li>
        <li>Comunicación entre nodos, colas, balanceo de carga, escalabilidad horizontal.</li>
        <li><strong>Fuera del alcance</strong> de esta materia.</li>
      </ul>
    </div>
  </div>

  <!-- Diseño -->
  <div class="gamma-card p-3 relative flex flex-col justify-between border-l-2 border-l-cyan-500">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        Diseño de Software <span class="text-[9px] text-cyan-300 bg-cyan-500/15 px-1.5 py-0.5 rounded-full ml-1 font-semibold uppercase">Esta materia</span>
      </div>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li>Zoom sobre <strong>una sola pieza</strong> de software: sus clases, módulos y capas internas.</li>
        <li>Algunas interacciones puntuales hacia afuera: otro sistema, la base de datos.</li>
        <li>Cómo organizar el código para que sea mantenible y testeable.</li>
      </ul>
    </div>
  </div>

</div>

```mermaid
graph LR
    subgraph Sistema["Ecosistema distribuido (fuera de foco)"]
        direction LR
        A["Servicio A"]
        B["Servicio B"]
        C["Servicio C"]
    end

    Foco["🔍 Nuestra pieza de software"]
    DB[("Base de Datos")]
    Otro["Otro Sistema"]

    A -.-> Foco
    Foco --> DB
    Foco --> Otro

    classDef dim fill:#ffffff08,stroke:#ffffff1a,stroke-width:1px,color:#64748b;
    classDef focus fill:#06b6d426,stroke:#22d3ee,stroke-width:2px,color:#67e8f9;
    class A,B,C dim
    class Foco focus
    style Sistema fill:#ffffff05,stroke:#475569,stroke-dasharray: 5 5,color:#64748b
```
