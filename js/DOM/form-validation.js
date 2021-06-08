const d = document;

export const validarFormulario = () => {
	let idTimeout = null;
	const error = {
		nombre: true,
		email: true,
		asunto: true,
		mensaje: true,
	};
	const regexName = new RegExp("[a-z ?]+", "i");
	const regexEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const camposForm = d.querySelectorAll(
		".container-form__campo[data-form-campo]"
	);
	const validarCampo = (campo, inputCampo) => {
		if (inputCampo.type === "email") {
			if (!regexEmail.test(inputCampo.value)) {
				campo
					.querySelector(".container-form__error")
					.classList.remove("hidden");
				inputCampo.classList.add("border-bottom-red");
				error[inputCampo.id] = true;
			} else {
				campo.querySelector(".container-form__error").classList.add("hidden");
				inputCampo.classList.remove("border-bottom-red");
				error[inputCampo.id] = false;
			}
		} else {
			if (!regexName.test(inputCampo.value) || inputCampo.value === "") {
				campo
					.querySelector(".container-form__error")
					.classList.remove("hidden");
				inputCampo.classList.add("border-bottom-red");
				error[inputCampo.id] = true;
			} else {
				campo.querySelector(".container-form__error").classList.add("hidden");
				inputCampo.classList.remove("border-bottom-red");
				error[inputCampo.id] = false;
			}
		}
		const btnSubmit = d.querySelector(".container-form__submit");
		if (!error.nombre && !error.email && !error.asunto && !error.mensaje) {
			btnSubmit.classList.remove("opacity-60", "cursor-not-allowed");
			btnSubmit.disabled = false;
		} else {
			btnSubmit.classList.add("opacity-60", "cursor-not-allowed");
			btnSubmit.disabled = true;
		}
	};
	camposForm.forEach((campo) => {
		campo.addEventListener("keydown", (e) => {
			clearTimeout(idTimeout);
			idTimeout = setTimeout(() => {
				const inputCampo = e.target;
				validarCampo(campo, inputCampo);
			}, 300);
		});
	});
};
