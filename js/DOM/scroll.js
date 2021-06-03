const d = document;

export const arrowUp = (selector) => {
	const $arrow = d.querySelector(selector);

	d.addEventListener("scroll", (e) => {
		const scrollTop = d.scrollingElement.scrollTop;
		if (scrollTop > 600) {
			$arrow.classList.remove("hidden", "opacity-0");
			$arrow.classList.add("opacity-100");
		} else {
			$arrow.classList.remove("opacity-100");
			$arrow.classList.add("hidden", "opacity-0");
		}
	});
	d.addEventListener("click", (e) => {
		if (e.target.matches(selector)) {
			d.location.href = "#";
		}
	});
};
