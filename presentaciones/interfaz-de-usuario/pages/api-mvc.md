---
transition: fade-out
---

# Misma app, otra Vista

```mermaid
graph LR
  N(["🌐 Navegador"]) -->|"GET /tareas"| C1["🎮 Controller web"]
  R(["🤖 Otro sistema"]) -->|"GET /api/tareas"| C2["🎮 Controller API"]
  C1 --> M["🧠 TareaService"]
  C2 --> M
  C1 --> V1["🖼️ HTML"]
  C2 --> V2["🖼️ JSON"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V1,V2 v;
  class C1,C2 c;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-m">el dominio no se entera</span>
</div>

<!--
- Mismo sistema de tareas, dos "presentaciones":
  - Para personas: Controller que devuelve una plantilla HTML (render server).
  - Para máquinas: Controller que devuelve JSON. En Spring: @Controller vs @RestController.
- Los dos usan el MISMO TareaService. El dominio no sabe si del otro lado hay una persona o un programa.
- Prueba de buen diseño en capas: si para agregar la API tuve que tocar el dominio, algo estaba mal separado.
- Y la SPA de la slide anterior (Gmail, Maps) es justamente un cliente de una API.
-->
