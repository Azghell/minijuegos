// Este archivo contiene la lógica y los datos del juego de WebMaster Quiz.
// Incluye las preguntas por tema y dificultad, y la configuración del juego.

const quizData = {
    html: {
        basico: [
            {
                question: "Propósito de la etiqueta `<h1>`:",
                type: "multiple-choice",
                options: ["Crear un enlace", "Definir un párrafo", "Crear un encabezado de nivel más alto", "Insertar una imagen"],
                correctAnswer: 2,
                help: "Esta etiqueta se utiliza para el título principal de una sección o página.",
                codeExample: "<h1>Este es un encabezado principal</h1>"
            },
            {
                question: "Etiqueta para salto de línea simple:",
                type: "multiple-choice",
                options: ["`<p>`", "`<br>`", "`<h1>`", "`<a>`"],
                correctAnswer: 1,
                help: "Piensa en cómo forzar una nueva línea sin crear un nuevo párrafo.",
                codeExample: "<p>Línea 1<br>Línea 2</p>"
            },
            {
                question: "Atributo para URL de enlace:",
                type: "multiple-choice",
                options: ["`src`", "`alt`", "`href`", "`link`"],
                correctAnswer: 2,
                help: "Este atributo es clave para dónde te llevará el hipervínculo.",
                codeExample: "<a href=\"https://www.ejemplo.com\">Visitar Ejemplo</a>"
            },
            {
                question: "Ordena para crear una tabla HTML:",
                type: "order-execution",
                fragments: ["<table>", "<tr>", "<td>", "Contenido de celda", "</td>", "</tr>", "</table>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "Recuerda la jerarquía: la tabla contiene filas, y las filas contienen celdas.",
                codeExample: `<table>
    <tr>
        <td>Contenido de celda</td>
    </tr>
</table>`
            },
            {
                question: "Significado de HTML:",
                type: "multiple-choice",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
                correctAnswer: 0,
                help: "Es el lenguaje fundamental para la estructura de las páginas web.",
                codeExample: null
            },
            {
                question: "Etiqueta correcta para párrafo:",
                type: "multiple-choice",
                options: ["`<pa>`", "`<p>`", "`<pr>`", "`<par>`"],
                correctAnswer: 1,
                help: "Es una de las etiquetas más básicas para bloques de texto.",
                codeExample: "<p>Este es un párrafo de ejemplo.</p>"
            },
            {
                question: "Atributo para fuente de imagen:",
                type: "multiple-choice",
                options: ["`link`", "`url`", "`src`", "`href`"],
                correctAnswer: 2,
                help: "Este atributo indica la ubicación del archivo de la imagen.",
                codeExample: "<img src=\"imagen.jpg\" alt=\"Descripción de la imagen\">"
            },
            {
                question: "Empareja etiqueta HTML y propósito:",
                type: "drag-match",
                pairs: [
                    { drag: "Cuerpo del documento", drop: "<body>" },
                    { drag: "Título de la página", drop: "<title>" },
                    { drag: "División o sección", drop: "<div>" },
                    { drag: "Lista no ordenada", drop: "<ul>" },
                    { drag: "Elemento de lista", drop: "<li>" }
                ],
                help: "Cada etiqueta tiene un rol específico en la estructura de la página.",
                codeExample: null
            },
            {
                question: "Estructura básica de HTML:",
                type: "order-execution",
                fragments: ["<!DOCTYPE html>", "<html>", "<head>", "<title>", "Título de la página</title>", "</head>", "<body>", "Contenido</body >", "</html>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                help: "Piensa en el orden en que se define un documento web, desde la declaración del tipo hasta el cierre del HTML.",
                codeExample: `<!DOCTYPE html>
<html>
    <head>
        <title>Título de la página</title>
    </head>
    <body>
        Contenido
    </body>
</html>`
            },
            {
                question: "Etiqueta para crear un enlace:",
                type: "multiple-choice",
                options: ["`<link>`", "`<a>`", "`<href>`", "`<url>`"],
                correctAnswer: 1,
                help: "Esta etiqueta es la abreviatura de 'anchor'.",
                codeExample: "<a href=\"otra_pagina.html\">Ir a otra página</a>"
            },
            {
                question: "Significado de `<!DOCTYPE html>`:",
                type: "multiple-choice",
                options: ["Define el tipo de documento como HTML4", "Es una declaración para indicar la versión de HTML que se está usando, específicamente HTML5", "Define el idioma del documento", "Indica que el documento es un archivo XML"],
                correctAnswer: 1,
                help: "Es la primera línea de un documento HTML5 y es crucial para el renderizado correcto del navegador.",
                codeExample: null
            },
            {
                question: "Etiqueta HTML para comentarios invisibles:",
                type: "multiple-choice",
                options: ["`// Comentario`", "`/* Comentario */`", "`<!-- Comentario -->`", "`<comment>Comentario</comment>`"],
                correctAnswer: 2,
                help: "Los comentarios HTML son útiles para documentar tu código sin que afecte la visualización de la página.",
                codeExample: "<!-- Este es un comentario HTML -->"
            },
            {
                question: "Ordena para crear lista ordenada:",
                type: "order-execution",
                fragments: ["<ol>", "<li>", "Primer ítem", "</li>", "<li>", "Segundo ítem", "</li>", "</ol>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
                help: "Las listas ordenadas usan `<ol>` y cada ítem se define con `<li>`.",
                codeExample: `<ol>
    <li>Primer ítem</li>
    <li>Segundo ítem</li>
</ol>`
            },
            {
                question: "Empareja etiqueta HTML y tipo (línea/bloque):",
                type: "drag-match",
                pairs: [
                    { drag: "Bloque", drop: "<div>" },
                    { drag: "En línea", drop: "<span>" },
                    { drag: "Bloque", drop: "<p>" },
                    { drag: "En línea", drop: "<a>" },
                    { drag: "Bloque", drop: "<h1>" }
                ],
                help: "Los elementos de bloque ocupan todo el ancho disponible, los en línea solo el espacio necesario.",
                codeExample: null
            },
            {
                question: "Diferencia entre `<strong>` y `<em>`:",
                type: "multiple-choice",
                options: ["`<strong>` se usa para cursiva, `<em>` para negrita.", "`<strong>` para énfasis semántico, `<em>` para importancia semántica.", "`<strong>` para importancia semántica, `<em>` para énfasis semántico.", "No hay diferencia, ambos solo aplican negrita."],
                correctAnswer: 2,
                help: "Ambas etiquetas tienen un significado semántico que va más allá de su estilo visual predeterminado.",
                codeExample: "<strong>Texto importante</strong>, <em>texto enfatizado</em>"
            },
            {
                question: "Etiqueta para encabezado nivel 2:",
                type: "multiple-choice",
                options: ["`<h2>`", "`<h1.2>`", "`<head2>`", "`<heading2>`"],
                correctAnswer: 0,
                help: "Los encabezados van del h1 al h6, siendo h1 el más importante.",
                codeExample: "<h2>Subtítulo</h2>"
            },
            {
                question: "Atributo `alt` para imagen:",
                type: "multiple-choice",
                options: ["`description`", "`title`", "`alt`", "`text`"],
                correctAnswer: 2,
                help: "Este texto se muestra si la imagen no se carga o es leído por lectores de pantalla.",
                codeExample: "<img src=\"logo.png\" alt=\"Logo de la empresa\">"
            },
            {
                question: "Ordena para crear lista no ordenada:",
                type: "order-execution",
                fragments: ["<ul>", "<li>", "Café", "</li>", "<li>", "Té", "</li>", "</ul>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
                help: "Las listas no ordenadas usan `<ul>` y cada ítem se define con `<li>`.",
                codeExample: `<ul>
    <li>Café</li>
    <li>Té</li>
</ul>`
            },
            {
                question: "Etiqueta para pie de página:",
                type: "multiple-choice",
                options: ["`<bottom>`", "`<end>`", "`<footer>`", "`<page-end>`"],
                correctAnswer: 2,
                help: "Se encuentra al final de un documento o sección y suele contener información de derechos de autor o contacto.",
                codeExample: "<footer>Derechos de autor 2023</footer>"
            },
            {
                question: "Etiqueta para celda de encabezado de tabla:",
                type: "multiple-choice",
                options: ["`<td>`", "`<th>`", "`<headcell>`", "`<tr>`"],
                correctAnswer: 1,
                help: "Esta etiqueta se utiliza para los títulos de las columnas o filas en una tabla.",
                codeExample: `<th>Nombre</th>`
            },
            {
                question: "Etiqueta para crear un botón en formulario:",
                type: "multiple-choice",
                options: ["`<input type=\"button\">`", "`<button>`", "`<btn>`", "`<click>`"],
                correctAnswer: 1,
                help: "Aunque `<input type=\"button\">` también existe, `<button>` es más versátil y permite contenido HTML.",
                codeExample: `<button type="submit">Enviar</button>`
            },
            {
                question: "Empareja etiqueta con tipo de contenido:",
                type: "drag-match",
                pairs: [
                    { drag: "Imagen", drop: "`<img>`" },
                    { drag: "Enlace", drop: "`<a>`" },
                    { drag: "Párrafo", drop: "`<p>`" },
                    { drag: "Lista no ordenada", drop: "`<ul>`" }
                ],
                help: "Cada etiqueta HTML tiene un propósito semántico específico.",
                codeExample: null
            },
            {
                question: "Ordena para definir imagen con `src` y `alt`:",
                type: "order-execution",
                fragments: ["`<img`", `src="imagen.jpg"`, `alt="Descripción de la imagen"`, `>`],
                correctOrder: [0, 1, 2, 3],
                help: "Los atributos `src` y `alt` son esenciales para las imágenes.",
                codeExample: `<img src="imagen.jpg" alt="Descripción de la imagen">`
            },
            {
                question: "Atributo para identificador único HTML:",
                type: "multiple-choice",
                options: ["`class`", "`name`", "`id`", "`data-id`"],
                correctAnswer: 2,
                help: "Este atributo debe ser único para cada elemento en el documento.",
                codeExample: `<div id="miElementoUnico"></div>`
            },
            {
                question: "Etiqueta para contenido principal visible:",
                type: "multiple-choice",
                options: ["`<head>`", "`<html>`", "`<body>`", "`<main>`"],
                correctAnswer: 2,
                help: "Todo lo que el usuario ve en la página va dentro de esta etiqueta.",
                codeExample: `<body>Contenido visible</body>`
            }
        ],
        intermedio: [
            {
                question: "Atributo para fusionar celdas en fila de tabla:",
                type: "multiple-choice",
                options: ["`rowspan`", "`colspan`", "`cellspan`", "`merge-rows`"],
                correctAnswer: 1,
                help: "Este atributo se usa para expandir una celda a través de múltiples columnas.",
                codeExample: `<table>
    <tr>
        <td colspan="2">Celdas fusionadas</td>
    </tr>
</table>`
            },
            {
                question: "Empareja tipo de input de formulario con uso:",
                type: "drag-match",
                pairs: [
                    { drag: "Campo de texto", drop: `<input type="text">` },
                    { drag: "Contraseña", drop: `<input type="password">` },
                    { drag: "Botón de envío", drop: `<input type="submit">` },
                    { drag: "Casilla de verificación", drop: `<input type="checkbox">` },
                    { drag: "Botón de radio", drop: `<input type="radio">` }
                ],
                help: "Cada tipo de input está diseñado para un tipo específico de interacción del usuario.",
                codeExample: null
            },
            {
                question: "Etiqueta para incrustar multimedia externa:",
                type: "multiple-choice",
                options: ["`<video>`", "`<iframe>`", "`<embed>`", "`<object>`"],
                correctAnswer: 1,
                help: "Piensa en cómo se inserta una 'ventana' a otro documento dentro del tuyo.",
                codeExample: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
            },
            {
                question: "Ordena para definir formulario HTML básico:",
                type: "order-execution",
                fragments: ["<form>", "<label for=\"name\">", "Nombre:</label>", "<input type=\"text\" id=\"name\" name=\"name\">", "<button type=\"submit\">", "Enviar</button>", "</form>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "Un formulario agrupa sus campos y acciones.",
                codeExample: `<form>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Enviar</button>
</form>`
            },
            {
                question: "Significado de 'semántico' en HTML:",
                type: "multiple-choice",
                options: ["Estilo de la página", "Significado o propósito del contenido", "Formato visual del texto", "Interactividad del usuario"],
                correctAnswer: 1,
                help: "Se refiere a dar un significado claro a las etiquetas, más allá de cómo se ven.",
                codeExample: "<header>, <nav>, <article>, <section>, <aside>, <footer>"
            },
            {
                question: "Propósito principal de etiqueta `<meta>`:",
                type: "multiple-choice",
                options: ["Definir el título de la página", "Proporcionar metadatos sobre el documento HTML", "Vincular hojas de estilo externas", "Insertar scripts de JavaScript"],
                correctAnswer: 1,
                help: "Esta etiqueta proporciona información sobre la página, pero no es visible para el usuario.",
                codeExample: `<meta charset="UTF-8">
<meta name="description" content="Descripción de la página">`
            },
            {
                question: "Empareja atributos de imagen con función:",
                type: "drag-match",
                pairs: [
                    { drag: "Ruta de la imagen", drop: "`src`" },
                    { drag: "Texto alternativo", drop: "`alt`" },
                    { drag: "Ancho de la imagen", drop: "`width`" },
                    { drag: "Alto de la imagen", drop: "`height`" },
                    { drag: "Mapa de imagen", drop: "`usemap`" }
                ],
                help: "Estos atributos son esenciales para que las imágenes se muestren correctamente y sean accesibles.",
                codeExample: null
            },
            {
                question: "Ordena para vincular CSS externo:",
                type: "order-execution",
                fragments: ["<head>", "<link", "rel=\"stylesheet\"", "href=\"styles.css\"", ">", "</head>"],
                correctOrder: [0, 1, 2, 3, 4, 5],
                help: "Las hojas de estilo externas se enlazan en la sección de metadatos del documento.",
                codeExample: `<head>
    <link rel="stylesheet" href="styles.css">
</head>`
            },
            {
                question: "Etiqueta HTML5 para agrupar contenido relacionado (con título):",
                type: "multiple-choice",
                options: ["`<group>`", "`<section>`", "`<article>`", "`<aside>`"],
                correctAnswer: 1,
                help: "Esta etiqueta define una sección genérica de contenido.",
                codeExample: `<section>
    <h2>Acerca de nosotros</h2>
    <p>Información sobre la empresa.</p>
</section>`
            },
            {
                question: "Atributo para hacer elemento editable en navegador:",
                type: "multiple-choice",
                options: ["`editable`", "`contenteditable`", "`canedit`", "`user-editable`"],
                correctAnswer: 1,
                help: "Este atributo permite que el contenido del elemento pueda ser modificado por el usuario.",
                codeExample: `<div contenteditable="true">Este texto se puede editar.</div>`
            },
            {
                question: "Atributo para valor predeterminado en `<input type=\"text\">`:",
                type: "multiple-choice",
                options: ["`default`", "`placeholder`", "`value`", "`initial`"],
                correctAnswer: 2,
                help: "Este atributo define el valor inicial de un campo de entrada.",
                codeExample: `<input type="text" value="Texto predeterminado">`
            },
            {
                question: "Empareja atributo de formulario con función:",
                type: "drag-match",
                pairs: [
                    { drag: "URL a la que se envían los datos", drop: "`action`" },
                    { drag: "Método HTTP (GET/POST)", drop: "`method`" },
                    { drag: "Tipo de codificación de datos", drop: "`enctype`" },
                    { drag: "Habilitar/deshabilitar autocompletado", drop: "`autocomplete`" },
                    { drag: "Deshabilitar validación del navegador", drop: "`novalidate`" }
                ],
                help: "Estos atributos controlan el comportamiento de un formulario HTML.",
                codeExample: null
            },
            {
                question: "Ordena para crear lista descriptiva (`<dl>`):",
                type: "order-execution",
                fragments: ["<dl>", "<dt>", "Término", "</dt>", "<dd>", "Descripción", "</dd>", "</dl>"],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
                help: "Las listas descriptivas se usan para definir términos y sus descripciones.",
                codeExample: `<dl>
    <dt>Término</dt>
    <dd>Descripción</dd>
</dl>`
            },
            {
                question: "Etiquetas HTML5 para contenido principal y navegación:",
                type: "multiple-choice",
                options: ["`<content>` y `<menu>`", "`<main>` y `<nav>`", "`<article>` y `<aside>`", "`<section>` y `<header>`"],
                correctAnswer: 1,
                help: "HTML5 introdujo etiquetas para mejorar la semántica del documento.",
                codeExample: `<main>...</main> <nav>...</nav>`
            },
            {
                question: "Propósito del atributo `srcset` en `<img>`:",
                type: "multiple-choice",
                options: ["Definir el tamaño máximo de la imagen", "Proporcionar imágenes diferentes para distintas resoluciones o densidades de píxeles", "Especificar la calidad de compresión de la imagen", "Cargar la imagen de forma asíncrona"],
                correctAnswer: 1,
                help: "Permite que el navegador elija la imagen más adecuada para el dispositivo del usuario.",
                codeExample: `<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" src="medium.jpg" alt="Imagen responsive">`
            },
            {
                question: "Etiqueta para incrustar audio en página web:",
                type: "multiple-choice",
                options: ["`<sound>`", "`<audio>`", "`<mp3>`", "`<play>`"],
                correctAnswer: 1,
                help: "Esta etiqueta permite reproducir archivos de audio con controles nativos del navegador.",
                codeExample: `<audio controls src="audio.mp3"></audio>`
            },
            {
                question: "Atributo para campo de formulario requerido:",
                type: "multiple-choice",
                options: ["`mandatory`", "`required`", "`must-fill`", "`validate`"],
                correctAnswer: 1,
                help: "Es un atributo booleano que activa la validación HTML5 del navegador.",
                codeExample: `<input type="text" required>`
            },
            {
                question: "Empareja etiqueta HTML con uso semántico (HTML5):",
                type: "drag-match",
                pairs: [
                    { drag: "Contenido principal y único", drop: "<main>" },
                    { drag: "Contenido de navegación", drop: "<nav>" },
                    { drag: "Pie de página", drop: "<footer>" },
                    { drag: "Artículo independiente", drop: "<article>" },
                    { drag: "Contenido secundario/aparte", drop: "<aside>" }
                ],
                help: "Estas etiquetas ayudan a estructurar el contenido de manera significativa para navegadores y herramientas de accesibilidad.",
                codeExample: null
            },
            {
                question: "Ordena para crear imagen con mapa (`<map>`):",
                type: "order-execution",
                fragments: [
                    "<img src=\"planets.gif\" alt=\"Planetas\" usemap=\"#planetmap\">",
                    "<map name=\"planetmap\">",
                    "  <area shape=\"rect\" coords=\"0,0,82,126\" href=\"sun.htm\" alt=\"Sol\">",
                    "  <area shape=\"circle\" coords=\"90,58,3\" href=\"mercury.htm\" alt=\"Mercurio\">",
                    "</map>"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Un mapa de imagen define áreas clicables en una imagen.",
                codeExample: `<img src="planets.gif" alt="Planetas" usemap="#planetmap">
<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sol">
  <area shape="circle" coords="90,58,3" href="mercury.htm" alt="Mercurio">
</map>`
            },
            {
                question: "¿Qué tipo de `input` se usa para un control deslizante de rango?",
                type: "multiple-choice",
                options: ["`type=\"slider\"`", "`type=\"range\"`", "`type=\"scale\"`", "`type=\"level\"`"],
                correctAnswer: 1,
                help: "Este input permite al usuario seleccionar un valor de un rango predefinido.",
                codeExample: `<input type="range" min="0" max="100" value="50">`
            },
            {
                question: "Atributo para agrupar elementos de formulario (con borde):",
                type: "multiple-choice",
                options: ["`<group>`", "`<section>`", "`<fieldset>`", "`<formgroup>`"],
                correctAnswer: 2,
                help: "La etiqueta `<legend>` se usa a menudo con esta para proporcionar un título al grupo.",
                codeExample: `<fieldset><legend>Contacto</legend>...</fieldset>`
            },
            {
                question: "Empareja atributo HTML con accesibilidad/usabilidad:",
                type: "drag-match",
                pairs: [
                    { drag: "Orden de navegación con teclado", drop: "`tabindex`" },
                    { drag: "Texto de ejemplo en campo de entrada", drop: "`placeholder`" },
                    { drag: "Deshabilita un control de formulario", drop: "`disabled`" },
                    { drag: "Hace un campo de entrada solo lectura", drop: "`readonly`" }
                ],
                help: "Estos atributos mejoran la interacción del usuario y la accesibilidad.",
                codeExample: null
            },
            {
                question: "Etiqueta HTML para encabezado de tabla:",
                type: "multiple-choice",
                options: ["`<th>`", "`<header>`", "`<thead>`", "`<caption>`"],
                correctAnswer: 2,
                help: "Esta etiqueta agrupa las filas de encabezado de una tabla.",
                codeExample: `<thead><tr><th>Encabezado</th></tr></thead>`
            },
            {
                question: "Atributo para especificar charset HTML:",
                type: "multiple-choice",
                options: ["`lang`", "`charset`", "`encoding`", "`type`"],
                correctAnswer: 1,
                help: "Es fundamental para la correcta visualización de caracteres especiales y acentos.",
                codeExample: `<meta charset="UTF-8">`
            },
            {
                question: "Ordena para crear barra de progreso HTML5:",
                type: "order-execution",
                fragments: ["`<progress`", `value="70"`, `max="100">`, `70%</progress>`],
                correctOrder: [0, 1, 2, 3],
                help: "La etiqueta `progress` visualiza el progreso de una tarea.",
                codeExample: `<progress value="70" max="100">70%</progress>`
            }
        ],
        intermedio: [
            {
                question: "¿Qué pseudo-clase CSS se utiliza para seleccionar un elemento cuando el cursor del ratón está sobre él?",
                type: "multiple-choice",
                options: ["`:active`", "`::before`", "`::hover`", "`a:hover`"],
                correctAnswer: 3, // Assuming this is asking for specific link hover, not generic pseudo-class
                help: "Piensa en el estado de un elemento cuando el puntero del mouse está encima.",
                codeExample: `a:hover {
    color: red;
}`
            },
            {
                question: "Empareja la propiedad 'display' con su efecto principal.",
                type: "drag-match",
                pairs: [
                    { drag: "Elemento en bloque", drop: "`display: block;`" },
                    { drag: "Elemento en línea", drop: "`display: inline;`" },
                    { drag: "Elemento en línea pero con propiedades de bloque", drop: "`display: inline-block;`" },
                    { drag: "Oculta el elemento sin quitar espacio", drop: "`display: none;`" },
                    { drag: "Contenedor flexible", drop: "`display: flex;`" }
                ],
                help: "Esta propiedad define cómo se muestra y se comporta un elemento en el diseño.",
                codeExample: null
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el espacio entre el borde de un elemento y su contenido?",
                type: "multiple-choice",
                options: ["`margin`", "`border-spacing`", "`padding`", "`spacing`"],
                correctAnswer: 2,
                help: "Este espacio está 'dentro' del elemento, antes de su borde.",
                codeExample: `div {
    padding: 20px;
}`
            },
            {
                question: "Ordena las propiedades para centrar un elemento de bloque horizontalmente usando `margin`.",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   width: 50%;",
                    "   margin-left: auto;",
                    "   margin-right: auto;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Para centrar un bloque, necesitas darle un ancho y usar un valor específico para los márgenes laterales.",
                codeExample: `div {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}`
            },
            {
                question: "¿Qué unidad de medida CSS es relativa al tamaño de fuente del elemento raíz (`<html>`)?",
                type: "multiple-choice",
                options: ["`em`", "`rem`", "`px`", "`%`"],
                correctAnswer: 1,
                help: "Esta unidad es útil para un escalado de fuente consistente en todo el documento.",
                codeExample: `p {
    font-size: 1.2rem;
}`
            },
            {
                question: "¿Cuál es la forma correcta de importar una hoja de estilo CSS en otra hoja de estilo CSS?",
                type: "multiple-choice",
                options: ["`@include url('style.css');`", "`@import 'style.css';`", "`<link src='style.css'>`", "`import url('style.css');`"],
                correctAnswer: 1,
                help: "Esta regla permite anidar hojas de estilo.",
                codeExample: `@import 'theme.css';`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para crear esquinas redondeadas en un elemento?",
                type: "multiple-choice",
                options: ["`corner-radius`", "`border-radius`", "`round-corners`", "`border-curve`"],
                correctAnswer: 1,
                help: "Esta propiedad afecta la curvatura de los bordes de un elemento.",
                codeExample: `div {
    border-radius: 10px;
}`
            },
            {
                question: "Empareja la propiedad de posicionamiento CSS con su comportamiento.",
                type: "drag-match",
                pairs: [
                    { drag: "Posición normal en el flujo", drop: "`position: static;`" },
                    { drag: "Posicionado relativo a su posición normal", drop: "`position: relative;`" },
                    { drag: "Posicionado relativo al viewport", drop: "`position: fixed;`" },
                    { drag: "Posicionado relativo al ancestro posicionado más cercano", drop: "`position: absolute;`" },
                    { drag: "Se comporta como 'relative' hasta un punto de scroll, luego como 'fixed'", drop: "`position: sticky;`" }
                ],
                help: "Cada valor de `position` altera cómo un elemento se sitúa en la página.",
                codeExample: null
            },
            {
                question: "Ordena las propiedades para crear un efecto de sombra de caja (box-shadow).",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   box-shadow: 5px",
                    "   10px",
                    "   #888888;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Esta propiedad permite añadir sombras a los elementos, con valores para el desplazamiento y color.",
                codeExample: `div {
    box-shadow: 5px 10px #888888;
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para definir la altura de la línea del texto?",
                type: "multiple-choice",
                options: ["`line-spacing`", "`text-height`", "`line-height`", "`text-spacing-y`"],
                correctAnswer: 2,
                help: "Esta propiedad controla el espacio vertical entre las líneas de texto.",
                codeExample: `p {
    line-height: 1.5;
}`
            },
            {
                question: "¿Qué es la especificidad en CSS?",
                type: "multiple-choice",
                options: ["El orden en que se escriben las reglas CSS.", "Un conjunto de reglas que determina qué reglas de estilo se aplican a un elemento cuando hay conflictos.", "La capacidad de un selector para ser reutilizado.", "La velocidad de carga de una hoja de estilo."],
                correctAnswer: 1,
                help: "La especificidad es un algoritmo que calcula el 'peso' de un selector CSS.",
                codeExample: null
            },
            {
                question: "Empareja el pseudo-clase/elemento CSS con su uso.",
                type: "drag-match",
                pairs: [
                    { drag: "Selecciona un hijo específico por su posición", drop: ":nth-child()" },
                    { drag: "Estilo de la primera línea de un bloque de texto", drop: "::first-line" },
                    { drag: "Elemento que tiene el foco de entrada", drop: ":focus" },
                    { drag: "Estilo del primer carácter de un bloque de texto", drop: "::first-letter" }
                ],
                help: "Los pseudo-clases y pseudo-elementos permiten aplicar estilos a estados o partes específicas de un elemento.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para utilizar la función `calc()` en CSS para definir un ancho.",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   width:",
                    "   calc(",
                    "   100%",
                    "   - 20px",
                    "   );",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "`calc()` permite realizar cálculos matemáticos en propiedades CSS.",
                codeExample: `div {
    width: calc(100% - 20px);
}`
            },
            {
                question: "¿Cuál es el propósito de la propiedad `object-fit` para imágenes o videos?",
                type: "multiple-choice",
                options: ["Controlar la alineación del objeto dentro de su contenedor.", "Especificar cómo un contenido (ej. imagen, video) debe ajustarse dentro del contenedor de su elemento.", "Definir el tamaño de la caja del objeto.", "Aplicar un filtro al objeto."],
                correctAnswer: 1,
                help: "Es similar a `background-size` pero para elementos reemplazados como `<img>` o `<video>`.",
                codeExample: `img {
    width: 100px;
    height: 100px;
    object-fit: cover;
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para aplicar un fondo de imagen a un elemento?",
                type: "multiple-choice",
                options: ["`image-background`", "`bg-image`", "`background-image`", "`source-image`"],
                correctAnswer: 2,
                help: "Esta propiedad permite establecer una o más imágenes como fondo de un elemento.",
                codeExample: `div {
    background-image: url('fondo.png');
}`
            },
            {
                question: "¿Cuál es la diferencia entre `visibility: hidden;` y `display: none;`?",
                type: "multiple-choice",
                options: ["`hidden` oculta el elemento pero mantiene su espacio; `none` lo oculta completamente y no ocupa espacio.", "`hidden` no funciona en todos los navegadores; `none` sí.", "`hidden` solo oculta texto; `none` oculta todo el elemento.", "No hay diferencia funcional, solo sintáctica."],
                correctAnswer: 0,
                help: "Ambas ocultan elementos, pero su impacto en el diseño es diferente.",
                codeExample: `div { display: none; } /* No ocupa espacio */
div { visibility: hidden; } /* Oculto pero ocupa espacio */`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el apilamiento de elementos posicionados (su orden en el eje Z)?",
                type: "multiple-choice",
                options: ["`layer-index`", "`z-index`", "`order`", "`stack-level`"],
                correctAnswer: 1,
                help: "Funciona solo en elementos con una posición diferente a `static`.",
                codeExample: `div {
    position: relative;
    z-index: 10;
}`
            },
            {
                question: "Empareja la propiedad de `background` con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Imagen de fondo", drop: "`background-image`" },
                    { drag: "Color de fondo", drop: "`background-color`" },
                    { drag: "Repetición de la imagen de fondo", drop: "`background-repeat`" },
                    { drag: "Posición de la imagen de fondo", drop: "`background-position`" },
                    { drag: "Tamaño de la imagen de fondo", drop: "`background-size`" }
                ],
                help: "Estas propiedades controlan cómo se muestra el fondo de un elemento.",
                codeExample: null
            },
            {
                question: "Ordena las propiedades para crear una columna flexible que ocupe el doble de espacio que otras en un contenedor Flexbox.",
                type: "order-execution",
                fragments: [
                    ".item {",
                    "   flex-grow:",
                    "   2;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "`flex-grow` define la capacidad de un ítem flexible para crecer si es necesario.",
                codeExample: `div {
    box-shadow: 5px 10px #888888;
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para aplicar un desplazamiento de texto (ej. sangría de primera línea)?",
                type: "multiple-choice",
                options: ["`text-align`", "`text-indent`", "`padding-left`", "`margin-left`"],
                correctAnswer: 1,
                help: "Esta propiedad añade un espacio horizontal antes de la primera línea de un bloque de texto.",
                codeExample: `p {
    text-indent: 50px;
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el comportamiento del contenido que desborda el área de un elemento?",
                type: "multiple-choice",
                options: ["`text-overflow`", "`white-space`", "`overflow`", "`clip`"],
                correctAnswer: 2,
                help: "Puede ser `visible`, `hidden`, `scroll` o `auto`.",
                codeExample: `div { overflow: auto; }`
            },
            {
                question: "Empareja la propiedad `box-sizing` con su efecto.",
                type: "drag-match",
                pairs: [
                    { drag: "El `width` y `height` incluyen el contenido y el padding.", drop: "`box-sizing: content-box;`" },
                    { drag: "El `width` y `height` incluyen el contenido, padding y borde.", drop: "`box-sizing: border-box;`" }
                ],
                help: "Esta propiedad es fundamental para el control del modelo de caja.",
                codeExample: null
            },
            {
                question: "Ordena las propiedades para aplicar un estilo de texto flotante alrededor de una imagen.",
                type: "order-execution",
                fragments: [
                    "img {",
                    "   float: left;",
                    "   margin-right: 15px;",
                    "}",
                    "p {",
                    "   clear: left;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "La propiedad `float` saca un elemento del flujo normal, y `clear` se usa para evitar que otros elementos floten a su lado.",
                codeExample: `img { float: left; margin-right: 15px; }
p { clear: left; }`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el comportamiento del contenido que desborda el área de un elemento?",
                type: "multiple-choice",
                options: ["`text-overflow`", "`white-space`", "`overflow`", "`clip`"],
                correctAnswer: 2,
                help: "Puede ser `visible`, `hidden`, `scroll` o `auto`.",
                codeExample: `div { overflow: auto; }`
            }
        ],
        avanzado: [
            {
                question: "¿Qué propiedad CSS se utiliza para aplicar transformaciones 2D o 3D a un elemento?",
                type: "multiple-choice",
                options: ["`transition`", "`animation`", "`transform`", "`translate`"],
                correctAnswer: 2,
                help: "Esta propiedad permite mover, rotar, escalar o inclinar elementos.",
                codeExample: `div {
    transform: rotate(45deg) scale(1.2);
}`
            },
            {
                question: "Empareja la propiedad de Flexbox con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Define la dirección de los ítems", drop: "`flex-direction`" },
                    { drag: "Alinea ítems a lo largo del eje principal", drop: "`justify-content`" },
                    { drag: "Alinea ítems a lo largo del eje transversal", drop: "`align-items`" },
                    { drag: "Permite a los ítems ajustarse a la siguiente línea", drop: "`flex-wrap`" },
                    { drag: "Controla el crecimiento de un ítem", drop: "`flex-grow`" }
                ],
                help: "Flexbox es una herramienta poderosa para la distribución y alineación de elementos en una dimensión.",
                codeExample: null
            },
            {
                question: "¿Qué pseudo-elemento CSS se utiliza para insertar contenido antes del contenido de un elemento?",
                type: "multiple-choice",
                options: ["`:first-child`", "`::before`", "`::after`", "`::first-line`"],
                correctAnswer: 1,
                help: "Este pseudo-elemento se utiliza para añadir contenido decorativo o funcional antes del contenido real del elemento.",
                codeExample: `p::before {
    content: "Nota: ";
    font-weight: bold;
}`
            },
            {
                question: "Ordena las propiedades para crear una animación CSS básica.",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   animation-name: slidein;",
                    "   animation-duration: 3s;",
                    "}",
                    "@keyframes slidein {",
                    "   from { transform: translateX(0%); }",
                    "   to { transform: translateX(100%); }",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
                help: "Las animaciones CSS se definen en dos partes: la definición de los fotogramas clave y la aplicación al elemento.",
                codeExample: `div {
    animation-name: slidein;
    animation-duration: 3s;
}

@keyframes slidein {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
}`
            },
            {
                question: "¿Qué es 'CSS Grid Layout'?",
                type: "multiple-choice",
                options: ["Un sistema de rejilla para imágenes", "Un sistema de diseño bidimensional para organizar elementos en columnas y filas", "Una forma de alinear texto en una cuadrícula", "Una técnica para crear gráficos vectoriales"],
                correctAnswer: 1,
                help: "Este sistema de diseño permite un control preciso sobre la disposición de elementos en dos dimensiones.",
                codeExample: null
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el orden de los ítems dentro de un contenedor Flexbox?",
                type: "multiple-choice",
                options: ["`flex-order`", "`order`", "`sort-items`", "`item-order`"],
                correctAnswer: 1,
                help: "Esta propiedad permite cambiar la secuencia visual de los elementos flexibles.",
                codeExample: `div:nth-child(1) {
    order: 2;
}
div:nth-child(2) {
    order: 1;
}`
            },
            {
                question: "Empareja la propiedad de transición CSS con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Propiedad a transicionar", drop: "`transition-property`" },
                    { drag: "Duración de la transición", drop: "`transition-duration`" },
                    { drag: "Función de temporización", drop: "`transition-timing-function`" },
                    { drag: "Retraso de la transición", drop: "`transition-delay`" },
                    { drag: "Atajo para todas", drop: "`transition`" }
                ],
                help: "Las transiciones permiten suavizar los cambios de propiedades CSS a lo largo del tiempo.",
                codeExample: null
            },
            {
                question: "Ordena las propiedades para hacer un elemento 'sticky' en CSS.",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   position: sticky;",
                    "   top: 0;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "Este tipo de posicionamiento es útil para elementos que se 'pegan' a la pantalla al desplazarse.",
                codeExample: `div {
    position: sticky;
    top: 0;
}`
            },
            {
                question: "¿Qué función CSS se utiliza para aplicar un filtro de desenfoque a un elemento?",
                type: "multiple-choice",
                options: ["`blur()`", "`filter: blur()`", "`backdrop-filter: blur()`", "`transform: blur()`"],
                correctAnswer: 1,
                help: "Esta propiedad permite aplicar efectos gráficos como el desenfoque.",
                codeExample: `img {
    filter: blur(5px);
}`
            },
            {
                question: "¿Qué es una 'media query' en CSS?",
                type: "multiple-choice",
                options: ["Una forma de cargar archivos multimedia", "Una técnica para consultar la base de datos", "Una regla CSS que permite aplicar estilos condicionalmente basados en las características del dispositivo", "Una función para reproducir medios"],
                correctAnswer: 2,
                help: "Son fundamentales para el diseño web adaptable a diferentes tamaños de pantalla.",
                codeExample: `@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}`
            },
            {
                question: "¿Qué es una 'CSS Custom Property' (variable CSS)?",
                type: "multiple-choice",
                options: ["Una propiedad que solo funciona en navegadores específicos.", "Una entidad definida por el autor que contiene un valor reusable a lo largo de una hoja de estilo.", "Una propiedad que se ajusta automáticamente al tamaño de la pantalla.", "Una propiedad para definir animaciones complejas."],
                correctAnswer: 1,
                help: "Permiten definir valores que pueden ser utilizados en múltiples lugares, facilitando el mantenimiento.",
                codeExample: `:root { --main-color: blue; } p { color: var(--main-color); }`
            },
            {
                question: "Ordena las propiedades para crear un diseño simple con CSS Grid usando `grid-template-columns` y `grid-template-rows`.",
                type: "order-execution",
                fragments: [
                    ".container {",
                    "   display: grid;",
                    "   grid-template-columns: 1fr 1fr 1fr;",
                    "   grid-template-rows: auto 100px;",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "`grid-template-columns` y `grid-template-rows` definen la estructura explícita de la rejilla.",
                codeExample: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 100px;
}`
            },
            {
                question: "Empareja la propiedad de Flexbox o Grid con su uso específico.",
                type: "drag-match",
                pairs: [
                    { drag: "Espacio entre filas y columnas en Grid/Flexbox", drop: "`gap`" },
                    { drag: "Alineación individual de un ítem en el eje transversal", drop: "`align-self`" },
                    { drag: "Define áreas nombradas en el Grid", drop: "`grid-template-areas`" },
                    { drag: "Controla el encogimiento de un ítem flexible", drop: "`flex-shrink`" }
                ],
                help: "Estas propiedades ofrecen control granular sobre la disposición de los elementos.",
                codeExample: null
            },
            {
                question: "¿Qué es la regla `@supports` en CSS?",
                type: "multiple-choice",
                options: ["Una forma de importar fuentes externas.", "Una regla CSS que permite aplicar estilos condicionalmente basados en la compatibilidad del navegador con ciertas propiedades o valores.", "Una forma de definir variables CSS.", "Una regla para incluir archivos JavaScript."],
                correctAnswer: 1,
                help: "Es útil para aplicar estilos progresivamente, asegurando la compatibilidad con navegadores antiguos.",
                codeExample: `@supports (display: grid) {
    .container { display: grid; }
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para aplicar un efecto de máscara a un elemento, permitiendo que partes del elemento sean transparentes o semitransparentes?",
                type: "multiple-choice",
                options: ["`opacity`", "`clip-path`", "`mask-image`", "`filter: alpha()`"],
                correctAnswer: 2,
                help: "La propiedad `mask-image` utiliza una imagen como máscara para revelar u ocultar partes de un elemento.",
                codeExample: `div {
    mask-image: url(mask.png);
    mask-mode: alpha;
}`
            },
            {
                question: "¿Cómo se utiliza la propiedad `mix-blend-mode`?",
                type: "multiple-choice",
                options: ["Para mezclar colores de texto y fondo.", "Para definir cómo el contenido de un elemento debe mezclarse con el de su fondo (o con los elementos debajo de él).", "Para aplicar un modo de fusión a las imágenes de fondo.", "Para controlar la opacidad de un elemento."],
                correctAnswer: 1,
                help: "Es similar a los modos de fusión en software de edición de imágenes como Photoshop.",
                codeExample: `div {
    background-color: blue;
    mix-blend-mode: multiply;
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para controlar el comportamiento del desplazamiento suave (smooth scrolling) en la página?",
                type: "multiple-choice",
                options: ["`scroll-behavior`", "`smooth-scroll`", "`overflow-scrolling`", "`scroll-snap-type`"],
                correctAnswer: 0,
                help: "Permite que los saltos de ancla o los cambios de scroll se animen suavemente en lugar de ser instantáneos.",
                codeExample: `html {
    scroll-behavior: smooth;
}`
            },
            {
                question: "Empareja la función de transformación CSS con su efecto.",
                type: "drag-match",
                pairs: [
                    { drag: "Mueve un elemento", drop: "`translate()`" },
                    { drag: "Rota un elemento", drop: "`rotate()`" },
                    { drag: "Escala un elemento", drop: "`scale()`" },
                    { drag: "Inclina un elemento", drop: "`skew()`" }
                ],
                help: "Las funciones de `transform` permiten manipular la posición, rotación, escala e inclinación de los elementos.",
                codeExample: null
            },
            {
                question: "Ordena las propiedades para crear un diseño de Grid con áreas nombradas.",
                type: "order-execution",
                fragments: [
                    ".container {",
                    "   display: grid;",
                    "   grid-template-areas:",
                    "   \"header header\"",
                    "   \"nav    main\"",
                    "   \"footer footer\";",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "`grid-template-areas` permite un diseño visual intuitivo de la rejilla.",
                codeExample: `.container {
    display: grid;
    grid-template-areas:
        "header header"
        "nav    main"
        "footer footer";
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para aplicar un efecto de desenfoque a un elemento y a su contenido *detrás* de él (como un fondo borroso de tipo 'vidrio esmerilado')?",
                type: "multiple-choice",
                options: ["`filter: blur()`", "`backdrop-filter: blur()`", "`background-filter`", "`blur-content`"],
                correctAnswer: 1,
                help: "Esta propiedad aplica efectos gráficos a la región detrás de un elemento.",
                codeExample: `div {
    backdrop-filter: blur(5px);
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para definir una forma geométrica que recorta un elemento, haciendo invisibles las partes fuera de la forma?",
                type: "multiple-choice",
                options: ["`mask-image`", "`shape-outside`", "`clip-path`", "`object-fit`"],
                correctAnswer: 2,
                help: "Permite crear recortes complejos en elementos, como círculos, elipses o polígonos.",
                codeExample: `div { clip-path: circle(50% at 50% 50%); }`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para indicar al navegador que un elemento va a ser animado o transformado, permitiéndole optimizar el rendimiento?",
                type: "multiple-choice",
                options: ["`optimize-animation`", "`performance-hint`", "`will-change`", "`animate-prepare`"],
                correctAnswer: 2,
                help: "Es una propiedad de optimización que sugiere al navegador qué propiedades cambiarán.",
                codeExample: `div { will-change: transform, opacity; }`
            },
            {
                question: "Ordena las propiedades para crear un gradiente cónico.",
                type: "order-execution",
                fragments: [
                    "div {",
                    "   background:",
                    "   conic-gradient(red, yellow, green, blue, red);",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "Los gradientes cónicos se dibujan alrededor de un punto central.",
                codeExample: `div {
    background: conic-gradient(red, yellow, green, blue, red);
}`
            },
            {
                question: "¿Qué propiedad CSS se utiliza para cambiar la dirección del texto, como de izquierda a derecha (LTR) o de derecha a izquierda (RTL), o incluso verticalmente?",
                type: "multiple-choice",
                options: ["`text-direction`", "`writing-mode`", "`direction`", "`text-orientation`"],
                correctAnswer: 1,
                help: "Es útil para idiomas que se escriben verticalmente o de derecha a izquierda.",
                codeExample: `div { writing-mode: vertical-lr; }`
            },
            {
                question: "Empareja el concepto de 'CSS Modules' con su beneficio principal.",
                type: "drag-match",
                pairs: [
                    { drag: "Asegura nombres de clase únicos para evitar conflictos globales", drop: "Encapsulamiento de estilos" },
                    { drag: "Permite importar archivos CSS como módulos JavaScript", drop: "Modularidad" },
                    { drag: "Facilita la reutilización de estilos en diferentes componentes", drop: "Reutilización" }
                ],
                help: "Los CSS Modules son una solución para la modularización y el encapsulamiento de estilos en proyectos grandes.",
                codeExample: null
            }
        ]
    },
    javascript: {
        basico: [
            {
                question: "¿Qué palabra clave se usa para declarar una variable que no puede ser reasignada?",
                type: "multiple-choice",
                options: ["`var`", "`let`", "`const`", "`static`"],
                correctAnswer: 2,
                help: "Esta palabra clave se utiliza para valores que permanecen fijos.",
                codeExample: "const PI = 3.14159;"
            },
            {
                question: "¿Qué método de String devuelve la longitud de una cadena?",
                type: "multiple-choice",
                options: ["`size()`", "`length()`", "`count()`", "`length` (propiedad)"],
                correctAnswer: 3,
                help: "Es una propiedad que indica cuántos caracteres tiene una cadena.",
                codeExample: "let texto = 'Hola';\nlet longitud = texto.length; // 4"
            },
            {
                question: "¿Qué operador se utiliza para la igualdad estricta (valor y tipo)?",
                type: "multiple-choice",
                options: ["`==`", "`===`", "`!=`", "`!==`"],
                correctAnswer: 1,
                help: "Este operador no realiza conversiones de tipo antes de comparar.",
                codeExample: "5 === '5' // false (diferente tipo)"
            },
            {
                question: "Ordena los pasos para crear una función simple en JavaScript.",
                type: "order-execution",
                fragments: [
                    "function miFuncion() {",
                    "   console.log('Hola Mundo');",
                    "}",
                    "miFuncion();"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "Primero se define la función, luego se llama para que se ejecute.",
                codeExample: `function miFuncion() {
    console.log('Hola Mundo');
}
miFuncion();`
            },
            {
                question: "¿Qué es JavaScript?",
                type: "multiple-choice",
                options: ["Un lenguaje de marcado", "Un lenguaje de estilos", "Un lenguaje de programación interpretado para la web", "Una base de datos"],
                correctAnswer: 2,
                help: "Es el lenguaje que añade interactividad a las páginas web.",
                codeExample: null
            },
            {
                question: "¿Qué función se utiliza para imprimir mensajes en la consola del navegador?",
                type: "multiple-choice",
                options: ["`print()`", "`log()`", "`console.log()`", "`display()`"],
                correctAnswer: 2,
                help: "Es muy útil para ver valores y depurar tu código.",
                codeExample: "console.log('Este es un mensaje');"
            },
            {
                question: "¿Qué método Array agrega un elemento al final de un array?",
                type: "multiple-choice",
                options: ["`add()`", "`insert()`", "`push()`", "`append()`"],
                correctAnswer: 2,
                help: "Este método 'empuja' un elemento al final de la lista.",
                codeExample: "let arr = [1, 2];\narr.push(3); // arr es ahora [1, 2, 3]"
            },
            {
                question: "Empareja el evento de DOM con su descripción.",
                type: "drag-match",
                pairs: [
                    { drag: "Cuando se hace clic", drop: "`click`" },
                    { drag: "Cuando el mouse entra en un elemento", drop: "`mouseover`" },
                    { drag: "Cuando el mouse sale de un elemento", drop: "`mouseout`" },
                    { drag: "Cuando se carga el documento", drop: "`DOMContentLoaded`" },
                    { drag: "Cuando una tecla es presionada", drop: "`keydown`" }
                ],
                help: "Los eventos permiten que el código reaccione a las interacciones del usuario o a los cambios en la página.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para acceder a un elemento HTML por su ID y cambiar su texto.",
                type: "order-execution",
                fragments: [
                    "HTML:",
                    "<p id=\"saludo\"></p>",
                    "JavaScript:",
                    "const elemento = document.getElementById('saludo');",
                    "elemento.textContent = 'Hola desde JS';"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Primero necesitas encontrar el elemento en el documento HTML, luego puedes modificar su contenido.",
                codeExample: `HTML:
<p id="saludo"></p>

JavaScript:
const elemento = document.getElementById('saludo');
elemento.textContent = 'Hola desde JS';`
            },
            {
                question: "¿Qué tipo de datos devuelve la función `typeof` para un array?",
                type: "multiple-choice",
                options: ["`array`", "`object`", "`list`", "`null`"],
                correctAnswer: 1,
                help: "En JavaScript, los arrays son una forma especial de este tipo de dato.",
                codeExample: "typeof [] // 'object'"
            },
            {
                question: "¿Qué operador se utiliza para sumar dos números?",
                type: "multiple-choice",
                options: ["`-`", "`*`", "`+`", `/`],
                correctAnswer: 2,
                help: "Es el operador más común para la adición matemática.",
                codeExample: "let suma = 5 + 3; // 8"
            },
            {
                question: "Ordena los elementos para crear una sentencia `if/else` básica.",
                type: "order-execution",
                fragments: [
                    "if (",
                    "condición",
                    ") {",
                    "// código si es verdadero",
                    "} else {",
                    "// código si es falso",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6],
                help: "Las sentencias condicionales permiten ejecutar código basado en una condición.",
                codeExample: `if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}`
            },
            {
                question: "Empareja el operador lógico con su significado.",
                type: "drag-match",
                pairs: [
                    { drag: "AND (y)", drop: "`&&`" },
                    { drag: "OR (o)", drop: "`||`" },
                    { drag: "NOT (no)", drop: "`!`" }
                ],
                help: "Los operadores lógicos se utilizan para combinar expresiones booleanas.",
                codeExample: null
            },
            {
                question: "¿Qué tipo de bucle se utiliza para iterar un número específico de veces?",
                type: "multiple-choice",
                options: ["`while`", "`do...while`", "`for`", "`for...in`"],
                correctAnswer: 2,
                help: "Este bucle es ideal cuando se conoce la cantidad exacta de repeticiones.",
                codeExample: `for (let i = 0; i < 5; i++) {
    console.log(i);
}`
            },
            {
                question: "¿Cómo se accede al contenido de texto de un elemento HTML usando JavaScript?",
                type: "multiple-choice",
                options: ["`element.value`", "`element.htmlContent`", "`element.textContent`", "`element.text`"],
                correctAnswer: 2,
                help: "Esta propiedad permite obtener o establecer el contenido de texto de un nodo y sus descendientes.",
                codeExample: `const div = document.getElementById('myDiv');
console.log(div.textContent);`
            },
            {
                question: "¿Qué método se utiliza para crear un nuevo elemento HTML (`<div>`, `<p>`, etc.) en JavaScript?",
                type: "multiple-choice",
                options: ["`document.newElement()`", "`document.createNode()`", "`document.buildElement()`", "`document.createElement()`"],
                correctAnswer: 3,
                help: "Es el método estándar para generar nuevos elementos en el DOM.",
                codeExample: `const newDiv = document.createElement('div');`
            },
            {
                question: "¿Qué método de Array elimina el último elemento de un array y lo devuelve?",
                type: "multiple-choice",
                options: ["`shift()`", "`splice()`", "`pop()`", "`removeLast()`"],
                correctAnswer: 2,
                help: "Este método modifica el array original.",
                codeExample: "let arr = [1, 2, 3];\nlet ultimo = arr.pop(); // ultimo es 3, arr es [1, 2]"
            },
            {
                question: "Empareja el tipo de dato primitivo con un ejemplo.",
                type: "drag-match",
                pairs: [
                    { drag: "Número", drop: "`123`" },
                    { drag: "Cadena de texto", drop: "`\"Hola\"`" },
                    { drag: "Booleano", drop: "`true`" },
                    { drag: "Indefinido", drop: "`undefined`" },
                    { drag: "Nulo", drop: "`null`" }
                ],
                help: "JavaScript tiene varios tipos de datos fundamentales.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para declarar una variable con `let` y asignarle un valor.",
                type: "order-execution",
                fragments: [
                    "let",
                    "nombreVariable",
                    "=",
                    "\"valor\";"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "`let` es la forma moderna de declarar variables reasignables.",
                codeExample: `let mensaje = "Hola";`
            },
            {
                question: "¿Qué método de String se utiliza para convertir una cadena a mayúsculas?",
                type: "multiple-choice",
                options: ["`toUpperCase()`", "`toCapitalCase()`", "`upperCase()`", "`makeUpperCase()`"],
                correctAnswer: 0,
                help: "Este método devuelve una nueva cadena con todos los caracteres en mayúsculas.",
                codeExample: "let texto = 'hola';\nlet mayusculas = texto.toUpperCase(); // 'HOLA'"
            },
            {
                question: "¿Qué función de JavaScript se utiliza para mostrar un cuadro de diálogo con un mensaje y un campo de entrada para que el usuario ingrese datos?",
                type: "multiple-choice",
                options: ["`alert()`", "`confirm()`", "`prompt()`", "`console.log()`"],
                correctAnswer: 2,
                help: "Esta función es útil para obtener información simple del usuario.",
                codeExample: `let nombre = prompt("Ingresa tu nombre:");`
            },
            {
                question: "Empareja el tipo de comentario en JavaScript con su sintaxis.",
                type: "drag-match",
                pairs: [
                    { drag: "Comentario de una sola línea", drop: "`// comentario`" },
                    { drag: "Comentario de múltiples líneas", drop: "`/* comentario */`" }
                ],
                help: "Los comentarios son útiles para documentar el código.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para obtener el número de elementos en un array.",
                type: "order-execution",
                fragments: [
                    "let miArray = [1, 2, 3];",
                    "let longitud = miArray.length;",
                    "console.log(longitud);"
                ],
                correctOrder: [0, 1, 2],
                help: "La propiedad `length` devuelve la cantidad de elementos en un array.",
                codeExample: `let miArray = [1, 2, 3];
let longitud = miArray.length; // 3`
            },
            {
                question: "¿Qué función se utiliza para determinar si un valor es 'Not-a-Number' (NaN)?",
                type: "multiple-choice",
                options: ["`isNumber()`", "`isNaN()`", "`checkNum()`", "`isNotNum()`"],
                correctAnswer: 1,
                help: "Es importante para validar entradas numéricas.",
                codeExample: `isNaN("hola") // true`
            },
            {
                question: "¿Cuál es la diferencia entre `null` y `0` en JavaScript?",
                type: "multiple-choice",
                options: ["`null` es un número, `0` es un valor nulo.", "`null` es un valor asignado que representa la ausencia intencional de cualquier valor; `0` es un valor numérico.", "No hay diferencia, son intercambiables.", "`null` es un objeto, `0` es un primitivo."],
                correctAnswer: 1,
                help: "Aunque ambos pueden ser 'falsy', tienen significados distintos.",
                codeExample: null
            }
        ],
        intermedio: [
            {
                question: "¿Qué método Array se utiliza para iterar sobre los elementos de un array y ejecutar una función para cada elemento?",
                type: "multiple-choice",
                options: ["`map()`", "`filter()`", "`forEach()`", "`reduce()`"],
                correctAnswer: 2,
                help: "Este método es para recorrer un array y realizar una acción en cada elemento, sin crear un nuevo array.",
                codeExample: "let numeros = [1, 2, 3];\nnumeros.forEach(num => console.log(num));"
            },
            {
                question: "Empareja el método de Array con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Crea un nuevo array con los resultados de una función aplicada", drop: "`map()`" },
                    { drag: "Crea un nuevo array con todos los elementos que cumplen una condición", drop: "`filter()`" },
                    { drag: "Ejecuta una función reductora sobre cada elemento, acumulando un solo resultado", drop: "`reduce()`" },
                    { drag: "Elimina el último elemento y lo devuelve", drop: "`pop()`" },
                    { drag: "Agrega un elemento al inicio y devuelve la nueva longitud", drop: "`unshift()`" }
                ],
                help: "Cada método tiene un propósito específico para transformar o modificar arrays.",
                codeExample: null
            },
            {
                question: "¿Qué es un 'callback' en JavaScript?",
                type: "multiple-choice",
                options: ["Una función que se llama automáticamente al iniciar el script", "Una función que se pasa como argumento a otra función y se ejecuta después", "Una función que devuelve otra función", "Una función para depurar código"],
                correctAnswer: 1,
                help: "Es una función que se 'llama de vuelta' en un momento posterior, a menudo después de que otra función ha terminado.",
                codeExample: `function doSomething(callback) {
    console.log('Haciendo algo...');
    callback();
}
doSomething(() => console.log('Callback ejecutado!'));`
            },
            {
                question: "Ordena los pasos para manejar un evento de clic en un botón.",
                type: "order-execution",
                fragments: [
                    "HTML:",
                    "<button id=\"miBoton\">",
                    "   Haz clic",
                    "</button>",
                    "JavaScript:",
                    "const boton = document.getElementById('miBoton');",
                    "boton.addEventListener('click', () => {",
                    "   alert('¡Botón clicado!');",
                    "});"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                help: "Necesitas seleccionar el elemento y luego 'escuchar' cuando ocurre la interacción.",
                codeExample: `HTML:
<button id="miBoton">Haz clic</button>

JavaScript:
const boton = document.getElementById('miBoton');
boton.addEventListener('click', () => {
    alert('¡Botón clicado!');
});`
            },
            {
                question: "¿Cuál es el propósito del objeto `event` en los manejadores de eventos?",
                type: "multiple-choice",
                options: ["Almacenar datos de la aplicación", "Proporcionar información sobre el evento que ocurrió", "Definir nuevas funciones", "Controlar el flujo de la aplicación"],
                correctAnswer: 1,
                help: "Este objeto te da detalles sobre la interacción que acaba de suceder.",
                codeExample: `document.addEventListener('click', (e) => {
    console.log('Elemento clicado:', e.target);
});`
            },
            {
                question: "¿Qué método se utiliza para detener la propagación de un evento por el DOM?",
                type: "multiple-choice",
                options: ["`stopPropagation()`", "`cancelPropagation()`", "`stopEvent()`", "`preventBubble()`"],
                correctAnswer: 0,
                help: "Este método impide que un evento 'suba' por la jerarquía del DOM.",
                codeExample: `div.addEventListener('click', (e) => {
    e.stopPropagation(); // El clic no llegará a elementos padres
});`
            },
            {
                question: "¿Qué método se usa para parsear una cadena JSON y construir un valor u objeto JavaScript?",
                type: "multiple-choice",
                options: ["`JSON.stringify()`", "`JSON.parse()`", "`JSON.toObject()`", "`JSON.decode()`"],
                correctAnswer: 1,
                help: "Este método convierte una cadena de texto a un objeto JavaScript.",
                codeExample: `let jsonString = '{"nombre": "Ana", "edad": 30}';
let obj = JSON.parse(jsonString); // obj es {nombre: "Ana", edad: 30}`
            },
            {
                question: "Empareja el concepto de 'scope' con su definición.",
                type: "drag-match",
                pairs: [
                    { drag: "Variables accesibles globalmente", drop: "Scope Global" },
                    { drag: "Variables accesibles dentro de una función", drop: "Scope de Función" },
                    { drag: "Variables accesibles dentro de un bloque (`{}`) usando `let` o `const`", drop: "Scope de Bloque" },
                    { drag: "Acceso a variables del scope padre", drop: "Clausura (Closure)" }
                ],
                help: "El 'scope' define dónde puedes acceder a tus variables.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para usar 'localStorage' para guardar un dato.",
                type: "order-execution",
                fragments: [
                    "localStorage.setItem('username', 'usuario123');",
                    "// Para recuperar:",
                    "let user = localStorage.getItem('username');",
                    "console.log(user);"
                ],
                correctOrder: [0, 1, 2, 3],
                help: "Recuerda los métodos para guardar y recuperar datos en el almacenamiento local del navegador.",
                codeExample: `localStorage.setItem('username', 'usuario123');
let user = localStorage.getItem('username');
console.log(user); // 'usuario123'`
            },
            {
                question: "¿Qué es el 'hoisting' en JavaScript?",
                type: "multiple-choice",
                options: ["Un método para elevar elementos del DOM", "El proceso por el cual las declaraciones de variables y funciones son movidas al inicio de su scope", "Un tipo de error de sintaxis", "Un patrón de diseño para eventos"],
                correctAnswer: 1,
                help: "Este concepto explica por qué puedes usar una variable o función antes de declararla en tu código.",
                codeExample: `console.log(a); // undefined
var a = 5;`
            },
            {
                question: "¿Cuál es el propósito del operador de propagación (spread operator) `...`?",
                type: "multiple-choice",
                options: ["Para concatenar cadenas de texto.", "Para expandir un iterable (como un array o cadena) en elementos individuales.", "Para copiar objetos con sus prototipos.", "Para realizar operaciones matemáticas complejas."],
                correctAnswer: 1,
                help: "Es muy útil para copiar arrays, fusionar objetos o pasar argumentos a funciones.",
                codeExample: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]`
            },
            {
                question: "Empareja el método de array de alto orden con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Transforma cada elemento en un nuevo array", drop: "`map()`" },
                    { drag: "Crea un nuevo array con elementos que cumplen una condición", drop: "`filter()`" },
                    { drag: "Reduce el array a un solo valor", drop: "`reduce()`" },
                    { drag: "Verifica si al menos un elemento cumple una condición", drop: "`some()`" },
                    { drag: "Verifica si todos los elementos cumplen una condición", drop: "`every()`" }
                ],
                help: "Estos métodos facilitan la manipulación y consulta de arrays de forma funcional.",
                codeExample: null
            },
            {
                question: "Ordena los elementos para definir una función de flecha (arrow function) simple.",
                type: "order-execution",
                fragments: [
                    "const miFuncion = (",
                    "param",
                    ") => {",
                    "return param * 2;",
                    "};"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Las funciones de flecha son una sintaxis más concisa para escribir funciones en JavaScript.",
                codeExample: `const doble = (num) => num * 2;`
            },
            {
                question: "¿Cómo se maneja el contexto de `this` en una función de flecha comparado con una función regular?",
                type: "multiple-choice",
                options: ["Las funciones de flecha siempre tienen `this` global.", "Las funciones de flecha no tienen su propio `this`; heredan el `this` de su contexto léxico (el scope donde fueron definidas).", "Las funciones de flecha tienen un `this` dinámico que cambia según cómo se llaman.", "Las funciones de flecha siempre enlazan `this` al elemento DOM."],
                correctAnswer: 1,
                help: "Esta es una diferencia clave que simplifica el manejo de `this` en muchos escenarios.",
                codeExample: null
            },
            {
                question: "¿Qué es una 'clausura' (closure) en JavaScript?",
                type: "multiple-choice",
                options: ["Un error de sintaxis que cierra el programa.", "Una función que recuerda su entorno léxico (variables de su scope exterior) incluso cuando se ejecuta fuera de ese scope.", "Un tipo de bucle que se cierra automáticamente.", "Una forma de proteger variables de ser modificadas."],
                correctAnswer: 1,
                help: "Las clausuras son un concepto fundamental para entender patrones avanzados en JavaScript.",
                codeExample: `function crearContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const contador = crearContador();
console.log(contador()); // 1`
            },
            {
                question: "¿Qué es la 'delegación de eventos' en el DOM?",
                type: "multiple-choice",
                options: ["Un método para detener todos los eventos en una página.", "Un patrón para manejar eventos en elementos hijos adjuntando un solo controlador de eventos a su elemento padre.", "Un tipo de evento que se dispara cuando un elemento es arrastrado.", "Una forma de priorizar la ejecución de eventos."],
                correctAnswer: 1,
                help: "Mejora el rendimiento y simplifica el código al manejar muchos elementos interactivos.",
                codeExample: `document.getElementById('parent').addEventListener('click', function(e) {
    if (e.target.matches('.child-button')) {
        console.log('Botón hijo clicado');
    }
});`
            },
            {
                question: "¿Qué método de `Date` se utiliza para obtener el año completo (ej. 2023) de un objeto Date?",
                type: "multiple-choice",
                options: ["`getYear()`", "`getFullYear()`", "`getYearFull()`", "`getActualYear()`"],
                correctAnswer: 1,
                help: "`getYear()` es un método obsoleto que devuelve el año menos 1900.",
                codeExample: `const fecha = new Date();
console.log(fecha.getFullYear());`
            },
            {
                question: "Empareja el método de `String` con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Extrae una parte de la cadena", drop: "`substring()`" },
                    { drag: "Reemplaza una parte de la cadena", drop: "`replace()`" },
                    { drag: "Divide la cadena en un array de subcadenas", drop: "`split()`" },
                    { drag: "Elimina espacios en blanco de ambos extremos", drop: "`trim()`" }
                ],
                help: "Estos métodos son fundamentales para manipular cadenas de texto.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para realizar una llamada `setTimeout` con un retraso de 2 segundos.",
                type: "order-execution",
                fragments: [
                    "setTimeout(",
                    "() => {",
                    "   console.log('Han pasado 2 segundos');",
                    "},",
                    "2000",
                    ");"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5],
                help: "`setTimeout` ejecuta una función una vez después de un retraso especificado.",
                codeExample: `setTimeout(() => {
    console.log('Han pasado 2 segundos');
}, 2000);`
            },
            {
                question: "¿Qué método de `Array` se utiliza para combinar dos o más arrays?",
                type: "multiple-choice",
                options: ["`join()`", "`merge()`", "`concat()`", "`combine()`"],
                correctAnswer: 2,
                help: "Este método no modifica los arrays existentes, sino que devuelve un nuevo array.",
                codeExample: `const arr1 = [1, 2];
const arr2 = [3, 4];
const nuevoArr = arr1.concat(arr2); // [1, 2, 3, 4]`
            },
            {
                question: "¿Qué estructura de control se utiliza para manejar errores en bloques de código que pueden fallar?",
                type: "multiple-choice",
                options: ["`if...else`", "`switch`", "`try...catch`", "`for...of`"],
                correctAnswer: 2,
                help: "Permite ejecutar código potencialmente problemático y capturar cualquier error que ocurra.",
                codeExample: `try {
    // Código que puede generar un error
} catch (error) {
    console.error("Ocurrió un error:", error);
}`
            },
            {
                question: "Empareja el concepto de `this` con su contexto.",
                type: "drag-match",
                pairs: [
                    { drag: "En un método de objeto", drop: "El objeto que posee el método" },
                    { drag: "En una función regular (no estricta)", drop: "El objeto global (window/global)" },
                    { drag: "En una función de flecha", drop: "El `this` del contexto léxico circundante" }
                ],
                help: "El valor de `this` depende de cómo se llama la función.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para eliminar un escuchador de eventos (`event listener`) de un elemento.",
                type: "order-execution",
                fragments: [
                    "const miFuncion = () => console.log('Clic');",
                    "elemento.addEventListener('click', miFuncion);",
                    "elemento.removeEventListener('click', miFuncion);"
                ],
                correctOrder: [0, 1, 2],
                help: "Para eliminar un escuchador, se necesita la misma función de callback que se usó para añadirlo.",
                codeExample: `const miFuncion = () => console.log('Clic');
elemento.addEventListener('click', miFuncion);
elemento.removeEventListener('click', miFuncion);`
            },
            {
                question: "¿Qué método de `Array` se utiliza para verificar si *todos* los elementos de un array cumplen una condición?",
                type: "multiple-choice",
                options: ["`filter()`", "`some()`", "`every()`", "`find()`"],
                correctAnswer: 2,
                help: "Devuelve `true` si la función de callback devuelve `true` para todos los elementos, de lo contrario `false`.",
                codeExample: `const numeros = [2, 4, 6];
numeros.every(num => num % 2 === 0); // true`
            },
            {
                question: "¿Qué propiedad del objeto `Element` en el DOM permite manipular las clases CSS de un elemento (añadir, remover, alternar)?",
                type: "multiple-choice",
                options: ["`className`", "`class`", "`style.class`", "`classList`"],
                correctAnswer: 3,
                help: "Ofrece métodos convenientes para gestionar las clases de un elemento.",
                codeExample: `elemento.classList.add('nueva-clase');`
            }
        ],
        avanzado: [
            {
                question: "¿Qué palabra clave se usa para importar módulos en ES6 (ECMAScript 2015)?",
                type: "multiple-choice",
                options: ["`require`", "`include`", "`import`", "`load`"],
                correctAnswer: 2,
                help: "Esta palabra clave es fundamental para la modularización en JavaScript moderno.",
                codeExample: "`import { miFuncion } from './miModulo.js';`"
            },
            {
                question: "Empareja el concepto de Asincronía con su implementación en JavaScript moderno.",
                type: "drag-match",
                pairs: [
                    { drag: "Objeto que representa la eventual finalización (o falla) de una operación asíncrona", drop: "Promise" },
                    { drag: "Sintaxis para escribir código asíncrono que parece síncrono", drop: "`async/await`" },
                    { drag: "Función que se pasa a otra y se ejecuta al completar una operación", drop: "Callback" },
                    { drag: "Función que genera una secuencia de valores", drop: "Generador" }
                ],
                help: "Estos conceptos son clave para manejar operaciones que no ocurren instantáneamente.",
                codeExample: null
            },
            {
                question: "¿Cuál es el propósito de la 'desestructuración de objetos' en JavaScript?",
                type: "multiple-choice",
                options: ["Convertir objetos a cadenas", "Extraer valores de objetos en variables separadas de forma conveniente", "Fusionar varios objetos en uno", "Crear copias profundas de objetos"],
                correctAnswer: 1,
                help: "Es una forma concisa de obtener propiedades de un objeto y asignarlas a variables.",
                codeExample: `const persona = { nombre: 'Juan', edad: 30 };
const { nombre, edad } = persona; // nombre='Juan', edad=30`
            },
            {
                question: "Ordena los pasos para realizar una solicitud 'fetch' con 'async/await'.",
                type: "order-execution",
                fragments: [
                    "async function getData() {",
                    "   try {",
                    "      const response = await fetch('https://api.example.com/data');",
                    "      const data = await response.json();",
                    "      console.log(data);",
                    "   } catch (error) {",
                    "      console.error('Error:', error);",
                    "   }",
                    "}"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                help: "Piensa en cómo se manejan las operaciones que tardan tiempo en completarse, esperando el resultado.",
                codeExample: `async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}`
            },
            {
                question: "¿Qué es el 'Event Loop' en JavaScript?",
                type: "multiple-choice",
                options: ["Un bucle para iterar sobre arrays", "El mecanismo que permite a JavaScript realizar operaciones no bloqueantes, procesando eventos de la cola", "Un tipo de bucle `for` avanzado", "Una herramienta de depuración para eventos"],
                correctAnswer: 1,
                help: "Este mecanismo es crucial para entender cómo JavaScript maneja tareas asíncronas sin 'congelar' la interfaz.",
                codeExample: null
            },
            {
                question: "¿Qué método de 'Map' se utiliza para obtener el número de elementos en un Map?",
                type: "multiple-choice",
                options: ["`size()`", "`length`", "`count()`", "`Map.length`"],
                correctAnswer: 0,
                help: "Es una propiedad que indica la cantidad de pares clave-valor en un Map.",
                codeExample: "let miMap = new Map();\nmiMap.set('a', 1);\nmiMap.set('b', 2);\nmiMap.size; // 2"
            },
            {
                question: "Empareja el método de Set con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Añade un valor al Set", drop: "`add()`" },
                    { drag: "Elimina un valor del Set", drop: "`delete()`" },
                    { drag: "Verifica si un valor existe en el Set", drop: "`has()`" },
                    { drag: "Elimina todos los elementos del Set", drop: "`clear()`" },
                    { drag: "Devuelve un iterador de los valores del Set", drop: "`values()`" }
                ],
                help: "Los Sets son colecciones de valores únicos, y estos métodos te permiten manipularlos.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para crear e invocar una función autoejecutable (IIFE).",
                type: "order-execution",
                fragments: [
                    "(function() {",
                    "   console.log('¡Me ejecuto inmediatamente!');",
                    "})();"
                ],
                correctOrder: [0, 1, 2],
                help: "Este patrón de función se ejecuta tan pronto como se define.",
                codeExample: `(function() {
    console.log('¡Me ejecuto inmediatamente!');
})();`
            },
            {
                question: "¿Qué es 'WebAssembly'?",
                type: "multiple-choice",
                options: ["Un nuevo lenguaje de programación web", "Un formato de código binario de bajo nivel diseñado para la web", "Una API de JavaScript para gráficos 3D", "Un compilador de JavaScript a C++"],
                correctAnswer: 1,
                help: "Permite ejecutar código de alto rendimiento, compilado desde otros lenguajes, en el navegador.",
                codeExample: null
            },
            {
                question: "¿Qué método se utiliza para crear un objeto a partir de un prototipo existente?",
                type: "multiple-choice",
                options: ["`Object.create()`", "`Object.assign()`", "`Object.from()`", "`Object.new()`"],
                correctAnswer: 0,
                help: "Este método es fundamental para la herencia prototípica en JavaScript.",
                codeExample: `const personaProto = {
    saludar() {
        console.log('Hola');
    }
};
const juan = Object.create(personaProto);
juan.saludar(); // 'Hola'`
            },
            {
                question: "¿Cuál es la diferencia entre herencia prototípica y herencia basada en clases en JavaScript?",
                type: "multiple-choice",
                options: ["La herencia prototípica es más moderna que la basada en clases.", "JavaScript es intrínsecamente prototípico; las clases son azúcar sintáctico sobre el modelo de prototipos.", "La herencia basada en clases permite herencia múltiple, a diferencia de la prototípica.", "No hay diferencia, son dos nombres para lo mismo."],
                correctAnswer: 1,
                help: "Comprender el modelo prototípico es clave para dominar JavaScript, incluso con la sintaxis de clases.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para crear e usar una clase básica en JavaScript.",
                type: "order-execution",
                fragments: [
                    "class Animal {",
                    "   constructor(nombre) { this.nombre = nombre; }",
                    "   saludar() { console.log('Hola, soy ' + this.nombre); }",
                    "}",
                    "const perro = new Animal('Fido');",
                    "perro.saludar();"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5],
                help: "Las clases en JavaScript proporcionan una sintaxis más limpia para crear objetos y manejar la herencia.",
                codeExample: `class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log('Hola, soy ' + this.nombre);
    }
}
const perro = new Animal('Fido');
perro.saludar();`
            },
            {
                question: "Empareja el concepto avanzado de JavaScript con su descripción.",
                type: "drag-match",
                pairs: [
                    { drag: "Objeto que permite interceptar operaciones en otros objetos", drop: "Proxy" },
                    { drag: "Objeto que proporciona métodos de bajo nivel para interactuar con objetos", drop: "Reflect" },
                    { drag: "Script que el navegador ejecuta en segundo plano para funciones offline y notificaciones", drop: "Service Worker" },
                    { drag: "Protocolo para comunicación bidireccional en tiempo real entre cliente y servidor", drop: "WebSockets" }
                ],
                help: "Estos conceptos amplían las capacidades de JavaScript para aplicaciones web modernas.",
                codeExample: null
            },
            {
                question: "¿Cuál es el propósito de los 'Generators' y 'Async Iterators' en JavaScript?",
                type: "multiple-choice",
                options: ["Para crear bucles infinitos.", "Para manejar la creación de objetos de forma asíncrona.", "Para controlar la iteración de secuencias de valores y manejar secuencias asíncronas de datos.", "Para optimizar el rendimiento de las funciones síncronas."],
                correctAnswer: 2,
                help: "Permiten escribir código asíncrono de una manera más secuencial y legible.",
                codeExample: `function* idGenerator() {
    let id = 0;
    while (true) yield id++;
}
const gen = idGenerator();
console.log(gen.next().value); // 0`
            },
            {
                question: "¿Qué es un 'Service Worker' y para qué se utiliza?",
                type: "multiple-choice",
                options: ["Una herramienta para depurar errores de JavaScript.", "Un script que el navegador ejecuta en segundo plano, actuando como un proxy de red programable, habilitando funciones offline, notificaciones push, etc.", "Un tipo de Web Worker que se ejecuta en el servidor.", "Una biblioteca para animaciones CSS."],
                correctAnswer: 1,
                help: "Son la base de las Progressive Web Apps (PWAs) y mejoran la fiabilidad y el rendimiento.",
                codeExample: null
            },
            {
                question: "¿Qué método de `Array` se puede usar para aplanar un array de arrays a una profundidad específica?",
                type: "multiple-choice",
                options: ["`flatten()`", "`deepFlatten()`", "`flat()`", "`unfold()`"],
                correctAnswer: 2,
                help: "Este método es útil para trabajar con arrays anidados.",
                codeExample: `const arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5]`
            },
            {
                question: "¿Qué es la 'currificación' (currying) en JavaScript?",
                type: "multiple-choice",
                options: ["Un método para ocultar funciones.", "Una técnica para transformar una función que toma múltiples argumentos en una secuencia de funciones que toman un solo argumento.", "Un patrón para optimizar recursiones.", "Una forma de aplicar estilos a funciones."],
                correctAnswer: 1,
                help: "Es un concepto de programación funcional que mejora la reutilización y composición de funciones.",
                codeExample: `const add = (a) => (b) => a + b;
const addFive = add(5);
console.log(addFive(3)); // 8`
            },
            {
                question: "Empareja el concepto de manejo de errores asíncronos con su implementación.",
                type: "drag-match",
                pairs: [
                    { drag: "Captura errores en Promises", drop: "`.catch()`" },
                    { drag: "Maneja errores en `async/await`", drop: "`try...catch`" },
                    { drag: "Evento global para errores no capturados", drop: "`window.onerror`" },
                    { drag: "Evento global para rechazos de Promises no manejados", drop: "`unhandledrejection`" }
                ],
                help: "Es crucial manejar los errores en operaciones asíncronas para una aplicación robusta.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para implementar un 'Intersection Observer' básico.",
                type: "order-execution",
                fragments: [
                    "const observer = new IntersectionObserver((entries) => {",
                    "  entries.forEach(entry => {",
                    "    if (entry.isIntersecting) {",
                    "      console.log('Elemento visible');",
                    "    }",
                    "  });",
                    "});",
                    "const target = document.querySelector('.my-element');",
                    "observer.observe(target);"
                ],
                correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                help: "Permite detectar cuándo un elemento entra o sale del viewport (o de otro elemento).",
                codeExample: `const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Elemento visible');
    }
  });
});
const target = document.querySelector('.my-element');
observer.observe(target);`
            },
            {
                question: "¿Qué es el 'WeakMap' en JavaScript y cuándo se usa?",
                type: "multiple-choice",
                options: ["Un tipo de `Map` que solo almacena cadenas.", "Un `Map` cuyas claves son débilmente referenciadas, lo que permite que las claves sean recolectadas por el garbage collector si no hay otras referencias a ellas.", "Un `Map` que solo puede contener un número limitado de elementos.", "Una versión más lenta de `Map` para compatibilidad."],
                correctAnswer: 1,
                help: "Es útil para asociar datos a objetos sin evitar que esos objetos sean eliminados de la memoria.",
                codeExample: `const wm = new WeakMap();
const obj = {};
wm.set(obj, 'valor'); // obj puede ser recolectado si no hay otras referencias`
            },
            {
                question: "¿Qué es un 'WeakSet' en JavaScript y cuándo es útil?",
                type: "multiple-choice",
                options: ["Un `Set` que solo puede contener un número limitado de elementos.", "Un `Set` cuyas referencias a sus elementos son débiles, permitiendo que los objetos sean recolectados por el garbage collector si no hay otras referencias a ellos.", "Un `Set` que solo almacena valores numéricos.", "Una versión más lenta de `Set` para compatibilidad."],
                correctAnswer: 1,
                help: "Similar a `WeakMap`, es útil para almacenar objetos sin impedir su recolección de basura.",
                codeExample: `const ws = new WeakSet();
const obj = {};
ws.add(obj); // obj puede ser recolectado si no hay otras referencias`
            },
            {
                question: "Empareja el operador de JavaScript con su función.",
                type: "drag-match",
                pairs: [
                    { drag: "Encadenamiento opcional (acceso seguro a propiedades anidadas)", drop: "`?.`" },
                    { drag: "Coalescencia nula (valor por defecto si es `null` o `undefined`)", drop: "`??`" },
                    { drag: "Operador de asignación lógica AND", drop: "`&&=`" },
                    { drag: "Operador de asignación lógica OR", drop: "`||=`" }
                ],
                help: "Estos operadores son adiciones modernas a JavaScript que mejoran la concisión y seguridad del código.",
                codeExample: null
            },
            {
                question: "Ordena los pasos para utilizar la API `requestAnimationFrame` para animaciones optimizadas.",
                type: "order-execution",
                fragments: [
                    "function animate() {",
                    "  // Lógica de la animación aquí",
                    "  requestAnimationFrame(animate);",
                    "}",
                    "requestAnimationFrame(animate);"
                ],
                correctOrder: [0, 1, 2, 3, 4],
                help: "Permite al navegador optimizar las animaciones para que se ejecuten de forma más fluida y eficiente.",
                codeExample: `function animate() {
  // Lógica de la animación aquí
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`
            },
            {
                question: "¿Qué es el tipo de dato `Symbol` en JavaScript?",
                type: "multiple-choice",
                options: ["Un tipo de número para cálculos grandes.", "Un tipo de dato primitivo cuyas instancias son únicas e inmutables, utilizadas a menudo como claves de propiedades de objeto.", "Un objeto para representar iconos SVG.", "Una forma de crear comentarios especiales."],
                correctAnswer: 1,
                help: "Los Symbols son útiles para evitar colisiones de nombres de propiedades en objetos.",
                codeExample: `const id = Symbol('id');
const obj = { [id]: 1 };`
            },
            {
                question: "¿Qué es el tipo de dato `BigInt` en JavaScript?",
                type: "multiple-choice",
                options: ["Un tipo de dato para representar números enteros de precisión arbitraria, más allá del límite de `Number`.", "Un tipo de dato para números flotantes de doble precisión.", "Un tipo de dato para almacenar números muy pequeños.", "Un objeto para realizar operaciones matemáticas complejas."],
                correctAnswer: 0,
                help: "Permite trabajar con números enteros que son demasiado grandes para ser representados por el tipo `Number` estándar.",
                codeExample: `const bigNum = 123456789012345678901234567890123456789n;`
            }
        ]
    }
};

