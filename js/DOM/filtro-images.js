const d = document;

export const filtrarImagenes = (filtro, contenedorImagenes, imagenes) => {
	const $filtro = d.getElementById(filtro);
	const $contenedorImagenes = d.querySelector(contenedorImagenes);
	const $imagenes = d.querySelectorAll(imagenes);
	let arrImagenes = Array.from($imagenes);

	const limpiarHTML = () => {
		while ($contenedorImagenes.firstChild) {
			$contenedorImagenes.removeChild($contenedorImagenes.firstChild);
		}
	};
	const filtrar = (e) => {
		limpiarHTML();
		const filtro = e.target.value;
		const regex = new RegExp(filtro, "i");
		const fragment = d.createDocumentFragment();
		let resultFiltro = arrImagenes.filter((el) => {
			const categoria = el.querySelector(".lista-imagenes__div").textContent;
			if (regex.test(categoria)) {
				return el;
			}
		});
		resultFiltro.forEach((el) => {
			fragment.appendChild(el);
		});
		$contenedorImagenes.appendChild(fragment);
	};

	$filtro.addEventListener("keyup", filtrar);
};
