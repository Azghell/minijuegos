// Datos para el juego WebMaster Quiz
// Cada tema (HTML, CSS, JavaScript) tendrá 3 niveles de dificultad (Básico, Intermedio, Avanzado).
// Cada nivel contendrá 20 preguntas únicas, que se cargarán aleatoriamente.

const quizData = {
    html: {
        basico: [
            {
                type: "multiple-choice",
                question: "¿Qué etiqueta se utiliza para definir el título de una página web en el navegador?",
                options: ["<head>", "<body>", "<title>", "<meta>"],
                correctAnswer: "<title>",
                help: "Piensa en lo que aparece en la pestaña del navegador."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es la etiqueta correcta para un párrafo en HTML?",
                options: ["<para>", "<p>", "<text>", "<pt>"],
                correctAnswer: "<p>",
                help: "Es una de las etiquetas más comunes para texto."
            },
            {
                type: "syntax-completion",
                question: "Completa la etiqueta para un enlace que abra 'pagina.html' en la misma pestaña.",
                fragments: ["<a", "href=\"pagina.html\"", ">", "Ir a página", "</a>"],
                correctOrder: ["<a", "href=\"pagina.html\"", ">", "Ir a página", "</a>"],
                help: "El atributo 'href' define el destino del enlace."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja la etiqueta HTML con su propósito básico.",
                pairs: [
                    { drag: "<h1>", drop: "Encabezado principal" },
                    { drag: "<img>", drop: "Insertar una imagen" },
                    { drag: "<ul>", drop: "Lista desordenada" },
                    { drag: "<body>", drop: "Contenido visible de la página" }
                ],
                help: "Piensa en la función semántica de cada etiqueta."
            },
            {
                type: "order-execution",
                question: "Ordena la estructura básica de un documento HTML5.",
                fragments: ["<!DOCTYPE html>", "<html>", "<head>", "<body>", "</html>", "</head>", "</body>"],
                correctOrder: ["<!DOCTYPE html>", "<html>", "<head>", "</head>", "<body>", "</body>", "</html>"],
                help: "Recuerda el orden de las etiquetas principales."
            },
            {
                type: "multiple-choice",
                question: "¿Qué etiqueta se usa para crear una lista ordenada?",
                options: ["<ul>", "<ol>", "<li>", "<dl>"],
                correctAnswer: "<ol>",
                help: "Las listas ordenadas tienen números o letras."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es el propósito de la etiqueta `<footer>`?",
                options: ["Definir el encabezado de una sección", "Contener información de derechos de autor o contacto", "Agrupar contenido principal", "Crear un pie de página para un documento o sección"],
                correctAnswer: "Crear un pie de página para un documento o sección",
                help: "Se encuentra al final de un documento o sección."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta de imagen con una fuente y texto alternativo.",
                fragments: ["<img", "src=\"foto.jpg\"", "alt=\"Mi foto\"", ">"],
                correctOrder: ["<img", "src=\"foto.jpg\"", "alt=\"Mi foto\"", ">"],
                help: "La etiqueta de imagen es un elemento vacío."
            },
            {
                type: "drag-match",
                question: "Empareja la etiqueta con su uso principal.",
                pairs: [
                    { drag: "<strong>", drop: "Texto importante (negrita)" },
                    { drag: "<em>", drop: "Texto enfatizado (cursiva)" },
                    { drag: "<br>", drop: "Salto de línea" },
                    { drag: "<hr>", drop: "Línea horizontal temática" }
                ],
                help: "Piensa en el formato de texto y elementos de separación."
            },
            {
                type: "multiple-choice",
                question: "¿Qué etiqueta se usa para insertar un video en HTML5?",
                options: ["<media>", "<video>", "<movie>", "<clip>"],
                correctAnswer: "<video>",
                help: "Es una etiqueta semántica para contenido multimedia."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un encabezado de nivel 2.",
                fragments: ["<h2>", "Mi Encabezado", "</h2>"],
                correctOrder: ["<h2>", "Mi Encabezado", "</h2>"],
                help: "Los encabezados van del h1 al h6."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo se utiliza para fusionar celdas en una fila en una tabla HTML?",
                options: ["rowspan", "colspan", "cellspan", "merge-rows"],
                correctAnswer: "rowspan",
                help: "Piensa en la dirección de la fusión."
            },
            {
                type: "syntax-completion",
                question: "Completa la etiqueta para un campo de entrada de texto simple.",
                fragments: ["<input", "type=\"text\"", "name=\"nombre\"", ">"],
                correctOrder: ["<input", "type=\"text\"", "name=\"nombre\"", ">"],
                help: "El tipo 'text' es el más común para entradas."
            },
            {
                type: "multiple-choice",
                question: "¿Qué etiqueta se usa para definir una lista de elementos de definición?",
                options: ["<ul>", "<ol>", "<dl>", "<dt>"],
                correctAnswer: "<dl>",
                help: "Es para términos y sus descripciones."
            },
            {
                type: "drag-match",
                question: "Empareja el tipo de entrada de formulario con su propósito.",
                pairs: [
                    { drag: "text", drop: "Campo de texto simple" },
                    { drag: "checkbox", drop: "Selección de múltiples opciones" },
                    { drag: "radio", drop: "Selección de una sola opción de un grupo" },
                    { drag: "submit", drop: "Botón para enviar el formulario" }
                ],
                help: "Cada tipo de input tiene una interacción específica."
            },
            {
                type: "multiple-choice",
                question: "¿Qué elemento HTML se usa para dibujar gráficos, animaciones o imágenes sobre la marcha?",
                options: ["<svg>", "<canvas>", "<draw>", "<graphic>"],
                correctAnswer: "<canvas>",
                help: "Es un área de dibujo programable con JavaScript."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para vincular una hoja de estilos CSS externa.",
                fragments: ["<link>", "rel=\"stylesheet\"", "href=\"estilos.css\"", "en la sección <head>"],
                correctOrder: ["<link>", "rel=\"stylesheet\"", "href=\"estilos.css\"", "en la sección <head>"],
                help: "La etiqueta link se usa para recursos externos."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo hace que un campo de formulario sea obligatorio?",
                options: ["required", "mandatory", "must", "compulsory"],
                correctAnswer: "required",
                help: "Es un atributo booleano simple."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta de lista desordenada con un elemento.",
                fragments: ["<ul>", "<li>", "Elemento", "</li>", "</ul>"],
                correctOrder: ["<ul>", "<li>", "Elemento", "</li>", "</ul>"],
                help: "Las listas desordenadas usan viñetas."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es la etiqueta correcta para un salto de línea en HTML?",
                options: ["<lb>", "<break>", "<br>", "<newline>"],
                correctAnswer: "<br>",
                help: "Es una etiqueta de elemento vacío."
            }
        ],
        intermedio: [
            {
                type: "multiple-choice",
                question: "¿Qué atributo se usa para especificar una URL base para todas las URL relativas en un documento?",
                options: ["<link>", "<base>", "<href>", "<src>"],
                correctAnswer: "<base>",
                help: "Es una etiqueta que va dentro del <head>."
            },
            {
                type: "syntax-completion",
                question: "Ordena los fragmentos para crear un formulario con un campo de texto y un botón de envío.",
                fragments: ["<form>", "<input type=\"text\">", "<button type=\"submit\">", "</form>", "Enviar", "</button>"],
                correctOrder: ["<form>", "<input type=\"text\">", "<button type=\"submit\">", "Enviar", "</button>", "</form>"],
                help: "Los formularios agrupan elementos de entrada."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el elemento HTML con su tipo de visualización por defecto.",
                pairs: [
                    { drag: "<div>", drop: "Block" },
                    { drag: "<span>", drop: "Inline" },
                    { drag: "<li>", drop: "Block" },
                    { drag: "<img>", drop: "Inline-block" }
                ],
                help: "Algunos elementos ocupan todo el ancho disponible, otros solo el necesario."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para incrustar un video de YouTube usando un iframe.",
                fragments: ["Cerrar la etiqueta <iframe>", "Abrir la etiqueta <iframe>", "Establecer el atributo src a la URL del video", "Establecer atributos de ancho y alto"],
                correctOrder: ["Abrir la etiqueta <iframe>", "Establecer el atributo src a la URL del video", "Establecer atributos de ancho y alto", "Cerrar la etiqueta <iframe>"],
                help: "El 'src' es fundamental para el contenido."
            },
            {
                type: "multiple-choice",
                question: "¿Qué elemento HTML5 se utiliza para representar un conjunto de enlaces de navegación?",
                options: ["<header>", "<section>", "<nav>", "<footer>"],
                correctAnswer: "<nav>",
                help: "Es específico para la navegación."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta `<audio>` con un archivo de audio y controles.",
                fragments: ["<audio", "src=\"audio.mp3\"", "controls", ">", "</audio>"],
                correctOrder: ["<audio", "src=\"audio.mp3\"", "controls", ">", "</audio>"],
                help: "Similar a la etiqueta de video, pero para audio."
            },
            {
                type: "drag-match",
                question: "Empareja el atributo de formulario con su función.",
                pairs: [
                    { drag: "action", drop: "URL a donde se envían los datos del formulario" },
                    { drag: "method", drop: "Método HTTP (GET/POST) para enviar el formulario" },
                    { drag: "name", drop: "Nombre del campo de entrada" },
                    { drag: "value", drop: "Valor inicial del campo de entrada" }
                ],
                help: "Son atributos clave para la funcionalidad de los formularios."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo HTML5 se usa para especificar que un elemento es arrastrable?",
                options: ["draggable", "can-drag", "drag", "is-draggable"],
                correctAnswer: "draggable",
                help: "Es un atributo booleano."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un `datalist` para un campo de entrada.",
                fragments: ["<input list=\"browsers\">", "<datalist id=\"browsers\">", "<option value=\"Chrome\">", "<option value=\"Firefox\">", "</datalist>"],
                correctOrder: ["<input list=\"browsers\">", "<datalist id=\"browsers\">", "<option value=\"Chrome\">", "<option value=\"Firefox\">", "</datalist>"],
                help: "El `datalist` proporciona sugerencias para el input."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es el propósito del elemento `<figure>` en HTML5?",
                options: ["Para agrupar contenido principal", "Para representar contenido auto-contenido, como ilustraciones, diagramas, fotos, código, etc.", "Para definir una sección de un documento", "Para crear un pie de página"],
                correctAnswer: "Para representar contenido auto-contenido, como ilustraciones, diagramas, fotos, código, etc.",
                help: "Se usa a menudo con `figcaption`."
            },
            {
                type: "syntax-completion",
                question: "Crea un `textarea` con un nombre y un número de filas.",
                fragments: ["<textarea", "name=\"mensaje\"", "rows=\"5\"", ">", "</textarea>"],
                correctOrder: ["<textarea", "name=\"mensaje\"", "rows=\"5\"", ">", "</textarea>"],
                help: "Es para entradas de texto multilínea."
            },
            {
                type: "drag-match",
                question: "Empareja el atributo con su uso en la etiqueta `<img>`.",
                pairs: [
                    { drag: "src", drop: "Ruta de la imagen" },
                    { drag: "alt", drop: "Texto alternativo para la imagen" },
                    { drag: "width", drop: "Ancho de la imagen" },
                    { drag: "height", drop: "Alto de la imagen" }
                ],
                help: "Son esenciales para la accesibilidad y el diseño de imágenes."
            },
            {
                type: "multiple-choice",
                question: "¿Qué elemento HTML5 se utiliza para agrupar contenido relacionado semánticamente, a menudo con un encabezado?",
                options: ["<article>", "<section>", "<aside>", "<details>"],
                correctAnswer: "<section>",
                help: "Es una agrupación temática genérica."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un enlace de correo electrónico.",
                fragments: ["<a", "href=\"mailto:ejemplo@dominio.com\"", ">", "Enviar Correo", "</a>"],
                correctOrder: ["<a", "href=\"mailto:ejemplo@dominio.com\"", ">", "Enviar Correo", "</a>"],
                help: "El protocolo 'mailto:' se usa para correos."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo se utiliza para especificar el tipo de contenido de un script externo?",
                options: ["type", "script-type", "mime", "language"],
                correctAnswer: "type",
                help: "Comúnmente 'text/javascript'."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta `<header>` con un `<h1>` dentro.",
                fragments: ["<header>", "<h1>", "Título de la Página", "</h1>", "</header>"],
                correctOrder: ["<header>", "<h1>", "Título de la Página", "</h1>", "</header>"],
                help: "El header es para contenido introductorio."
            },
            {
                type: "drag-match",
                question: "Empareja el elemento de tabla con su propósito.",
                pairs: [
                    { drag: "<thead>", drop: "Contenido del encabezado de la tabla" },
                    { drag: "<tbody>", drop: "Contenido del cuerpo de la tabla" },
                    { drag: "<tfoot>", drop: "Contenido del pie de la tabla" },
                    { drag: "<th>", drop: "Celda de encabezado de tabla" }
                ],
                help: "Ayudan a estructurar tablas complejas."
            },
            {
                type: "multiple-choice",
                question: "¿Qué elemento HTML5 se utiliza para representar el contenido principal de un documento?",
                options: ["<main>", "<content>", "<body-content>", "<primary>"],
                correctAnswer: "<main>",
                help: "Solo debe haber uno por documento."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un comentario en HTML.",
                fragments: ["<!--", "Este es un comentario", "-->"],
                correctOrder: ["<!--", "Este es un comentario", "-->"],
                help: "Los comentarios no son visibles en el navegador."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es la etiqueta correcta para una celda de datos en una tabla HTML?",
                options: ["<tc>", "<cd>", "<td>", "<data>"],
                correctAnswer: "<td>",
                help: "Es la abreviatura de 'table data'."
            }
        ],
        avanzado: [
            {
                type: "multiple-choice",
                question: "¿Cuál es el propósito del atributo 'data-*' en HTML5?",
                options: ["Almacenar datos privados para el navegador", "Almacenar datos personalizados para el script de la página", "Definir un tipo de dato para formularios", "Indicar que un elemento está deshabilitado"],
                correctAnswer: "Almacenar datos personalizados para el script de la página",
                help: "Permite añadir información extra a los elementos HTML."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta `<picture>` para responsive images con `<source>` y `<img>`.",
                fragments: ["<picture>", "<source srcset=\"small.jpg\" media=\"(max-width: 600px)\">", "<img src=\"large.jpg\" alt=\"Imagen\">", "</picture>"],
                correctOrder: ["<picture>", "<source srcset=\"small.jpg\" media=\"(max-width: 600px)\">", "<img src=\"large.jpg\" alt=\"Imagen\">", "</picture>"],
                help: "La etiqueta `<picture>` permite definir múltiples fuentes de imagen."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el elemento semántico HTML5 con su descripción.",
                pairs: [
                    { drag: "<article>", drop: "Contenido independiente y redistribuible" },
                    { drag: "<aside>", drop: "Contenido relacionado pero separado del principal" },
                    { drag: "<section>", drop: "Agrupación temática de contenido" },
                    { drag: "<nav>", drop: "Sección de enlaces de navegación" }
                ],
                help: "Piensa en la estructura y el significado del contenido."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para implementar Web Workers.",
                fragments: ["Crear una instancia de Worker", "Enviar mensajes al Worker con postMessage()", "Escuchar mensajes del Worker con onmessage", "Definir la lógica del Worker en un archivo JS separado"],
                correctOrder: ["Definir la lógica del Worker en un archivo JS separado", "Crear una instancia de Worker", "Enviar mensajes al Worker con postMessage()", "Escuchar mensajes del Worker con onmessage"],
                help: "Los Web Workers se ejecutan en un hilo separado."
            },
            {
                type: "multiple-choice",
                question: "¿Qué API de HTML5 permite a las aplicaciones web almacenar datos de forma persistente en el navegador?",
                options: ["Geolocation API", "Web Storage API", "Canvas API", "Drag and Drop API"],
                correctAnswer: "Web Storage API",
                help: "Incluye localStorage y sessionStorage."
            },
            {
                type: "syntax-completion",
                question: "Crea un elemento `<template>` con un párrafo dentro.",
                fragments: ["<template>", "<p>", "Contenido del template", "</p>", "</template>"],
                correctOrder: ["<template>", "<p>", "Contenido del template", "</p>", "</template>"],
                help: "El contenido de un template no se renderiza inicialmente."
            },
            {
                type: "drag-match",
                question: "Empareja la etiqueta HTML con su uso en formularios avanzados.",
                pairs: [
                    { drag: "<fieldset>", drop: "Agrupa elementos relacionados en un formulario" },
                    { drag: "<legend>", drop: "Define un título para un `<fieldset>`" },
                    { drag: "<output>", drop: "Muestra el resultado de un cálculo de formulario" },
                    { drag: "<progress>", drop: "Muestra el progreso de una tarea" }
                ],
                help: "Mejoran la semántica y la usabilidad de los formularios."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo se utiliza para especificar una función JavaScript que se ejecutará cuando un elemento es arrastrado?",
                options: ["ondrag", "ondragstart", "onmove", "ondragging"],
                correctAnswer: "ondragstart",
                help: "Es un evento específico para el inicio del arrastre."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para usar la Geolocation API para obtener la posición actual.",
                fragments: ["navigator.geolocation.getCurrentPosition(", "function(position) { ... }", ");"],
                correctOrder: ["navigator.geolocation.getCurrentPosition(", "function(position) { ... }", ");"],
                help: "Requiere permiso del usuario."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es el propósito del atributo `async` en una etiqueta `<script>`?",
                options: ["Cargar el script de forma síncrona", "Cargar el script de forma asíncrona y ejecutarlo tan pronto como esté disponible sin bloquear el HTML", "Retrasar la ejecución del script hasta que el HTML esté completamente parseado", "Indicar que el script es opcional"],
                correctAnswer: "Cargar el script de forma asíncrona y ejecutarlo tan pronto como esté disponible sin bloquear el HTML",
                help: "No garantiza el orden de ejecución."
            },
            {
                type: "syntax-completion",
                question: "Crea una etiqueta `<details>` con un `<summary>`.",
                fragments: ["<details>", "<summary>", "Haz clic para ver más", "</summary>", "<p>", "Contenido oculto", "</p>", "</details>"],
                correctOrder: ["<details>", "<summary>", "Haz clic para ver más", "</summary>", "<p>", "Contenido oculto", "</p>", "</details>"],
                help: "Crea un widget de divulgación interactivo."
            },
            {
                type: "drag-match",
                question: "Empareja el evento de arrastre y soltar con su descripción.",
                pairs: [
                    { drag: "dragstart", drop: "Se dispara cuando el usuario comienza a arrastrar un elemento" },
                    { drag: "dragover", drop: "Se dispara cuando un elemento arrastrado se mueve sobre un objetivo válido" },
                    { drag: "drop", drop: "Se dispara cuando un elemento arrastrado se suelta sobre un objetivo válido" },
                    { drag: "dragleave", drop: "Se dispara cuando un elemento arrastrado sale de un objetivo válido" }
                ],
                help: "Son eventos clave para la interacción de arrastrar y soltar."
            },
            {
                type: "multiple-choice",
                question: "¿Qué elemento HTML5 se utiliza para representar un rango de valores numéricos?",
                options: ["<range>", "<meter>", "<output>", "<input type=\"range\">"],
                correctAnswer: "<meter>",
                help: "Indica un valor dentro de un rango conocido."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para usar Web Components (Custom Elements).",
                fragments: ["Definir la clase del Custom Element", "Conectar el Custom Element al DOM", "Registrar el Custom Element con `customElements.define()`"],
                correctOrder: ["Definir la clase del Custom Element", "Registrar el Custom Element con `customElements.define()`", "Conectar el Custom Element al DOM"],
                help: "Permiten crear etiquetas HTML personalizadas."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es la función principal de la etiqueta `<canvas>` en HTML5?",
                options: ["Reproducir videos", "Crear animaciones 3D complejas", "Dibujar gráficos 2D y animaciones dinámicas con JavaScript", "Insertar contenido de otras páginas web"],
                correctAnswer: "Dibujar gráficos 2D y animaciones dinámicas con JavaScript",
                help: "Es un lienzo para dibujar."
            },
            {
                type: "syntax-completion",
                question: "Crea un `input` para subir archivos que acepte solo imágenes JPG y PNG.",
                fragments: ["<input", "type=\"file\"", "accept=\".jpg,.png\"", ">"],
                correctOrder: ["<input", "type=\"file\"", "accept=\".jpg,.png\"", ">"],
                help: "El atributo `accept` filtra tipos de archivo."
            },
            {
                type: "drag-match",
                question: "Empareja el tipo de entrada de formulario HTML5 con su propósito.",
                pairs: [
                    { drag: "email", drop: "Campo para direcciones de correo electrónico" },
                    { drag: "url", drop: "Campo para URLs" },
                    { drag: "date", drop: "Selector de fecha" },
                    { drag: "color", drop: "Selector de color" }
                ],
                help: "Simplifican la entrada de datos específicos."
            },
            {
                type: "multiple-choice",
                question: "¿Qué atributo se usa para especificar que un elemento `<script>` debe ser ejecutado después de que el documento ha sido parseado?",
                options: ["defer", "async", "load", "execute"],
                correctAnswer: "defer",
                help: "Garantiza el orden de ejecución y no bloquea el parseo."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un `iframe` con contenido de otra página.",
                fragments: ["<iframe", "src=\"otra_pagina.html\"", "width=\"500\"", "height=\"300\"", ">", "</iframe>"],
                correctOrder: ["<iframe", "src=\"otra_pagina.html\"", "width=\"500\"", "height=\"300\"", ">", "</iframe>"],
                help: "Permite incrustar contenido externo."
            },
            {
                type: "multiple-choice",
                question: "¿Cuál es el propósito del atributo `srcset` en la etiqueta `<img>`?",
                options: ["Especificar el tamaño de la imagen", "Definir múltiples fuentes de imagen para diferentes resoluciones o densidades de píxeles", "Añadir texto alternativo a la imagen", "Cargar la imagen de forma perezosa"],
                correctAnswer: "Definir múltiples fuentes de imagen para diferentes resoluciones o densidades de píxeles",
                help: "Es clave para imágenes responsivas."
            }
        ]
    },
    css: {
        basico: [
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se usa para cambiar el color del texto de un elemento?",
                options: ["background-color", "text-color", "color", "font-color"],
                correctAnswer: "color",
                help: "Es una propiedad muy directa para el texto."
            },
            {
                type: "multiple-choice",
                question: "¿Qué selector CSS selecciona todos los elementos <p>?",
                options: [".p", "#p", "p", "*p"],
                correctAnswer: "p",
                help: "Es el nombre de la etiqueta directamente."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un selector de clase en CSS.",
                fragments: [".mi-clase", "{", "color: blue;", "}"],
                correctOrder: [".mi-clase", "{", "color: blue;", "}"],
                help: "Las clases se seleccionan con un punto."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja la propiedad CSS con su efecto.",
                pairs: [
                    { drag: "font-size", drop: "Tamaño del texto" },
                    { drag: "margin", drop: "Espacio exterior" },
                    { drag: "padding", drop: "Espacio interior" },
                    { drag: "border", drop: "Línea alrededor del elemento" }
                ],
                help: "Margin y padding son conceptos clave del modelo de caja."
            },
            {
                type: "order-execution",
                question: "Ordena la forma correcta de enlazar una hoja de estilos externa.",
                fragments: ["<link", "rel=\"stylesheet\"", "href=\"style.css\"", ">"],
                correctOrder: ["<link", "rel=\"stylesheet\"", "href=\"style.css\"", ">"],
                help: "Esta etiqueta va en el <head>."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se usa para cambiar el color de fondo de un elemento?",
                options: ["color", "background-color", "bgcolor", "background"],
                correctAnswer: "background-color",
                help: "Es una propiedad muy común para el fondo."
            },
            {
                type: "multiple-choice",
                question: "¿Qué selector CSS selecciona un elemento por su ID?",
                options: [".myid", "#myid", "myid", "*myid"],
                correctAnswer: "#myid",
                help: "Los IDs se seleccionan con un hash."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un selector de ID en CSS.",
                fragments: ["#mi-id", "{", "font-size: 16px;", "}"],
                correctOrder: ["#mi-id", "{", "font-size: 16px;", "}"],
                help: "Los IDs son únicos en una página."
            },
            {
                type: "drag-match",
                question: "Empareja la unidad CSS con su descripción.",
                pairs: [
                    { drag: "px", drop: "Píxeles (unidad absoluta)" },
                    { drag: "%", drop: "Porcentaje (relativo al padre)" },
                    { drag: "em", drop: "Relativo al tamaño de fuente del elemento padre" },
                    { drag: "rem", drop: "Relativo al tamaño de fuente del elemento raíz (html)" }
                ],
                help: "Las unidades definen el tamaño y el espaciado."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS controla el espacio entre las letras de un texto?",
                options: ["word-spacing", "line-height", "letter-spacing", "text-indent"],
                correctAnswer: "letter-spacing",
                help: "Es para el espaciado horizontal de caracteres."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para centrar texto dentro de un div.",
                fragments: ["text-align: center;"],
                correctOrder: ["text-align: center;"],
                help: "Es una propiedad de texto muy común."
            },
            {
                type: "multiple-choice",
                question: "¿Qué valor de `display` hace que un elemento se comporte como un bloque pero permita otros elementos en la misma línea?",
                options: ["block", "inline", "inline-block", "flex"],
                correctAnswer: "inline-block",
                help: "Combina características de inline y block."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para cambiar el color de todos los enlaces visitados a morado.",
                fragments: ["a:visited", "{", "color: purple;", "}"],
                correctOrder: ["a:visited", "{", "color: purple;", "}"],
                help: "Las pseudo-clases son para estados especiales."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de borde con su función.",
                pairs: [
                    { drag: "border-width", drop: "Grosor del borde" },
                    { drag: "border-style", drop: "Estilo del borde (solid, dotted, etc.)" },
                    { drag: "border-color", drop: "Color del borde" },
                    { drag: "border-radius", drop: "Redondez de las esquinas del borde" }
                ],
                help: "Permiten personalizar la apariencia de los bordes."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se usa para ocultar un elemento visualmente pero mantenerlo en el flujo del documento?",
                options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hidden: true;"],
                correctAnswer: "visibility: hidden;",
                help: "Ocupa espacio, pero no es visible."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para aplicar un estilo en línea (inline style) a un párrafo.",
                fragments: ["<p", "style=\"color: red;\"", ">", "Texto rojo", "</p>"],
                correctOrder: ["<p", "style=\"color: red;\"", ">", "Texto rojo", "</p>"],
                help: "Los estilos en línea se aplican directamente en la etiqueta HTML."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad se usa para cambiar el tipo de fuente?",
                options: ["text-font", "font-type", "font-family", "font-style"],
                correctAnswer: "font-family",
                help: "Define la familia de fuentes a usar."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para que los elementos `div` tengan un ancho del 50% y estén centrados.",
                fragments: ["div", "{", "width: 50%;", "margin: 0 auto;", "}"],
                correctOrder: ["div", "{", "width: 50%;", "margin: 0 auto;", "}"],
                help: "Margin auto centra elementos de bloque."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de texto con su efecto.",
                pairs: [
                    { drag: "text-decoration", drop: "Añade líneas (subrayado, tachado) al texto" },
                    { drag: "text-transform", drop: "Cambia el uso de mayúsculas y minúsculas del texto" },
                    { drag: "line-height", drop: "Espacio entre líneas de texto" },
                    { drag: "word-spacing", drop: "Espacio entre palabras" }
                ],
                help: "Son propiedades para estilizar el texto."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para controlar el orden de los elementos en un contenedor flexbox?",
                options: ["align-items", "justify-content", "order", "flex-direction"],
                correctAnswer: "order",
                help: "Permite reordenar elementos individuales."
            }
        ],
        intermedio: [
            {
                type: "multiple-choice",
                question: "¿Qué valor de 'position' saca un elemento del flujo normal del documento?",
                options: ["relative", "fixed", "static", "absolute"],
                correctAnswer: "absolute",
                help: "Permite posicionar un elemento con respecto a su ancestro posicionado más cercano."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para una regla @media para pantallas con un ancho máximo de 768px.",
                fragments: ["@media", "(max-width: 768px)", "{", "body { background-color: lightblue; }", "}"],
                correctOrder: ["@media", "(max-width: 768px)", "{", "body { background-color: lightblue; }", "}"],
                help: "Las media queries son para diseño responsivo."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja la pseudo-clase CSS con su descripción.",
                pairs: [
                    { drag: ":hover", drop: "Cuando el ratón está sobre el elemento" },
                    { drag: ":active", drop: "Cuando el elemento es clicado" },
                    { drag: ":focus", drop: "Cuando el elemento tiene el foco" },
                    { drag: ":first-child", drop: "El primer hijo de su padre" }
                ],
                help: "Las pseudo-clases describen estados especiales de un elemento."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para centrar un div horizontalmente usando flexbox.",
                fragments: ["display: flex;", "justify-content: center;"],
                correctOrder: ["display: flex;", "justify-content: center;"],
                help: "Flexbox es una herramienta poderosa para la alineación."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se usa para añadir una sombra a un texto?",
                options: ["box-shadow", "element-shadow", "text-shadow", "font-shadow"],
                correctAnswer: "text-shadow",
                help: "Es específica para texto."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para un elemento con la clase `container` que use Flexbox para centrar sus ítems vertical y horizontalmente.",
                fragments: [".container", "{", "display: flex;", "justify-content: center;", "align-items: center;", "}"],
                correctOrder: [".container", "{", "display: flex;", "justify-content: center;", "align-items: center;", "}"],
                help: "Flexbox es muy útil para centrar."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de fondo con su función.",
                pairs: [
                    { drag: "background-image", drop: "Imagen de fondo" },
                    { drag: "background-repeat", drop: "Cómo se repite la imagen de fondo" },
                    { drag: "background-position", drop: "Posición inicial de la imagen de fondo" },
                    { drag: "background-size", drop: "Tamaño de la imagen de fondo" }
                ],
                help: "Permiten controlar completamente el fondo."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para controlar el espaciado entre las celdas de una tabla?",
                options: ["cell-spacing", "table-spacing", "border-spacing", "cell-padding"],
                correctAnswer: "border-spacing",
                help: "Es para el espacio entre los bordes de las celdas."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para crear un gradiente lineal de arriba a abajo, de rojo a azul.",
                fragments: ["background-image:", "linear-gradient(to bottom, red, blue);"],
                correctOrder: ["background-image:", "linear-gradient(to bottom, red, blue);"],
                help: "Los gradientes son imágenes CSS."
            },
            {
                type: "multiple-choice",
                question: "¿Qué valor de `overflow` recorta el contenido y añade barras de desplazamiento si es necesario?",
                options: ["hidden", "scroll", "auto", "visible"],
                correctAnswer: "auto",
                help: "Es el más flexible para el desbordamiento."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para que un elemento con ID `logo` tenga un ancho de 100px y un alto de 50px.",
                fragments: ["#logo", "{", "width: 100px;", "height: 50px;", "}"],
                correctOrder: ["#logo", "{", "width: 100px;", "height: 50px;", "}"],
                help: "Los IDs son selectores de alta especificidad."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de posicionamiento con su descripción.",
                pairs: [
                    { drag: "static", drop: "Posición por defecto, no se puede mover con top/left/etc." },
                    { drag: "relative", drop: "Posicionado relativo a su posición normal" },
                    { drag: "fixed", drop: "Posicionado relativo a la ventana del navegador" },
                    { drag: "sticky", drop: "Posicionado relativo al scroll del usuario" }
                ],
                help: "La propiedad 'position' controla el flujo de los elementos."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para aplicar una transformación 2D o 3D a un elemento?",
                options: ["transition", "animation", "transform", "translate"],
                correctAnswer: "transform",
                help: "Incluye rotar, escalar, trasladar, etc."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para aplicar una sombra de caja (box-shadow) a un elemento.",
                fragments: ["box-shadow:", "5px 5px 10px rgba(0,0,0,0.3);"],
                correctOrder: ["box-shadow:", "5px 5px 10px rgba(0,0,0,0.3);"],
                help: "Los valores son offset-x, offset-y, blur, spread y color."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para controlar el espacio entre las palabras de un texto?",
                options: ["letter-spacing", "line-height", "word-spacing", "text-indent"],
                correctAnswer: "word-spacing",
                help: "Es para el espaciado horizontal entre palabras."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para un enlace cuando el ratón está sobre él (hover state).",
                fragments: ["a:hover", "{", "color: red;", "}"],
                correctOrder: ["a:hover", "{", "color: red;", "}"],
                help: "La pseudo-clase `:hover` es muy común."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad CSS con su valor de `display`.",
                pairs: [
                    { drag: "flex-direction", drop: "row | column" },
                    { drag: "justify-content", drop: "center | space-between" },
                    { drag: "align-items", drop: "center | flex-start" },
                    { drag: "flex-wrap", drop: "wrap | nowrap" }
                ],
                help: "Son propiedades clave para Flexbox."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para definir el estilo de la lista (viñetas, números, etc.)?",
                options: ["list-type", "list-style-type", "marker-type", "bullet-style"],
                correctAnswer: "list-style-type",
                help: "Controla la apariencia de los marcadores de lista."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para hacer que un elemento sea transparente al 50%.",
                fragments: ["opacity: 0.5;"],
                correctOrder: ["opacity: 0.5;"],
                help: "La opacidad va de 0 (transparente) a 1 (opaco)."
            },
            {
                type: "multiple-choice",
                question: "¿Qué pseudo-elemento CSS se utiliza para seleccionar la primera línea de un párrafo?",
                options: ["::first-line", ":first-line", ":line-one", "::first-text-line"],
                correctAnswer: "::first-line",
                help: "Se usa con dos puntos dobles."
            }
        ],
        avanzado: [
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para crear animaciones fluidas entre estados de un elemento?",
                options: ["animation", "transition", "transform", "keyframes"],
                correctAnswer: "transition",
                help: "Permite suavizar los cambios de propiedades CSS."
            },
            {
                type: "syntax-completion",
                question: "Crea una animación CSS llamada 'fade-in' que cambie la opacidad de 0 a 1.",
                fragments: ["@keyframes fade-in {", "from { opacity: 0; }", "to { opacity: 1; }", "}"],
                correctOrder: ["@keyframes fade-in {", "from { opacity: 0; }", "to { opacity: 1; }", "}"],
                help: "Las animaciones se definen con @keyframes."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el valor de 'display' con su comportamiento.",
                pairs: [
                    { drag: "grid", drop: "Layout bidimensional basado en filas y columnas" },
                    { drag: "flex", drop: "Layout unidimensional para distribuir elementos" },
                    { drag: "inline-block", drop: "Elemento en línea que acepta ancho y alto" },
                    { drag: "none", drop: "El elemento no se muestra y no ocupa espacio" }
                ],
                help: "La propiedad 'display' es fundamental para el layout."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para crear un gradiente lineal de arriba a abajo, de rojo a azul.",
                fragments: ["background-image:", "linear-gradient(to bottom, red, blue);"],
                correctOrder: ["background-image:", "linear-gradient(to bottom, red, blue);"],
                help: "Los gradientes son imágenes CSS."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se usa para crear un efecto de paralaje con imágenes de fondo?",
                options: ["background-attachment: fixed;", "background-scroll: fixed;", "background-position: fixed;", "background-origin: fixed;"],
                correctAnswer: "background-attachment: fixed;",
                help: "Mantiene la imagen fija mientras el contenido se desplaza."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para un elemento `div` que use `grid` para tener 3 columnas de igual ancho y 2 filas con alto automático.",
                fragments: ["div", "{", "display: grid;", "grid-template-columns: repeat(3, 1fr);", "grid-template-rows: auto auto;", "}"],
                correctOrder: ["div", "{", "display: grid;", "grid-template-columns: repeat(3, 1fr);", "grid-template-rows: auto auto;", "}"],
                help: "Grid es muy potente para layouts complejos."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de animación CSS con su función.",
                pairs: [
                    { drag: "animation-name", drop: "Nombre de la regla @keyframes" },
                    { drag: "animation-duration", drop: "Duración de la animación" },
                    { drag: "animation-iteration-count", drop: "Número de veces que se repite la animación" },
                    { drag: "animation-delay", drop: "Retraso antes de que comience la animación" }
                ],
                help: "Son propiedades fundamentales para controlar animaciones."
            },
            {
                type: "multiple-choice",
                question: "¿Qué pseudo-clase CSS se utiliza para seleccionar elementos basados en su posición en un grupo de hermanos (ej. cada tercer elemento)?",
                options: [":nth-child()", ":nth-of-type()", ":first-child", ":last-child"],
                correctAnswer: ":nth-child()",
                help: "Permite selecciones más complejas en listas."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para crear un filtro de desenfoque (blur) de 5px.",
                fragments: ["filter:", "blur(5px);"],
                correctOrder: ["filter:", "blur(5px);"],
                help: "Los filtros CSS aplican efectos gráficos."
            },
            {
                type: "multiple-choice",
                question: "¿Qué valor de `background-size` escala la imagen para cubrir completamente el área del contenedor, recortando si es necesario?",
                options: ["contain", "cover", "auto", "100%"],
                correctAnswer: "cover",
                help: "Asegura que no queden espacios vacíos."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para un elemento `p` que use la propiedad `clip-path` para crear una forma de círculo.",
                fragments: ["p", "{", "clip-path: circle(50%);", "}"],
                correctOrder: ["p", "{", "clip-path: circle(50%);", "}"],
                help: "Permite crear formas complejas para recortar elementos."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de Grid Layout con su función.",
                pairs: [
                    { drag: "grid-gap", drop: "Espacio entre las filas y columnas de la cuadrícula" },
                    { drag: "grid-template-columns", drop: "Define el número y tamaño de las columnas" },
                    { drag: "grid-template-rows", drop: "Define el número y tamaño de las filas" },
                    { drag: "grid-area", drop: "Define el nombre de un área de la cuadrícula" }
                ],
                help: "Son propiedades fundamentales para Grid."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para controlar la visibilidad de los elementos de una manera que no afecta el diseño (layout)?",
                options: ["display", "visibility", "opacity", "pointer-events"],
                correctAnswer: "opacity",
                help: "Solo afecta la transparencia, no el espacio."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para crear una transformación de rotación de 45 grados en el eje Z.",
                fragments: ["transform:", "rotateZ(45deg);"],
                correctOrder: ["transform:", "rotateZ(45deg);"],
                help: "Las transformaciones son muy versátiles."
            },
            {
                type: "multiple-choice",
                question: "¿Qué unidad de medida CSS es relativa al ancho de la ventana gráfica?",
                options: ["vh", "vw", "vmin", "vmax"],
                correctAnswer: "vw",
                help: "1vw es el 1% del ancho del viewport."
            },
            {
                type: "syntax-completion",
                question: "Crea una regla CSS para un elemento `::before` que añada contenido de texto.",
                fragments: ["p::before", "{", "content: \"Prefijo \";", "}"],
                correctOrder: ["p::before", "{", "content: \"Prefijo \";", "}"],
                help: "Los pseudo-elementos añaden contenido antes o después."
            },
            {
                type: "drag-match",
                question: "Empareja la propiedad de transición CSS con su función.",
                pairs: [
                    { drag: "transition-property", drop: "Propiedad a la que se aplica la transición" },
                    { drag: "transition-duration", drop: "Duración de la transición" },
                    { drag: "transition-timing-function", drop: "Curva de velocidad de la transición" },
                    { drag: "transition-delay", drop: "Retraso antes de que comience la transición" }
                ],
                help: "Permiten controlar el comportamiento de las transiciones."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para controlar cómo se ajusta el contenido de una imagen dentro de su contenedor, preservando su relación de aspecto?",
                options: ["object-fit", "image-fit", "content-fit", "aspect-ratio"],
                correctAnswer: "object-fit",
                help: "Similar a `background-size` pero para elementos `<img>` o `<video>`."
            },
            {
                type: "order-execution",
                question: "Ordena las propiedades para crear un `flex-container` que envuelva sus elementos y los alinee al final.",
                fragments: ["display: flex;", "flex-wrap: wrap;", "justify-content: flex-end;"],
                correctOrder: ["display: flex;", "flex-wrap: wrap;", "justify-content: flex-end;"],
                help: "Flexbox es muy versátil para layouts."
            },
            {
                type: "multiple-choice",
                question: "¿Qué propiedad CSS se utiliza para definir el origen de la transformación de un elemento?",
                options: ["transform-origin", "transform-point", "origin", "pivot"],
                correctAnswer: "transform-origin",
                help: "Cambia el punto alrededor del cual rota o escala un elemento."
            }
        ]
    },
    javascript: {
        basico: [
            {
                type: "multiple-choice",
                question: "¿Qué palabra clave se usa para declarar una variable en JavaScript que puede ser reasignada?",
                options: ["const", "let", "var", "int"],
                correctAnswer: "let",
                help: "Fue introducida en ES6."
            },
            {
                type: "multiple-choice",
                question: "¿Qué función se utiliza para imprimir mensajes en la consola del navegador?",
                options: ["console.log()", "print()", "alert()", "display()"],
                correctAnswer: "console.log()",
                help: "Es muy útil para depuración."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para una función anónima que salude.",
                fragments: ["function()", "{", "console.log('Hola!');", "}"],
                correctOrder: ["function()", "{", "console.log('Hola!');", "}"],
                help: "Las funciones anónimas no tienen nombre."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el operador JavaScript con su significado.",
                pairs: [
                    { drag: "===", drop: "Igualdad estricta" },
                    { drag: "&&", drop: "Operador lógico AND" },
                    { drag: "+", drop: "Suma o concatenación" },
                    { drag: "!", drop: "Negación lógica" }
                ],
                help: "Los operadores son la base de la lógica."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para seleccionar un elemento por su ID y cambiar su texto.",
                fragments: ["document.getElementById('miId')", ".textContent = 'Nuevo Texto';", "let elemento ="],
                correctOrder: ["let elemento =", "document.getElementById('miId')", ".textContent = 'Nuevo Texto';"],
                help: "Primero se selecciona el elemento, luego se modifica."
            },
            {
                type: "multiple-choice",
                question: "¿Qué tipo de dato representa un valor verdadero o falso en JavaScript?",
                options: ["string", "number", "boolean", "undefined"],
                correctAnswer: "boolean",
                help: "Solo tiene dos valores posibles."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de string se utiliza para convertir una cadena a mayúsculas?",
                options: ["toUpperCase()", "toUpper()", "upperCase()", "makeUpperCase()"],
                correctAnswer: "toUpperCase()",
                help: "Es un método de instancia de string."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para una declaración `if` simple.",
                fragments: ["if (condicion)", "{", "console.log('Verdadero');", "}"],
                correctOrder: ["if (condicion)", "{", "console.log('Verdadero');", "}"],
                help: "La condición va entre paréntesis."
            },
            {
                type: "drag-match",
                question: "Empareja el tipo de bucle con su uso común.",
                pairs: [
                    { drag: "for", drop: "Iterar un número conocido de veces" },
                    { drag: "while", drop: "Iterar mientras una condición sea verdadera" },
                    { drag: "do...while", drop: "Iterar al menos una vez, luego mientras una condición sea verdadera" },
                    { drag: "forEach", drop: "Iterar sobre elementos de un array" }
                ],
                help: "Cada bucle tiene su escenario de uso ideal."
            },
            {
                type: "multiple-choice",
                question: "¿Qué operador se usa para la exponenciación en JavaScript (ES6)?",
                options: ["^", "**", "pow()", "exp()"],
                correctAnswer: "**",
                help: "Es el operador de doble asterisco."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para declarar una función y llamarla.",
                fragments: ["function saludar() {", "console.log('Hola');", "}", "saludar();"],
                correctOrder: ["function saludar() {", "console.log('Hola');", "}", "saludar();"],
                help: "Primero se define la función, luego se ejecuta."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para añadir uno o más elementos al final de un array?",
                options: ["unshift()", "pop()", "push()", "shift()"],
                correctAnswer: "push()",
                help: "Aumenta la longitud del array."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un comentario de una sola línea en JavaScript.",
                fragments: ["//", "Este es un comentario"],
                correctOrder: ["//", "Este es un comentario"],
                help: "Los comentarios de una línea empiezan con dos barras."
            },
            {
                type: "drag-match",
                question: "Empareja el método de número con su función.",
                pairs: [
                    { drag: "toFixed()", drop: "Formatea un número con un número específico de decimales" },
                    { drag: "parseInt()", drop: "Convierte una cadena a un entero" },
                    { drag: "parseFloat()", drop: "Convierte una cadena a un número de punto flotante" },
                    { drag: "isNaN()", drop: "Comprueba si un valor es Not-a-Number" }
                ],
                help: "Son útiles para trabajar con números y cadenas."
            },
            {
                type: "multiple-choice",
                question: "¿Qué operador lógico devuelve `true` si al menos uno de sus operandos es `true`?",
                options: ["&&", "||", "!", "=="],
                correctAnswer: "||",
                help: "Es el operador OR lógico."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para crear un array y acceder a su segundo elemento.",
                fragments: ["let miArray = [10, 20, 30];", "miArray[1];"],
                correctOrder: ["let miArray = [10, 20, 30];", "miArray[1];"],
                help: "Los arrays tienen índice base cero."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de objeto se utiliza para obtener las claves (nombres de propiedades) de un objeto como un array?",
                options: ["Object.values()", "Object.entries()", "Object.keys()", "Object.getProperties()"],
                correctAnswer: "Object.keys()",
                help: "Devuelve un array de strings."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un objeto literal con dos propiedades.",
                fragments: ["let persona = {", "nombre: 'Ana',", "edad: 30", "};"],
                correctOrder: ["let persona = {", "nombre: 'Ana',", "edad: 30", "};"],
                help: "Los objetos almacenan pares clave-valor."
            },
            {
                type: "drag-match",
                question: "Empareja el método de array con su función.",
                pairs: [
                    { drag: "pop()", drop: "Remueve el último elemento de un array" },
                    { drag: "shift()", drop: "Remueve el primer elemento de un array" },
                    { drag: "indexOf()", drop: "Devuelve el primer índice en el que se puede encontrar un elemento dado en el array" },
                    { drag: "join()", drop: "Une todos los elementos de un array en una cadena" }
                ],
                help: "Son métodos comunes para manipular arrays."
            },
            {
                type: "multiple-choice",
                question: "¿Qué palabra clave se usa para salir de un bucle o una declaración `switch`?",
                options: ["continue", "exit", "break", "return"],
                correctAnswer: "break",
                help: "Detiene la ejecución del bucle/switch."
            }
        ],
        intermedio: [
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para ejecutar una función en cada elemento del array y devolver un nuevo array con los resultados?",
                options: ["forEach()", "map()", "filter()", "reduce()"],
                correctAnswer: "map()",
                help: "Es ideal para transformar arrays."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para una función flecha que sume dos números.",
                fragments: ["(a, b)", "=>", "a + b;"],
                correctOrder: ["(a, b)", "=>", "a + b;"],
                help: "Las funciones flecha son una forma concisa de escribir funciones."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el método de string con su función.",
                pairs: [
                    { drag: ".length", drop: "Devuelve la longitud de la cadena" },
                    { drag: ".toUpperCase()", drop: "Convierte la cadena a mayúsculas" },
                    { drag: ".indexOf()", drop: "Devuelve la primera posición de una subcadena" },
                    { drag: ".slice()", drop: "Extrae una parte de la cadena" }
                ],
                help: "Los métodos de string son útiles para manipular texto."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para manejar un evento de clic en un botón.",
                fragments: ["addEventListener('click', ...)", "document.getElementById('miBoton')", "function() { ... }"],
                correctOrder: ["document.getElementById('miBoton')", "addEventListener('click', ...)", "function() { ... }"],
                help: "Primero se obtiene el elemento, luego se le añade el 'listener'."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para crear un nuevo array con todos los elementos que pasan una prueba implementada por la función proporcionada?",
                options: ["map()", "filter()", "reduce()", "find()"],
                correctAnswer: "filter()",
                help: "Es para filtrar elementos de un array."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un `try...catch` block.",
                fragments: ["try {", "  // Código que puede generar un error", "}", "catch (error) {", "  console.error(error);", "}"],
                correctOrder: ["try {", "  // Código que puede generar un error", "}", "catch (error) {", "  console.error(error);", "}"],
                help: "Se usa para manejar errores de forma controlada."
            },
            {
                type: "drag-match",
                question: "Empareja el método del objeto `Date` con su función.",
                pairs: [
                    { drag: "getFullYear()", drop: "Obtiene el año completo (ej. 2023)" },
                    { drag: "getMonth()", drop: "Obtiene el mes (0-11)" },
                    { drag: "getDate()", drop: "Obtiene el día del mes (1-31)" },
                    { drag: "getHours()", drop: "Obtiene la hora (0-23)" }
                ],
                help: "Son métodos para extraer partes de una fecha."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de `localStorage` se utiliza para almacenar un par clave-valor?",
                options: ["getItem()", "removeItem()", "setItem()", "clear()"],
                correctAnswer: "setItem()",
                help: "Es para guardar datos."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para usar un `setTimeout`.",
                fragments: ["setTimeout(", "function() { console.log('Hola'); }", ", 1000);"],
                correctOrder: ["setTimeout(", "function() { console.log('Hola'); }", ", 1000);"],
                help: "Ejecuta una función una vez después de un retraso."
            },
            {
                type: "multiple-choice",
                question: "¿Qué significa 'DOM' en el contexto de JavaScript web?",
                options: ["Document Object Model", "Data Order Management", "Direct Object Manipulation", "Dynamic Output Method"],
                correctAnswer: "Document Object Model",
                help: "Representa la estructura de un documento HTML."
            },
            {
                type: "syntax-completion",
                question: "Completa la sintaxis para un evento de teclado `keydown` en un input.",
                fragments: ["inputElement.addEventListener('keydown',", "function(event) {", "  console.log(event.key);", "});"],
                correctOrder: ["inputElement.addEventListener('keydown',", "function(event) {", "  console.log(event.key);", "});"],
                help: "Los eventos de teclado son útiles para interacciones de usuario."
            },
            {
                type: "drag-match",
                question: "Empareja el método de `console` con su propósito.",
                pairs: [
                    { drag: "log()", drop: "Imprime un mensaje general en la consola" },
                    { drag: "warn()", drop: "Imprime un mensaje de advertencia" },
                    { drag: "error()", drop: "Imprime un mensaje de error" },
                    { drag: "info()", drop: "Imprime un mensaje informativo" }
                ],
                help: "Son útiles para depuración y seguimiento."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para reducir el array a un único valor?",
                options: ["map()", "filter()", "reduce()", "forEach()"],
                correctAnswer: "reduce()",
                help: "Aplica una función acumuladora."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para obtener el valor de un campo de texto.",
                fragments: ["document.getElementById('miInput')", ".value;"],
                correctOrder: ["document.getElementById('miInput')", ".value;"],
                help: "La propiedad `value` contiene el contenido del input."
            },
            {
                type: "multiple-choice",
                question: "¿Qué significa 'AJAX'?",
                options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XHTML", "Asynchronous JSON and XML", "Automated JavaScript and XHR"],
                correctAnswer: "Asynchronous JavaScript and XML",
                help: "Permite cargar datos sin recargar la página."
            },
            {
                type: "syntax-completion",
                question: "Crea una función que tome un argumento y lo devuelva.",
                fragments: ["function identidad(x)", "{", "return x;", "}"],
                correctOrder: ["function identidad(x)", "{", "return x;", "}"],
                help: "La palabra clave `return` devuelve un valor."
            },
            {
                type: "drag-match",
                question: "Empareja el tipo de evento DOM con su descripción.",
                pairs: [
                    { drag: "click", drop: "Cuando un elemento es clicado" },
                    { drag: "mouseover", drop: "Cuando el puntero del ratón se mueve sobre un elemento" },
                    { drag: "submit", drop: "Cuando un formulario es enviado" },
                    { drag: "load", drop: "Cuando un recurso (como una imagen) ha terminado de cargarse" }
                ],
                help: "Los eventos son la forma en que JavaScript reacciona a las interacciones."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para eliminar elementos de un array y/o añadir nuevos elementos en su lugar?",
                options: ["slice()", "splice()", "concat()", "join()"],
                correctAnswer: "splice()",
                help: "Es un método muy versátil para modificar arrays."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para añadir una clase CSS a un elemento.",
                fragments: ["elemento.classList.add('mi-clase');"],
                correctOrder: ["elemento.classList.add('mi-clase');"],
                help: "La propiedad `classList` permite manipular clases."
            },
            {
                type: "multiple-choice",
                question: "¿Qué función se utiliza para detener la ejecución de un `setInterval`?",
                options: ["clearInterval()", "stopInterval()", "clearTimeout()", "removeInterval()"],
                correctAnswer: "clearInterval()",
                help: "Necesita el ID del intervalo para detenerlo."
            }
        ],
        avanzado: [
            {
                type: "multiple-choice",
                question: "¿Qué es 'hoisting' en JavaScript?",
                options: ["Un método para optimizar el rendimiento del código.", "El proceso de mover declaraciones al principio de su ámbito antes de la ejecución.", "Un tipo de error de sintaxis.", "Una forma de herencia de prototipos."],
                correctAnswer: "El proceso de mover declaraciones al principio de su ámbito antes de la ejecución.",
                help: "Afecta a cómo se interpretan las variables y funciones."
            },
            {
                type: "syntax-completion",
                question: "Crea una promesa que se resuelva después de 1 segundo con un mensaje 'Éxito'.",
                fragments: ["new Promise((resolve) => {", "setTimeout(() => {", "resolve('Éxito');", "}, 1000);", "});"],
                correctOrder: ["new Promise((resolve) => {", "setTimeout(() => {", "resolve('Éxito');", "}, 1000);", "});"],
                help: "Las promesas son para operaciones asíncronas."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja el concepto de JavaScript con su descripción.",
                pairs: [
                    { drag: "Closure", drop: "Una función que recuerda su entorno léxico" },
                    { drag: "Callback", drop: "Una función pasada como argumento a otra función" },
                    { drag: "Async/Await", drop: "Sintaxis para manejar promesas de forma más legible" },
                    { drag: "Event Loop", drop: "Mecanismo que permite a JS manejar operaciones no bloqueantes" }
                ],
                help: "Son conceptos fundamentales para entender el comportamiento de JavaScript."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para realizar una petición fetch a una API y procesar la respuesta JSON.",
                fragments: ["fetch('https://api.example.com/data')", ".then(response => response.json())", ".then(data => console.log(data))", ".catch(error => console.error(error))"],
                correctOrder: ["fetch('https://api.example.com/data')", ".then(response => response.json())", ".then(data => console.log(data))", ".catch(error => console.error(error))"],
                help: "Fetch devuelve una promesa."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de array se utiliza para comprobar si al menos un elemento en el array pasa la prueba implementada por la función proporcionada?",
                options: ["every()", "some()", "includes()", "find()"],
                correctAnswer: "some()",
                help: "Devuelve `true` si encuentra al menos uno."
            },
            {
                type: "syntax-completion",
                question: "Crea una clase JavaScript con un constructor y un método simple.",
                fragments: ["class Persona {", "  constructor(nombre) {", "    this.nombre = nombre;", "  }", "  saludar() {", "    console.log(`Hola, soy ${this.nombre}`);", "  }", "}"],
                correctOrder: ["class Persona {", "  constructor(nombre) {", "    this.nombre = nombre;", "  }", "  saludar() {", "    console.log(`Hola, soy ${this.nombre}`);", "  }", "}"],
                help: "Las clases son azúcar sintáctico sobre prototipos."
            },
            {
                type: "drag-match",
                question: "Empareja el concepto de programación asíncrona con su descripción.",
                pairs: [
                    { drag: "Promise.all()", drop: "Espera a que todas las promesas en un iterable se resuelvan" },
                    { drag: "Promise.race()", drop: "Devuelve una promesa que se resuelve o rechaza tan pronto como una de las promesas en el iterable lo hace" },
                    { drag: "async function", drop: "Declara una función asíncrona" },
                    { drag: "await", drop: "Pausa la ejecución de una función asíncrona hasta que una promesa se resuelva" }
                ],
                help: "Son herramientas para manejar operaciones que tardan tiempo."
            },
            {
                type: "multiple-choice",
                question: "¿Qué es el 'event bubbling' en JavaScript?",
                options: ["Cuando un evento se propaga desde el elemento más interno hacia el elemento más externo del DOM.", "Cuando un evento se propaga desde el elemento más externo hacia el elemento más interno del DOM.", "Un error en el manejo de eventos.", "Una forma de detener la propagación de eventos."],
                correctAnswer: "Cuando un evento se propaga desde el elemento más interno hacia el elemento más externo del DOM.",
                help: "Es el comportamiento por defecto de la propagación de eventos."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para usar `localStorage` para guardar y luego recuperar un dato.",
                fragments: ["localStorage.setItem('clave', 'valor');", "let dato = localStorage.getItem('clave');", "console.log(dato);"],
                correctOrder: ["localStorage.setItem('clave', 'valor');", "let dato = localStorage.getItem('clave');", "console.log(dato);"],
                help: "LocalStorage almacena datos de forma persistente."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de `Array.prototype` se utiliza para crear un nuevo array aplanando sub-arrays recursivamente hasta la profundidad especificada?",
                options: ["flat()", "flatten()", "depth()", "merge()"],
                correctAnswer: "flat()",
                help: "Útil para trabajar con arrays anidados."
            },
            {
                type: "syntax-completion",
                question: "Crea una función generadora simple.",
                fragments: ["function* generador() {", "  yield 1;", "  yield 2;", "}"],
                correctOrder: ["function* generador() {", "  yield 1;", "  yield 2;", "}"],
                help: "Las funciones generadoras pueden pausar y reanudar su ejecución."
            },
            {
                type: "drag-match",
                question: "Empareja el concepto de módulos ES6 con su descripción.",
                pairs: [
                    { drag: "export default", drop: "Exporta un solo valor como la exportación principal de un módulo" },
                    { drag: "export const", drop: "Exporta una constante con nombre" },
                    { drag: "import", drop: "Importa bindings exportados por otro módulo" },
                    { drag: "as", drop: "Renombra un import o export" }
                ],
                help: "Los módulos ayudan a organizar el código."
            },
            {
                type: "multiple-choice",
                question: "¿Qué es un 'Service Worker' en el desarrollo web?",
                options: ["Un tipo de Web Worker para realizar cálculos complejos en segundo plano.", "Un script que el navegador ejecuta en segundo plano, separado de una página web, para habilitar características offline, notificaciones push, etc.", "Una herramienta para optimizar el rendimiento de CSS.", "Un framework de JavaScript para construir interfaces de usuario."],
                correctAnswer: "Un script que el navegador ejecuta en segundo plano, separado de una página web, para habilitar características offline, notificaciones push, etc.",
                help: "Son clave para las Progressive Web Apps (PWAs)."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para usar el operador spread (...) en un array.",
                fragments: ["let arr1 = [1, 2];", "let arr2 = [...arr1, 3, 4];", "console.log(arr2);"],
                correctOrder: ["let arr1 = [1, 2];", "let arr2 = [...arr1, 3, 4];", "console.log(arr2);"],
                help: "El operador spread expande iterables."
            },
            {
                type: "multiple-choice",
                question: "¿Qué método de `Array.prototype` se utiliza para crear un nuevo array con los resultados de la llamada a una función para cada elemento del array?",
                options: ["forEach()", "filter()", "map()", "reduce()"],
                correctAnswer: "map()",
                help: "Transforma cada elemento y devuelve un nuevo array."
            },
            {
                type: "syntax-completion",
                question: "Crea una función asíncrona que espere 2 segundos y luego imprima un mensaje.",
                fragments: ["async function esperarYSaludar() {", "  await new Promise(resolve => setTimeout(resolve, 2000));", "  console.log('¡Hola después de esperar!');", "}"],
                correctOrder: ["async function esperarYSaludar() {", "  await new Promise(resolve => setTimeout(resolve, 2000));", "  console.log('¡Hola después de esperar!');", "}"],
                help: "Async/await simplifica el código asíncrono."
            },
            {
                type: "drag-match",
                question: "Empareja el método de `Promise` con su función.",
                pairs: [
                    { drag: ".then()", drop: "Maneja el resultado de una promesa resuelta" },
                    { drag: ".catch()", drop: "Maneja los errores de una promesa rechazada" },
                    { drag: ".finally()", drop: "Ejecuta un callback cuando la promesa se asienta (resuelta o rechazada)" },
                    { drag: "Promise.resolve()", drop: "Devuelve una promesa que se resuelve con el valor dado" }
                ],
                help: "Son métodos fundamentales para el manejo de promesas."
            },
            {
                type: "multiple-choice",
                question: "¿Qué es la 'delegación de eventos' en JavaScript?",
                options: ["Asignar múltiples manejadores de eventos a un solo elemento.", "Asignar un manejador de eventos a un elemento padre para gestionar eventos de sus hijos.", "Detener la propagación de un evento.", "Ejecutar un evento de forma asíncrona."],
                correctAnswer: "Asignar un manejador de eventos a un elemento padre para gestionar eventos de sus hijos.",
                help: "Es eficiente para muchos elementos interactivos."
            },
            {
                type: "order-execution",
                question: "Ordena los pasos para desestructurar un objeto y obtener dos propiedades.",
                fragments: ["let persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };", "const { nombre, edad } = persona;", "console.log(nombre, edad);"],
                correctOrder: ["let persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };", "const { nombre, edad } = persona;", "console.log(nombre, edad);"],
                help: "La desestructuración simplifica el acceso a propiedades."
            },
            {
                type: "multiple-choice",
                question: "¿Qué objeto global en JavaScript proporciona funciones matemáticas?",
                options: ["Math", "Numbers", "Calculations", "Algebra"],
                correctAnswer: "Math",
                help: "Contiene métodos como `random()`, `floor()`, `ceil()`."
            }
        ]
    }
};