let currentQuestionIndex = 0;
let currentScore = 0;
let quizTimer;
let timeElapsed = 0; // Cambiado de timeLeft a timeElapsed
let totalTimeElapsed = 0;
let isPaused = false;
let selectedTopic = '';
let selectedDifficulty = '';
let currentQuestions = [];
let answeredCorrectly = 0;
let answeredIncorrectly = 0;

const INACTIVITY_TIMEOUT = 60; // seconds of inactivity before warning
const INACTIVITY_WARNING_DURATION = 10; // seconds for warning countdown

let inactivityTimer;
let inactivityCountdownInterval;
let inactivityCountdown = INACTIVITY_WARNING_DURATION;

// Declaring DOM elements as global variables, but assigning them inside initQuizGame
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
let quizQuestion;
let quizHelpText;
let multipleChoiceOptions;
let syntaxOrderContainer;
let syntaxTargetArea;
let syntaxOptionsArea;
let checkSyntaxButton;
let undoSyntaxButton;
let dragMatchContainer;
let dragElementsArea;
let dropTargetsArea;
let checkMatchButton;
let undoMatchButton;
let endQuizButton;
let quizResultScreen;
let quizCorrectAnswers;
let quizIncorrectAnswers;
let quizFinalScore;
let quizFinalTime;
let quizRetryLevelButton;
let quizNextLevelButton;
let quizChangeTopicButton;
let quizExitGameButton;
let inactivityWarningModal;
let inactivityCountdownDisplay;


