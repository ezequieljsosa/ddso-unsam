---
transition: fade-out
---

# 🌐 Web: la ficha

<div class="ficha">
<div><div class="k">👤 Usuario</div><div class="v">persona</div></div>
<div><div class="k">⚡ Disparador</div><div class="v">clic</div></div>
<div class="hot"><div class="k">⏱️ Tiempo</div><div class="v">menos de 1 s</div></div>
<div class="hot"><div class="k">⏳ ¿Alguien espera?</div><div class="v">sí, mirando</div></div>
<div><div class="k">📦 Volumen</div><div class="v">muchos pedidos chicos</div></div>
<div><div class="k">🟢 Disponibilidad</div><div class="v">24/7</div></div>
<div class="hot"><div class="k">📈 Escalabilidad</div><div class="v">picos: Hot Sale</div></div>
<div><div class="k">💥 Si falla...</div><div class="v">error en pantalla</div></div>
</div>

<!--
- Los tres atributos en amarillo son los que mandan:
  - Tiempo: menos de un segundo por página. Todo lo que tarde más hay que sacarlo del camino (eso nos lleva a los workers).
  - Alguien espera: una persona con la pantalla enfrente.
  - Escalabilidad: hay que aguantar picos. Hot Sale, inscripción a materias, venta de entradas para un recital. Se suele resolver agregando más copias de la aplicación (escalar horizontalmente).
- Si falla: el usuario ve un error y, en general, vuelve a intentar él mismo.
- Pregunta disparadora: si al confirmar una compra la web tiene que mandar un mail, generar una factura y avisarle al depósito... ¿hacemos esperar al usuario todo eso? → No. Lo resolvemos más adelante.
-->
