---
layout: two-cols
layoutClass: gap-8 items-center
---

# Ejemplo: Gift Cards
<span class="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Del requerimiento al diseño</span>

Imaginemos una aplicación que administra gift cards de distintos proveedores. Antes de hablar de clases, acordamos <strong>qué debe poder hacer</strong>.

<div class="gamma-card p-4 mt-5 text-sm space-y-2.5">
  <div class="flex gap-2 items-center"><carbon:checkmark-filled class="text-amber-400" /> Una persona puede consultar sus gift cards y su saldo.</div>
  <div class="flex gap-2 items-center"><carbon:checkmark-filled class="text-amber-400" /> Puede usar una gift card al pagar una compra.</div>
  <div class="flex gap-2 items-center"><carbon:checkmark-filled class="text-amber-400" /> El sistema valida la vigencia y el saldo disponible.</div>
  <div class="flex gap-2 items-center"><carbon:checkmark-filled class="text-amber-400" /> El proveedor externo confirma el consumo.</div>
</div>

::right::

```mermaid
%%{init: {"theme":"dark","themeVariables":{"fontFamily":"Inter","fontSize":"18px"}} }%%
flowchart LR
    U(["👤 Usuario"])
    P(["👤 Proveedor de gift cards"])

    subgraph Sistema["Sistema de Gift Cards"]
        C["Consultar mis gift cards"]
        V["Verificar saldo y vigencia"]
        R["Usar gift card"]
        H["Registrar consumo"]
    end

    U --> C
    U --> R
    C --> V
    R --> V
    R --> H
    P --> H

    classDef actor fill:#f59e0b26,stroke:#fbbf24,stroke-width:1px,color:#ffffff;
    classDef usecase fill:#ffffff14,stroke:#94a3b8,stroke-width:1px,color:#ffffff;
    class U,P actor
    class C,V,R,H usecase
    style Sistema fill:#ffffff08,stroke:#64748b,stroke-dasharray: 5 5,color:#ffffff
```

<div class="text-xs text-slate-400 text-center mt-3">Los casos de uso expresan comportamiento observable; todavía no deciden cómo se implementa.</div>

<!--
Presenter Notes:
- El diagrama no pretende ser UML formal: es una conversación sobre actores y objetivos.
- El proveedor también aparece como actor porque participa en la confirmación del consumo.
-->

---

# Un recorte de las capas
<span class="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Una posible colaboración para usar una gift card</span>

```mermaid
%%{init: {"theme":"dark","themeVariables":{"fontFamily":"Inter","fontSize":"18px"}} }%%
classDiagram
    direction LR
    class GiftCardController {
      <<Presentacion>>
      +usar(request) UsoGiftCardResponse
    }
    class UsoGiftCardRequest {
      <<DTO entrante>>
    }
    class UsoGiftCardResponse {
      <<DTO saliente>>
    }
    class GiftCardService {
      <<Servicio de aplicacion>>
      +usar(codigo, monto) ResultadoUso
    }
    class GiftCard {
      <<Dominio>>
      +estaVigente() boolean
      +tieneSaldoPara(monto) boolean
      +puedeUsarse(monto) boolean
      +descontar(monto)
    }
    class Usuario {
      <<Dominio>>
    }
    class GiftCardRepository {
      <<Repositorio>>
      +buscarPorCodigo(codigo) GiftCard
      +guardar(giftCard)
    }
    class ProveedorGiftCardClient {
      <<Client externo>>
      +confirmarConsumo(request) ConfirmacionProveedor
    }
    class ConsumoProveedorRequest {
      <<DTO saliente>>
    }

    GiftCardController --> UsoGiftCardRequest : recibe
    GiftCardController --> UsoGiftCardResponse : devuelve
    GiftCardController --> GiftCardService : delega
    GiftCardService --> GiftCardRepository : consulta y guarda
    GiftCardService --> ProveedorGiftCardClient : confirma
    ProveedorGiftCardClient --> ConsumoProveedorRequest : envia
    GiftCardService --> GiftCard : aplica regla
    Usuario "1" --> "0..*" GiftCard : posee
```

