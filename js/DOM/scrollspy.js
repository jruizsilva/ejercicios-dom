const d = document;

export const observarScroll = () => {
	const $viewport = d.querySelectorAll(`section[data-scroll-spy]`);
	const options = { threshold: 0.5 };
	const callback = (entries) => {
		entries.forEach((el) => {
			if (el.isIntersecting) {
				const idCurrentTarget = el.target.id;
				const linkTarget = d.querySelector(`a[href="#${idCurrentTarget}"]`);
				linkTarget.classList.add("lista-seccion__link--active");
			} else {
				const idCurrentTarget = el.target.id;
				const linkTarget = d.querySelector(`a[href="#${idCurrentTarget}"]`);
				linkTarget.classList.remove("lista-seccion__link--active");
			}
		});
	};
	const observer = new IntersectionObserver(callback, options);
	$viewport.forEach((el) => {
		observer.observe(el);
	});
};
