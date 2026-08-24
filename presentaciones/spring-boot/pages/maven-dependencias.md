---
layout: two-cols
layoutClass: gap-8 items-center
transition: fade-out
---

# Gestión de dependencias
<span class="text-orange-400 font-semibold tracking-wider uppercase text-xs mb-2 block">Declarás qué necesitás, Maven se encarga del resto</span>

Cada dependencia se identifica con tres coordenadas (**GAV**):

- **groupId:** quién la publica (ej. `org.springframework.boot`).
- **artifactId:** el nombre de la librería (ej. `spring-boot-starter-web`).
- **version:** qué versión exacta usar.

Maven busca esas coordenadas en un repositorio (por defecto, **Maven Central**) y las descarga junto con **sus propias dependencias** (transitivas).

<div class="gamma-card p-3 relative mt-3 text-xs">
  <div class="glow-bg bg-orange-500/5 top-[-20px] left-[-20px]"></div>
  <div class="font-bold text-white mb-1 flex items-center gap-1.5">
    <div class="text-orange-400"><carbon:tree-view class="text-base" /></div>
    Dependencias transitivas
  </div>
  <p class="text-[11px] text-slate-400 leading-snug">Si A depende de B y B depende de C, Maven trae B <strong>y</strong> C sin que lo pidas.</p>
</div>

::right::

<span class="text-[9px] font-bold text-orange-400 mb-1.5 tracking-wider uppercase block">pom.xml</span>

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>
      spring-boot-starter-data-jpa
    </artifactId>
  </dependency>
  <dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
  </dependency>
</dependencies>
```

<div class="text-[10px] text-slate-400 text-center mt-2">Los "starters" de Spring Boot agrupan, a su vez, todas las librerías típicas para un propósito (web, datos, seguridad...).</div>
