import { mostrarAlerta } from "../UI/alerta.js";

const d = document;

export const testResponsivePage = (selector, url, width, height) => {
	const formulario = d.getElementById(selector);
	const enlace = d.getElementById(url);
	const ancho = d.getElementById(width);
	const alto = d.getElementById(height);

	let ventana = null;

	const abrirPagina = () => {
		ventana = window.open(
			enlace.value,
			"Page Responsive Tester",
			`"toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=300,width=800,height=500"`
		);
	};
	const cerrarPagina = () => {
		ventana.close();
	};

	formulario.addEventListener("click", (e) => {
		e.preventDefault();
		if (e.target.type === "submit") {
			abrirPagina();
		}
		if (e.target.type === "button") {
			cerrarPagina();
		}
	});
};

export const testerResponsive = (selectorForm) => {
	const formulario = d.querySelector(selectorForm);
	let ventana;

	const validarCampos = () => {
		const { direccion, ancho, alto } = formulario;
		if (direccion.value === "" || ancho.value === "" || alto.value === "") {
			mostrarAlerta(selectorForm, "Todos los campos son obligatorios", "error");
			return;
		}
		abrirVentana();
		mostrarAlerta("#formulario", "Abriendo ventana...", "correcto");
		formulario.reset();
	};

	const abrirVentana = () => {
		const { direccion, ancho, alto } = formulario;
		ventana = window.open(
			direccion.value,
			"Tester Responsive",
			`innerWidth=${ancho.value},innerHeight=${alto.value}`
		);
	};
	const cerrarVentana = () => {
		if (ventana) {
			ventana.close();
		}
	};

	formulario.addEventListener("click", (e) => {
		e.preventDefault();
		if (e.target.type === "submit") {
			validarCampos();
		}
		if (e.target.type === "button") {
			cerrarVentana();
		}
	});
};