// Variables de estado del juego
let currentTopic = ''; // 'html', 'css', 'javascript'
let currentDifficulty = ''; // 'basico', 'intermedio', 'avanzado'
let currentQuestions = [];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let errors = 0;
let timerInterval;
let startTime;
let gameStarted = false;
let answerBlocked = false; // Para prevenir múltiples clics en botones de respuesta
let localGameStorage; // Objeto para manejar el almacenamiento local

// Historial para la función de deshacer
let syntaxOrderHistory = []; // Para preguntas de Ordena la estructura (click-to-add)
let dragMatchHistory = []; // Para preguntas de Drag & Match

// Variables DOM (se asignarán en initializeWebMasterQuizGame)
let quizStartMenu;
let startQuizButton;
let quizTopicSelectionMenu;
let topicButtons;
let backToStartMenuButton;
let quizDifficultySelectionMenu;
let selectedTopicDisplay;
let difficultyButtons;
let backToTopicMenuButton;
let quizPlayArea;
let quizTimerDisplay;
let quizScoreDisplay;
let quizCard;
let quizQuestionDisplay;
let quizHelpText;
let questionTypeContainer;
let multipleChoiceOptionsContainer;
let answerOptionButtons; // NodeList, will be re-queried
let syntaxOrderContainer;
let syntaxTargetArea;
let syntaxOptionsArea;
let checkSyntaxButton;
let undoSyntaxButton; // Nuevo botón de deshacer
let dragMatchContainer;
let dragElementsArea;
let dropTargetsArea;
let checkMatchButton;
let undoMatchButton; // Nuevo botón de deshacer
let endQuizButton;
let quizResultScreen;
let quizCorrectAnswersDisplay;
let quizIncorrectAnswersDisplay;
let quizFinalScoreDisplay;
let quizFinalTimeDisplay;
let quizRetryLevelButton;
let quizNextLevelButton;
let quizChangeTopicButton;
let quizExitGameButton;

