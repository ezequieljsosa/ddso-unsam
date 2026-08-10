---
transition: fade-out
---

# UML - Diagrama de Despliegue
<span class="text-blue-400 font-semibold tracking-wider uppercase text-xs">Configuración de nodos en tiempo de ejecución y sus artefactos</span>

<p class="text-[11px] text-slate-400 leading-snug mt-2 max-w-3xl">
Muestra la configuración de los nodos de procesamiento en tiempo de ejecución y los artefactos que residen en ellos. Cubren la vista de despliegue estática de una arquitectura. Ejemplo de alcance general de una arquitectura cliente-servidor.
</p>

<div class="gamma-card p-3 mt-3 relative">
  <div class="glow-bg bg-blue-500/5 top-[-30px] right-[-30px]"></div>

```mermaid
graph LR
  Android["App nativa Android"] --> Inet(("Internet"))
  Iphone["App nativa iPhone"] --> Inet
  Browser["Browser"] --> Inet
  MobileBrowser["Mobile browser"] --> Inet

  Inet -->|"HTTP api.e-commerce.com.ar"| BE["Backend<br>Spring 5.x / Java 1.8<br>Ubuntu Server 16"]
  Inet -->|"HTTP www.e-commerce.com.ar"| FE["Frontend<br>React / NodeJS 10.x<br>Ubuntu Server 16"]
  Inet -->|"HTTP static.e-commerce.com.ar"| ST["Static files<br>Apache Server<br>Ubuntu Server 16"]

  FE -->|"HTTP /v1/site/landing/home"| BE
  BE -->|"TCP puerto 3306"| DB[("Base de datos<br>MySQL 5.x")]

  classDef default fill:transparent,stroke:#ffffff14,stroke-width:1px,color:#94a3b8;
  classDef server fill:#3b82f614,stroke:#3b82f666,stroke-width:1.5px,color:#60a5fa;
  classDef db fill:#10b98114,stroke:#10b98166,stroke-width:1.5px,color:#34d399;

  class BE,FE,ST server;
  class DB db;
```

</div>
