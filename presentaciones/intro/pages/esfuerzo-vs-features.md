---
transition: slide-left
class: xychart-slide
---

# Nueva Feature vs. Esfuerzo Requerido
<span class="text-rose-400 font-semibold tracking-wider uppercase text-xs">La curva del "Big Ball of Mud" — Clean Architecture, Cap. 1</span>

```mermaid
%%{init: {"themeVariables": {"xyChart": {"plotColorPalette": "#38bdf8, #fb7185"}}}}%%
xychart-beta
    x-axis "Features agregadas a lo largo del tiempo" [v1, v2, v3, v4, v5, v6, v7, v8]
    y-axis "Esfuerzo requerido" 0 --> 100
    line [8, 10, 12, 15, 18, 22, 26, 30]
    line [8, 14, 24, 38, 55, 75, 90, 100]
```

<div class="flex justify-center gap-6 mt-1 text-[11px] text-slate-400">
  <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400"></span> Diseño cuidado</div>
  <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-rose-400"></span> Diseño descuidado ("bola de barro")</div>
</div>

<p class="text-[11px] text-slate-500 italic text-center mt-2 max-w-2xl mx-auto">
  Sin cuidar el diseño, cada nueva feature cuesta más que la anterior: el equipo desacelera hasta casi detenerse — aunque el código siga "funcionando".
</p>
