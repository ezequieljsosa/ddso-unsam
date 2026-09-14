---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Mockito
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs mb-2 block">El framework de mocking más usado en Java</span>

**Mockito** permite crear mocks con muy poco código. Dos formas de crear uno:

- **`Mockito.mock(Clase.class)`**: crea un mock a mano, en cualquier lugar.
- **`@Mock`** (junto a `@ExtendWith(MockitoExtension.class)`): Mockito crea el mock por vos.
- **`@InjectMocks`**: crea la instancia real de la clase bajo test e **inyecta** los mocks anotados con `@Mock` en su constructor.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-rose-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-rose-400"><carbon:idea class="text-base" /></div>
    Qué NO hace Mockito solo
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Un mock recién creado no sabe qué responder: por defecto devuelve <span class="font-mono">null</span>, <span class="font-mono">0</span> o <span class="font-mono">false</span>. Hay que programarlo con <span class="font-mono text-emerald-400">when()</span>.</p>
</div>

::right::

<span class="text-[9px] font-bold text-rose-400 mb-1.5 tracking-wider uppercase block">PedidoServiceTest.java</span>

```java
@ExtendWith(MockitoExtension.class)
class PedidoServiceTest {

  @Mock
  private PedidoRepository
    repository;

  @InjectMocks
  private PedidoService service;

  @Test
  void ejemplo() {
    // repository es un mock
    // service es real, con el
    // mock ya inyectado
  }
}
```
