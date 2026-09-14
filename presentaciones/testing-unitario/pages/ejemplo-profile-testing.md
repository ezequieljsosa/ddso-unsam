---
transition: fade-out
class: compact-slide
---

# El repositorio falso
<span class="text-violet-400 font-semibold tracking-wider uppercase text-xs">InMemoryTareaRepository: mismo contrato, sin base de datos</span>

```java
@Repository
@Profile("test")
class InMemoryTareaRepository implements TareaRepository {

  private final Map<Long, Tarea> datos = new HashMap<>();
  private long siguienteId = 1;

  public Tarea guardar(Tarea t) {
    t.setId(siguienteId++);
    datos.put(t.getId(), t);
    return t;
  }

  public List<Tarea> listar() {
    return new ArrayList<>(datos.values());
  }
}
```

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-violet-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:idea class="text-base" /></div>
    Mismo contrato que la implementación real
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Implementa <span class="font-mono">TareaRepository</span> igual que <span class="font-mono">JpaTareaRepository</span>, pero guarda en un <span class="font-mono">Map</span>. El resto de la aplicación no nota la diferencia.</p>
</div>
