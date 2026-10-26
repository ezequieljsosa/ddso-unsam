---
transition: fade-out
---

# ⌨️ CLI: la ficha

<div class="ficha">
<div class="hot"><div class="k">👤 Usuario</div><div class="v">desarrollador u operador</div></div>
<div><div class="k">⚡ Disparador</div><div class="v">un comando</div></div>
<div><div class="k">⏱️ Tiempo</div><div class="v">depende: ms a minutos</div></div>
<div><div class="k">⏳ ¿Alguien espera?</div><div class="v">sí, frente a la terminal</div></div>
<div><div class="k">📦 Volumen</div><div class="v">un usuario a la vez</div></div>
<div><div class="k">🟢 Disponibilidad</div><div class="v">corre local, cuando la uso</div></div>
<div><div class="k">📈 Escalabilidad</div><div class="v">casi no aplica</div></div>
<div class="hot"><div class="k">💥 Si falla...</div><div class="v">mensaje + código de salida</div></div>
</div>

<!--
- El usuario es lo que más la define: alguien técnico que sabe lo que quiere y prefiere escribir a hacer clics.
- Tiempo: muy variable. `git status` responde al instante; `docker build` puede tardar varios minutos. Lo importante es mostrar progreso para que el usuario sepa que no se colgó.
- Disponibilidad y escalabilidad casi no aplican: corre en mi máquina, para mí. (Lo que sí tiene que estar disponible es la API a la que muchas veces le habla.)
- Si falla: muestra un mensaje de error Y devuelve un código de salida (0 = salió bien, otro número = falló). Ese código es lo que permite automatizarla: un script se frena si un comando falló.
-->
