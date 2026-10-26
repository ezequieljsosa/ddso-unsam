---
transition: fade-out
---

# htop en MVC

```mermaid
graph LR
  U(["👩 F6"]) --> C["🎮 ¿Qué tecla?"]
  C -->|"ordenar"| M["🧠 Procesos"]
  M -->|"cambié"| V["🖼️ Redibuja"]
  V --> U

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V v;
  class C c;
```

<div class="kw-row justify-center mt-6">
<span class="kw">🔁 esperar</span>
<span class="kw">→</span>
<span class="kw">reaccionar</span>
<span class="kw">→</span>
<span class="kw">redibujar</span>
</div>

<!--
- Aparece el "bucle de eventos": el programa espera una tecla, la procesa y vuelve a dibujar. Para siempre, hasta F10.
- Controlador: el código que dice "F6 = ordenar, F9 = matar proceso".
- Modelo: la lista de procesos del sistema operativo.
- Vista: el dibujo en pantalla.
- Detalle interesante: el Modelo cambia SOLO (aparecen y mueren procesos). Por eso la flecha "cambié" va del Modelo a la Vista: la vista se actualiza cada segundo aunque nadie toque nada.
-->
