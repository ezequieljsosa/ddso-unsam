---
transition: fade-out
---

# 🗓️ Batch

<span class="kicker">Todo junto, de una vez, a la noche</span>

```mermaid
graph LR
  R["🕑 02:00 h"] --> B["⚙️ Proceso batch"]
  D[("📄 1.000.000 de registros")] --> B
  B --> S["📑 Resultados"]

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef app fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class B app;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">💰 liquidación de sueldos</span>
<span class="kw kw-x">🏦 intereses de plazos fijos</span>
<span class="kw kw-x">💡 facturas de luz del mes</span>
</div>

<!--
- Batch = lote. Procesa una gran cantidad de datos de una sola vez, normalmente disparado por un HORARIO (todas las noches a las 2, el último día del mes).
- Casos de uso:
  - Liquidación de sueldos: a fin de mes, para cada empleado, calcular sueldo, descuentos, aportes, y generar los recibos y el archivo para el banco.
  - Cierre diario del banco: a la noche, calcular los intereses de TODOS los plazos fijos.
  - La empresa de luz genera millones de facturas una vez por mes.
- ¿Por qué no hacerlo de a uno, en el momento? Porque procesar todo junto es mucho más eficiente, y porque muchas reglas son "por período" (el mes, el día).
- ¿Por qué a la noche? Para no competir por los recursos con los usuarios que usan la web durante el día.
-->
