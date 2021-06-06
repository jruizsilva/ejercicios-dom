import { mostrarAlerta } from "../UI/alerta.js";
const d = document;

export const mostrarPosicionActual = (latitud, longitud, link) => {
	const $latitud = d.querySelector(latitud);
	const $longitud = d.querySelector(longitud);
	const $link = d.querySelector(link);
	const success = (position) => {
		const { latitude, longitude } = position.coords;
		$latitud.textContent = latitude;
		$longitud.textContent = longitude;
		$link.href = `https://google.com/maps/@${latitude},${longitude},20z`;
		$link.setAttribute("target", "_blank");
		$link.setAttribute("rel", "noopener noreferrer");
	};
	const error = (err) => {
		mostrarAlerta(
			`#` + $link.parentElement.parentElement.id,
			err,
			"error",
			true
		);
	};
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};
	navigator.geolocation.getCurrentPosition(success, error, options);
};
