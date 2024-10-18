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

function destapar(id) {
    // Apuntando a elementos HTML
    let mostrarMovimientos = document.getElementById('movimientos');
    let mostrarAciertos = document.getElementById('aciertos');
    let mostrarTiempo = document.getElementById('t-restante');


     // Contador de tiempo
     if (!temporizador) {
        contarTiempo();
        temporizador = true;
    }

    function contarTiempo() {
        tiempo = setInterval(() => {
            timer++;
            mostrarTiempo.innerHTML = 'Tiempo: ' + timer;
        }, 1000);
    }

    tarjetasDestapadas++;
    

     // Mostrar imagen cuando se destapa la carta
     function mostrarImagen(id, resultado) {
        var boton = document.getElementById(id);
        boton.innerHTML = "<img src='./img/" + resultado + ".png' alt='Carta'>";
        boton.disabled = true;
    }

    if (tarjetasDestapadas === 1) {
        // Mostrar la primera imagen
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        mostrarImagen(id, primerResultado);
    } else if (tarjetasDestapadas === 2) {
        // Mostrar la segunda imagen
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        mostrarImagen(id, segundoResultado);

        // Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = 'Movimientos: ' + movimientos;

        // Verificar si las tarjetas coinciden
        if (primerResultado === segundoResultado) {
            // Resetear tarjetas destapadas
            tarjetasDestapadas = 0;
            acierto++;
            mostrarAciertos.innerHTML = 'Aciertos: ' + acierto;
            if (acierto === 8) {
                clearInterval(tiempo);
                mostrarAlerta();
            }
        } else {
            // Mostrar momentáneamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = "<img src='./img/dragon-ball-icon-27.png' alt='Carta'>";
                tarjeta2.innerHTML = "<img src='./img/dragon-ball-icon-27.png' alt='Carta'>";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 200);
        }
    }
    
}