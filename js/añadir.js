const botonesDeAñadir = document.querySelector(".contenedor")
const textArea = document.querySelector(".textArea");
const apareceDivCanvas = document.querySelector("#div-aparece-ahorcado");
const botonesCanvas = document.querySelector(".subrayado");
const btnIniciar = document.getElementById("iniciar-juego");
const btnAñadirPalabra = document.querySelector(".btn-añadir");
const btnNuevoJuego = document.querySelector(".btn-juegoNuevo");
const guardarPalbraNueva = document.querySelector(".btn-guardar");


export const apareceAñadirPalabra = () => {
  btnIniciar.style.display = "none";
  btnAñadirPalabra.style.display = "none";
  apareceDivCanvas.style.display = "none";
  textArea.style.display = "block";
  botonesDeAñadir.style.display = "flex";
}