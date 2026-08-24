---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# El Service
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Orquesta, no decide reglas de UI ni de base</span>

- **`@Service`** marca la clase como un componente gestionado por Spring.
- Recibe el `Repository` **por constructor** (inyección de dependencias): nunca lo instancia con `new`.
- Expone los casos de uso de la aplicación: listar, crear, completar una tarea.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-indigo-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-indigo-400"><carbon:security class="text-base" /></div>
    ¿Por qué inyección por constructor?
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Deja explícito de qué depende la clase y permite instanciarla en un test sin levantar todo Spring.</p>
</div>

::right::

<span class="text-[9px] font-bold text-indigo-400 mb-1.5 tracking-wider uppercase block">TareaService.java</span>

```java
@Service
public class TareaService {

  private final TareaRepository repository;

  public TareaService(
      TareaRepository repository) {
    this.repository = repository;
  }

  public List<Tarea> listar() {
    return repository.findAll();
  }

  public Tarea crear(Tarea tarea) {
    return repository.save(tarea);
  }
}
```
