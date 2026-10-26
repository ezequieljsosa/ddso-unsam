---
transition: fade-out
---

# El mapa: ¿cuánto puede tardar?

<div class="regla mt-8">
<div class="celda"><span class="kw kw-x">🔌 API</span></div>
<div class="celda"><span class="kw kw-x">🌐 Web</span></div>
<div class="celda"><span class="kw kw-x">📨 Worker</span><span class="kw kw-x">📊 Analítica</span></div>
<div class="celda"><span class="kw kw-x">🗓️ Batch</span></div>
<div class="celda col-span-3"><span class="kw w-full justify-center">⌨️ CLI: depende del comando</span></div>
<div></div>
<div class="eje">milisegundos</div>
<div class="eje">&lt; 1 segundo</div>
<div class="eje">segundos a minutos</div>
<div class="eje">horas</div>
</div>

<div class="kw-row justify-center mt-10">
<span class="kw">⬅️ alguien espera</span>
<span class="kw">nadie espera ➡️</span>
</div>

<!--
- Este mapa vuelve a lo largo de la clase. Ordena los tipos por tiempo de respuesta esperado.
- A la izquierda: hay alguien bloqueado esperando (una persona o un programa). Cada milisegundo cuenta.
- A la derecha: nadie está mirando. Importa más terminar bien y procesar mucho que responder rápido.
- La CLI cruza varias columnas: `git status` tarda milisegundos, `docker build` puede tardar minutos.
- Ojo: son órdenes de magnitud, no reglas exactas.
-->
