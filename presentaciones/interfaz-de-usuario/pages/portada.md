---
layout: two-cols
layoutClass: gap-10 items-center
class: zoom-08
---

<div class="inline-flex bg-white/95 p-2.5 px-4 rounded-xl mb-6 shadow-md"><img src="../../public/logo_unsam.svg" class="h-8 object-contain" alt="UNSAM Logo" /></div>

# Interfaces de Usuario

<span class="kicker">Del comando de texto al render server</span>

<div class="kw-row mt-6">
<span class="kw kw-m">Modelo</span>
<span class="kw kw-v">Vista</span>
<span class="kw kw-c">Controlador</span>
</div>

<div class="mt-8 pt-4 border-t border-white/20 text-base text-slate-300">
<strong class="text-white">Ezequiel Sosa</strong> · Diseño de Software
</div>

::right::

```mermaid
graph LR
  D(("🧠 Dominio")) --- T["⌨️ Terminal"]
  D --- E["🎨 Escritorio"]
  D --- W["🌐 Web"]
  D --- A["🔌 API"]
  D --- M["📱 Celular"]

  classDef default fill:#a855f733,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef dom fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  class D dom;
```

<!--
- Clase sobre la capa de presentación: cómo un mismo sistema "se muestra" de muchas formas.
- Hilo conductor de toda la clase: MVC. Los colores se repiten en todos los diagramas: verde = Modelo, violeta = Vista, ámbar = Controlador.
- Recorrido: terminal → escritorio → web (render server) → APIs → celular.
-->
