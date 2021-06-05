const d = document;

export const mediaResponsive = (selector, mediaQuery, mobile, desktop) => {
	const contenedorMedia = d.getElementById(selector);
	const matchMedia = window.matchMedia(mediaQuery);

	const aplicarResponsive = (e) => {
		if (matchMedia.matches === true) {
			contenedorMedia.innerHTML = desktop;
		} else {
			contenedorMedia.innerHTML = mobile;
		}
	};

	matchMedia.addEventListener("change", aplicarResponsive);
	aplicarResponsive(contenedorMedia);
};
