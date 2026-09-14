---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# `verify()`: verificar interacciones
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-2 block">"¿Se llegó a llamar a este método?"</span>

`when()` programa el mock; **`verify()`** comprueba que el mock haya sido **usado** de determinada forma. Es clave cuando el método bajo test no devuelve nada, pero debería producir un efecto.

- **`verify(mock).metodo(args)`** — se llamó exactamente una vez.
- **`verify(mock, times(2)).metodo(args)`** — se llamó exactamente 2 veces.
- **`verify(mock, never()).metodo(args)`** — nunca se llamó.
- **`verifyNoInteractions(mock)`** — no se interactuó con el mock en absoluto.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-blue-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-blue-400"><carbon:rule class="text-base" /></div>
    when vs. verify
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono text-emerald-400">when()</span> configura el <strong>Arrange</strong>. <span class="font-mono text-blue-400">verify()</span> es una forma más del <strong>Assert</strong>: en vez de revisar un valor devuelto, revisa una interacción.</p>
</div>

::right::

<span class="text-[9px] font-bold text-blue-400 mb-1.5 tracking-wider uppercase block">PedidoServiceTest.java</span>

```java
@Test
void crearPedidoLoGuarda() {
  Pedido pedido =
    new Pedido(null, "Mouse");

  service.crear(pedido);

  verify(repository)
    .guardar(pedido);
}

@Test
void pedidoInvalidoNoSeGuarda() {
  Pedido invalido =
    new Pedido(null, "");

  assertThrows(
    IllegalArgumentException.class,
    () -> service.crear(invalido));

  verify(repository, never())
    .guardar(any());
}
```