// Función de inicialización principal del juego
function initializeWebMasterQuizGame(gameDataStorageObj) {
    localGameStorage = gameDataStorageObj; // Almacena el objeto de almacenamiento

    // Aumentar el tiempo de espera para asegurar que el DOM esté completamente cargado
    setTimeout(() => {
        // Asignación de elementos DOM
        quizStartMenu = document.getElementById('quiz-start-menu');
        startQuizButton = document.getElementById('start-quiz-button');
        quizTopicSelectionMenu = document.getElementById('quiz-topic-selection-menu');
        topicButtons = document.querySelectorAll('.topic-button');
        backToStartMenuButton = document.getElementById('back-to-start-menu-button');
        quizDifficultySelectionMenu = document.getElementById('quiz-difficulty-selection-menu');
        selectedTopicDisplay = document.getElementById('selected-topic-display');
        difficultyButtons = document.querySelectorAll('.difficulty-button');
        backToTopicMenuButton = document.getElementById('back-to-topic-menu-button');
        quizPlayArea = document.getElementById('quiz-play-area');
        quizTimerDisplay = document.getElementById('quiz-timer');
        quizScoreDisplay = document.getElementById('quiz-score-display');
        quizCard = document.getElementById('quiz-card');
        quizQuestionDisplay = document.getElementById('quiz-question');
        quizHelpText = document.getElementById('quiz-help-text');
        questionTypeContainer = document.getElementById('question-type-container');
        multipleChoiceOptionsContainer = document.getElementById('multiple-choice-options');
        // Re-consultar los botones de opción aquí para asegurar que estén en el DOM
        answerOptionButtons = document.querySelectorAll('.answer-option-button'); 
        syntaxOrderContainer = document.getElementById('syntax-order-container');
        syntaxTargetArea = document.getElementById('syntax-target-area');
        syntaxOptionsArea = document.getElementById('syntax-options-area');
        checkSyntaxButton = document.getElementById('check-syntax-button');
        undoSyntaxButton = document.getElementById('undo-syntax-button'); // Asignar nuevo botón
        dragMatchContainer = document.getElementById('drag-match-container');
        dragElementsArea = document.getElementById('drag-elements');
        dropTargetsArea = document.getElementById('drop-targets');
        checkMatchButton = document.getElementById('check-match-button');
        undoMatchButton = document.getElementById('undo-match-button'); // Asignar nuevo botón
        endQuizButton = document.getElementById('end-quiz-button');
        quizResultScreen = document.getElementById('quiz-result-screen');
        quizCorrectAnswersDisplay = document.getElementById('quiz-correct-answers');
        quizIncorrectAnswersDisplay = document.getElementById('quiz-incorrect-answers');
        quizFinalScoreDisplay = document.getElementById('quiz-final-score');
        quizFinalTimeDisplay = document.getElementById('quiz-final-time');
        quizRetryLevelButton = document.getElementById('quiz-retry-level-button');
        quizNextLevelButton = document.getElementById('quiz-next-level-button');
        quizChangeTopicButton = document.getElementById('quiz-change-topic-button');
        quizExitGameButton = document.getElementById('quiz-exit-game-button');

        // Adjuntar Event Listeners
        if (startQuizButton) startQuizButton.addEventListener('click', showTopicSelection);
        if (backToStartMenuButton) backToStartMenuButton.addEventListener('click', showStartMenu);
        if (backToTopicMenuButton) backToTopicMenuButton.addEventListener('click', showTopicSelection);
        if (endQuizButton) endQuizButton.addEventListener('click', endGame);
        if (quizRetryLevelButton) quizRetryLevelButton.addEventListener('click', retryLevel);
        if (quizNextLevelButton) quizNextLevelButton.addEventListener('click', nextLevel);
        if (quizChangeTopicButton) quizChangeTopicButton.addEventListener('click', showTopicSelection);
        if (quizExitGameButton) quizExitGameButton.addEventListener('click', exitGame);

        topicButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentTopic = button.dataset.topic;
                if (selectedTopicDisplay) selectedTopicDisplay.textContent = button.textContent;
                showDifficultySelection();
            });
        });

        difficultyButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentDifficulty = button.dataset.difficulty;
                startGame();
            });
        });

        // Asegurarse de que answerOptionButtons no sea null antes de adjuntar listeners
        if (answerOptionButtons) {
            answerOptionButtons.forEach(button => {
                button.addEventListener('click', () => checkMultipleChoiceAnswer(parseInt(button.dataset.option)));
            });
        }

        if (checkSyntaxButton) checkSyntaxButton.addEventListener('click', checkSyntaxOrderAnswer);
        if (undoSyntaxButton) undoSyntaxButton.addEventListener('click', undoSyntaxOrder); // Listener para deshacer
        if (checkMatchButton) checkMatchButton.addEventListener('click', checkDragMatchAnswer);
        if (undoMatchButton) undoMatchButton.addEventListener('click', undoDragMatch); // Listener para deshacer

        // Estado inicial del juego
        showStartMenu();

    }, 500); // Aumentado a 500ms
}

