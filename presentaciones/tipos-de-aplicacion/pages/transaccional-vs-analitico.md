---
transition: fade-out
---

# Transaccional vs. Analítico

<span class="kicker">Registrar el día a día vs. entender el negocio</span>

<div class="grid grid-cols-2 gap-6 mt-4">
<div class="gamma-card big-card">
<div class="label">🧾 Transaccional</div>
<div class="text-xl text-amber-300 font-bold mt-2">"Vendé este producto"</div>
<div class="kw-row flex-col mt-3">
<span class="kw">muchas operaciones chicas</span>
<span class="kw">lee y escribe</span>
<span class="kw">milisegundos</span>
</div>
</div>
<div class="gamma-card big-card">
<div class="label">📊 Analítico</div>
<div class="text-xl text-amber-300 font-bold mt-2">"¿Cuánto vendimos por provincia?"</div>
<div class="kw-row flex-col mt-3">
<span class="kw">pocas consultas enormes</span>
<span class="kw">solo lee</span>
<span class="kw">segundos a minutos</span>
</div>
</div>
</div>

<!--
- Hasta ahora casi todo lo que vimos (web, API, worker) es TRANSACCIONAL: registra lo que pasa en el día a día. Una venta, una transferencia, una inscripción. Cada operación toca pocos datos y tiene que ser rápida y correcta.
- Un sistema ANALÍTICO responde preguntas sobre el negocio mirando mucha historia:
  - "¿Cuánto vendimos por provincia este año contra el anterior?"
  - "¿Qué productos se compran juntos?"
  - "¿En qué horario se cae más gente del carrito?"
- Cada una de esas consultas recorre millones de registros. Solo lee, nunca modifica.
- En la jerga: OLTP (procesamiento de transacciones en línea) vs. OLAP (procesamiento analítico en línea). No hace falta memorizar las siglas, sí la diferencia.
-->
