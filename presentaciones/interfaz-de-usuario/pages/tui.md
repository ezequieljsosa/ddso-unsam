---
transition: fade-out
---

# 🖥️ Aplicaciones de consola (TUI)

<span class="kicker">Pantalla completa... hecha de texto</span>

```text
 CPU [||||||||||||          48%]    Tareas: 132
 Mem [||||||||||||||||  3.1G/7.7G]

  PID  USUARIO  CPU%  COMANDO
 1234  eze      32.0  java -jar app.jar
 5678  eze      12.5  firefox
  910  root      1.2  sshd

 F3 Buscar   F6 Ordenar   F9 Matar   F10 Salir
```

<div class="kw-row mt-4">
<span class="kw">ncurses</span>
<span class="kw">teclado</span>
<span class="kw">se redibuja</span>
<span class="kw kw-x">htop</span>
<span class="kw kw-x">vim</span>
<span class="kw kw-x">nano</span>
</div>

<!--
- Esto es una maqueta de htop. Demo en vivo si hay terminal: `htop` (o `top`).
- TUI = Text User Interface. Sigue siendo texto, pero ahora el programa controla TODA la pantalla: puede escribir en cualquier posición, usar colores, armar "ventanas" de texto.
- ncurses: la librería clásica de Unix que hace esto posible.
- Diferencia clave con CLI: el programa NO termina. Queda vivo, esperando teclas.
- Otros ejemplos: vim, nano, Midnight Commander, el instalador de Debian, y las "pantallas verdes" de sistemas de bancos, supermercados o aerolíneas (AS/400), que todavía se usan en muchos mostradores.
-->
