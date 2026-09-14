---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
class: compact-slide
---

# Los archivos por profile
<span class="text-violet-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Un application.properties por entorno</span>

Spring Boot busca archivos **`application-{profile}.properties`** y los combina con el `application.properties` general.

- **`application.properties`**: configuración común a todos los entornos.
- **`application-test.properties`**: solo se aplica con el profile `test` activo.
- **`application-prod.properties`**: ídem para producción.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-violet-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:idea class="text-base" /></div>
    ¿Cómo se activa un profile?
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono text-violet-300">spring.profiles.active=test</span> (env var o arranque), o <span class="font-mono text-violet-300">@ActiveProfiles("test")</span> sobre la clase de test.</p>
</div>

::right::

<div class="gamma-card p-3 font-mono text-[11px] text-slate-300 leading-relaxed">
<div>src/</div>
<div>├── main/resources/</div>
<div>│&nbsp;&nbsp;&nbsp;├── <span class="text-slate-300">application.properties</span></div>
<div>│&nbsp;&nbsp;&nbsp;└── <span class="text-emerald-400">application-prod.properties</span></div>
<div>└── test/resources/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="text-violet-400">application-test.properties</span></div>
</div>

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-violet-500/5 bottom-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:data-base class="text-base" /></div>
    Base en memoria con H2
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">application-test.properties</span> puede apuntar el <span class="font-mono">datasource</span> a <span class="font-mono text-emerald-400">jdbc:h2:mem:testdb</span>: misma JPA, misma sintaxis SQL, sin infraestructura real.</p>
</div>
