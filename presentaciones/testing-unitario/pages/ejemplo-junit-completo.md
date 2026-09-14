---
transition: fade-out
class: compact-slide
---

# Todo junto: una clase de test completa
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs">@BeforeEach + @Test + Assertions</span>

```java
class CalculadoraTest {

  private Calculadora calc;

  @BeforeEach
  void setUp() {
    calc = new Calculadora();
  }

  @Test
  void sumaDeDosPositivosDaPositivo() {
    assertEquals(5, calc.sumar(2, 3));
  }

  @Test
  void dividirPorCeroLanzaExcepcion() {
    assertThrows(ArithmeticException.class, () -> calc.dividir(4, 0));
  }
}
```

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-emerald-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-emerald-400"><carbon:checkmark class="text-base" /></div>
    Lo que ya sabemos hacer
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Preparar un objeto limpio antes de cada test, ejecutar el método bajo prueba y verificar el resultado o la excepción esperada. Alcanza cuando la unidad bajo test <strong>no depende de nada externo</strong>.</p>
</div>
