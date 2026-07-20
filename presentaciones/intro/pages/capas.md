---
layout: two-cols
layoutClass: gap-8 items-center
---

# Layering - Capas
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Patrones de Arquitectura</span>

Martin Fowler propone separar el diseño y desarrollo de las *Enterprise Applications* en capas:

<div class="space-y-2.5 mt-4 text-xs">
  <div class="flex gap-2.5 items-start">
    <span class="step-number">1</span>
    <div>
      <strong>Responsabilidades Definidas:</strong> Cada capa describe tareas específicas. Una clase no debe resolver las de otra.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number">2</span>
    <div>
      <strong>Coherencia y Roles Únicos:</strong> Cada capa constituye un todo coherente con roles bien definidos y únicos.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number">3</span>
    <div>
      <strong>Dependencias Establecidas:</strong> Las capas superiores consumen de las inferiores sin saltear niveles.
    </div>
  </div>
  <div class="flex gap-2.5 items-start">
    <span class="step-number">4</span>
    <div>
      <strong>Aspectos Transversales:</strong> Atributos de calidad y requerimientos comunes (seguridad, logs, etc.).
    </div>
  </div>
</div>

::right::

<div class="text-[10px] font-bold text-emerald-400 mb-4 tracking-wider uppercase text-center">Arquitectura en Capas</div>

```mermaid
graph LR
    subgraph Capas
        direction TB
        A[Presentación] --> S[Service]
        S --> B[Dominio]
        B ~~~ C[Fuente de datos]
        C --> B
        S --> C
        C --> AE[Apps externas]
        C --> DB[(Base de datos)]
    end

    subgraph Transversal
        direction TB
        E["<div style='writing-mode: vertical-rl; text-orientation: mixed; padding:6px;'>  Seguridad - Logs - Observabilidad</div>"]
    end

    Capas ~~~ Transversal
    linkStyle 7 stroke:none

    classDef darkBox fill:#37474f,stroke:#eceff1,stroke-width:1px,color:#ffffff;
    class A,S,B,C,AE,DB darkBox

    style Transversal fill:#f5f5f5,stroke:#616161,stroke-dasharray: 5 5,color:#333333
```

<div class="text-[10px] text-slate-400 text-center px-1 mt-4">
  Dividir en capas es una de las técnicas más comunes para resolver problemas complejos.
  <br>
  <a href="https://martinfowler.com/bliki/PresentationDomainDataLayering.html" target="_blank" class="text-indigo-400 hover:underline inline-flex items-center gap-1 mt-1 font-semibold">
    Artículo original de Fowler <carbon:arrow-up-right class="text-[8px]" />
  </a>
</div>

<!--
Presenter Notes:
- Dividir en capas (layering) es una de las técnicas más comunes para resolver un problema de diseño complejo.
- El estilo arquitectónico no implica que tenga que desarrollar la aplicación en este orden. El desarrollo va a ser interactivo cross-layer. Pero lo que tiene de bueno este estilo es la facilidad de volver a hacer foco en la problemática de cada capa.
- Generalmente primero necesito conocer sobre el dominio, luego una aproximación de cómo va a ser usado (presentación) y eso va a refinar la forma en que se estructuran los datos y reparten las responsabilidades en el dominio.
-->