// Drag & Drop specific elements and variables
// let draggedItemOriginalElement = null; // Renamed for clarity - REMOVED DUPLICATE DECLARATION
let currentDragMatchPairs = [];
let originalDragMatchState = []; // Para el botón de deshacer en Drag & Match

// Syntax / Order specific variables
let currentSyntaxFragments = []; // Fragmentos disponibles para arrastrar/seleccionar
let currentSyntaxOrder = [];    // Orden actual de los fragmentos en el área de destino

// --- Funciones de control de inactividad ---

function pauseTimer() {
    isPaused = true;
}

function resumeTimer() {
    isPaused = false;
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    clearInterval(inactivityCountdownInterval);
    hideInactivityWarning();
    inactivityTimer = setTimeout(showInactivityWarning, INACTIVITY_TIMEOUT * 1000);
}

function showInactivityWarning() {
    inactivityCountdown = INACTIVITY_WARNING_DURATION;
    if (inactivityWarningModal) { // Check if element exists before trying to access classList
        inactivityWarningModal.classList.remove('hidden');
    }
    if (inactivityCountdownDisplay) { // Check if element exists
        inactivityCountdownDisplay.textContent = inactivityCountdown;
    }


    inactivityCountdownInterval = setInterval(() => {
        inactivityCountdown--;
        if (inactivityCountdownDisplay) { // Check if element exists
            inactivityCountdownDisplay.textContent = inactivityCountdown;
        }
        if (inactivityCountdown <= 0) {
            clearInterval(inactivityCountdownInterval);
            resetGameDueToInactivity();
        }
    }, 1000);
}

