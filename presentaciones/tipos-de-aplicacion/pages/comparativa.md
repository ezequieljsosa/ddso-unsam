---
transition: fade-out
---

# Todo junto

| | 👤 Usuario | ⚡ Disparador | ⏱️ Tiempo | ⏳ ¿Espera? |
|---|---|---|---|---|
| 🌐 **Web** | persona | clic | &lt; 1 s | sí |
| 🔌 **API** | sistema | pedido HTTP | ms | sí |
| 📨 **Worker** | sistema | mensaje | seg – min | no |
| 🗓️ **Batch** | nadie | horario | horas | no |
| ⌨️ **CLI** | técnico | comando | variable | sí |
| 📊 **Analítica** | analista | consulta | seg – min | sí, tolera |

<!--
- Resumen de las fichas, con las cuatro columnas que más diferencian a los tipos.
- Lectura vertical: mirar la columna "¿Espera?". Donde alguien espera, el diseño se obsesiona con el tiempo de respuesta. Donde nadie espera, se obsesiona con el volumen, los reintentos y terminar a tiempo.
- Las columnas que no entraron (disponibilidad, escalabilidad, si falla) están en cada ficha.
-->
