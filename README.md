# 🚀 CiberSegura - Portal Educativo de Ciberseguridad

![Status](https://img.shields.io/badge/Status-Finalizado-success)
![Technology](https://img.shields.io/badge/Tech-HTML5%20%7C%20Bootstrap%205%20%7C%20JS-blue)
![Vista Previa del Proyecto](assets/img/preview.jpg)

## 🎯 Contexto del Proyecto

En la era digital actual, la protección de la información es vital. Este proyecto nace como respuesta a la evaluación del **Módulo 2**, con el objetivo de desarrollar un sitio web informativo, responsivo e interactivo que eduque a los usuarios sobre los riesgos en línea y cómo prevenirlos.

El diseño está inspirado en portales gubernamentales y estándares internacionales como el **NIST CSF 2.0**, ofreciendo una experiencia limpia, accesible y profesional.

---

📋 Instrucciones
1. 🏗️ Estructura del Proyecto
Deberás diseñar un sitio web de tres páginas con el siguiente contenido:

🏠 Inicio

Introducción a la ciberseguridad.
Barra de navegación con enlaces a las demás secciones.
Imagen destacada con un mensaje llamativo. ![Banner]()
⚠️ Amenazas Comunes

Información sobre ataques cibernéticos como phishing, ransomware, malware y ataques DDoS.
Uso de tarjetas o secciones interactivas para cada tipo de amenaza.
Un carrusel o acordeón con ejemplos de casos reales. 🔄
🛡️ Consejos de Seguridad

Lista de buenas prácticas para protegerse en línea.
Formulario de contacto para solicitar más información (con validación en JavaScript). 📝
Un modal con un "test de seguridad" donde el usuario pueda responder preguntas básicas y recibir retroalimentación. ❓💡

## 📋 Cumplimiento de Requerimientos

El proyecto cumple con la estructura solicitada de tres secciones principales (más una página de contacto adicional), integrando tecnologías modernas.

### 1. 🏗️ Estructura del Sitio

* **🏠 Inicio (`index.html`)**:
    * [x] Introducción clara a la ciberseguridad.
    * [x] **Barra de navegación** consistente (Estilo tomado de la pagina de Gobierno/NIST).
    * [x] **Banner**  con mensaje llamativo.
    * [x] Uso de **Acordeón Bootstrap** para explicar el marco NIST.

* **⚠️ Amenazas Comunes (`amenazas.html`)**:
    * [x] Tarjetas informativas sobre *Phishing, Ransomware, Malware y DDoS*.
    * [x] **Carrusel Interactivo** mostrando casos históricos reales (WannaCry, Banco de Chile, SolarWinds).

* **🛡️ Consejos de Seguridad (`consejos.html`)**:
    * [x] Lista de buenas prácticas (2FA, Contraseñas, Respaldos).
    * [x] **Formulario de Contacto** desplegable con validación en JavaScript (no permite envíos vacíos o correos inválidos).
    * [x] **Modal "Test de Seguridad"**: Cuestionario interactivo que evalúa al usuario, calcula su puntaje y redirige a soporte si el resultado es bajo.

* **📞 Contacto (`contacto.html`)** *(Adicional)*:
    * [x] Formulario extendido y datos de ubicación/RRSS con diseño responsivo.

### 2. 🎨 Diseño y Tecnologías

* **`HTML5`** 🏷️: Estructura semántica (`<header>`, `<main>`, `<nav>`, `<footer>`).
* **`CSS3`** 🎀: Estilos personalizados en `assets/css/style.css` (Fuentes Google Fonts: *Merriweather* y *Source Sans Pro*).
* **`Bootstrap 5`** 🔌: Grid system, Modales, Carruseles, Acordeones y Validaciones visuales.
* **`JavaScript`** ⚡: Lógica personalizada en `assets/js/script.js` para:
    * Validación de formularios.
    * Cálculo de puntaje del Test.
    * Redirección inteligente y scroll suave.
* **`jQuery`**: Incluido vía CDN para soporte de plugins.

### 3. 📦 Gestión de Código (Git)

* [x] Repositorio en `gitHub`.
* [x] Uso de `.gitignore` para exclusión de archivos innecesarios.
* [x] Historial de commits descriptivos documentando el avance.

---

## 📂 Estructura de Carpetas

```text
evaluacion_modulo2/
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos personalizados (Gov Banner, Hero, Cards)
│   ├── img/
│   │   ├── consejo-blackfriday.jpg
│   │   ├── consejo-parental.jpg
│   │   └── ...
│   └── js/
│       └── script.js       # Lógica del Test y Validaciones
├── index.html              # Página Principal
├── amenazas.html           # Catálogo de Riesgos
├── consejos.html           # Buenas prácticas + Test
├── contacto.html           # Información de contacto
└── README.md               # Documentación