function hideInactivityWarning() {
    if (inactivityWarningModal) { // Check if element exists before trying to access classList
        inactivityWarningModal.classList.add('hidden');
    }
}

function resetGameDueToInactivity() {
    clearInterval(quizTimer); // Detener el temporizador del quiz
    clearInterval(inactivityCountdownInterval); // Detener el contador de inactividad
    showScreen('quiz-difficulty-selection-menu'); // Volver al menú de selección de dificultad
    currentScore = 0; // Resetear puntuación
    answeredCorrectly = 0;
    answeredIncorrectly = 0;
    if (quizScoreDisplay) updateScoreDisplay(); // Actualizar display de puntuación
    if (quizTimerDisplay) quizTimerDisplay.textContent = '00:00'; // Resetear display del tiempo
    // Using a custom modal or simple text update instead of alert for better UX
    // For now, keeping alert as per previous instruction, but ideally this would be a custom UI.
    // alert('El juego se ha reiniciado debido a la inactividad.');
    // A more user-friendly approach:
    const inactivityMessageElement = document.getElementById('inactivity-message');
    if (inactivityMessageElement) {
        inactivityMessageElement.textContent = 'El juego se ha reiniciado debido a la inactividad.';
    }
    // Automatically hide after a short delay or require user interaction
    setTimeout(() => {
        hideInactivityWarning();
        if (inactivityMessageElement) {
            inactivityMessageElement.textContent = 'Inactividad detectada. El juego se reiniciará en...'; // Reset message
        }
    }, 3000); // Hide after 3 seconds
}


