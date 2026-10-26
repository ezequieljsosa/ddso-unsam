---
transition: fade-out
---

# Cada clic = página nueva

```mermaid
graph LR
  P1["📄 Lista"] -->|"clic"| F["📄 Form"]
  F -->|"POST"| S["🖥️ Servidor"]
  S -->|"HTML"| P2["📄 Lista nueva"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef s fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class S s;
```

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="kw-row flex-col items-start!">
<span class="kw kw-ok">✅ simple</span>
<span class="kw kw-ok">✅ cliente liviano</span>
<span class="kw kw-ok">✅ Google lo lee</span>
</div>
<div class="kw-row flex-col items-start!">
<span class="kw kw-bad">⚠️ recarga todo</span>
<span class="kw kw-bad">⚠️ cada acción viaja</span>
</div>
</div>

<!--
- Cada interacción (un clic en un link, enviar un formulario) viaja al servidor y vuelve una página ENTERA nueva. Se ve el "parpadeo" de la recarga.
- Ventajas:
  - Simple de programar y de razonar: todo está en un solo lugar.
  - Funciona en cualquier navegador, incluso en PCs o celulares viejos.
  - Los buscadores (Google) leen el HTML directamente → bueno para SEO.
  - Actualizar = cambiar el servidor. Todos los usuarios ven la versión nueva al instante.
- Desventajas: cada acción tarda un viaje de red; para cosas muy interactivas (arrastrar, dibujar) no alcanza.
- Ejemplos: Wikipedia, sistemas de gestión universitaria (tipo SIU Guaraní), muchos homebanking y sistemas internos de empresas.
-->