// --- Funciones de Navegación entre Menús ---
function showElement(element) {
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('flex');
    }
}

function hideElement(element) {
    if (element) {
        element.classList.add('hidden');
        element.classList.remove('flex');
    }
}

function hideAllMenus() {
    hideElement(quizStartMenu);
    hideElement(quizTopicSelectionMenu);
    hideElement(quizDifficultySelectionMenu);
    hideElement(quizPlayArea);
    hideElement(quizResultScreen);
}

function showStartMenu() {
    hideAllMenus();
    showElement(quizStartMenu);
    resetGame(); // Reinicia el estado del juego al volver al menú principal
}

function showTopicSelection() {
    hideAllMenus();
    showElement(quizTopicSelectionMenu);
    resetGame(); // Reinicia el estado del juego al seleccionar tema
}

function showDifficultySelection() {
    hideAllMenus();
    showElement(quizDifficultySelectionMenu);
    // No resetGame aquí para mantener el tema seleccionado
}

function showPlayArea() {
    hideAllMenus();
    showElement(quizPlayArea);
}

function showResultScreen() {
    hideAllMenus();
    showElement(quizResultScreen);
}

// --- Lógica del Juego ---

// Utilidad para mezclar un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateTimer() {
    if (quizTimerDisplay) {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        quizTimerDisplay.textContent = formatTime(elapsedTime);
    }
}