// --- Game Flow Functions ---

function showScreen(screenId) {
    const screens = [
        quizStartMenu,
        quizTopicSelectionMenu,
        quizDifficultySelectionMenu,
        quizPlayArea,
        quizResultScreen
    ];
    screens.forEach(screen => {
        if (screen) { // Ensure screen element exists
            screen.classList.add('hidden');
            screen.classList.remove('flex');
            screen.classList.remove('flex-col'); // Ensure flex-col is removed if not needed
            screen.classList.remove('animate-fade-in-down'); // Remove animation for next use
        }
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('flex', 'flex-col');
        // Add animation class
        targetScreen.classList.add('animate-fade-in-down');
    }
    resetInactivityTimer(); // Reset timer on screen change
}

function startQuiz() {
    showScreen('quiz-topic-selection-menu');
}

function selectTopic(topic) {
    selectedTopic = topic;
    if (selectedTopicDisplay) { // Check if element exists
        selectedTopicDisplay.textContent = topic.toUpperCase();
    }
    showScreen('quiz-difficulty-selection-menu');
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    // Shuffle and take only the first 10 questions for the session
    const allQuestionsForLevel = [...quizData[selectedTopic][selectedDifficulty]];
    shuffleArray(allQuestionsForLevel);
    currentQuestions = allQuestionsForLevel.slice(0, 10);

    currentQuestionIndex = 0;
    currentScore = 0;
    answeredCorrectly = 0;
    answeredIncorrectly = 0;
    totalTimeElapsed = 0;
    updateScoreDisplay(); // Asegurarse de que el score se reinicie visualmente
    startQuestion();
    showScreen('quiz-play-area');
}

function startQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    resetQuestionArea();
    resumeTimer();
    updateTimerDisplay();

    const question = currentQuestions[currentQuestionIndex];
    if (quizQuestion) quizQuestion.textContent = question.question;
    if (quizHelpText) {
        quizHelpText.textContent = question.help || ''; // Set help text, now always visible
        quizHelpText.classList.remove('hidden'); // Ensure help text is visible
    }


    switch (question.type) {
        case "multiple-choice":
            setupMultipleChoiceQuestion(question);
            break;
        case "syntax-completion":
        case "order-execution":
            setupSyntaxOrderQuestion(question);
            break;
        case "drag-match":
            setupDragMatchQuestion(question);
            break;
    }

    // Start timer after question setup
    if (!quizTimer) {
        quizTimer = setInterval(() => {
            if (!isPaused) {
                timeElapsed++; // Incrementar el tiempo transcurrido
            }
            updateTimerDisplay();
            // La pregunta ya no avanza automáticamente al llegar a un límite
        }, 1000);
    }
    resetInactivityTimer(); // Reset inactivity timer on new question
}

