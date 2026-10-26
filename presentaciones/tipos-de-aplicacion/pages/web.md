---
transition: fade-out
---

# 🌐 Aplicación web

<span class="kicker">Una persona, un navegador, una respuesta ya</span>

```mermaid
graph LR
  U(["👩 Persona"]) -->|"clic"| W["🌐 App web"]
  W -->|"consulta"| D[("🗄️ Datos")]
  W -->|"página en menos de 1 s"| U

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef app fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class W app;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">🏦 consultar saldo</span>
<span class="kw kw-x">🛒 buscar en MercadoLibre</span>
<span class="kw kw-x">🎓 inscribirse a materias</span>
</div>

<!--
- Una persona usa un navegador. Hace clic, la aplicación hace una consulta (lee o escribe pocos datos) y devuelve una página.
- Casos de uso claros:
  - Consultar el saldo en el homebanking.
  - Buscar "zapatillas" en MercadoLibre.
  - Inscribirse a materias en el sistema de la facultad.
- Lo que la define: hay una persona MIRANDO la pantalla. Se suele citar que si una página tarda más de unos 3 segundos, una buena parte de los usuarios se va.
- Otra característica: picos. El día de inscripción a materias o en un Hot Sale, la carga se multiplica en minutos.
-->