function startGame() {
    if (!currentTopic || !currentDifficulty) {
        console.error("Tema o dificultad no seleccionados.");
        showTopicSelection(); // Volver a la selección si no hay tema/dificultad
        return;
    }

    currentQuestions = quizData[currentTopic][currentDifficulty];
    if (!currentQuestions || currentQuestions.length === 0) {
        console.error(`No hay preguntas para el tema ${currentTopic} y dificultad ${currentDifficulty}.`);
        showDifficultySelection(); // Volver a la selección de dificultad
        return;
    }

    // Asegurarse de tener al menos 10 preguntas (o todas las disponibles si son menos)
    shuffledQuestions = shuffleArray([...currentQuestions]);
    const numberOfQuestionsToAsk = Math.min(10, shuffledQuestions.length); // Mínimo 10 o todas las que haya
    shuffledQuestions = shuffledQuestions.slice(0, numberOfQuestionsToAsk);


    currentQuestionIndex = 0;
    score = 0;
    errors = 0;
    if (quizScoreDisplay) quizScoreDisplay.textContent = score;
    if (quizTimerDisplay) quizTimerDisplay.textContent = '00:00';
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    gameStarted = true;
    showPlayArea();
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
        return;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    if (quizQuestionDisplay) quizQuestionDisplay.innerHTML = question.question;

    // Reiniciar y ocultar todos los contenedores de tipo de pregunta
    hideElement(multipleChoiceOptionsContainer);
    hideElement(syntaxOrderContainer);
    hideElement(dragMatchContainer);
    if (quizHelpText) quizHelpText.classList.add('hidden'); // Ocultar ayuda por defecto

    // Limpiar áreas de drag & drop (ahora también para click-to-add)
    if (syntaxTargetArea) syntaxTargetArea.innerHTML = '';
    if (syntaxOptionsArea) syntaxOptionsArea.innerHTML = '';
    if (dragElementsArea) dragElementsArea.innerHTML = '';
    if (dropTargetsArea) dropTargetsArea.innerHTML = '';

    // Resetear borde de la tarjeta de quiz
    if (quizCard) quizCard.classList.remove('border-green-500', 'border-red-500');

    answerBlocked = false; // Permitir responder a la nueva pregunta

    // Limpiar historial de deshacer para la nueva pregunta
    syntaxOrderHistory = [];
    dragMatchHistory = [];

    // Mostrar el tipo de pregunta correcto
    switch (question.type) {
        case "multiple-choice":
            showElement(multipleChoiceOptionsContainer);
            if (answerOptionButtons) {
                answerOptionButtons.forEach((button, index) => {
                    button.textContent = question.options[index];
                    button.disabled = false;
                    button.classList.remove('bg-green-700', 'bg-red-700', 'bg-blue-700'); // Limpiar colores de retroalimentación
                    button.classList.add('bg-blue-500', 'hover:bg-blue-600'); // Restaurar color original
                });
            }
            break;
        case "syntax-completion":
        case "order-execution":
            showElement(syntaxOrderContainer);
            setupSyntaxOrderQuestion(question); // Esta función será modificada para clics
            break;
        case "drag-match":
            showElement(dragMatchContainer);
            setupDragMatchQuestion(question);
            break;
    }

    if (question.help && quizHelpText) {
        quizHelpText.textContent = question.help;
        quizHelpText.classList.remove('hidden');
    }
}

