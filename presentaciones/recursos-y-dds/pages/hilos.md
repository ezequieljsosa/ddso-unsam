---
layout: two-cols
layoutClass: gap-8 items-center
---

# Hilos
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Varias líneas de ejecución dentro de un mismo proceso</span>

Un <strong>hilo</strong> es un contexto de ejecución dentro de un proceso, que <strong>comparte memoria</strong> con los demás hilos del mismo proceso (a diferencia de los procesos, que están aislados).

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-purple-400"><carbon:fork-node class="text-base" /></div>
    ¿Qué es la concurrencia?
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Que varias tareas <strong>progresen en el mismo intervalo de tiempo</strong>, ya sea repartiéndose un solo CPU o corriendo a la vez en varios núcleos.</p>
</div>

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-amber-400"><carbon:shuffle class="text-base" /></div>
    El orden no está garantizado
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">El planificador del SO decide cuándo corre cada hilo: si corren de forma concurrente, <strong>no sabemos en qué orden</strong> van a terminar.</p>
</div>

::right::

<div class="gamma-card p-4 max-w-[380px] mx-auto relative">
  <div class="glow-bg bg-emerald-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-emerald-400 mb-2 tracking-wider uppercase text-center">Ejemplo: 3 hilos imprimiendo</div>

```java
for (int i = 1; i <= 3; i++) {
  int id = i;
  new Thread(
    () -> System.out.println(id)
  ).start();
}
```

  <div class="flex flex-col gap-1.5 text-[11px] font-mono mt-3">
    <div class="flex justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
      <span class="text-slate-400">Corrida 1</span><span class="text-white">2, 1, 3</span>
    </div>
    <div class="flex justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
      <span class="text-slate-400">Corrida 2</span><span class="text-white">1, 3, 2</span>
    </div>
    <div class="flex justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
      <span class="text-slate-400">Corrida 3</span><span class="text-white">3, 2, 1</span>
    </div>
  </div>
  <p class="text-[11px] text-slate-500 mt-3 text-center italic">Mismo código, mismos datos: el resultado cambia en cada corrida.</p>
</div>
