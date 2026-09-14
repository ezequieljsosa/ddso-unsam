---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# `when()`: programar el mock
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Stubbing: "cuando te llamen así, respondé esto"</span>

`when(...)` le dice al mock qué devolver cuando se lo invoca con ciertos argumentos:

- **`when(mock.metodo(args)).thenReturn(valor)`** — devuelve un valor fijo.
- **`when(mock.metodo(args)).thenThrow(new Excepcion())`** — lanza una excepción.
- Sin `when()`, un método de un mock que devuelve un objeto responde `null`.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-emerald-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-emerald-400"><carbon:idea class="text-base" /></div>
    Esto es "Arrange"
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono">when()</span> configura el escenario <strong>antes</strong> de ejecutar el método bajo test. Es la parte "Arrange" del patrón AAA aplicada a un mock.</p>
</div>

::right::

<span class="text-[9px] font-bold text-emerald-400 mb-1.5 tracking-wider uppercase block">PedidoServiceTest.java</span>

```java
@Test
void buscarPedidoExistente() {
  Pedido pedido =
    new Pedido(1L, "Notebook");

  when(repository.buscarPorId(1L))
    .thenReturn(pedido);

  Pedido resultado =
    service.buscar(1L);

  assertEquals("Notebook",
    resultado.getProducto());
}

@Test
void repositorioFalla() {
  when(repository.buscarPorId(1L))
    .thenThrow(
      new RuntimeException());

  assertThrows(RuntimeException.class,
    () -> service.buscar(1L));
}
```
