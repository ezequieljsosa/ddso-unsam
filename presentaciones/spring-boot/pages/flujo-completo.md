---
class: sequence-tight
transition: fade-out
---

# El flujo completo: crear una tarea
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-2 block">POST /tareas de punta a punta</span>

```mermaid
%%{init: {"theme":"dark","themeVariables":{"fontFamily":"Inter","fontSize":"16px"}} }%%
sequenceDiagram
    actor Cliente
    participant Controller as "TareaController"
    participant Service as "TareaService"
    participant Repo as "TareaRepository"
    participant DB as "Base de Datos"

    Cliente->>+Controller: POST /tareas { titulo, completada }
    Controller->>+Service: crear(tarea)
    Service->>+Repo: save(tarea)
    Repo->>+DB: INSERT
    DB-->>-Repo: fila insertada (con id)
    Repo-->>-Service: Tarea con id
    Service-->>-Controller: Tarea con id
    Controller-->>-Cliente: 201 Created + JSON
```

<div class="text-xs text-slate-400 text-center mt-3">Cada capa habla solo con la siguiente: el Controller no conoce el Repository, ni el Repository conoce HTTP.</div>