// --- Lógica para Tipos de Pregunta ---

// Selección Múltiple
function checkMultipleChoiceAnswer(selectedIndex) {
    if (answerBlocked) return;
    answerBlocked = true;

    const question = shuffledQuestions[currentQuestionIndex];
    const correctIndex = question.options.indexOf(question.correctAnswer);
    const selectedButton = answerOptionButtons[selectedIndex];

    answerOptionButtons.forEach(button => button.disabled = true); // Deshabilitar todos los botones

    if (selectedIndex === correctIndex) {
        score++;
        if (quizCard) quizCard.classList.add('border-green-500');
        if (selectedButton) selectedButton.classList.replace('bg-blue-500', 'bg-green-700');
    } else {
        errors++;
        score--; // Deduce un punto por respuesta incorrecta
        if (quizCard) quizCard.classList.add('border-red-500');
        if (selectedButton) selectedButton.classList.replace('bg-blue-500', 'bg-red-700');
        // Resaltar la respuesta correcta
        if (answerOptionButtons[correctIndex]) {
            answerOptionButtons[correctIndex].classList.replace('bg-blue-500', 'bg-green-700');
        }
    }
    if (quizScoreDisplay) quizScoreDisplay.textContent = score;

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1200); // Pequeño retraso para ver la retroalimentación
}

