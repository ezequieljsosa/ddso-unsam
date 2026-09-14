---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# La anotación `@Test`
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-2 block">JUnit 5, el framework estándar</span>

**JUnit** es el framework de testing más usado en Java. En su versión 5 (Jupiter), cada caso de prueba es un método marcado con **`@Test`**.

- Vive en el paquete `org.junit.jupiter.api`.
- El método debe ser `void`, sin parámetros y **no** `static`.
- Cada `@Test` es independiente: no debería depender del orden de ejecución.
- Por convención, la clase de test se llama `<Clase>Test`.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:rule class="text-base" /></div>
    Nombrá los tests por comportamiento
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Un buen nombre dice <em>qué</em> se espera: <span class="font-mono text-emerald-400">sumaDeDosPositivosDaPositivo()</span> es más útil que <span class="font-mono text-slate-500">test1()</span>.</p>
</div>

::right::

<span class="text-[9px] font-bold text-cyan-400 mb-1.5 tracking-wider uppercase block">CalculadoraTest.java</span>

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api
  .Assertions.assertEquals;

class CalculadoraTest {

  @Test
  void sumaDeDosPositivos() {
    Calculadora calc =
      new Calculadora();

    int resultado =
      calc.sumar(2, 3);

    assertEquals(5, resultado);
  }
}
```