function resetQuestionArea() {
    if (multipleChoiceOptions) {
        multipleChoiceOptions.innerHTML = '';
        multipleChoiceOptions.classList.add('hidden');
        multipleChoiceOptions.classList.remove('grid'); // Remove grid display for other types
    }

    if (syntaxOrderContainer) {
        syntaxOrderContainer.classList.add('hidden');
        if (syntaxTargetArea) syntaxTargetArea.innerHTML = '';
        if (syntaxOptionsArea) syntaxOptionsArea.innerHTML = '';
    }

    if (dragMatchContainer) {
        dragMatchContainer.classList.add('hidden');
        if (dragElementsArea) dragElementsArea.innerHTML = '';
        if (dropTargetsArea) dropTargetsArea.innerHTML = '';
    }


    // Reset button states
    if (checkSyntaxButton) checkSyntaxButton.disabled = false;
    if (undoSyntaxButton) undoSyntaxButton.disabled = false;
    if (checkMatchButton) checkMatchButton.disabled = false;
    if (undoMatchButton) undoMatchButton.disabled = false;
}

function setupMultipleChoiceQuestion(question) {
    if (multipleChoiceOptions) {
        multipleChoiceOptions.classList.remove('hidden');
        multipleChoiceOptions.classList.add('grid'); // Ensure grid display for multiple choice

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-option-button', 'px-6', 'py-3', 'rounded-xl', 'font-semibold', 'text-lg',
                'bg-blue-500', 'text-white', 'hover:bg-blue-600',
                'transition-all', 'duration-300', 'ease-in-out',
                'shadow-md', 'hover:shadow-lg', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-300');
            button.dataset.option = index;
            button.textContent = option;
            button.onclick = () => checkAnswer(index, question.correctAnswer);
            multipleChoiceOptions.appendChild(button);
        });
    }
}

