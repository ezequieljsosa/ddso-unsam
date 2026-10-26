---
transition: fade-out
---

# Asistente con IA en MVC

<span class="kicker">El Controlador entiende lenguaje</span>

```mermaid
graph LR
  U(["👩 Pasalo al jueves"]) --> C["🎮 ✨ LLM"]
  C -->|"herramienta"| API["🔌 API de turnos"]
  API --> M["🧠 TurnoService"]
  C -->|"redacta"| V["🖼️ Listo, jueves 10:30"]

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

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">la IA usa nuestras APIs</span>
<span class="kw kw-m">el dominio decide</span>
</div>

<!--
- El gran cambio está en el Controlador: en vez de un "if comando == /turnos", hay un modelo de lenguaje que interpreta qué quiso decir el usuario y elige qué herramienta usar.
- Las herramientas son... APIs. Las mismas que vimos para "usuarios no humanos". El asistente es un usuario no humano más. Hay estándares para conectarlas, como MCP (Model Context Protocol).
- El Modelo (el dominio) sigue mandando: si el jueves no hay turnos, TurnoService lo rechaza, no importa lo que diga la IA. Las reglas de negocio NO se delegan al LLM.
- La Vista es texto generado: el LLM redacta la respuesta con los datos que devolvió la API.
- Mensaje de diseño: si mi sistema tiene un dominio bien separado y buenas APIs, conectarle un asistente con IA es "una cara más".
- Pregunta para la clase: ¿qué riesgo hay si la IA llama a una API de "borrar cuenta"? → permisos, confirmación del usuario, el dominio valida.
-->
