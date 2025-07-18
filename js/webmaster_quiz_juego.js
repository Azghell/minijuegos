// Datos para el juego WebMaster Quiz
// Cada tema (HTML, CSS, JavaScript) tendrá 3 niveles de dificultad (Básico, Intermedio, Avanzado).
// Cada nivel contendrá 20 preguntas únicas, que se cargarán aleatoriamente.
// Aquí se incluyen ejemplos representativos de cada tipo de pregunta; se necesitarían más para llegar a 20 por nivel/tema.

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
                question: "Ordena los fragmentos para crear una etiqueta de imagen con una fuente y texto alternativo.",
                fragments: ["<img", "src=\"imagen.jpg\"", "alt=\"Descripción\"", ">"],
                correctOrder: ["<img", "src=\"imagen.jpg\"", "alt=\"Descripción\"", ">"],
                help: "La etiqueta de imagen es un elemento vacío."
            },
            {
                type: "drag-match",
                question: "Arrastra y empareja la etiqueta HTML con su propósito.",
                pairs: [
                    { drag: "<h1>", drop: "Encabezado principal" },
                    { drag: "<a>", drop: "Enlace de hipertexto" },
                    { drag: "<ul>", drop: "Lista desordenada" },
                    { drag: "<button>", drop: "Botón clicable" }
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
            // Se necesitan 15 preguntas más para HTML Básico
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
            // Se necesitan 16 preguntas más para HTML Intermedio
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
            // Se necesitan 16 preguntas más para HTML Avanzado
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
            // Se necesitan 15 preguntas más para CSS Básico
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
            // Se necesitan 16 preguntas más para CSS Intermedio
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
            // Se necesitan 16 preguntas más para CSS Avanzado
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
            // Se necesitan 15 preguntas más para JavaScript Básico
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
            // Se necesitan 16 preguntas más para JavaScript Intermedio
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
            // Se necesitan 16 preguntas más para JavaScript Avanzado
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
let answerOptionButtons;
let syntaxOrderContainer;
let syntaxTargetArea;
let syntaxOptionsArea;
let checkSyntaxButton;
let dragMatchContainer;
let dragElementsArea;
let dropTargetsArea;
let checkMatchButton;
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
        answerOptionButtons = document.querySelectorAll('.answer-option-button');
        syntaxOrderContainer = document.getElementById('syntax-order-container');
        syntaxTargetArea = document.getElementById('syntax-target-area');
        syntaxOptionsArea = document.getElementById('syntax-options-area');
        checkSyntaxButton = document.getElementById('check-syntax-button');
        dragMatchContainer = document.getElementById('drag-match-container');
        dragElementsArea = document.getElementById('drag-elements');
        dropTargetsArea = document.getElementById('drop-targets');
        checkMatchButton = document.getElementById('check-match-button');
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

        answerOptionButtons.forEach(button => {
            button.addEventListener('click', () => checkMultipleChoiceAnswer(parseInt(button.dataset.option)));
        });

        if (checkSyntaxButton) checkSyntaxButton.addEventListener('click', checkSyntaxOrderAnswer);
        if (checkMatchButton) checkMatchButton.addEventListener('click', checkDragMatchAnswer);

        // Estado inicial del juego
        showStartMenu();

    }, 200); // Pequeño retraso para asegurar que el DOM esté cargado
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

    shuffledQuestions = shuffleArray([...currentQuestions]);
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

    // Limpiar áreas de drag & drop
    if (syntaxTargetArea) syntaxTargetArea.innerHTML = '';
    if (syntaxOptionsArea) syntaxOptionsArea.innerHTML = '';
    if (dragElementsArea) dragElementsArea.innerHTML = '';
    if (dropTargetsArea) dropTargetsArea.innerHTML = '';

    // Resetear borde de la tarjeta de quiz
    if (quizCard) quizCard.classList.remove('border-green-500', 'border-red-500');

    answerBlocked = false; // Permitir responder a la nueva pregunta

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
            setupSyntaxOrderQuestion(question);
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

// Completar Sintaxis / Orden de Ejecución
let draggedItem = null;

