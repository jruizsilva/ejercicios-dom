const d = document;

export const slider = (anterior, siguiente, imagenes) => {
	const $anterior = d.getElementById(anterior);
	const $siguiente = d.getElementById(siguiente);
	const $imagenes = d.querySelectorAll(imagenes);

	const cantidadImagenes = $imagenes.length;
	let currentImg = 0;

	const siguienteImagen = () => {
		if (currentImg < cantidadImagenes - 1) {
			$imagenes[currentImg].classList.remove("z-index-100");
			currentImg++;
			$imagenes[currentImg].classList.add("z-index-100");
		} else {
			$imagenes[currentImg].classList.remove("z-index-100");
			currentImg = 0;
			$imagenes[currentImg].classList.add("z-index-100");
		}
	};
	const anteriorImagen = () => {
		if (currentImg > 0) {
			$imagenes[currentImg].classList.remove("z-index-100");
			currentImg--;
			$imagenes[currentImg].classList.add("z-index-100");
		} else {
			$imagenes[currentImg].classList.remove("z-index-100");
			currentImg = cantidadImagenes - 1;
			$imagenes[currentImg].classList.add("z-index-100");
		}
	};

	$siguiente.addEventListener("click", siguienteImagen);
	$anterior.addEventListener("click", anteriorImagen);
};
