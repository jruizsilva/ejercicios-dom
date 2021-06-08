const d = document;

const validacion = (campo, input) => {
	const patron = input.pattern;
	console.log(patron);
	if (input.value === "") {
	} else {
	}
};

export const validarFormulario = () => {
	const formulario = d.querySelector(".container-form__form");
	const campos = d.querySelectorAll(".container-form__campo");

	let idTimeout = null;

	campos.forEach((campo) => {
		const inputCampo = campo.querySelector("[required]");
		inputCampo.addEventListener("keyup", () => {
			clearTimeout(idTimeout);
			idTimeout = setTimeout(() => {
				validacion(campo, inputCampo);
			}, 300);
		});
	});
};
