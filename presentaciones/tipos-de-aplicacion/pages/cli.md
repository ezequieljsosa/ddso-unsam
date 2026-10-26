---
transition: fade-out
---

# ⌨️ CLI: herramientas de línea de comandos

<span class="kicker">Para gente técnica, y para scripts</span>

```bash
$ docker run -p 8080:8080 mi-app
$ git push origin main
$ mvn package
$ aws s3 ls
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">🐳 docker</span>
<span class="kw kw-x">🌿 git</span>
<span class="kw kw-x">📦 mvn · npm</span>
<span class="kw kw-x">☁️ aws · gcloud · kubectl</span>
</div>

<!--
- Programas que se usan escribiendo comandos en una terminal. Su usuario es técnico: desarrolladores, operadores, administradores de sistemas.
- Casos de uso:
  - `docker run`: levantar mi aplicación dentro de un contenedor.
  - `git push`: subir mis cambios al repositorio.
  - `mvn package` / `npm install`: compilar, bajar dependencias.
  - `aws`, `gcloud`, `kubectl`: administrar infraestructura en la nube sin entrar a una web.
- Dato interesante: muchas CLIs son clientes de una API. `docker` le habla al servicio de Docker que corre en la máquina; `aws` le habla a la API de Amazon. La CLI es "una cara" más del sistema.
- Gran ventaja: se pueden automatizar. Un script o un pipeline de integración continua puede encadenar comandos sin que nadie toque el teclado.
-->
