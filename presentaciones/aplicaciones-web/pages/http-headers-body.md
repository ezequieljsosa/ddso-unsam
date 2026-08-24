---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Anatomía de HTTP
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Línea inicial, headers y body</span>

Todo mensaje HTTP (pedido o respuesta) tiene la misma forma:

- **Línea inicial:** método + recurso + versión (pedido) o versión + código + motivo (respuesta).
- **Headers:** metadatos clave-valor sobre el mensaje.
- **Body (opcional):** los datos, muchas veces en formato JSON.

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-cyan-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1.5 flex items-center gap-1.5">
    <div class="text-cyan-400"><carbon:tag class="text-base" /></div>
    Headers comunes
  </div>
  <p class="text-[11px] text-slate-400 leading-snug"><span class="font-mono text-cyan-300">Content-Type</span> (qué formato tiene el body), <span class="font-mono text-cyan-300">Authorization</span> (credenciales) y <span class="font-mono text-cyan-300">Accept</span> (qué formato espera recibir el cliente).</p>
</div>

::right::

<span class="text-[9px] font-bold text-cyan-400 mb-1.5 tracking-wider uppercase block">Request</span>

```
POST /tareas HTTP/1.1
Host: api.ddso.unsam.edu.ar
Content-Type: application/json
Accept: application/json

{
  "titulo": "Leer sobre HTTP",
  "completada": false
}
```

<span class="text-[9px] font-bold text-emerald-400 mb-1.5 mt-3 tracking-wider uppercase block">Response</span>

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 42,
  "titulo": "Leer sobre HTTP",
  "completada": false
}
```
