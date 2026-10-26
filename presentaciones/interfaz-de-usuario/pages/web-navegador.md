---
transition: fade-out
class: zoom-15
---

# 🌐 La Web

<span class="kicker">El navegador: un cliente universal</span>

```mermaid
graph LR
  N(["🌐 Navegador"]) -->|"GET /tareas"| S["🖥️ Servidor"]
  S -->|"HTML"| N

  classDef default fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">instalar = escribir una URL</span>
</div>

<!--
- Ya lo vieron en la clase de HTTP: el navegador pide, el servidor responde.
- Todos los sistemas operativos ya traen un navegador. El navegador sabe "dibujar" HTML.
- Entonces: si mi programa genera HTML, cualquiera con un navegador lo puede usar. Sin instalar nada.
- Pregunta clave para lo que sigue: ¿quién arma ese HTML? → El servidor. Eso es el "render en el servidor".
-->
