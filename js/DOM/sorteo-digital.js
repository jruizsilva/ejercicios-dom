import { mostrarAlerta } from "../UI/alerta.js";

const d = document;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export const sorteo = (btn, participantes) => {
	const $btnSorteo = d.querySelector(btn);
	const $participantes = d.querySelectorAll(participantes);
	const cantidadParticipantes = $participantes.length;
	const obtenerGanador = () => {
		const random = getRandomInt(0, cantidadParticipantes);
		const ganador = $participantes[random].textContent;
		const parentID = `#` + $btnSorteo.parentElement.parentElement.id;
		mostrarAlerta(parentID, `El ganador es: ${ganador}`, "correcto");
	};
	$btnSorteo.addEventListener("click", obtenerGanador);
};
