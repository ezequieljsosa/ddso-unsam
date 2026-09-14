---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# El ciclo de vida: `@BeforeEach`
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Preparar el terreno antes de cada test</span>

Si varios tests necesitan el mismo objeto preparado, repetirlo en cada `@Test` es ruido. JUnit ofrece anotaciones de ciclo de vida:

- **`@BeforeEach`**: corre antes de **cada** test. Ideal para dejar todo en un estado limpio y conocido.
- **`@AfterEach`**: corre después de **cada** test (liberar recursos).
- **`@BeforeAll`** / **`@AfterAll`**: corren **una sola vez** por clase, deben ser `static`.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-blue-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:idea class="text-base" /></div>
    Por qué importa
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Cada test parte de un objeto <strong>nuevo</strong>: si un test lo modifica, no contamina a los demás.</p>
</div>

::right::

<span class="text-[9px] font-bold text-blue-400 mb-1.5 tracking-wider uppercase block">CalculadoraTest.java</span>

```java
class CalculadoraTest {

  private Calculadora calc;

  @BeforeEach
  void setUp() {
    calc = new Calculadora();
  }

  @Test
  void suma() {
    assertEquals(5,
      calc.sumar(2, 3));
  }

  @Test
  void resta() {
    assertEquals(1,
      calc.restar(3, 2));
  }
}
```
