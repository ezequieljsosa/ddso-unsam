---
transition: fade-out
---

# Photoshop en MVC

<span class="kicker">Un Modelo, muchas Vistas</span>

```mermaid
graph LR
  U(["👩 Oculta capa"]) --> C["🎮 Clic en 👁"]
  C --> M["🧠 Documento y capas"]
  M -.->|"avisa"| V1["🖼️ Lienzo"]
  M -.->|"avisa"| V2["🖼️ Panel de capas"]
  M -.->|"avisa"| V3["🖼️ Historial"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V1,V2,V3 v;
  class C c;
```

<div class="kw-row justify-center mt-4">
<span class="kw kw-m">el Modelo avisa "cambié"</span>
<span class="kw kw-v">cada Vista se actualiza</span>
</div>

<!--
- Este es el MVC "original" de Smalltalk, pensado justamente para interfaces gráficas.
- Ocultar una capa: el Controlador recibe el clic y le dice al Modelo "capa Logo: oculta".
- El Modelo cambia y AVISA a todos los interesados (patrón Observer). Tres vistas distintas se actualizan solas:
  - el lienzo deja de mostrar el logo,
  - el panel de capas muestra el ojito tachado,
  - el historial agrega "Ocultar capa" (para poder deshacer).
- Ejemplo más cotidiano: Excel. Cambiás un número en una celda y el gráfico que usa esa celda se redibuja solo. Celda y gráfico = dos vistas del mismo modelo.
-->
