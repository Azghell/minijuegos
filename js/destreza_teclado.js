// Este archivo contiene la lógica y los datos del juego de Destreza en el Teclado.

// --- Datos del Juego ---
const gameWords = {
    // Palabras básicas: cortas y comunes
    basico: [
        { word: "casa", type: "word" }, { word: "perro", type: "word" }, { word: "mesa", type: "word" },
        { word: "sol", type: "word" }, { word: "luz", type: "word" }, { word: "flor", type: "word" },
        { word: "azul", type: "word" }, { word: "verde", type: "word" }, { word: "rojo", type: "word" },
        { word: "agua", type: "word" }, { word: "libro", type: "word" }, { word: "gato", type: "word" },
        { word: "pan", type: "word" }, { word: "tren", type: "word" }, { word: "cielo", type: "word" },
        { word: "nube", type: "word" }, { word: "paz", type: "word" }, { word: "amor", type: "word" },
        { word: "vida", type: "word" }, { word: "mano", type: "word" }
    ],
    // Palabras intermedias: longitud media, mayor complejidad
    intermedio: [
        { word: "computadora", type: "word" }, { word: "teclado", type: "word" }, { word: "ratón", type: "word" },
        { word: "pantalla", type: "word" }, { word: "impresora", type: "word" }, { word: "software", type: "word" },
        { word: "hardware", type: "word" }, { word: "internet", type: "word" }, { word: "navegador", type: "word" },
        { word: "documento", type: "word" }, { word: "teléfono", type: "word" }, { word: "máquina", type: "word" },
        { word: "aplicación", type: "word" }, { word: "desarrollo", type: "word" }, { word: "seguridad", type: "word" },
        { word: "informática", type: "word" }, { word: "conexión", type: "word" }, { word: "programa", type: "word" },
        { word: "escritorio", type: "word" }, { word: "sistema", type: "word" }
    ],
    // Palabras avanzadas: largas, complejas, con caracteres especiales
    avanzado: [
        { word: "programación", type: "word" }, { word: "algoritmo", type: "word" }, { word: "inteligencia", type: "word" },
        { word: "automatización", type: "word" }, { word: "ciberseguridad", type: "word" }, { word: "infraestructura", type: "word" },
        { word: "comunicación", type: "word" }, { word: "administración", type: "word" }, { word: "configuración", type: "word" },
        { word: "virtualización", type: "word" }, { word: "optimización", type: "word" }, { word: "interoperabilidad", type: "word" },
        { word: "mantenimiento", type: "word" }, { word: "rendimiento", type: "word" }, { word: "almacenamiento", type: "word" },
        { word: "distribución", type: "word" }, { word: "personalización", type: "word" }, { word: "autenticación", type: "word" },
        { word: "encriptación", type: "word" }, { word: "interfaz", type: "word" }
    ],
    // Caracteres especiales y atajos de teclado
    especial: [
        { word: "ñ", type: "special", hint: "Letra 'ñ'" },
        { word: "ü", type: "special", hint: "Letra 'ü'" },
        { word: "á", type: "special", hint: "Alt+160" },
        { word: "é", type: "special", hint: "Alt+130" },
        { word: "í", type: "special", hint: "Alt+161" },
        { word: "ó", type: "special", hint: "Alt+162" },
        { word: "ú", type: "special", hint: "Alt+163" },
        { word: "¿", type: "special", hint: "Alt+168" },
        { word: "¡", type: "special", hint: "Alt+173" },
        { word: "€", type: "special", hint: "Alt+0128" },
        { word: "Ctrl+C", type: "shortcut", hint: "Copiar" },
        { word: "Ctrl+V", type: "shortcut", hint: "Pegar" },
        { word: "Ctrl+X", type: "shortcut", hint: "Cortar" },
        { word: "Ctrl+Z", type: "shortcut", hint: "Deshacer" },
        { word: "Ctrl+S", type: "shortcut", hint: "Guardar" },
        { word: "Alt+Tab", type: "shortcut", hint: "Cambiar Ventana" },
        { word: "Win+D", type: "shortcut", hint: "Mostrar Escritorio" },
        { word: "Shift+Supr", type: "shortcut", hint: "Eliminar Permanentemente" }
    ]
};

