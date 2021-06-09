import { mostrarAlerta } from "../UI/alerta.js";

const d = document;

const validacion = (campo, input) => {
	const patronStr = input.pattern || input.dataset.pattern;

	if (patronStr) {
		const patron = new RegExp(patronStr);
		if (!patron.test(input.value)) {
			showError(true, campo, input);
		} else {
			showError(false, campo, input);
		}
	}

	if (!patronStr) {
		if (input.value === "") {
			showError(true, campo, input);
		} else {
			showError(false, campo, input);
		}
	}
};
const showError = (invalid, campo, input) => {
	if (invalid) {
		campo.querySelector(".container-form__error").classList.remove("hidden");
		input.classList.add("invalid");
		input.classList.remove("valid");
	} else {
		campo.querySelector(".container-form__error").classList.add("hidden");
		input.classList.remove("invalid");
		input.classList.add("valid");
	}
};
const resetFormulario = ($formulario, $campos) => {
	$formulario.reset();
	$campos.forEach((campo) => {
		campo.querySelector("[required]").classList.remove("valid");
	});
};

export const validarFormulario = () => {
	const $formulario = d.querySelector(".container-form__form");
	const $campos = d.querySelectorAll(".container-form__campo");

	let idTimeout = null;

	$campos.forEach((campo) => {
		const inputCampo = campo.querySelector("[required]");
		inputCampo.addEventListener("keydown", () => {
			clearTimeout(idTimeout);
			idTimeout = setTimeout(() => {
				validacion(campo, inputCampo);
			}, 200);
		});
	});

	/*
	$formulario.addEventListener("submit", (e) => {
		e.preventDefault();
		$formulario.querySelector(".loading").classList.remove("none");
		setTimeout(() => {
			$formulario.querySelector(".loading").classList.add("none");
			mostrarAlerta(
				".container-form__form",
				"Email enviado correctamente",
				"correcto"
			);
			setTimeout(() => {
				resetFormulario($formulario, $campos);
			}, 1500);
		}, 1500);
	});*/
};
