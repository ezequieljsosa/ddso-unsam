---
transition: fade-out
---

# 📨 Worker: la ficha

<div class="ficha">
<div><div class="k">👤 Usuario</div><div class="v">otro sistema</div></div>
<div><div class="k">⚡ Disparador</div><div class="v">un mensaje</div></div>
<div class="hot"><div class="k">⏱️ Tiempo</div><div class="v">segundos a minutos</div></div>
<div class="hot"><div class="k">⏳ ¿Alguien espera?</div><div class="v">no</div></div>
<div><div class="k">📦 Volumen</div><div class="v">flujo constante, con ráfagas</div></div>
<div><div class="k">🟢 Disponibilidad</div><div class="v">puede pausar: los mensajes esperan</div></div>
<div><div class="k">📈 Escalabilidad</div><div class="v">sumar más workers</div></div>
<div class="hot"><div class="k">💥 Si falla...</div><div class="v">reintenta solo</div></div>
</div>

<!--
- Nadie espera: la persona ya recibió su "compra confirmada". Eso le da al worker la libertad de tardar segundos o minutos.
- Disponibilidad más relajada: si el worker se cae 10 minutos, los mensajes se acumulan en el buzón y se procesan cuando vuelve. Nadie pierde nada (el mail llega más tarde).
- Escalabilidad: si se acumulan muchos mensajes (ráfaga de compras en un Hot Sale), se levantan más workers en paralelo.
- Si falla: reintenta solo. Pero ojo con un problema clásico: si falló a la mitad, ¿el mail se mandó o no? Al reintentar podría mandarse DOS veces. Peor si es un cobro. Por eso se diseñan para que procesar el mismo mensaje dos veces dé el mismo resultado (se llama idempotencia).
-->
