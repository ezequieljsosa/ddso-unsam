---
layout: two-cols
layoutClass: gap-8 items-center
---

# Diagrama de Componentes
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs mb-4 block">Piezas de software y sus interfaces</span>

```mermaid
graph LR
  OS["Order System"] -.->|CustomerLookup| CR["Customer<br>Repository"]
  OS -.->|ProductAccessor| IS["Inventory<br>System"]

  classDef default fill:#a855f714,stroke:#a855f766,stroke-width:1.5px,color:#c084fc;
```

<div class="gamma-card p-3 relative text-xs">
  <div class="font-bold text-white mb-2">Formas de consumir un componente</div>
  <ul class="text-[11px] text-slate-400 leading-snug space-y-1.5 list-disc pl-4">
    <li><strong>Librerías:</strong> mismo ambiente / se compila junto.</li>
    <li><strong>Servicios:</strong> consumo "remoto" — API, DB, ...</li>
    <li><strong>Apps con UI:</strong> interacción directa del usuario.</li>
  </ul>
</div>

::right::

<div class="gamma-card p-4 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-blue-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-blue-400 mb-2 tracking-wider uppercase">Puertos de un componente</div>

```mermaid
graph TD
  OrderEntry(("OrderEntry")) --> Order["«component»<br>Order"]
  AccountPayable(("AccountPayable")) --> Order
  Order -.-> Person(("Person"))

  classDef default fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#60a5fa;
```

</div>
