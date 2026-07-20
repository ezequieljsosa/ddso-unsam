---
layout: two-cols
layoutClass: gap-8 items-center
---

# Filosofía de Clean Architecture
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-4 block">Independencia y Flexibilidad</span>

<!-- Regla de dependencia -->
<div class="gamma-card p-3 relative mb-3 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:security class="text-base" /></div>
    La Regla de Dependencia (Dependency Rule)
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">
    Las dependencias de código <strong>solo pueden apuntar hacia adentro</strong>. 
    El código de una capa interna no debe saber absolutamente nada sobre las clases, variables o funciones declaradas en las capas externas.
  </p>
</div>

<!-- Los 5 pilares -->
<div class="gamma-card p-3 relative text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:checkmark class="text-base" /></div>
    Los 5 Pilares de Independencia
  </div>
  <ul class="text-[11px] text-slate-400 leading-snug space-y-1 list-disc pl-4">
    <li><strong>De Frameworks:</strong> Las librerías son herramientas, no el núcleo.</li>
    <li><strong>De la UI:</strong> La interfaz gráfica puede cambiar sin tocar el negocio.</li>
    <li><strong>De la Base de Datos:</strong> El motor de persistencia es un detalle.</li>
    <li><strong>De Agentes Externos:</strong> Las reglas de negocio no conocen el exterior.</li>
    <li><strong>Altamente Testeable:</strong> El núcleo se testea sin simular UI o BD pesadas.</li>
  </ul>
</div>

::right::

<div class="gamma-card p-3 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-cyan-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-cyan-400 mb-2 tracking-wider uppercase">Visualización de Dependencias</div>

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
