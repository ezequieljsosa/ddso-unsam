---
transition: fade-out
class: compact-slide
---

# Ejemplo: probar que se lanza una excepción
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs">assertThrows en acción, sin ningún mock todavía</span>

```java
class CuentaBancariaTest {

  private CuentaBancaria cuenta;

  @BeforeEach
  void setUp() {
    cuenta = new CuentaBancaria(100);
  }

  @Test
  void retirarMasDelSaldoLanzaExcepcion() {
    Exception ex = assertThrows(
      SaldoInsuficienteException.class,
      () -> cuenta.retirar(150)
    );

    assertEquals("Saldo insuficiente", ex.getMessage());
  }
}
```

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-rose-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-rose-400"><carbon:warning-alt class="text-base" /></div>
    Por qué la lambda
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">assertThrows</span> necesita <strong>ejecutar</strong> el código dentro del test para poder atrapar la excepción; por eso se le pasa como lambda (<span class="font-mono">() -&gt; ...</span>) en vez de llamar al método directamente. Si no se lanza nada, o se lanza otra excepción, el test falla igual.</p>
</div>
