---
transition: fade-out
---

# `git log` en MVC

```mermaid
graph LR
  U(["👩 git log -3"]) --> C["🎮 Lee argumentos"]
  C -->|"dame 3 commits"| M[("🧠 Repo .git")]
  C --> V["🖼️ Texto impreso"]
  V --> U

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class V v;
  class C c;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-m">Mismo .git</span>
<span class="kw">→</span>
<span class="kw kw-v">GitHub web</span>
<span class="kw kw-v">VS Code</span>
<span class="kw kw-v">GitKraken</span>
</div>

<!--
- Controlador: la parte de git que interpreta "log -3" y decide qué hacer.
- Modelo: la carpeta .git (commits, ramas). Ahí están las reglas: qué es un commit, cómo se encadenan.
- Vista: el formato del texto que se imprime (con --oneline cambia la vista, NO el modelo).
- Ejemplo de que el Modelo se queda: el mismo repositorio .git lo ves desde GitHub web, desde el panel de VS Code o desde GitKraken. Muchas vistas, un solo modelo.
- Pregunta para la clase: si agrego `--graph`, ¿qué letra cambié? → la Vista.
-->