function setupSyntaxOrderQuestion(question) {
    if (syntaxOrderContainer) {
        syntaxOrderContainer.classList.remove('hidden');

        currentSyntaxFragments = shuffleArray([...question.fragments]);
        currentSyntaxOrder = [];

        renderSyntaxOptions();
        renderSyntaxTarget();

        if (checkSyntaxButton) checkSyntaxButton.onclick = checkSyntaxOrder;
        if (undoSyntaxButton) undoSyntaxButton.onclick = undoSyntaxOrder;
    }
}

function renderSyntaxOptions() {
    if (syntaxOptionsArea) {
        syntaxOptionsArea.innerHTML = '';
        currentSyntaxFragments.forEach((fragment, index) => {
            const fragmentSpan = document.createElement('span');
            fragmentSpan.classList.add('syntax-fragment', 'bg-gray-200', 'text-gray-800', 'px-3', 'py-1', 'rounded', 'cursor-pointer', 'hover:bg-gray-300', 'transition-colors', 'duration-200');
            fragmentSpan.textContent = fragment;
            fragmentSpan.dataset.index = index;
            fragmentSpan.onclick = () => addSyntaxFragment(fragment, index);
            syntaxOptionsArea.appendChild(fragmentSpan);
        });
    }
}

function renderSyntaxTarget() {
    if (syntaxTargetArea) {
        syntaxTargetArea.innerHTML = '';
        currentSyntaxOrder.forEach((item) => {
            const fragmentSpan = document.createElement('span');
            fragmentSpan.classList.add('syntax-fragment-target', 'bg-purple-200', 'text-purple-800', 'px-3', 'py-1', 'rounded', 'relative', 'cursor-pointer', 'hover:bg-purple-300', 'transition-colors', 'duration-200');
            fragmentSpan.textContent = item.fragment;
            fragmentSpan.dataset.originalIndex = item.originalIndex; // Store original index

            // Add a small 'x' button for removal
            const removeButton = document.createElement('span');
            removeButton.classList.add('absolute', '-top-1', '-right-1', 'bg-red-500', 'text-white', 'rounded-full', 'w-4', 'h-4', 'flex', 'items-center', 'justify-center', 'text-xs', 'cursor-pointer');
            removeButton.textContent = 'x';
            removeButton.onclick = (e) => {
                e.stopPropagation(); // Prevent parent click
                removeSyntaxFragment(item.originalIndex);
            };
            fragmentSpan.appendChild(removeButton);
            syntaxTargetArea.appendChild(fragmentSpan);
        });
    }
}

function addSyntaxFragment(fragment, originalIndex) {
    // Only add if it's not already in the target area (based on original index)
    if (!currentSyntaxOrder.some(item => item.originalIndex === originalIndex)) {
        currentSyntaxOrder.push({ fragment, originalIndex });
        renderSyntaxTarget();
        // Temporarily hide the added fragment from options area
        if (syntaxOptionsArea) {
            const fragmentElement = syntaxOptionsArea.querySelector(`[data-index="${originalIndex}"]`);
            if (fragmentElement) {
                fragmentElement.style.visibility = 'hidden';
            }
        }
    }
}

function removeSyntaxFragment(originalIndex) {
    currentSyntaxOrder = currentSyntaxOrder.filter(item => item.originalIndex !== originalIndex);
    renderSyntaxTarget();
    // Make the fragment visible again in options area
    if (syntaxOptionsArea) {
        const fragmentElement = syntaxOptionsArea.querySelector(`[data-index="${originalIndex}"]`);
        if (fragmentElement) {
            fragmentElement.style.visibility = 'visible';
        }
    }
}


function checkSyntaxOrder() {
    pauseTimer();

    const question = currentQuestions[currentQuestionIndex];
    const correctOrderFragments = question.correctOrder.map(idx => question.fragments[idx]);
    const userAnswerFragments = currentSyntaxOrder.map(item => item.fragment);

    if (quizHelpText) quizHelpText.classList.remove('hidden'); // Show help text

    let isCorrect = true;
    if (userAnswerFragments.length !== correctOrderFragments.length) {
        isCorrect = false;
    } else {
        for (let i = 0; i < correctOrderFragments.length; i++) {
            if (userAnswerFragments[i] !== correctOrderFragments[i]) {
                isCorrect = false;
                break;
            }
            // Add visual feedback for each fragment
            const targetFragments = syntaxTargetArea.querySelectorAll('.syntax-fragment-target');
            if (targetFragments[i]) {
                targetFragments[i].classList.remove('bg-purple-200', 'text-purple-800');
                if (userAnswerFragments[i] === correctOrderFragments[i]) {
                    targetFragments[i].classList.add('bg-green-300', 'text-green-900', 'border-2', 'border-green-600');
                } else {
                    targetFragments[i].classList.add('bg-red-300', 'text-red-900', 'border-2', 'border-red-600');
                }
            }
        }
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }

    // Trigger animation feedback
    if (quizPlayArea) {
        quizPlayArea.classList.add(isCorrect ? 'animate-flash-green' : 'animate-flash-red');
        setTimeout(() => quizPlayArea.classList.remove('animate-flash-green', 'animate-flash-red'), 500);
    }


    if (checkSyntaxButton) checkSyntaxButton.disabled = true;
    if (undoSyntaxButton) undoSyntaxButton.disabled = true;
    setTimeout(nextQuestion, 1000);
}

function undoSyntaxOrder() {
    if (currentSyntaxOrder.length > 0) {
        const lastItem = currentSyntaxOrder.pop();
        renderSyntaxTarget();
        if (syntaxOptionsArea) {
            const fragmentElement = syntaxOptionsArea.querySelector(`[data-index="${lastItem.originalIndex}"]`);
            if (fragmentElement) {
                fragmentElement.style.visibility = 'visible';
            }
        }
    }
}


