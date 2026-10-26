---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# 💬 Chatbots

<span class="kicker">La interfaz es una conversación</span>

<div class="kw-row flex-col items-start! mt-2">
<span class="kw">/comandos</span>
<span class="kw">botones</span>
<span class="kw">árbol de opciones</span>
</div>

<div class="kw-row mt-5">
<span class="kw kw-x">Telegram</span>
<span class="kw kw-x">WhatsApp</span>
<span class="kw kw-x">widget web</span>
</div>

::right::

<div class="chat">
<div class="chat-head">🤖 TurnosBot</div>
<div class="msg-out">/turnos</div>
<div class="msg-in">¿Qué especialidad?</div>
<div class="chat-btns"><span>Clínica</span><span>Pediatría</span><span>Dental</span></div>
<div class="msg-out">Dental</div>
<div class="msg-in">Martes 10:30 ✅ ¿Confirmo?</div>
<div class="chat-btns"><span>Sí</span><span>No</span></div>
</div>

<!--
- Maqueta de un bot de turnos en Telegram. Ejemplos reales: bots de Telegram, el WhatsApp de la empresa de cable o del banco, la burbujita de "¿Te ayudo?" abajo a la derecha en muchas webs.
- Es otra vez una interfaz de TEXTO, como la CLI... pero dentro de una app de chat que el usuario ya tiene instalada.
- El chatbot "clásico" NO entiende lenguaje libre: funciona con comandos (/turnos), botones y un árbol de opciones fijo armado por el programador. Si escribís algo fuera del guion → "No entendí, elegí una opción".
- Comparar con la CLI: comando + respuesta. La diferencia es que la conversación tiene ESTADO: el bot recuerda que estás en el paso "elegir especialidad".
- Ventaja: no hay que instalar nada nuevo ni aprender a usar una pantalla. Todo el mundo sabe chatear.
-->
