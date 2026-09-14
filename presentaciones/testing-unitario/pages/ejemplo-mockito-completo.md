---
transition: fade-out
class: compact-slide
---

# Todo junto: un test con Mockito
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs">@Mock + @InjectMocks + when + verify</span>

```java
@ExtendWith(MockitoExtension.class)
class PedidoServiceTest {

  @Mock
  private PedidoRepository repository;

  @InjectMocks
  private PedidoService service;

  @Test
  void crearPedidoValidoLoPersiste() {
    Pedido pedido = new Pedido(null, "Teclado");
    when(repository.guardar(any())).thenReturn(true);

    boolean creado = service.crear(pedido);

    assertTrue(creado);
    verify(repository).guardar(pedido);
  }
}
```

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-rose-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-rose-400"><carbon:checkmark class="text-base" /></div>
    La receta completa
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Mockeás la dependencia (<span class="font-mono">@Mock</span>), inyectás la unidad real (<span class="font-mono">@InjectMocks</span>), programás el mock (<span class="font-mono">when</span>), ejecutás y verificás tanto el resultado (<span class="font-mono">assert</span>) como la interacción (<span class="font-mono">verify</span>).</p>
</div>
