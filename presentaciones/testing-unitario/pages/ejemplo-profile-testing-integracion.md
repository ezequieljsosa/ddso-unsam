---
transition: fade-out
class: compact-slide
---

# El test: aplicación real, base falsa
<span class="text-violet-400 font-semibold tracking-wider uppercase text-xs">@SpringBootTest + @ActiveProfiles("test")</span>

```java
@SpringBootTest
@ActiveProfiles("test")
class TareaServiceIntegrationTest {

  @Autowired
  private TareaService service;

  @Test
  void crearYListarTarea() {
    service.crear(new Tarea("Estudiar Mockito"));

    assertEquals(1, service.listarTodas().size());
  }
}
```

<div class="gamma-card p-3 relative mt-4 text-xs max-w-2xl">
  <div class="glow-bg bg-violet-500/5 top-[-20px] right-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-violet-400"><carbon:checkmark class="text-base" /></div>
    Complementa a los mocks, no los reemplaza
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Acá levantamos el <span class="font-mono">Service</span> real con Spring, pero con un <span class="font-mono">Repository</span> falso: útil para tests de integración locales. Para testear el <span class="font-mono">Service</span> aislado, seguís usando <span class="font-mono">Mockito</span> como antes.</p>
</div>
