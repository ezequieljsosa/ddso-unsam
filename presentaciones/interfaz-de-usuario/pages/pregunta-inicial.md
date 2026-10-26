---
transition: fade-out
class: zoom-08
---

# ¿Quién usa nuestro sistema?

<span class="kicker">Pregunta inicial</span>

```mermaid
graph LR
  P(["👩 Persona"]) --> T["⌨️ Terminal"]
  P --> W["🌐 Web"]
  P --> M["📱 App"]
  R(["🤖 Otro sistema"]) --> A["🔌 API"]
  T --> D[("🧠 Mi sistema")]
  W --> D
  M --> D
  A --> D

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f733,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  class T,W,M,A v;
  class D m;
```

<!--
- Preguntar: ¿de cuántas formas usan su banco? Web, app del celular, cajero automático, y cuando pagan con Mercado Pago, otro sistema le habla al banco (API).
- Es el MISMO banco, las mismas cuentas, las mismas reglas. Lo que cambia es la "cara".
- Ojo: no todos los usuarios son personas. Un sistema que consume a otro también es un "usuario".
-->
