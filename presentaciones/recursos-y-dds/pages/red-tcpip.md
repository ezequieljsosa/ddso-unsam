---
transition: fade-out
---

# Red - TCP/IP
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs">Direcciones, puertos y el mensaje que viaja entre nodos</span>

<div class="gamma-card p-4 mt-4 relative max-w-3xl">
  <div class="glow-bg bg-blue-500/5 top-[-30px] right-[-30px]"></div>

```mermaid
graph LR
  subgraph N1["Nodo1 - 17.93.22.3"]
    App1["UnaApp1"]
  end
  subgraph N2["Nodo2 - 157.93.22.3 (www.google.com)"]
    Puerto["Puerto 80"] --> App2["OtraApp2"]
  end

  App1 -->|"Msg"| N2

  style N1 fill:transparent,stroke:#3b82f666,stroke-width:1px,color:#93c5fd
  style N2 fill:transparent,stroke:#3b82f666,stroke-width:1px,color:#93c5fd
  classDef default fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#60a5fa;
```

  <div class="flex text-[10px] text-slate-300 font-mono mt-3 rounded-lg overflow-hidden border border-white/10">
    <div class="flex-1 bg-white/5 p-2 text-center">Tramo 1</div>
    <div class="flex-1 bg-white/10 p-2 text-center">Tramo 2</div>
  </div>
</div>