// --- Variables de Estado del Juego ---
let currentWord = {}; // Objeto que contiene { word: "...", type: "...", hint: "..." }
let currentDifficultyLevel = 0; // 0: básico, 1: intermedio, 2: avanzado, 3: especial
let availableWords = []; // Palabras para la dificultad actual
let wordIndex = 0; // Índice de la palabra actual en availableWords
let correctWordsCount = 0;
let consecutiveErrors = 0;
let totalErrors = 0;
let gameStartTime;
let gameTimerInterval;
let timeRemaining;
let initialTimePerWord = 5; // Segundos iniciales por palabra
let timeDecreaseFactor = 0.95; // Factor para reducir el tiempo por palabra a medida que avanza
const MAX_CONSECUTIVE_ERRORS = 3;

// --- Referencias a Elementos del DOM ---
let gameStartMenu;
let startGameButton;
let gamePlayArea;
let correctWordsDisplay;
let consecutiveErrorsDisplay;
let timeBar;
let currentWordDisplay;
let specialCharHint;
let wordInput;
let exitGameButton;
let gameResultScreen;
let finalCorrectWords;
let finalErrors;
let finalWPM;
let retryGameButton;
let exitResultsButton;

// --- Funciones de Utilidad ---

// Mezcla un array aleatoriamente (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Muestra la pantalla deseada y oculta las demás
function showScreen(screenId) {
    const screens = [
        gameStartMenu,
        gamePlayArea,
        gameResultScreen
    ];
    screens.forEach(screen => {
        if (screen) {
            screen.classList.add('hidden');
            screen.classList.remove('flex');
            screen.classList.remove('flex-col');
            screen.classList.remove('animate-fade-in-down');
        }
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('flex', 'flex-col');
        targetScreen.classList.add('animate-fade-in-down');
    }
}

// Actualiza la barra de tiempo visualmente
function updateTimeBar() {
    const percentage = (timeRemaining / currentWord.timeLimit) * 100;
    if (timeBar) {
        timeBar.style.width = `${percentage}%`;
        timeBar.classList.remove('warning', 'danger');
        if (percentage < 30) {
            timeBar.classList.add('danger');
        } else if (percentage < 60) {
            timeBar.classList.add('warning');
        }
    }
}

// Calcula las palabras por minuto
function calculateWPM() {
    if (!gameStartTime) return 0;
    const elapsedTimeInMinutes = (Date.now() - gameStartTime) / 60000;
    if (elapsedTimeInMinutes <= 0) return 0;
    // Se considera una "palabra" como 5 caracteres, incluyendo espacios.
    // Para este juego, contamos palabras correctas directamente.
    return Math.round(correctWordsCount / elapsedTimeInMinutes);
}

// --- Lógica del Juego ---

// Inicializa el juego al cargar la página o al volver a jugar
window.initDexterityGame = function() {
    console.log('initDexterityGame called'); // Debugging log
    // Asignar elementos del DOM
    gameStartMenu = document.getElementById('game-start-menu');
    startGameButton = document.getElementById('start-game-button');
    gamePlayArea = document.getElementById('game-play-area');
    correctWordsDisplay = document.getElementById('correct-words-display');
    consecutiveErrorsDisplay = document.getElementById('consecutive-errors-display');
    timeBar = document.getElementById('time-bar');
    currentWordDisplay = document.getElementById('current-word-display');
    specialCharHint = document.getElementById('special-char-hint');
    wordInput = document.getElementById('word-input');
    exitGameButton = document.getElementById('exit-game-button');
    gameResultScreen = document.getElementById('game-result-screen');
    finalCorrectWords = document.getElementById('final-correct-words');
    finalErrors = document.getElementById('final-errors');
    finalWPM = document.getElementById('final-wpm');
    retryGameButton = document.getElementById('retry-game-button');
    exitResultsButton = document.getElementById('exit-results-button');

    console.log('startGameButton:', startGameButton); // Debugging log

    // Configurar Event Listeners
    if (startGameButton) startGameButton.addEventListener('click', startGame);
    if (wordInput) wordInput.addEventListener('input', handleInput);
    if (exitGameButton) exitGameButton.addEventListener('click', exitGame);
    if (retryGameButton) retryGameButton.addEventListener('click', startGame);
    if (exitResultsButton) exitResultsButton.addEventListener('click', exitGame);

    // Mostrar menú de inicio al cargar
    showScreen('game-start-menu');
};

// Inicia un nuevo juego
function startGame() {
    console.log('startGame function called'); // Debugging log
    resetGame();
    showScreen('game-play-area');
    gameStartTime = Date.now();
    loadNewWord();
    if (wordInput) wordInput.focus(); // Pone el foco en el input
}

// Reinicia todas las variables del juego
function resetGame() {
    clearInterval(gameTimerInterval);
    currentDifficultyLevel = 0;
    correctWordsCount = 0;
    consecutiveErrors = 0;
    totalErrors = 0;
    wordIndex = 0;
    timeRemaining = initialTimePerWord;

    // Reiniciar los displays
    if (correctWordsDisplay) correctWordsDisplay.textContent = correctWordsCount;
    if (consecutiveErrorsDisplay) consecutiveErrorsDisplay.textContent = consecutiveErrors;
    if (wordInput) wordInput.value = '';
    if (timeBar) timeBar.style.width = '100%';
    if (specialCharHint) specialCharHint.classList.add('hidden');

    // Cargar palabras para la primera dificultad
    loadDifficultyWords();
}

// Carga las palabras para la dificultad actual y las mezcla
function loadDifficultyWords() {
    let difficultyKey;
    if (currentDifficultyLevel === 0) {
        difficultyKey = 'basico';
    } else if (currentDifficultyLevel === 1) {
        difficultyKey = 'intermedio';
    } else if (currentDifficultyLevel === 2) {
        difficultyKey = 'avanzado';
    } else { // Después de avanzado, se mezclan palabras y especiales
        difficultyKey = 'especial'; // O una mezcla de avanzado y especial
    }

    availableWords = shuffleArray([...gameWords[difficultyKey]]);
    // Si ya se agotaron las palabras de una dificultad, se pasa a la siguiente
    if (availableWords.length === 0 && currentDifficultyLevel < 3) {
        currentDifficultyLevel++;
        loadDifficultyWords(); // Recargar con la nueva dificultad
    } else if (availableWords.length === 0 && currentDifficultyLevel === 3) {
        // Si no hay más palabras en la última dificultad, el juego termina
        endGame();
        return;
    }
    wordIndex = 0; // Reiniciar el índice para la nueva lista de palabras
}

// Carga una nueva palabra o combinación
function loadNewWord() {
    clearInterval(gameTimerInterval); // Detener el temporizador actual

    if (wordIndex >= availableWords.length) {
        // Avanzar a la siguiente dificultad si hay
        if (currentDifficultyLevel < 3) { // Asumiendo 0, 1, 2, 3 son los niveles
            currentDifficultyLevel++;
            loadDifficultyWords(); // Cargar palabras para la nueva dificultad
        } else {
            // Si no hay más dificultades, terminar el juego
            endGame();
            return;
        }
    }

    currentWord = availableWords[wordIndex];
    // Calcular el tiempo límite basado en la longitud de la palabra y el factor de dificultad
    // Palabras más largas o complejas (avanzado/especial) tendrán menos tiempo relativo
    let baseTime = initialTimePerWord;
    if (currentDifficultyLevel === 1) baseTime = 4; // Intermedio
    if (currentDifficultyLevel === 2) baseTime = 3; // Avanzado
    if (currentDifficultyLevel === 3) baseTime = 5; // Especiales pueden ser más lentos para dar tiempo a la pista

    // Ajustar el tiempo basado en el número de palabras correctas (el juego avanza más rápido)
    const speedFactor = 1 - (correctWordsCount * 0.005); // Reduce 0.5% por palabra correcta
    currentWord.timeLimit = Math.max(1, Math.round(baseTime * speedFactor)); // Mínimo 1 segundo
    timeRemaining = currentWord.timeLimit;

    if (currentWordDisplay) currentWordDisplay.textContent = currentWord.word;
    if (specialCharHint) {
        if (currentWord.type === "special" || currentWord.type === "shortcut") {
            specialCharHint.textContent = `Pista: ${currentWord.hint}`;
            specialCharHint.classList.remove('hidden');
        } else {
            specialCharHint.classList.add('hidden');
        }
    }
    if (wordInput) {
        wordInput.value = ''; // Limpiar el input
        wordInput.focus(); // Asegurar que el input esté enfocado
    }

    updateTimeBar();
    startTimer();
}

// Inicia el temporizador de la palabra actual
function startTimer() {
    gameTimerInterval = setInterval(() => {
        timeRemaining--;
        updateTimeBar();
        if (timeRemaining <= 0) {
            clearInterval(gameTimerInterval);
            handleIncorrectInput(); // Si el tiempo se acaba, cuenta como error
            loadNewWord(); // Pasa a la siguiente palabra
        }
    }, 1000);
}

// Maneja la entrada del usuario
function handleInput() {
    const inputText = wordInput.value;
    const targetWord = currentWord.word;

    // Si el usuario ha escrito la palabra completa (correcta o incorrecta)
    if (inputText.length >= targetWord.length) {
        if (inputText === targetWord) {
            handleCorrectInput();
        } else {
            handleIncorrectInput();
        }
        loadNewWord(); // Siempre avanza a la siguiente palabra
    }
    // Si el usuario ha cometido un error en algún punto, también avanza a la siguiente palabra
    // Esto se maneja en el siguiente bloque para permitir la corrección en vivo
    if (inputText !== targetWord.substring(0, inputText.length)) {
        // Si el texto ingresado no coincide con el inicio de la palabra objetivo,
        // se considera un error y se avanza a la siguiente palabra.
        // Esto evita que el usuario siga escribiendo una palabra incorrecta.
        handleIncorrectInput();
        loadNewWord();
    }
}

// Maneja una entrada correcta
function handleCorrectInput() {
    correctWordsCount++;
    consecutiveErrors = 0; // Reiniciar errores consecutivos
    if (correctWordsDisplay) correctWordsDisplay.textContent = correctWordsCount;
    if (consecutiveErrorsDisplay) consecutiveErrorsDisplay.textContent = consecutiveErrors;

    // Feedback visual de éxito
    if (gamePlayArea) {
        gamePlayArea.classList.add('animate-flash-green');
        setTimeout(() => gamePlayArea.classList.remove('animate-flash-green'), 500);
    }
}

// Maneja una entrada incorrecta
function handleIncorrectInput() {
    totalErrors++;
    consecutiveErrors++;
    if (consecutiveErrorsDisplay) consecutiveErrorsDisplay.textContent = consecutiveErrors;

    // Feedback visual de error
    if (gamePlayArea) {
        gamePlayArea.classList.add('animate-flash-red');
        setTimeout(() => gamePlayArea.classList.remove('animate-flash-red'), 500);
    }

    if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        endGame();
    }
}

// Termina el juego y muestra los resultados
function endGame() {
    clearInterval(gameTimerInterval); // Detener el temporizador
    showScreen('game-result-screen');

    if (finalCorrectWords) finalCorrectWords.textContent = correctWordsCount;
    if (finalErrors) finalErrors.textContent = totalErrors;
    if (finalWPM) finalWPM.textContent = calculateWPM();
}

// Sale del juego y regresa al menú principal de actividades
function exitGame() {
    clearInterval(gameTimerInterval);
    if (window.returnToMainContent) {
        window.returnToMainContent();
    } else {
        console.warn("window.returnToMainContent not found. Cannot return to main content.");
        showScreen('game-start-menu'); // Fallback to game start menu
    }
}

// La inicialización de este juego ahora se maneja directamente desde index.html
// a través de la función window.initDexterityGame() que se llama en el script.onload
// del script cargado dinámicamente.