// Completar Sintaxis / Orden de Ejecución (MODIFICADO para click-to-add)
function setupSyntaxOrderQuestion(question) {
    if (!syntaxTargetArea || !syntaxOptionsArea || !checkSyntaxButton || !undoSyntaxButton) return;

    syntaxTargetArea.innerHTML = '';
    syntaxOptionsArea.innerHTML = '';
    checkSyntaxButton.disabled = false;
    undoSyntaxButton.disabled = true; // Deshabilitar deshacer al inicio
    syntaxOrderHistory = []; // Resetear historial

    const shuffledFragments = shuffleArray([...question.fragments]);

    shuffledFragments.forEach((fragment, index) => {
        const fragmentDiv = document.createElement('div');
        fragmentDiv.textContent = fragment;
        fragmentDiv.className = 'clickable-fragment bg-blue-200 text-blue-800 px-3 py-2 rounded-md cursor-pointer shadow-sm m-1'; // Añadido margen
        fragmentDiv.dataset.originalText = fragment; // Usar el texto original para verificar
        fragmentDiv.dataset.isMoved = 'false'; // Para rastrear si está en targetArea

        syntaxOptionsArea.appendChild(fragmentDiv);

        // Añadir listener para mover al área de respuesta
        fragmentDiv.addEventListener('click', function() {
            if (answerBlocked) return; // No permitir clics si la respuesta está bloqueada
            if (this.dataset.isMoved === 'false') { // Si no está en el área de respuesta
                syntaxTargetArea.appendChild(this);
                this.classList.replace('bg-blue-200', 'bg-blue-400'); // Cambiar color al mover
                this.dataset.isMoved = 'true';
                syntaxOrderHistory.push(this); // Añadir al historial
                undoSyntaxButton.disabled = false; // Habilitar deshacer
            } else { // Si ya está en el área de respuesta, mover de vuelta a opciones
                syntaxOptionsArea.appendChild(this);
                this.classList.replace('bg-blue-400', 'bg-blue-200'); // Restaurar color
                this.dataset.isMoved = 'false';
                // Eliminar del historial (buscar y remover la última instancia)
                const indexInHistory = syntaxOrderHistory.lastIndexOf(this);
                if (indexInHistory > -1) {
                    syntaxOrderHistory.splice(indexInHistory, 1);
                }
                if (syntaxOrderHistory.length === 0) {
                    undoSyntaxButton.disabled = true;
                }
            }
        });
    });
}

function undoSyntaxOrder() {
    if (answerBlocked || syntaxOrderHistory.length === 0) return;

    const lastMovedFragment = syntaxOrderHistory.pop();
    if (lastMovedFragment) {
        syntaxOptionsArea.appendChild(lastMovedFragment);
        lastMovedFragment.classList.replace('bg-blue-400', 'bg-blue-200');
        lastMovedFragment.dataset.isMoved = 'false';
    }

    if (syntaxOrderHistory.length === 0) {
        undoSyntaxButton.disabled = true;
    }
}

