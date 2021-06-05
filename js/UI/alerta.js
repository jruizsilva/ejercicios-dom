const d = document;
export const mostrarAlerta = (contenedor, msj, tipo, fixed = false) => {
	const $contenedor = d.querySelector(contenedor);
	const $template = d.querySelector("#template-alerta").content;
	$template.querySelector(".alerta").textContent = msj;
	if (tipo === "error") {
		$template.querySelector(".alerta").classList.remove("correcto");
		$template.querySelector(".alerta").classList.add("error");
	}
	if (tipo === "correcto") {
		$template.querySelector(".alerta").classList.remove("error");
		$template.querySelector(".alerta").classList.add("correcto");
	}
	if (fixed) {
		$template.querySelector(".alerta").classList.add("fixed");
	}
	const $clone = $template.cloneNode(true);
	if (!$contenedor.querySelector(".alerta")) {
		$contenedor.appendChild($clone);
		setTimeout(() => {
			$contenedor.querySelector(".alerta").remove();
		}, 2500);
	}
};
