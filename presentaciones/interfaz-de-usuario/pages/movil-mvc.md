---
transition: fade-out
---

# Uber en MVC

```mermaid
graph LR
  U(["👩 Confirmar viaje"]) --> C["📱 🎮 Toque"]
  C -->|"POST /viajes"| API["☁️ 🔌 API"]
  API --> M["☁️ 🧠 Viajes y conductores"]
  API -->|"JSON"| V["📱 🖼️ Buscando conductor"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  classDef api fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class M m;
  class V v;
  class C c;
  class API api;
```

<div class="kw-row justify-center mt-4">
<span class="kw kw-v">Vista en el teléfono</span>
<span class="kw kw-m">Modelo en el servidor</span>
<span class="kw kw-x">API en el medio</span>
</div>

<!--
- Tocás "Confirmar viaje":
  1. El Controlador (en el teléfono) toma el toque y la ubicación del GPS.
  2. Llama a la API del servidor: POST /viajes con un JSON.
  3. El Modelo (en el servidor) aplica las reglas: busca conductores cerca, calcula precio.
  4. Responde JSON y la Vista del teléfono muestra "Buscando conductor...".
- Es como la SPA web, pero la Vista está hecha con componentes nativos del teléfono.
- Detalle: el servidor de Uber tiene UNA API que usan la app de Android, la de iOS, la web y la app de los conductores. Otra vez: muchas vistas, un modelo.
-->