function setupSyntaxOrderQuestion(question) {
    if (!syntaxTargetArea || !syntaxOptionsArea || !checkSyntaxButton) return;

    syntaxTargetArea.innerHTML = '';
    syntaxOptionsArea.innerHTML = '';
    checkSyntaxButton.disabled = false;

    const shuffledFragments = shuffleArray([...question.fragments]);

    shuffledFragments.forEach((fragment, index) => {
        const fragmentDiv = document.createElement('div');
        fragmentDiv.textContent = fragment;
        fragmentDiv.className = 'draggable-fragment bg-blue-200 text-blue-800 px-3 py-2 rounded-md cursor-grab shadow-sm';
        fragmentDiv.draggable = true;
        fragmentDiv.dataset.index = index; // Usar un índice para rastrear el fragmento original
        syntaxOptionsArea.appendChild(fragmentDiv);

        fragmentDiv.addEventListener('dragstart', (e) => {
            draggedItem = fragmentDiv;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', fragmentDiv.textContent);
            setTimeout(() => fragmentDiv.classList.add('opacity-50'), 0);
        });

        fragmentDiv.addEventListener('dragend', () => {
            fragmentDiv.classList.remove('opacity-50');
            draggedItem = null;
        });
    });

    syntaxTargetArea.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permite soltar
        e.dataTransfer.dropEffect = 'move';
    });

    syntaxTargetArea.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem) {
            syntaxTargetArea.appendChild(draggedItem);
            draggedItem.classList.remove('opacity-50');
        }
    });

    // Permitir arrastrar de vuelta a las opciones
    syntaxOptionsArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    syntaxOptionsArea.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem) {
            syntaxOptionsArea.appendChild(draggedItem);
            draggedItem.classList.remove('opacity-50');
        }
    });
}

function checkSyntaxOrderAnswer() {
    if (answerBlocked) return;
    answerBlocked = true;
    if (!syntaxTargetArea || !checkSyntaxButton) return;

    checkSyntaxButton.disabled = true; // Deshabilitar el botón de comprobar

    const question = shuffledQuestions[currentQuestionIndex];
    const userOrder = Array.from(syntaxTargetArea.children).map(div => div.textContent.trim());
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
        if (index < correctOrder.length && div.textContent.trim() === correctOrder[index]) {
            div.classList.replace('bg-blue-200', 'bg-green-500');
            div.classList.replace('text-blue-800', 'text-white');
        } else {
            div.classList.replace('bg-blue-200', 'bg-red-500');
            div.classList.replace('text-blue-800', 'text-white');
        }
        div.draggable = false; // Deshabilitar arrastre después de la comprobación
    });

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500);
}

// Conexión Lógica (Drag & Match)
let currentDragElement = null;

function setupDragMatchQuestion(question) {
    if (!dragElementsArea || !dropTargetsArea || !checkMatchButton) return;

    dragElementsArea.innerHTML = '';
    dropTargetsArea.innerHTML = '';
    checkMatchButton.disabled = false;

    const shuffledDrags = shuffleArray(question.pairs.map(p => p.drag));
    const shuffledDrops = shuffleArray(question.pairs.map(p => p.drop));

    shuffledDrags.forEach((text, index) => {
        const dragDiv = document.createElement('div');
        dragDiv.textContent = text;
        dragDiv.className = 'drag-item bg-blue-200 text-blue-800 px-4 py-2 rounded-md cursor-grab shadow-sm mb-2';
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
        dropDiv.textContent = text;
        dropDiv.className = 'drop-target bg-gray-300 text-gray-800 px-4 py-2 rounded-md border-2 border-dashed border-gray-400 min-h-[40px] flex items-center justify-center mb-2';
        dropDiv.dataset.correctMatch = question.pairs.find(p => p.drop === text).drag; // Almacena el drag correcto
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
            if (currentDragElement && !dropDiv.hasChildNodes()) { // Solo si la zona está vacía
                dropDiv.appendChild(currentDragElement);
                currentDragElement.classList.remove('opacity-50');
            }
        });
    });
}

function checkDragMatchAnswer() {
    if (answerBlocked) return;
    answerBlocked = true;
    if (!dropTargetsArea || !checkMatchButton) return;

    checkMatchButton.disabled = true;

    let correctMatches = 0;
    Array.from(dropTargetsArea.children).forEach(dropTarget => {
        const draggedItemInTarget = dropTarget.querySelector('.drag-item');
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
            draggedItemInTarget.draggable = false; // Deshabilitar arrastre
        }
        dropTarget.classList.remove('border-dashed', 'border-gray-400'); // Quitar borde de arrastre
    });

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

    // Limpiar áreas de preguntas
    if (multipleChoiceOptionsContainer) multipleChoiceOptionsContainer.innerHTML = '';
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
