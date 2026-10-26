---
transition: fade-out
---

# 🔌 API: la ficha

<div class="ficha">
<div><div class="k">👤 Usuario</div><div class="v">otro sistema</div></div>
<div><div class="k">⚡ Disparador</div><div class="v">pedido HTTP</div></div>
<div class="hot"><div class="k">⏱️ Tiempo</div><div class="v">milisegundos</div></div>
<div><div class="k">⏳ ¿Alguien espera?</div><div class="v">sí, otro programa</div></div>
<div><div class="k">📦 Volumen</div><div class="v">muchísimos pedidos chicos</div></div>
<div class="hot"><div class="k">🟢 Disponibilidad</div><div class="v">muy alta: 99,9 %</div></div>
<div><div class="k">📈 Escalabilidad</div><div class="v">crece con sus clientes</div></div>
<div><div class="k">💥 Si falla...</div><div class="v">el cliente reintenta</div></div>
</div>

<!--
- Tiempo: milisegundos, porque suele ser un eslabón de una cadena donde al final hay una persona esperando.
- Disponibilidad: si se cae la API de pagos, se caen las ventas de TODAS las tiendas que la usan. Por eso se firman acuerdos de nivel de servicio (SLA).
  - 99,9 % de disponibilidad suena altísimo, pero permite unas 8,8 horas de caída por año.
  - 99,99 % permite unos 53 minutos por año.
- Volumen: una API popular recibe muchísimos más pedidos que una web, porque la usan muchos sistemas a la vez.
- Si falla: el programa cliente decide. Puede reintentar, mostrar un error o usar un valor guardado. Por eso la API tiene que devolver errores claros (los códigos de estado HTTP).
-->
