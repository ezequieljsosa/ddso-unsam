---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# El Controller
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Donde HTTP se convierte en una llamada a Java</span>

- **`@RestController`** = `@Controller` + serialización automática a JSON del valor devuelto.
- **`@RequestMapping("/tareas")`** fija el prefijo de la URL para toda la clase.
- **`@GetMapping` / `@PostMapping`** conectan un método con un verbo HTTP.
- **`@RequestBody`** deserializa el JSON del pedido a un objeto Java.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:link class="text-base" /></div>
    Conectando con la Parte 1
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono text-emerald-400">GET /tareas</span> y <span class="font-mono text-blue-400">POST /tareas</span> son, literalmente, los métodos HTTP que ya vimos.</p>
</div>

::right::

<span class="text-[9px] font-bold text-cyan-400 mb-1.5 tracking-wider uppercase block">TareaController.java</span>

```java
@RestController
@RequestMapping("/tareas")
public class TareaController {

  private final TareaService service;

  public TareaController(
      TareaService service) {
    this.service = service;
  }

  @GetMapping
  public List<Tarea> listar() {
    return service.listar();
  }

  @PostMapping
  public Tarea crear(
      @RequestBody Tarea tarea) {
    return service.crear(tarea);
  }
}
```
