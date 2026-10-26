---
transition: fade-out
---

# ¿Dónde se dibuja la Vista?

| | 🖼️ Vista | 🧠 Modelo | Instalar |
|---|---|---|---|
| ⌨️ **CLI / Consola** | terminal | mi PC | sí |
| 🎨 **Escritorio** | ventana | mi PC | sí |
| 🌐 **Render server** | servidor → HTML | servidor | no |
| ⚡ **Render cliente** | JS en navegador | servidor | no |
| 🔌 **API** | JSON | servidor | — |
| 📱 **Móvil nativa** | teléfono | servidor | sí |
| 💬 **Chat / IA** | mensajes | servidor | no |

<!--
- Repaso de todo el recorrido mirando dos preguntas: ¿dónde se arma la Vista? ¿dónde vive el Modelo?
- Tendencia histórica: el Modelo se fue al servidor (datos centralizados, una sola versión). La Vista va y viene entre el servidor y el cliente según cuánta interacción haga falta.
- Chat / IA: la Vista son mensajes que dibuja una app que el usuario ya tiene (Telegram, WhatsApp, la web de ChatGPT). Excepción: Claude Code y similares corren en tu terminal, pero el modelo de lenguaje igual está en un servidor.
- No hay una opción "mejor". Se elige según:
  - quién es el usuario (persona técnica, persona común, otro sistema),
  - cuánta interacción necesita,
  - si necesita hardware del dispositivo o funcionar sin conexión.
-->
