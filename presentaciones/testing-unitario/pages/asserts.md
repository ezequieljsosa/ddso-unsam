---
transition: fade-out
---

# Assertions: verificar el resultado
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs">La parte del test que realmente decide si pasó o falló</span>

<div class="grid grid-cols-3 gap-3 mt-6">

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-emerald-400 mb-1 font-mono">assertEquals(esperado, actual)</div>
    <p class="text-[11px] text-slate-400 leading-snug">Compara el valor esperado contra el obtenido. La más usada de todas.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-blue-400 mb-1 font-mono">assertTrue / assertFalse</div>
    <p class="text-[11px] text-slate-400 leading-snug">Verifican que una expresión booleana sea verdadera o falsa.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-amber-400 mb-1 font-mono">assertNotNull / assertNull</div>
    <p class="text-[11px] text-slate-400 leading-snug">Verifican que una referencia exista (o no).</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-rose-400 mb-1 font-mono">assertThrows(Excepcion.class, ...)</div>
    <p class="text-[11px] text-slate-400 leading-snug">Verifica que ejecutar un bloque de código lance la excepción esperada.</p>
  </div>

  <div class="gamma-card p-3 text-xs">
    <div class="font-bold text-cyan-400 mb-1 font-mono">assertAll(...)</div>
    <p class="text-[11px] text-slate-400 leading-snug">Agrupa varias verificaciones: si una falla, las demás igual se ejecutan y se reportan juntas.</p>
  </div>

  <div class="gamma-card p-3 relative text-xs">
    <div class="glow-bg bg-purple-500/5 bottom-[-20px] right-[-20px]"></div>
    <div class="font-bold text-white mb-1 flex items-center gap-1.5">
      <div class="text-purple-400"><carbon:rule class="text-base" /></div>
      Un solo fallo alcanza
    </div>
    <p class="text-[11px] text-slate-400 leading-snug">Si un <span class="font-mono">assert</span> falla, el test se corta ahí (excepto dentro de <span class="font-mono">assertAll</span>) y se marca como fallido.</p>
  </div>

</div>

```java
assertThrows(ArithmeticException.class, () -> calc.dividir(1, 0));

assertAll(
  () -> assertEquals(5, calc.sumar(2, 3)),
  () -> assertTrue(calc.esPositivo(5))
);
```
