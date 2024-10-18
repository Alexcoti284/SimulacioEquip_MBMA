// Inicialización de variables
var tarjetasDestapadas = 0;
var tarjeta1 = null;
var tarjeta2 = null;
var primerResultado = null;
var segundoResultado = null;
var movimientos = 0;
var acierto = 0;
var temporizador = false;
var timer = 0;
var tiempo = null;

// Generación de números aleatorios
var numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
    return Math.random() - 0.5;
});
console.log(numeros);