function checkSyntaxOrderAnswer() {
    if (answerBlocked) return;
    answerBlocked = true;
    if (!syntaxTargetArea || !checkSyntaxButton || !undoSyntaxButton) return;

    checkSyntaxButton.disabled = true; // Deshabilitar el botón de comprobar
    undoSyntaxButton.disabled = true; // Deshabilitar deshacer

    // Deshabilitar clics en todos los fragmentos
    Array.from(syntaxOptionsArea.children).forEach(div => div.style.pointerEvents = 'none');
    Array.from(syntaxTargetArea.children).forEach(div => div.style.pointerEvents = 'none');


    const question = shuffledQuestions[currentQuestionIndex];
    const userOrder = Array.from(syntaxTargetArea.children).map(div => div.dataset.originalText.trim()); // Usar dataset.originalText
    const correctOrder = question.correctOrder.map(f => f.trim()); // Asegurarse de que no haya espacios extra

    let isCorrect = true;
    if (userOrder.length !== correctOrder.length) {
        isCorrect = false;
    } else {
        for (let i = 0; i < userOrder.length; i++) {
            if (userOrder[i] !== correctOrder[i]) {
                isCorrect = false;
                break;
            }
        }
    }

    if (isCorrect) {
        score++;
        if (quizCard) quizCard.classList.add('border-green-500');
    } else {
        errors++;
        score--;
        if (quizCard) quizCard.classList.add('border-red-500');
    }
    if (quizScoreDisplay) quizScoreDisplay.textContent = score;

    // Visual feedback for syntax elements
    Array.from(syntaxTargetArea.children).forEach((div, index) => {
        if (index < correctOrder.length && div.dataset.originalText.trim() === correctOrder[index]) {
            div.classList.replace('bg-blue-400', 'bg-green-500');
            div.classList.replace('text-blue-800', 'text-white');
        } else {
            div.classList.replace('bg-blue-400', 'bg-red-500');
            div.classList.replace('text-blue-800', 'text-white');
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500);
}

// Conexión Lógica (Drag & Match) - Se mantiene como drag and drop
let currentDragElement = null;

function setupDragMatchQuestion(question) {
    if (!dragElementsArea || !dropTargetsArea || !checkMatchButton || !undoMatchButton) return;

    dragElementsArea.innerHTML = '';
    dropTargetsArea.innerHTML = '';
    checkMatchButton.disabled = false;
    undoMatchButton.disabled = true; // Deshabilitar deshacer al inicio
    dragMatchHistory = []; // Resetear historial

    const shuffledDrags = shuffleArray(question.pairs.map(p => p.drag));
    const shuffledDrops = shuffleArray(question.pairs.map(p => p.drop));

    shuffledDrags.forEach((text, index) => {
        const dragDiv = document.createElement('div');
        dragDiv.textContent = text;
        dragDiv.className = 'drag-item bg-blue-200 text-blue-800 px-4 py-2 rounded-md cursor-grab shadow-sm mb-2 touch-action-none';
        dragDiv.draggable = true;
        dragDiv.dataset.originalText = text; // Para referencia al verificar
        dragElementsArea.appendChild(dragDiv);

        dragDiv.addEventListener('dragstart', (e) => {
            currentDragElement = dragDiv;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', text);
            setTimeout(() => dragDiv.classList.add('opacity-50'), 0);
        });

        dragDiv.addEventListener('dragend', () => {
            dragDiv.classList.remove('opacity-50');
            currentDragElement = null;
        });
    });

    shuffledDrops.forEach((text, index) => {
        const dropDiv = document.createElement('div');
        dropDiv.textContent = ''; // Limpiar el texto para que el elemento arrastrado lo reemplace
        dropDiv.className = 'drop-target bg-gray-300 text-gray-800 px-4 py-2 rounded-md border-2 border-dashed border-gray-400 min-h-[40px] flex items-center justify-center mb-2';
        dropDiv.dataset.correctMatch = question.pairs.find(p => p.drop === text).drag; // Almacena el drag correcto
        dropDiv.dataset.dropText = text; // Almacenar el texto original de la zona de soltar
        
        const dropTextSpan = document.createElement('span');
        dropTextSpan.textContent = text;
        dropTextSpan.className = 'text-gray-800'; // Estilo para el texto de la zona de soltar
        dropDiv.appendChild(dropTextSpan);

        dropTargetsArea.appendChild(dropDiv);

        dropDiv.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            dropDiv.classList.add('border-blue-500'); // Resaltar zona de soltar
        });

        dropDiv.addEventListener('dragleave', () => {
            dropDiv.classList.remove('border-blue-500');
        });

        dropDiv.addEventListener('drop', (e) => {
            e.preventDefault();
            dropDiv.classList.remove('border-blue-500');
            if (currentDragElement && !dropDiv.querySelector('.drag-item')) { // Solo si la zona está vacía
                dropDiv.appendChild(currentDragElement);
                currentDragElement.classList.remove('opacity-50');
                // Ocultar el texto original de la zona de soltar cuando se suelta un elemento
                dropTextSpan.classList.add('hidden');
                dragMatchHistory.push({ draggedElement: currentDragElement, droppedInto: dropDiv, originalDropTextSpan: dropTextSpan }); // Añadir al historial
                undoMatchButton.disabled = false; // Habilitar deshacer
            }
        });
    });
}

function undoDragMatch() {
    if (answerBlocked || dragMatchHistory.length === 0) return;

    const lastMove = dragMatchHistory.pop();
    if (lastMove) {
        const { draggedElement, droppedInto, originalDropTextSpan } = lastMove;
        dragElementsArea.appendChild(draggedElement); // Mover de vuelta al área de arrastre
        draggedElement.classList.remove('opacity-50'); // Asegurarse de que sea visible
        draggedElement.draggable = true; // Re-habilitar arrastre
        
        // Restaurar el texto original en la zona de soltar
        if (originalDropTextSpan) {
            originalDropTextSpan.classList.remove('hidden');
        }
        // Limpiar la zona de soltar si el elemento arrastrado era el único hijo
        if (droppedInto.children.length > 1 && droppedInto.contains(draggedElement)) {
             droppedInto.removeChild(draggedElement);
        }
    }

    if (dragMatchHistory.length === 0) {
        undoMatchButton.disabled = true;
    }
}

function checkDragMatchAnswer() {
    if (answerBlocked) return;
    answerBlocked = true;
    if (!dropTargetsArea || !checkMatchButton || !undoMatchButton) return;

    checkMatchButton.disabled = true;
    undoMatchButton.disabled = true; // Deshabilitar deshacer

    // Deshabilitar arrastre en todos los elementos
    Array.from(dragElementsArea.children).forEach(div => div.draggable = false);
    Array.from(dropTargetsArea.children).forEach(dropTarget => {
        const draggedItemInTarget = dropTarget.querySelector('.drag-item');
        if (draggedItemInTarget) {
            draggedItemInTarget.draggable = false;
        }
    });

    let correctMatches = 0;
    Array.from(dropTargetsArea.children).forEach(dropTarget => {
        const draggedItemInTarget = dropTarget.querySelector('.drag-item');
        const dropTextSpan = dropTarget.querySelector('span'); // Obtener el span con el texto original

        if (draggedItemInTarget) {
            const originalDragText = draggedItemInTarget.dataset.originalText;
            const correctMatchForTarget = dropTarget.dataset.correctMatch;

            if (originalDragText === correctMatchForTarget) {
                correctMatches++;
                draggedItemInTarget.classList.replace('bg-blue-200', 'bg-green-500');
                draggedItemInTarget.classList.replace('text-blue-800', 'text-white');
            } else {
                draggedItemInTarget.classList.replace('bg-blue-200', 'bg-red-500');
                draggedItemInTarget.classList.replace('text-blue-800', 'text-white');
            }
        }
        dropTarget.classList.remove('border-dashed', 'border-gray-400'); // Quitar borde de arrastre
        if (dropTextSpan) dropTextSpan.classList.remove('hidden'); // Mostrar el texto original de la zona de soltar
    });

    const question = shuffledQuestions[currentQuestionIndex]; // Necesitamos la pregunta actual para saber cuántos pares hay
    if (correctMatches === question.pairs.length) {
        score++;
        if (quizCard) quizCard.classList.add('border-green-500');
    } else {
        errors++;
        score--;
        if (quizCard) quizCard.classList.add('border-red-500');
    }
    if (quizScoreDisplay) quizScoreDisplay.textContent = score;

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500);
}


function endGame() {
    clearInterval(timerInterval);
    gameStarted = false;

    showResultScreen();

    const finalTimeSeconds = Math.floor((Date.now() - startTime) / 1000);
    const sessionData = {
        topic: currentTopic,
        difficulty: currentDifficulty,
        score: score,
        errors: errors,
        time: formatTime(finalTimeSeconds),
        timestamp: new Date().toISOString()
    };

    // Guardar la sesión actual
    if (localGameStorage) {
        localGameStorage.saveGameSession('webMasterQuizGame', sessionData);
    }

    if (quizCorrectAnswersDisplay) quizCorrectAnswersDisplay.textContent = score;
    if (quizIncorrectAnswersDisplay) quizIncorrectAnswersDisplay.textContent = errors;
    if (quizFinalScoreDisplay) quizFinalScoreDisplay.textContent = score; // Mostrar el puntaje final
    if (quizFinalTimeDisplay) quizFinalTimeDisplay.textContent = formatTime(finalTimeSeconds);

    // Lógica para habilitar/deshabilitar botón "Siguiente Nivel"
    const difficulties = ['basico', 'intermedio', 'avanzado'];
    const currentDifficultyIndex = difficulties.indexOf(currentDifficulty);
    if (quizNextLevelButton) {
        if (currentDifficultyIndex < difficulties.length - 1) {
            quizNextLevelButton.disabled = false;
            quizNextLevelButton.classList.remove('opacity-50', 'cursor-not-allowed');
            quizNextLevelButton.classList.add('bg-green-600', 'hover:bg-green-700');
        } else {
            quizNextLevelButton.disabled = true;
            quizNextLevelButton.classList.add('opacity-50', 'cursor-not-allowed');
            quizNextLevelButton.classList.remove('bg-green-600', 'hover:bg-green-700');
        }
    }
}

function resetGame() {
    clearInterval(timerInterval);
    gameStarted = false;
    currentQuestionIndex = 0;
    score = 0;
    errors = 0;
    if (quizScoreDisplay) quizScoreDisplay.textContent = '0';
    if (quizTimerDisplay) quizTimerDisplay.textContent = '00:00';
    if (quizCard) quizCard.classList.remove('border-green-500', 'border-red-500');
    answerBlocked = false;

    // Limpiar historial de deshacer
    syntaxOrderHistory = [];
    dragMatchHistory = [];

    // Limpiar áreas de preguntas
    // No es necesario limpiar multipleChoiceOptionsContainer.innerHTML, ya que los botones están hardcodeados
    if (syntaxTargetArea) syntaxTargetArea.innerHTML = '';
    if (syntaxOptionsArea) syntaxOptionsArea.innerHTML = '';
    if (dragElementsArea) dragElementsArea.innerHTML = '';
    if (dropTargetsArea) dropTargetsArea.innerHTML = '';

    // Asegurarse de que los botones de resultado estén habilitados para el próximo juego
    if (quizRetryLevelButton) {
        quizRetryLevelButton.disabled = false;
        quizRetryLevelButton.classList.remove('opacity-50', 'cursor-not-allowed');
        quizRetryLevelButton.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
    if (quizChangeTopicButton) {
        quizChangeTopicButton.disabled = false;
        quizChangeTopicButton.classList.remove('opacity-50', 'cursor-not-allowed');
        quizChangeTopicButton.classList.add('bg-purple-600', 'hover:bg-purple-700');
    }
    if (quizExitGameButton) {
        quizExitGameButton.disabled = false;
        quizExitGameButton.classList.remove('opacity-50', 'cursor-not-allowed');
        quizExitGameButton.classList.add('bg-gray-600', 'hover:bg-gray-700');
    }
}

function retryLevel() {
    startGame(); // Simplemente reinicia el juego con el mismo tema y dificultad
}

function nextLevel() {
    const difficulties = ['basico', 'intermedio', 'avanzado'];
    const currentDifficultyIndex = difficulties.indexOf(currentDifficulty);

    if (currentDifficultyIndex < difficulties.length - 1) {
        currentDifficulty = difficulties[currentDifficultyIndex + 1];
        startGame(); // Inicia el juego con el mismo tema pero la siguiente dificultad
    } else {
        // Ya en el nivel más avanzado, quizás volver a la selección de tema
        showTopicSelection();
    }
}

function exitGame() {
    resetGame();
    if (window.returnToMainContent) {
        window.returnToMainContent(); // Llama a la función global para volver al index.html
    }
}

// Expone la función de inicialización al ámbito global
window.initializeWebMasterQuizGame = initializeWebMasterQuizGame;
