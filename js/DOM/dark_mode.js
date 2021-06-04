const d = document;

export const changeMode = (selector) => {
	const btnChangeMode = d.getElementById(selector);
	const selectores = d.querySelectorAll("[data-light]");

	btnChangeMode.addEventListener("click", (e) => {
		if (btnChangeMode.classList.contains("change-mode")) {
			selectores.forEach((el) => el.classList.remove("change-mode"));
			btnChangeMode.textContent = "light_mode";
		} else {
			selectores.forEach((el) => el.classList.add("change-mode"));
			btnChangeMode.textContent = "dark_mode";
		}
	});
};
