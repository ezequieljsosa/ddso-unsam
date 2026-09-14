---
transition: fade-out
---

# Conclusiones
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs">Lo que nos llevamos de esta clase</span>

<div class="grid grid-cols-2 gap-3 mt-6">

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Un test unitario prueba una unidad, sola</div>
      <p class="text-[11px] text-slate-400 leading-snug">Automático, rápido, repetible. Se apoya en el patrón Arrange-Act-Assert.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">JUnit estructura el test</div>
      <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">@Test</span> marca el caso, <span class="font-mono">@BeforeEach</span> prepara el estado, <span class="font-mono">Assertions</span> verifica el resultado.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Un mock aísla la unidad de sus dependencias</div>
      <p class="text-[11px] text-slate-400 leading-snug">Sin base de datos ni red: tests deterministas y rápidos.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Mockito programa y verifica el mock</div>
      <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">when/thenReturn</span> configura respuestas, <span class="font-mono">verify</span> confirma interacciones, los matchers flexibilizan los argumentos.</p>
    </div>
  </div>

  <div class="gamma-card p-3 flex gap-3 items-start text-xs">
    <div class="text-emerald-400 mt-0.5"><carbon:checkmark class="text-base" /></div>
    <div>
      <div class="font-bold text-white mb-0.5">Los profiles habilitan testing local sin infraestructura real</div>
      <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">@Profile("test")</span> más <span class="font-mono">@ActiveProfiles("test")</span> cambian la base real por una en memoria o un repositorio falso.</p>
    </div>
  </div>

</div>

<div class="gamma-card p-4 relative mt-5 text-sm max-w-2xl">
  <div class="glow-bg bg-indigo-500/10 top-[-30px] right-[-30px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-2">
    <div class="text-indigo-400"><carbon:idea class="text-base" /></div>
    Para llevarse pensando
  </div>
  <p class="text-slate-400 leading-snug">Mocks y profiles resuelven el mismo problema —aislar la unidad de sus dependencias externas— desde distintos niveles: uno dentro de un test unitario, el otro configurando toda la aplicación para testing local.</p>
</div>
