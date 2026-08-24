---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# ¿Y Spring Boot?
<span class="text-emerald-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Spring, pero sin la configuración manual</span>

Spring Boot no reemplaza a Spring: le agrega **configuración por convención** para arrancar rápido.

- **Auto-configuración:** detecta las dependencias agregadas y configura los beans típicos solo.
- **Servidor embebido:** trae un Tomcat adentro del `.jar`. No hay que instalar nada aparte.
- **Starters:** dependencias que agrupan todo lo necesario para un propósito (web, datos...).
- **`application.properties`:** un único archivo para lo que sí varía (puerto, URL de la base).

::right::

<span class="text-[9px] font-bold text-emerald-400 mb-1.5 tracking-wider uppercase block">Clase principal</span>

```java
@SpringBootApplication
public class TareasApplication {

  public static void main(String[] args) {
    SpringApplication.run(
      TareasApplication.class, args
    );
  }
}
```

<div class="text-[10px] text-slate-400 text-center mt-3 max-w-[300px] mx-auto">Ese <span class="font-mono text-emerald-400">main</span> ya levanta un servidor HTTP escuchando, sin una sola línea de configuración de Tomcat.</div>
