---
layout: two-cols
layoutClass: gap-8
transition: fade-out
---

# Plantilla + datos

<span class="kicker">La Vista es un HTML con huecos</span>

```html
<h1>Mis tareas</h1>
<ul>
  <li th:each="t : ${tareas}"
      th:text="${t.titulo}">
  </li>
</ul>
```

<div class="kw-row mt-4">
<span class="kw kw-m">M: Service</span>
<span class="kw kw-v">V: plantilla</span>
<span class="kw kw-c">C: Controller</span>
</div>

::right::

<div class="h-[5.6rem]"></div>

```html
<h1>Mis tareas</h1>
<ul>
  <li>Comprar pan</li>
  <li>Estudiar MVC</li>
</ul>
```

<div class="text-center text-xl mt-2 text-slate-300">⬆ lo que recibe el navegador</div>

<div class="kw-row mt-6">
<span class="kw kw-x">Thymeleaf</span>
<span class="kw kw-x">JSP</span>
<span class="kw kw-x">PHP</span>
<span class="kw kw-x">Django</span>
</div>

<!--
- Izquierda: la plantilla (Thymeleaf, el motor que se usa con Spring). No hace falta entender la sintaxis: "por cada tarea, poné un <li> con su título".
- Derecha: lo que sale del servidor después de completar la plantilla con los datos.
- MVC acá:
  - Modelo: el Service / dominio que da las tareas.
  - Vista: la plantilla.
  - Controlador: el @Controller que atiende GET /tareas y elige qué plantilla usar.
- Toda la M, V y C están en el SERVIDOR. Esto es importante para comparar con lo que viene.
- Otros motores de plantillas: JSP (Java viejo), PHP (Wikipedia, WordPress), Django (Python), Rails (Ruby).
-->
