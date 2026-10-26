---
transition: fade-out
---

# Bot de Telegram en MVC

<span class="kicker">La Vista es prestada</span>

```mermaid
graph LR
  U(["👩 /turnos"]) --> T["🖼️ Telegram"]
  T -->|"webhook"| C["🎮 Handler"]
  C --> M["🧠 TurnoService"]
  C -->|"texto + botones"| T

  classDef default fill:#ffffff1a,stroke:#e2e8f0,stroke-width:2px,color:#ffffff;
  classDef m fill:#10b98140,stroke:#34d399,stroke-width:2px,color:#ffffff;
  classDef v fill:#a855f740,stroke:#c084fc,stroke-width:2px,color:#ffffff;
  classDef c fill:#f59e0b40,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
  class M m;
  class T v;
  class C c;
```

<div class="kw-row justify-center mt-6">
<span class="kw kw-v">Telegram dibuja</span>
<span class="kw kw-c">yo decido</span>
<span class="kw kw-m">mismo dominio</span>
</div>

<!--
- Flujo:
  1. El usuario escribe /turnos en Telegram.
  2. Los servidores de Telegram le avisan a NUESTRO servidor con un pedido HTTP (webhook) que trae el mensaje en JSON.
  3. Nuestro Controlador (el "handler" del comando) decide qué hacer y usa el dominio: TurnoService, el mismo que usaría la web.
  4. Respondemos con texto y botones; Telegram se encarga de dibujarlos en cada celular.
- La Vista es "prestada": no programamos pantallas, Telegram ya sabe mostrar mensajes y botones en Android, iOS y web. Nosotros solo decimos QUÉ mostrar.
- Dato interesante: para Telegram, nuestro bot es... un cliente de su API (Bot API). Y nuestro servidor recibe webhooks: una API para que Telegram nos hable. Todo lo que vimos se combina.
- Otra vez: agregar un bot NO debería obligar a tocar el dominio.
-->
