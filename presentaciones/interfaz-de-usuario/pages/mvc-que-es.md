---
transition: fade-out
---

# MVC: Modelo · Vista · Controlador

<div class="kw-row mb-4">
<span class="kw kw-m">🧠 Modelo = qué sé</span>
<span class="kw kw-v">🖼️ Vista = qué muestro</span>
<span class="kw kw-c">🎮 Controlador = qué hago</span>
</div>

```mermaid
graph LR
  U(["👩 Usuario"]) -->|"acción"| C["🎮 Controlador"]
  C -->|"pide / cambia"| M["🧠 Modelo"]
  C -->|"elige"| V["🖼️ Vista"]
  V -->|"lee"| M
  V -->|"muestra"| U

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V v;
  class C c;
```

<!--
- Origen: Trygve Reenskaug, Xerox PARC, 1979, para Smalltalk-80. Tiene casi 50 años y sigue vigente.
- Analogía del restaurante:
  - Controlador = el mozo: recibe el pedido y sabe a quién pasárselo.
  - Modelo = la cocina: tiene los ingredientes y sabe cocinar (las reglas).
  - Vista = el emplatado: cómo te llega lo que pediste.
- Idea central: separar lo que se MUESTRA de lo que se SABE. Si mañana cambio el emplatado, la cocina no se entera.
- Recordar los colores: verde Modelo, violeta Vista, ámbar Controlador. Se repiten en toda la clase.
-->