<!--
Presenter Notes:
- Es deliberadamente incompleto: un diagrama de clases es una vista, no el sistema entero.
- El DTO no se convierte en objeto de dominio: transporta datos en el borde.
- El service coordina, pero la regla de saldo y vigencia vive en GiftCard.
-->

---
layout: two-cols
layoutClass: gap-8 items-center
---

# Una foto del dominio
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Diagrama de objetos</span>

El diagrama anterior mostraba <strong>tipos</strong>. Ahora vemos objetos reales en un instante: Ana tiene una gift card de Café Norte, vigente y con saldo para cubrir el consumo.

<div class="gamma-card p-4 mt-6 text-sm">
  <div class="font-semibold text-white mb-2">Escenario</div>
  <p class="text-slate-400 leading-relaxed">Ana quiere pagar un café de $3.500 con una gift card cuyo saldo es $8.000. La tarjeta vence el 31 de diciembre de 2026.</p>
</div>

::right::

```mermaid
classDiagram
    class ana["ana : Usuario"] {
      id = "u-42"
      nombre = "Ana"
    }
    class cafeNorte["cafeNorte : Proveedor"] {
      nombre = "Café Norte"
    }
    class tarjetaAna["tarjetaAna : GiftCard"] {
      codigo = "CN-7K2P"
      saldo = 8000
      venceEl = "2026-12-31"
    }
    class compra["compra : Compra"] {
      total = 3500
    }

    ana "1" --> "1" tarjetaAna : posee
    tarjetaAna "1" --> "1" cafeNorte : emitida por
    compra --> cafeNorte : se realiza en
```

<div class="text-xs text-slate-400 text-center mt-4">Una instancia concreta permite discutir valores y reglas con lenguaje del negocio.</div>

<!--
Presenter Notes:
- Esta es una foto previa al consumo.
- Pregunta para el curso: ¿qué debería pasar si saldo fuera 2000 o si ya hubiera vencido?
-->

---
class: sequence-tight
---

# Usar la gift card
<span class="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Diagrama de secuencia: consumo de $3.500 con la tarjeta 7K2P</span>

```mermaid
%%{init: {"theme":"dark","themeVariables":{"fontFamily":"Inter","fontSize":"14px"}} }%%
sequenceDiagram
    actor Usuario as "Usuario"
    participant Controller as "GiftCard<br/>Controller"
    participant Service as "GiftCard<br/>Service"
    participant Repo as "GiftCard<br/>Repository"

    Usuario->>+Controller: usar({ codigo: CN-7K2P, monto: 3500 })
    Controller->>+Service: usar(7K2P, 3500)
    Service->>Repo: buscarX<br/>Codigo(7K2P)
    create participant Card as "gf1:GiftCard"
    Repo->>Card:  codigo: 7K2P
   
    Service->>+Card: puedeUsarse(3500)
    Note over Card: Vigente y <br/>saldo suficiente
    Card-->>-Service: true
    participant Client as "ProveedorGiftCard<br/>Client"
    actor Proveedor as "Proveedor<br/>externo"
    Service->>+Client: confirmarConsumo(gf1)
    Client->>+Proveedor: POST /consumos
    Proveedor-->>-Client: confirmado
    Client-->>-Service: ConfirmacionProveedor
    Service->>+Card: descontar(3500)
    Card-->>-Service: ok
    Service->>Repo: guardar( gf1)
    Service-->>-Controller: UsoGiftCardResponse<br/>{ saldoActual: 4500 }
    Controller-->>-Usuario: consumo confirmado, saldo: 4500
```

<!--
Presenter Notes:
- La secuencia se puede usar para revisar responsabilidades: ¿quién sabe qué? ¿quién debería cambiar el saldo?
- Si el proveedor rechaza el consumo, no se descuenta ni se guarda: un buen disparador para hablar de errores y consistencia.
-->
