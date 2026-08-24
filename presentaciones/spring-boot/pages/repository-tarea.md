---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# El Repository
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-2 block">CRUD sin escribir una sola query</span>

Con Spring Data JPA, un Repository suele ser solo una **interface**: extender `JpaRepository<Entidad, TipoDeId>` ya te da `save`, `findAll`, `findById`, `deleteById`, etc.

Si necesitás una consulta específica, alcanza con **declarar el método** siguiendo una convención de nombres: Spring genera la implementación (y la query) automáticamente.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-blue-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:magic-wand-filled class="text-base" /></div>
    Query derivada del nombre
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono text-blue-300">findByCompletadaFalse()</span> se traduce sola a <span class="font-mono text-blue-300">WHERE completada = false</span>.</p>
</div>

::right::

<span class="text-[9px] font-bold text-blue-400 mb-1.5 tracking-wider uppercase block">TareaRepository.java</span>

```java
public interface TareaRepository
    extends JpaRepository<Tarea, Long> {

  List<Tarea> findByCompletadaFalse();

}
```

<div class="text-[10px] text-slate-400 text-center mt-3 max-w-[300px] mx-auto">Sin implementación propia: Spring genera un proxy en tiempo de ejecución.</div>
