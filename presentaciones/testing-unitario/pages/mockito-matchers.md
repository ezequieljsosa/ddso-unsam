---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Matchers de parámetros
<span class="text-purple-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Cuando no importa el valor exacto</span>

A veces no querés programar el mock para un argumento exacto, sino para **cualquier** valor que cumpla cierta condición. Mockito ofrece matchers:

- **`any()`** / **`anyString()`** / **`anyInt()`** / **`anyLong()`** — cualquier valor de ese tipo.
- **`eq(valor)`** — un valor exacto (útil al mezclar con otros matchers).
- **`argThat(condicion)`** — una condición custom con una lambda.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-purple-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-purple-400"><carbon:rule class="text-base" /></div>
    Regla de oro: no mezclar matchers con literales
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Si un argumento usa un matcher, <strong>todos</strong> los argumentos de esa llamada deben usar matchers. <span class="font-mono text-rose-400">buscar(any(), "x")</span> lanza <span class="font-mono">InvalidUseOfMatchersException</span>; hay que escribir <span class="font-mono text-emerald-400">buscar(any(), eq("x"))</span>.</p>
</div>

::right::

<span class="text-[9px] font-bold text-purple-400 mb-1.5 tracking-wider uppercase block">PedidoServiceTest.java</span>

```java
@Test
void guardaCualquierPedidoValido() {
  when(repository.guardar(any()))
    .thenReturn(true);

  service.crear(
    new Pedido(null, "Teclado"));

  verify(repository)
    .guardar(argThat(p ->
      p.getProducto()
        .equals("Teclado")));
}

@Test
void buscaPorIdYPorNombre() {
  service.buscar(1L, "Mouse");

  verify(repository)
    .buscar(eq(1L), anyString());
}
```
