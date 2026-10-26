---
transition: fade-out
---

# ⌨️ Línea de comandos (CLI)

<span class="kicker">La interfaz es texto</span>

```bash
$ git log --oneline -3
a1b2c3d Agrega login
e4f5a6b Corrige precios
c7d8e9f Primer commit
```

<div class="kw-row mt-6">
<span class="kw">escribo un comando</span>
<span class="kw">→</span>
<span class="kw">imprime</span>
<span class="kw">→</span>
<span class="kw">termina</span>
</div>

<div class="kw-row mt-4">
<span class="kw kw-x">git</span>
<span class="kw kw-x">mvn</span>
<span class="kw kw-x">docker</span>
<span class="kw kw-x">ls</span>
</div>

<!--
- Demo en vivo: abrir una terminal y correr `git status` / `git log --oneline` en este mismo repo.
- Características:
  - Entrada: un comando con argumentos (log, --oneline, -3).
  - Salida: texto plano.
  - El programa arranca, hace su trabajo, imprime y TERMINA. No queda nada "abierto".
- Ventaja enorme: se puede automatizar. Un script puede encadenar comandos (esto vuelve más adelante con las APIs).
- Desventaja: hay que saberse los comandos. Poco amigable para usuarios no técnicos.
- Ya usaron una: `mvn` en la clase de Spring Boot.
-->
