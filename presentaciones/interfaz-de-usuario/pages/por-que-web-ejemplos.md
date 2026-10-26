---
transition: fade-out
class: zoom-08
---

# De la caja al navegador

```mermaid
graph LR
  A["💿 Photoshop"] --> A2["🌐 Canva"]
  B["💿 Office"] --> B2["🌐 Google Docs"]
  C["💿 Sketch"] --> C2["🌐 Figma"]
  D["💿 Outlook"] --> D2["🌐 Gmail"]

  classDef default fill:#ffffff14,stroke:#94a3b8,stroke-width:2px,color:#e2e8f0;
  classDef w fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class A2,B2,C2,D2 w;
```

<!--
- Ejemplos concretos de apps que eran de escritorio y hoy tienen su versión web (o fueron reemplazadas por una web):
  - Adobe sacó Photoshop para navegador (Photoshop web); Canva es 100% web y le comió mercado a herramientas de diseño simples.
  - Office → Office 365 / Google Docs: el caso más claro de colaboración en vivo.
  - Sketch (solo Mac, escritorio) perdió contra Figma (web, colaborativo). Caso de estudio famoso.
  - Outlook / Thunderbird → Gmail.
- Notar que las versiones web suelen usar render en el cliente (mucha interacción), con un servidor que les da los datos.
-->
