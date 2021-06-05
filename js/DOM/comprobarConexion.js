import { mostrarAlerta } from "../UI/alerta.js";

export const statusConexion = () => {
	let conexion;
	window.addEventListener("online", () => {
		conexion = window.navigator.onLine;
		if (conexion)
			mostrarAlerta("body", "Se reestablecio la conexion", "correcto", true);
	});
	window.addEventListener("offline", () => {
		conexion = window.navigator.onLine;
		if (!conexion)
			mostrarAlerta(".body", "Se perdio la conexion", "error", true);
	});
};
