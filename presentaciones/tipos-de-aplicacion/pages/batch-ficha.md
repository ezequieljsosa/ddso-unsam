---
transition: fade-out
---

# 🗓️ Batch: la ficha

<div class="ficha">
<div><div class="k">👤 Usuario</div><div class="v">nadie: un horario</div></div>
<div><div class="k">⚡ Disparador</div><div class="v">⏰ reloj (cron)</div></div>
<div class="hot"><div class="k">⏱️ Tiempo</div><div class="v">minutos a horas</div></div>
<div><div class="k">⏳ ¿Alguien espera?</div><div class="v">no, pero hay hora límite</div></div>
<div class="hot"><div class="k">📦 Volumen</div><div class="v">millones de registros</div></div>
<div><div class="k">🟢 Disponibilidad</div><div class="v">en su ventana: 00 a 06 h</div></div>
<div><div class="k">📈 Escalabilidad</div><div class="v">partir y procesar en paralelo</div></div>
<div class="hot"><div class="k">💥 Si falla...</div><div class="v">reanudar donde quedó</div></div>
</div>

<!--
- Acá cambia la métrica de eficiencia: no importa cuánto tarda UN registro, importa cuántos registros por segundo procesa (rendimiento o "throughput").
- Nadie espera... pero hay una hora límite: la "ventana batch". Si el cierre del banco no termina antes de las 6, a la mañana los saldos no están actualizados. Si la liquidación no termina, no se cobra el sueldo.
- Escalabilidad: si el volumen crece, se parte el lote (por ejemplo, por sucursal) y se procesan las partes en paralelo.
- Si falla: no queremos arrancar de cero un proceso de 4 horas que se cayó en la hora 3. Se guardan "puntos de control" (checkpoints) para reanudar desde donde quedó.
- En Java existe Spring Batch, que trae resuelto justamente esto.
-->
