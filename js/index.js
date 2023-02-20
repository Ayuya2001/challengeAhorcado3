import { dibujarCanvas, dibujarLinea, horca } from "./canvas.js";
import { escribirLetraCorrecta, escribirLetraIncorrecta } from "./canvas.js";
import { apareceAñadirPalabra } from "./añadir.js";

//Selectores
export let palabras = [
  "CHILE",
  "PERU",
  "BOLIVIA",
  "ECUADOR",
  "ESPAÑA",
  "ITALIA",
];
const botonesDeAñadir = document.querySelector(".contenedor");
const textArea = document.querySelector(".textArea");
const apareceDivCanvas = document.querySelector("#div-aparece-ahorcado");
const botonesCanvas = document.querySelector(".subrayado");
const btnIniciar = document.getElementById("iniciar-juego");
const btnAñadirPalabra = document.querySelector(".btn-añadir");
const btnNuevoJuego = document.querySelector(".btn-juegoNuevo");
const guardarPalbraNueva = document.querySelector(".btn-guardar");

let letras = [];
export let palabraSecreta = "";
export let errores = 8;

// Palabra secreta
const escojerPalabraSecreta = () => {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
};

const mostrarMensajeGanador = () => {
  const mensaje = document.querySelector(".mensaje");
  mensaje.textContent = "¡Felicidades has ganado!";
  document.onkeydown = null;
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
  return mensaje;
};

// verificar que lo que se este presionando sea una letra y aparte que sea en mayusculas
const verificarLetra = (key) => {
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    return false;
  } else {
    
    letras.push(key);
    return true;
  }
};
const btnAgregarNueva = document.querySelector(".btn-guardar");
// agregar palabras
function agregarPalabra() {
  let nuevaPalabra = document.querySelector(".input-text");
  let value = nuevaPalabra.value.toUpperCase();;
  btnAñadirPalabra.style.display = "block";
  apareceDivCanvas.style.display = "block";
  textArea.style.display = "none";
  botonesDeAñadir.style.display = "none";
  palabras.push(value);
  juegoNuevo();
  
}
const encontrarError = () => {
  errores -= 1;
};
// function que inicia el juego
const juegoNuevo = () => {
  errores = 8;
  btnIniciar.style.display = "none";
  btnAñadirPalabra.style.display = "none";
  escojerPalabraSecreta();
  dibujarCanvas();
  dibujarLinea();
  botonesCanvas.style.visibility = "visible";
  const letrasAdivinadas = Array(palabraSecreta.length).fill("_");
  const letrasPalabraSecreta = palabraSecreta.split("");

  const verificarAdivinanza = () => {
    if (letrasAdivinadas.join("") === palabraSecreta) {
      // El usuario ha adivinado todas las letras
      mostrarMensajeGanador();
      
    }
  };

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (verificarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          escribirLetraCorrecta(i);
          letrasAdivinadas[i] = letra;
        }
      }
      verificarAdivinanza();
    } else {
      encontrarError(letra);
      escribirLetraIncorrecta(letra, errores);
    }
    horca();
  };
};

const btnDesistir = document.querySelector(".btn-desistir");
btnDesistir.addEventListener("click", () => {
  window.location.href = "index.html";
});

const iniciarJuego = () => {
  btnIniciar.style.display = "none";
  btnAñadirPalabra.style.display = "none";
  escojerPalabraSecreta();
  dibujarCanvas();
  dibujarLinea();
  botonesCanvas.style.visibility = "visible";
  const letrasAdivinadas = Array(palabraSecreta.length).fill("_");
  const letrasPalabraSecreta = palabraSecreta.split("");

  const verificarAdivinanza = () => {
    if (letrasAdivinadas.join("") === palabraSecreta) {
      // El usuario ha adivinado todas las letras
      mostrarMensajeGanador();
    }
  };

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (verificarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          escribirLetraCorrecta(i);
          letrasAdivinadas[i] = letra;
        }
      }
      verificarAdivinanza();
    } else {
      encontrarError(letra);
      escribirLetraIncorrecta(letra, errores);
    }
    horca();
  };
};
console.log(palabras)
btnIniciar.addEventListener("click", iniciarJuego);
btnNuevoJuego.addEventListener("click", juegoNuevo);
btnAgregarNueva.addEventListener("click", agregarPalabra);
btnAñadirPalabra.addEventListener("click", apareceAñadirPalabra);
