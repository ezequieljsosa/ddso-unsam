---
transition: fade-out
---

# La Vista se muda al navegador

```mermaid
graph LR
  L1(["Render server"]) ~~~ A1["🖥️ Servidor"]
  A1 -->|"HTML completo"| B1["🌐 Pantalla"]
  L2(["Render cliente"]) ~~~ A2["🖥️ Servidor"]
  A2 -->|"solo datos"| B2["⚡ JavaScript"]
  B2 -->|"arma la Vista"| B3["🌐 Pantalla"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef lbl fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class B2 v;
  class L1,L2 lbl;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">Gmail</span>
<span class="kw kw-x">Google Maps</span>
<span class="kw kw-x">Figma</span>
<span class="kw">React · Angular · Vue</span>
</div>

<!--
- Con JavaScript aparece otra opción: el servidor manda SOLO LOS DATOS y el JavaScript en el navegador arma la vista.
- Ejemplo: Google Maps. Arrastrás el mapa y aparecen calles nuevas SIN recargar la página. El JS pide al servidor "dame los datos de esta zona" y dibuja.
- Gmail: abrís un mail y no se recarga toda la página, solo cambia el panel.
- Se las llama SPA (Single Page Application). Herramientas: React, Angular, Vue.
- En MVC: la Vista (y parte del Controlador) se mudó al navegador. El Modelo sigue en el servidor.
- Hoy se combinan ambas: primera carga renderizada en el servidor (rápida, buena para Google) y después JS toma el control (Next.js, Nuxt). No hace falta entrar en eso.
- Pregunta: si el servidor ahora manda "solo datos", ¿no es eso para lo que sirve una API? → Sí, ya llegamos.
-->
