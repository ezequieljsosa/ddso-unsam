---
transition: fade-out
---

# Un e-commerce, muchos tipos

<span class="kicker">Una compra a lo largo del tiempo</span>

<div class="grid grid-cols-4 gap-4 mt-6">
<div class="momento gamma-card p-3"><div class="cuando">⚡ Al instante</div><span class="kw kw-x">🌐 Web: carrito</span><span class="kw kw-x">🔌 API: pago</span></div>
<div class="momento gamma-card p-3"><div class="cuando">⏳ Un minuto después</div><span class="kw kw-x">📨 Worker: mail</span><span class="kw kw-x">📨 Worker: factura</span></div>
<div class="momento gamma-card p-3"><div class="cuando">🌙 A la noche</div><span class="kw kw-x">🗓️ Batch: pagar vendedores</span><span class="kw kw-x">🗓️ Batch: copiar ventas</span></div>
<div class="momento gamma-card p-3"><div class="cuando">📈 Al otro día</div><span class="kw kw-x">📊 Tablero de ventas</span></div>
</div>

<div class="kw-row justify-center mt-8">
<span class="kw">⌨️ y para desplegar todo esto: docker, git, mvn</span>
</div>

<!--
- Un sistema real no es "un tipo": combina varios, cada uno con sus atributos.
- Recorrer la compra de unas zapatillas:
  - Al instante: la WEB muestra el carrito y confirma; por detrás llama a la API de pagos. Una persona está esperando: todo en menos de un segundo.
  - Un minuto después: un WORKER manda el mail de confirmación y otro pide la factura electrónica. Nadie espera; si el servicio de facturación está caído, se reintenta.
  - A la noche: un BATCH calcula cuánto hay que pagarle a cada vendedor (si es un marketplace) y otro copia las ventas del día al sistema analítico.
  - Al otro día: la gerencia mira el TABLERO de ventas (analítico).
  - Y los desarrolladores usan CLIs (docker, git, mvn) para construir y desplegar todas estas aplicaciones.
- Idea de diseño: separar en tipos permite darle a cada parte lo que necesita. No le pedimos a la liquidación nocturna que responda en milisegundos, ni a la web que procese un millón de registros.
-->
