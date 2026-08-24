---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# La Entity
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-2 block">El modelo de dominio, mapeado a una tabla</span>

- **`@Entity`** le dice a JPA que esta clase se mapea a una tabla.
- **`@Id`** marca la clave primaria.
- **`@GeneratedValue`** delega en la base la generación del id.
- El resto son atributos comunes: cada uno se mapea a una columna.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-amber-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-amber-400"><carbon:data-base class="text-base" /></div>
    JPA / Hibernate
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">JPA es el estándar; Hibernate es la implementación que Spring Data usa por defecto para traducir objetos Java en filas de una tabla.</p>
</div>

::right::

<span class="text-[9px] font-bold text-amber-400 mb-1.5 tracking-wider uppercase block">Tarea.java</span>

```java
@Entity
public class Tarea {

  @Id
  @GeneratedValue(
    strategy = GenerationType.IDENTITY
  )
  private Long id;

  private String titulo;
  private boolean completada;

  // getters y setters
}
```
