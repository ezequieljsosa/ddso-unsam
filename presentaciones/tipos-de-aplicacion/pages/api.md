---
transition: fade-out
---

# 🔌 API

<span class="kicker">Un sistema le pide algo a otro sistema</span>

```mermaid
graph LR
  T["🛒 Tienda online"] -->|"cobrar 15.000"| P["🔌 API de pagos"]
  P -->|"aprobado (JSON)"| T

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef app fill:#06b6d433,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
  class P app;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-x">💳 cobrar con Mercado Pago</span>
<span class="kw kw-x">💵 cotización del dólar</span>
<span class="kw kw-x">📍 calcular envío</span>
</div>

<div class="kw-row justify-center mt-4">
<span class="kw">contrato</span>
<span class="kw">JSON</span>
<span class="kw">HTTP</span>
</div>

<!--
- Una API recibe pedidos de OTROS PROGRAMAS, no de personas. Responde datos (casi siempre JSON).
- Casos de uso:
  - Una tienda online le pide a Mercado Pago que cobre una compra.
  - Una app de finanzas consulta la cotización del dólar a un servicio externo.
  - El carrito de compras le pide a la API del correo cuánto sale el envío a un código postal.
- Contrato: el formato de pedidos y respuestas está acordado y documentado. Si lo cambio sin avisar, rompo a todos mis clientes.
- Importante: muchas veces hay una persona esperando DETRÁS. Si la web llama a 5 APIs para armar una página, y cada una tarda 300 ms, la página ya tarda 1,5 s. Por eso a las APIs se les exige todavía menos tiempo que a la web.
-->