function setupDragMatchQuestion(question) {
    if (dragMatchContainer) {
        dragMatchContainer.classList.remove('hidden');
        if (dragElementsArea) dragElementsArea.innerHTML = '';
        if (dropTargetsArea) dropTargetsArea.innerHTML = '';

        currentDragMatchPairs = shuffleArray([...question.pairs]);
        originalDragMatchState = currentDragMatchPairs.map(pair => ({ drag: pair.drag, drop: pair.drop, dropped: false }));

        const shuffledDragItems = shuffleArray(currentDragMatchPairs.map(p => p.drag));
        const shuffledDropItems = shuffleArray(currentDragMatchPairs.map(p => p.drop)); // Use drop values as targets

        shuffledDragItems.forEach((dragText, index) => {
            const dragItem = document.createElement('div');
            // Initial styling for draggable items
            dragItem.classList.add('drag-item', 'bg-blue-200', 'text-blue-800', 'px-4', 'py-2', 'rounded-lg', 'cursor-grab', 'hover:bg-blue-300', 'transition-colors', 'duration-200', 'shadow-md');
            dragItem.textContent = dragText;
            dragItem.setAttribute('draggable', true);
            dragItem.dataset.originalText = dragText; // Store original text to match later
            dragItem.addEventListener('dragstart', handleDragStart);
            if (dragElementsArea) dragElementsArea.appendChild(dragItem);
        });

        shuffledDropItems.forEach((dropText, index) => {
            const dropTarget = document.createElement('div');
            // Initial styling for drop targets
            dropTarget.classList.add('drop-target', 'bg-gray-100', 'text-gray-700', 'border-2', 'border-dashed', 'border-gray-400', 'px-4', 'py-2', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'min-h-[40px]', 'text-center', 'relative', 'overflow-hidden');
            dropTarget.dataset.correctMatch = dropText; // Store the correct match for this target

            const dropTextSpan = document.createElement('span');
            dropTextSpan.classList.add('drop-text-placeholder', 'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'p-2');
            dropTextSpan.textContent = dropText; // Show the target text initially
            dropTarget.appendChild(dropTextSpan);

            dropTarget.addEventListener('dragover', handleDragOver);
            dropTarget.addEventListener('drop', handleDrop);
            dropTarget.addEventListener('dragleave', handleDragLeave);
            if (dropTargetsArea) dropTargetsArea.appendChild(dropTarget);
        });

        // Add a global dragend listener to ensure the dragged item is always reset
        document.addEventListener('dragend', handleDragEnd);


        if (checkMatchButton) checkMatchButton.onclick = checkDragMatch;
        if (undoMatchButton) undoMatchButton.onclick = undoDragMatch;
    }
}

// Global variable to hold the currently dragged item's original element from dragElementsArea
let draggedItemOriginalElement = null;

function handleDragStart(e) {
    draggedItemOriginalElement = e.target; // Store the actual element from the drag area
    e.dataTransfer.setData('text/plain', draggedItemOriginalElement.dataset.originalText);
    setTimeout(() => {
        if (draggedItemOriginalElement) {
            draggedItemOriginalElement.classList.add('opacity-0'); // Make original element transparent during drag
        }
    }, 0);
}

function handleDragOver(e) {
    e.preventDefault(); // Allow drop
    if (e.target && e.target.classList.contains('drop-target')) {
        e.target.classList.add('border-blue-500', 'bg-blue-100'); // Visual feedback
    }
}

function handleDragLeave(e) {
    if (e.target && e.target.classList.contains('drop-target')) {
        e.target.classList.remove('border-blue-500', 'bg-blue-100');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const dropTarget = e.target.closest('.drop-target');
    if (e.target && dropTarget) {
        e.target.classList.remove('border-blue-500', 'bg-blue-100'); // Remove drag-over feedback

        // If the drop target already has a child (an item was dropped here before),
        // return the old item to the drag area before placing the new one.
        const existingDroppedItemInTarget = dropTarget.querySelector('.drag-item-dropped');
        if (existingDroppedItemInTarget) {
            // Find the original drag item in the dragElementsArea based on its text content
            const originalElementToRestore = dragElementsArea.querySelector(`[data-original-text="${existingDroppedItemInTarget.dataset.originalText}"]`);
            if (originalElementToRestore) {
                originalElementToRestore.classList.remove('hidden', 'opacity-0'); // Make it visible again
                originalElementToRestore.classList.add('drag-item'); // Ensure it has the drag-item class
            } else {
                // If the original element was somehow lost, recreate it in the drag area
                const tempDragItem = document.createElement('div');
                tempDragItem.classList.add('drag-item', 'bg-blue-200', 'text-blue-800', 'px-4', 'py-2', 'rounded-lg', 'cursor-grab', 'hover:bg-blue-300', 'transition-colors', 'duration-200', 'shadow-md');
                tempDragItem.textContent = existingDroppedItemInTarget.dataset.originalText;
                tempDragItem.dataset.originalText = existingDroppedItemInTarget.dataset.originalText;
                tempDragItem.setAttribute('draggable', true);
                tempDragItem.addEventListener('dragstart', handleDragStart);
                dragElementsArea.appendChild(tempDragItem);
            }
            existingDroppedItemInTarget.remove(); // Remove the old dropped item from the target
        }

        // Now place the new dragged item
        if (draggedItemOriginalElement) {
            const droppedItem = document.createElement('div');
            droppedItem.classList.add('drag-item-dropped', 'bg-indigo-300', 'text-indigo-900', 'px-4', 'py-2', 'rounded-lg', 'cursor-default', 'min-w-[100px]', 'text-center', 'shadow-inner', 'flex', 'items-center', 'justify-center', 'w-full', 'h-full');
            droppedItem.textContent = draggedItemOriginalElement.dataset.originalText;
            droppedItem.dataset.originalText = draggedItemOriginalElement.dataset.originalText; // Keep original text reference

            // Hide the placeholder text if present
            const dropTextPlaceholder = dropTarget.querySelector('.drop-text-placeholder');
            if (dropTextPlaceholder) {
                dropTextPlaceholder.classList.add('hidden');
            }

            dropTarget.appendChild(droppedItem);
            draggedItemOriginalElement.classList.add('hidden'); // Hide the original element from the drag area
            draggedItemOriginalElement.classList.remove('opacity-0'); // Reset opacity for next drag if needed

            draggedItemOriginalElement = null; // Reset dragged item
        }
    } else {
        // If dropped outside a valid target, restore the original dragged item's visibility
        if (draggedItemOriginalElement) {
            draggedItemOriginalElement.classList.remove('hidden', 'opacity-0');
            draggedItemOriginalElement = null;
        }
    }
}

function handleDragEnd(e) {
    // This fires after a drag operation ends, regardless of whether it was a successful drop or not.
    // It's a good place to ensure the dragged item's visibility is reset if it wasn't dropped.
    if (draggedItemOriginalElement) {
        draggedItemOriginalElement.classList.remove('opacity-0'); // Ensure opacity is restored
        // If the dropEffect is 'none', it means the item was not dropped on a valid target.
        if (e.dataTransfer.dropEffect === 'none') {
            draggedItemOriginalElement.classList.remove('hidden'); // Make it visible again in its original area
        }
        draggedItemOriginalElement = null; // Clear the reference
    }
}


function checkDragMatch() {
    pauseTimer();

    let allCorrect = true;
    const dropTargets = document.querySelectorAll('.drop-target');

    if (quizHelpText) quizHelpText.classList.remove('hidden'); // Show help text

    dropTargets.forEach(target => {
        const droppedItem = target.querySelector('.drag-item-dropped');
        const correctMatch = target.dataset.correctMatch; // This is the expected drop text
        const targetPlaceholder = target.querySelector('.drop-text-placeholder');

        // Clear previous feedback styles
        target.classList.remove('border-green-600', 'border-red-600');
        if (droppedItem) {
            droppedItem.classList.remove('bg-indigo-300', 'text-indigo-900', 'bg-green-400', 'text-green-900', 'bg-red-400', 'text-red-900', 'border-2', 'border-green-600', 'border-red-600');
        }
        if (targetPlaceholder) {
            targetPlaceholder.classList.remove('text-green-700', 'font-bold', 'text-red-700');
        }


        if (droppedItem) {
            // Find the original pair using droppedItem's text and target's correctMatch
            // The logic here needs to map `dragText` to `dropText` from `question.pairs`
            const matchedPair = currentDragMatchPairs.find(pair =>
                pair.drag === droppedItem.dataset.originalText && pair.drop === correctMatch
            );

            if (matchedPair) {
                droppedItem.classList.add('bg-green-400', 'text-green-900', 'border-2', 'border-green-600');
                target.classList.add('border-green-600');
                // Ensure placeholder is hidden if an item is correctly placed
                if (targetPlaceholder) targetPlaceholder.classList.add('hidden');
            } else {
                allCorrect = false;
                droppedItem.classList.add('bg-red-400', 'text-red-900', 'border-2', 'border-red-600');
                target.classList.add('border-red-600');
                // Show the correct answer in the target placeholder for incorrect matches
                if (targetPlaceholder) {
                    targetPlaceholder.textContent = `${correctMatch} (Correcto)`;
                    targetPlaceholder.classList.remove('hidden');
                    targetPlaceholder.classList.add('text-green-700', 'font-bold');
                }
            }
        } else {
            // If nothing was dropped, it's incorrect
            allCorrect = false;
            target.classList.add('border-red-600');
            if (targetPlaceholder) {
                targetPlaceholder.textContent = `${correctMatch} (Faltante)`;
                targetPlaceholder.classList.remove('hidden');
                targetPlaceholder.classList.add('text-red-700', 'font-bold');
            }
        }
    });

    if (allCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }

    // Trigger animation feedback
    if (quizPlayArea) {
        quizPlayArea.classList.add(allCorrect ? 'animate-flash-green' : 'animate-flash-red');
        setTimeout(() => quizPlayArea.classList.remove('animate-flash-green', 'animate-flash-red'), 500);
    }


    if (checkMatchButton) checkMatchButton.disabled = true;
    if (undoMatchButton) undoMatchButton.disabled = true;
    setTimeout(nextQuestion, 2000);
}


function undoDragMatch() {
    const dropTargets = document.querySelectorAll('.drop-target');
    dropTargets.forEach(target => {
        const droppedItem = target.querySelector('.drag-item-dropped');
        if (droppedItem) {
            droppedItem.remove(); // Remove from target
        }

        // Show the placeholder text again
        const dropTextPlaceholder = target.querySelector('.drop-text-placeholder');
        if (dropTextPlaceholder) {
            dropTextPlaceholder.classList.remove('hidden', 'text-green-700', 'font-bold', 'text-red-700');
            dropTextPlaceholder.textContent = target.dataset.correctMatch; // Restore original placeholder text
        }
        // Remove any border feedback from the target
        target.classList.remove('border-green-600', 'border-red-600');
    });

    // Ensure all original drag items are visible in the drag area and have correct styling
    if (dragElementsArea) {
        const allDragItems = dragElementsArea.querySelectorAll('.drag-item, .drag-item-dropped'); // Select both potential types
        allDragItems.forEach(item => {
            // Restore original drag-item classes and remove any dropped-specific or feedback classes
            item.classList.remove('hidden', 'opacity-0', 'drag-item-dropped', 'bg-indigo-300', 'text-indigo-900', 'bg-green-400', 'text-green-900', 'bg-red-400', 'text-red-900', 'border-2', 'border-green-600', 'border-red-600');
            item.classList.add('drag-item', 'bg-blue-200', 'text-blue-800'); // Restore default drag item styles
            item.setAttribute('draggable', true); // Make draggable again
        });
    }
}


// --- Helper Functions ---

function updateTimerDisplay() {
    const minutes = String(Math.floor(timeElapsed / 60)).padStart(2, '0'); // Usar timeElapsed
    const seconds = String(timeElapsed % 60).padStart(2, '0'); // Usar timeElapsed
    if (quizTimerDisplay) quizTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function updateScoreDisplay() {
    if (quizScoreDisplay) quizScoreDisplay.textContent = currentScore;
}

function checkAnswer(selectedIndex, correctAnswer) {
    pauseTimer();
    if (quizHelpText) quizHelpText.classList.remove('hidden'); // Show help text after answer

    // Disable all options after answering
    if (multipleChoiceOptions) {
        const buttons = multipleChoiceOptions.querySelectorAll('.answer-option-button');
        buttons.forEach(button => {
            button.disabled = true;
            if (parseInt(button.dataset.option) === correctAnswer) {
                button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
                button.classList.add('bg-green-500'); // Correct answer green
            } else if (parseInt(button.dataset.option) === selectedIndex) {
                button.classList.remove('bg-blue-500', 'hover:bg-blue-600');
                button.classList.add('bg-red-500'); // Incorrect selected red
            }
        });
    }


    if (selectedIndex === correctAnswer) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }

    // Trigger animation feedback
    if (quizPlayArea) {
        quizPlayArea.classList.add(selectedIndex === correctAnswer ? 'animate-flash-green' : 'animate-flash-red');
        setTimeout(() => quizPlayArea.classList.remove('animate-flash-green', 'animate-flash-red'), 500);
    }


    setTimeout(nextQuestion, 1000); // Short delay before next question
}

function handleCorrectAnswer() {
    currentScore += 1; // 1 punto por respuesta correcta
    answeredCorrectly++;
    updateScoreDisplay();
}

function handleIncorrectAnswer() {
    // No se resta puntuación por errores, solo se cuenta el error
    answeredIncorrectly++;
    updateScoreDisplay(); // Asegurarse de que el score se actualice visualmente
}

function nextQuestion() {
    currentQuestionIndex++;
    startQuestion();
}

function endQuiz() {
    clearInterval(quizTimer);
    if (quizCorrectAnswers) quizCorrectAnswers.textContent = answeredCorrectly;
    if (quizIncorrectAnswers) quizIncorrectAnswers.textContent = answeredIncorrectly;
    if (quizFinalScore) quizFinalScore.textContent = currentScore;
    if (quizFinalTime) {
        const minutes = String(Math.floor(totalTimeElapsed / 60)).padStart(2, '0');
        const seconds = String(totalTimeElapsed % 60).padStart(2, '0');
        quizFinalTime.textContent = `${minutes}:${seconds}`;
    }

    // Check if there's a next level
    const difficultyOrder = ['basico', 'intermedio', 'avanzado'];
    const currentDifficultyIndex = difficultyOrder.indexOf(selectedDifficulty);
    const nextDifficulty = difficultyOrder[currentDifficultyIndex + 1];

    if (nextDifficulty && quizData[selectedTopic][nextDifficulty]) {
        if (quizNextLevelButton) {
            quizNextLevelButton.classList.remove('hidden');
            quizNextLevelButton.onclick = () => {
                selectDifficulty(nextDifficulty); // Start next level
            };
        }
    } else {
        if (quizNextLevelButton) quizNextLevelButton.classList.add('hidden');
    }

    showScreen('quiz-result-screen');
    resetInactivityTimer(); // Reset inactivity timer on quiz end
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Global Initialization Function for the Quiz Game ---
// This function will be called by index.html after the quiz HTML content is loaded.
window.initQuizGame = function() {
    // Assign DOM elements now that they are guaranteed to be in the document
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
    quizQuestion = document.getElementById('quiz-question');
    quizHelpText = document.getElementById('quiz-help-text');
    multipleChoiceOptions = document.getElementById('multiple-choice-options');
    syntaxOrderContainer = document.getElementById('syntax-order-container');
    syntaxTargetArea = document.getElementById('syntax-target-area');
    syntaxOptionsArea = document.getElementById('syntax-options-area');
    checkSyntaxButton = document.getElementById('check-syntax-button');
    undoSyntaxButton = document.getElementById('undo-syntax-button');
    dragMatchContainer = document.getElementById('drag-match-container');
    dragElementsArea = document.getElementById('drag-elements');
    dropTargetsArea = document.getElementById('drop-targets');
    checkMatchButton = document.getElementById('check-match-button');
    undoMatchButton = document.getElementById('undo-match-button');
    endQuizButton = document.getElementById('end-quiz-button');
    quizResultScreen = document.getElementById('quiz-result-screen');
    quizCorrectAnswers = document.getElementById('quiz-correct-answers');
    quizIncorrectAnswers = document.getElementById('quiz-incorrect-answers');
    quizFinalScore = document.getElementById('quiz-final-score');
    quizFinalTime = document.getElementById('quiz-final-time');
    quizRetryLevelButton = document.getElementById('quiz-retry-level-button');
    quizNextLevelButton = document.getElementById('quiz-next-level-button');
    quizChangeTopicButton = document.getElementById('quiz-change-topic-button');
    quizExitGameButton = document.getElementById('quiz-exit-game-button');
    inactivityWarningModal = document.getElementById('inactivity-warning-modal');
    inactivityCountdownDisplay = document.getElementById('inactivity-countdown-display');

    // --- Event Listeners ---
    if (startQuizButton) {
        startQuizButton.addEventListener('click', startQuiz);
    }

    topicButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => selectTopic(button.dataset.topic));
        }
    });

    if (backToStartMenuButton) {
        backToStartMenuButton.addEventListener('click', () => showScreen('quiz-start-menu'));
    }

    difficultyButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', () => selectDifficulty(button.dataset.difficulty));
        }
    });

    if (backToTopicMenuButton) {
        backToTopicMenuButton.addEventListener('click', () => showScreen('quiz-topic-selection-menu'));
    }

    if (endQuizButton) {
        endQuizButton.addEventListener('click', endQuiz);
    }

    if (quizRetryLevelButton) {
        quizRetryLevelButton.addEventListener('click', () => {
            selectDifficulty(selectedDifficulty); // Re-select current difficulty to restart
        });
    }

    // quizNextLevelButton's click handler is set dynamically in endQuiz

    if (quizChangeTopicButton) {
        quizChangeTopicButton.addEventListener('click', () => showScreen('quiz-topic-selection-menu'));
    }

    if (quizExitGameButton) {
        quizExitGameButton.addEventListener('click', () => {
            // This assumes window.returnToMainContent is defined in the parent index.html
            if (window.returnToMainContent) {
                window.returnToMainContent();
            } else {
                // Fallback if not running in the expected parent context
                console.warn("window.returnToMainContent not found. Cannot return to main content.");
                showScreen('quiz-start-menu'); // Just go back to quiz start menu
            }
        });
    }

    // Event listeners para detectar actividad del usuario (solo después de que los elementos existan)
    ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetInactivityTimer);
    });

    // Initial screen setup - moved inside initQuizGame
    showScreen('quiz-start-menu');
}; // End of initQuizGame function
