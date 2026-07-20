---
layout: two-cols
layoutClass: gap-8 items-center
---

# Flujo de Ejecución: Un caso puntual
<span class="text-amber-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Crear un nuevo pedido (Create Order)</span>

El flujo demuestra cómo los datos atraviesan los límites de las capas utilizando **puertos** (interfaces) para evitar acoplamiento directo:

<div class="space-y-2 mt-4 text-[10px]">
  <div class="flex gap-2 items-start">
    <span class="step-number bg-purple-500/15 text-purple-400">1</span>
    <div>
      El **Controller (UI)** recibe el request HTTP POST, valida el formato JSON y crea un Request Model (DTO).
    </div>
  </div>
  <div class="flex gap-2 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400">2</span>
    <div>
      Llama al Caso de Uso a través del puerto de entrada **(Input Boundary)** de forma agnóstica.
    </div>
  </div>
  <div class="flex gap-2 items-start">
    <span class="step-number bg-emerald-500/15 text-emerald-400">3</span>
    <div>
      El **Use Case (Interactor)** aplica la lógica, interactúa con la **Entidad (Entity)** y decide guardar.
    </div>
  </div>
  <div class="flex gap-2 items-start">
    <span class="step-number bg-blue-500/15 text-blue-400">4</span>
    <div>
      Invoca al puerto de salida **(Output Boundary / Gateway)** para guardar, el cual está implementado en la Capa DB.
    </div>
  </div>
</div>

::right::

<div class="gamma-card p-3 max-w-[340px] mx-auto text-center relative">
  <div class="glow-bg bg-amber-500/5 bottom-[-50px] right-[-50px]"></div>
  <div class="text-[9px] font-bold text-amber-400 mb-3 tracking-wider uppercase">Diagrama de Secuencia</div>

```mermaid
sequenceDiagram
  autonumber
  actor User as Usuario
  participant Ctrl as Controller<br>(Adapters)
  participant UC as UseCase<br>(Core)
  participant E as Entity<br>(Core)
  participant DB as Database<br>(Infrastructure)

  User->>Ctrl: POST /order
  Ctrl->>UC: execute(orderData)
  UC->>E: createOrder()
  E-->>UC: orderInstance
  UC->>DB: save(orderInstance)
  DB-->>UC: success
  UC-->>Ctrl: responseModel
  Ctrl-->>User: 201 Created (JSON)
```

</div>
