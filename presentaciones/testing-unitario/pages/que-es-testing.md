---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Qué es un test unitario?
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Verificar código con código</span>

Un **test unitario** es código que ejecuta una unidad pequeña de tu programa (un método, una clase) de forma **aislada** y verifica automáticamente que su resultado sea el esperado.

- **Automático:** se ejecuta sin intervención humana.
- **Rápido:** corre en milisegundos, se puede repetir miles de veces.
- **Repetible:** el mismo test da siempre el mismo resultado.
- **Aislado:** prueba una unidad, no el sistema entero.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-emerald-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-emerald-400"><carbon:idea class="text-base" /></div>
    ¿Para qué sirve?
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Detecta regresiones apenas aparecen, documenta el comportamiento esperado y habilita refactorizar con confianza.</p>
</div>

::right::

<div class="gamma-card p-4 text-center relative">
  <div class="glow-bg bg-emerald-500/10 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-emerald-400 mb-2 tracking-wider uppercase">El patrón AAA</div>

```mermaid
graph TD
  Ar["Arrange<br/>preparar datos y objetos"] --> Ac["Act<br/>ejecutar el método a probar"]
  Ac --> As["Assert<br/>verificar el resultado"]

  classDef default fill:#10b98114,stroke:#10b98166,stroke-width:1.5px,color:#6ee7b7;
```

<p class="text-[11px] text-slate-400 leading-snug mt-3 text-left">Casi todo test unitario tiene esta forma, aunque no esté escrita explícitamente en el código.</p>

</div>
