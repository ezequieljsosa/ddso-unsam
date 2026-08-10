---
transition: slide-left
---

# Dominio y Service en la Práctica
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs">Lo que dice la teoría vs. lo que pasa en muchos proyectos reales</span>

No en todos lados, pero en una gran parte de los proyectos termina pasando esto:

<div class="grid grid-cols-2 gap-4 mt-5 text-xs">

  <!-- Teoría -->
  <div class="gamma-card p-4 relative flex flex-col justify-between border-l-2 border-l-emerald-500">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        El Diseño (la teoría)
      </div>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li>El <strong>Dominio</strong> encapsula datos y comportamiento juntos: los objetos contienen sus propias reglas de negocio.</li>
        <li>El <strong>Service</strong> solo orquesta: coordina casos de uso sin decidir nada por su cuenta.</li>
      </ul>
    </div>
  </div>

  <!-- Práctica -->
  <div class="gamma-card p-4 relative flex flex-col justify-between border-l-2 border-l-amber-500">
    <div>
      <div class="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        Lo que suele pasar
      </div>
      <ul class="text-[11px] text-slate-400 space-y-1.5 list-disc pl-4">
        <li>El <strong>Service</strong> termina concentrando la lógica de negocio.</li>
        <li>Los objetos del <strong>Dominio</strong> funcionan como simples estructuras de datos (getters/setters, sin comportamiento propio).</li>
        <li>El <strong>Service</strong> también hace los llamados a sistemas externos (APIs, colas, servicios de terceros).</li>
      </ul>
    </div>
  </div>

</div>

<div class="gamma-card p-3 relative mt-4 text-xs">
  <div class="glow-bg bg-amber-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-amber-400"><carbon:warning-alt class="text-base" /></div>
    ¿Por qué pasa esto?
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">
    Es un resabio del <strong>paradigma procedural</strong>: separar las <strong>estructuras de datos</strong> de los <strong>algoritmos</strong> que operan sobre ellas. El objeto deja de ser una unidad de datos + comportamiento (la idea central de OO) y pasa a ser una bolsa de datos pasiva que el Service manipula desde afuera.
  </p>
  <a href="https://martinfowler.com/bliki/AnemicDomainModel.html" target="_blank" class="text-amber-400 hover:underline inline-flex items-center gap-1 mt-2 text-[10px] font-semibold">
    Martin Fowler: "AnemicDomainModel" <carbon:arrow-up-right class="text-[8px]" />
  </a>
</div>
