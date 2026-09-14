---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
class: compact-slide
---

# La anotación `@Profile`
<span class="text-violet-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Elegir qué implementación registra Spring</span>

Los archivos `.properties` cambian **valores**. **`@Profile`** va más allá: elige qué **bean** se registra según el profile activo.

- Se pone sobre `@Component` / `@Repository` / `@Service`, o un método `@Bean`.
- **`@Profile("test")`**: el bean se crea solo si `test` está activo.
- **`@Profile("!test")`**: se crea cuando `test` **no** está activo.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-violet-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:link class="text-base" /></div>
    El resto del código no cambia
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">El <span class="font-mono">Service</span> sigue pidiendo la interfaz <span class="font-mono">TareaRepository</span> por constructor. Spring decide, según el profile, qué implementación inyectarle.</p>
</div>

::right::

<span class="text-[9px] font-bold text-violet-400 mb-1.5 tracking-wider uppercase block">TareaRepository (dos implementaciones)</span>

```java
public interface TareaRepository {
  Tarea guardar(Tarea t);
  List<Tarea> listar();
}

@Repository
@Profile("!test")
class JpaTareaRepository
    implements TareaRepository {
  // usa la base real
}

@Repository
@Profile("test")
class InMemoryTareaRepository
    implements TareaRepository {
  // guarda en un Map
}
```
