---
transition: fade-out
---

# Hilos
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs">El contexto de ejecución dentro de un proceso</span>

<div class="space-y-3.5 mt-6 text-xs max-w-xl">
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-emerald-500/15 text-emerald-400">1</span>
    <div><strong>EN GENERAL</strong> es el contexto de ejecución para un CU.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400">2</span>
    <div>Siempre hay un <strong>hilo principal</strong> en un proceso.</div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number bg-purple-500/15 text-purple-400">3</span>
    <div>Se ejecutan dentro de un mismo nodo, <strong>comparten memoria</strong> y tienen poco overhead en el SO.</div>
  </div>
</div>
