import { palabraSecreta } from "./index.js";
import { errores } from "./index.js";
const modal = document.getElementById("my-modal");
const resetBtn = document.getElementById("reset-btn");
export const tablero = document.getElementById("forca").getContext("2d");
export function dibujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#f3f5f6";
  tablero.strokeStyle = "#0A3871";

  tablero.fillRect(0, 0, 1200, 860);
  tablero.beginPath();
  tablero.moveTo(650, 500);
  tablero.lineTo(900, 500);
  tablero.stroke();
  tablero.closePath();
}

const sinIntentos = () => {
  modal.style.display = "block";
  const palabraSecretaSpan = document.getElementById("palabra-secreta");
  palabraSecretaSpan.textContent = palabraSecreta;
  setTimeout(() => {
    window.location.href = "../index.html"; // cambiar por la URL deseada
  }, 3000);
};
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

export function dibujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#f3f5f6";
  tablero.strokeStyle = "#0A3871";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(500 + anchura * i, 640);
    tablero.lineTo(550 + anchura * i, 640);
  }
  tablero.stroke();
  tablero.closePath();
}
export const horca = () => {
  if (errores == 7) {
    // dibuja el palo de la horca
    tablero.lineWidth = 6;
    tablero.strokeStyle = "black";
    tablero.beginPath();
    tablero.moveTo(680, 200);
    tablero.lineTo(680, 500);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();

    tablero.moveTo(680, 200);
    tablero.lineTo(830, 200);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();

    tablero.moveTo(830, 200);
    tablero.lineTo(830, 250);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 6) {
    // dibuja la cabeza
    tablero.beginPath();
    tablero.arc(830, 270, 20, 0, Math.PI * 2, false);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 5) {
    tablero.moveTo(830, 290);
    tablero.lineTo(830, 330);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 4) {
    tablero.moveTo(830, 290);
    tablero.lineTo(810, 320);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 3) {
    tablero.moveTo(830, 290);
    tablero.lineTo(850, 320);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 2) {
    // dibuja pierna izquierda
    tablero.moveTo(830, 330);
    tablero.lineTo(810, 370);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 1) {
    // dibuja pierna derecha
    tablero.moveTo(830, 330);
    tablero.lineTo(850, 370);
    tablero.strokeStyle = "#0A3871"
    tablero.stroke();
  } else if (errores == 0) {
    sinIntentos();
  }
};

export const escribirLetraCorrecta = (index) => {
  tablero.font = "bold 60px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#000000";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 505 + anchura * index, 620);
  tablero.stroke();
};

export function escribirLetraIncorrecta(letra, errorsLeft) {
  tablero.font = "bold 25px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#000000";

  tablero.fillText(letra, 535 + 40 * (10 - errorsLeft), 690, 20);
}
