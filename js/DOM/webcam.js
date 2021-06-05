import { mostrarAlerta } from "../UI/alerta.js";

const d = document;
const n = navigator;
const w = window;
const md = n.mediaDevices;

export const mostrarWebCam = (selector, selectorContenedor) => {
	const $video = d.querySelector(selector);
	const limitaciones = { video: true };
	const request = md.getUserMedia(limitaciones);
	request.then((camaraURL) => {
		$video.srcObject = camaraURL;
		$video.play();
		mostrarAlerta(
			selectorContenedor,
			`success: webcam online! 😃`,
			"correcto",
			true,
			false
		);
	});
	request.catch((err) => {
		mostrarAlerta(selectorContenedor, `${err} 😭`, "error", true, false);
	});
};
