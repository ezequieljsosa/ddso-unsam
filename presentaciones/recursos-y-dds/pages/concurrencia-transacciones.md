---
layout: two-cols
layoutClass: gap-8 items-center
---

# Usuarios Concurrentes / Transacciones
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs mb-4 block">Un mismo Caso de Uso, ejecutado muchas veces a la vez</span>

<div class="gamma-card p-3 relative mb-3 text-xs">
  <div class="font-bold text-white mb-1.5">Cada ejecución del CU tiene:</div>
  <ul class="text-[11px] text-slate-400 leading-snug space-y-1 list-disc pl-4">
    <li><strong>Datos generales:</strong> compartidos, ej. la Factory.</li>
    <li><strong>Datos propios:</strong> por ejecución, ej. el comentario.</li>
    <li><strong>Distintos puntos de ejecución</strong> en simultáneo.</li>
  </ul>
</div>

<div class="flex items-center gap-3 text-xs">
  <div class="flex-1 flex flex-col gap-2">
    <div class="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">1 usuario</div>
    <div class="bg-white/5 border border-white/10 rounded-lg p-2.5 text-center">5 usuarios concurrentes</div>
  </div>
  <div class="text-purple-400 text-lg">→</div>
  <div class="bg-purple-500/10 border border-purple-500/40 rounded-lg px-4 py-6 text-center text-purple-300 font-bold">UC1</div>
</div>

::right::

<div class="gamma-card p-3 max-w-[360px] mx-auto text-center relative">
  <div class="glow-bg bg-purple-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-purple-400 mb-2 tracking-wider uppercase">Secuencia: nuevo comentario</div>

```mermaid
sequenceDiagram
  autonumber
  participant Obj as An Object
  participant Coms as Comments
  participant Fac as Comment Factory
  participant Com as Comment
  participant Id as ID gen.
  participant Tx as Transaction

  Obj->>Coms: New comment
  Coms->>Fac: New comment
  Fac->>Com: New
  Com->>Id: Next ID
  Id-->>Com: id
  Com->>Tx: Add this
  Tx-->>Com: ok
  Com-->>Coms: Add to cache
```

</div>
