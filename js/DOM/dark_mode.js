const d = document;

export const changeMode = (selector) => {
	const btnChangeMode = d.getElementById(selector);
	const span = d.querySelectorAll(".span");
	const body = d.querySelector(".body");
	const header = d.querySelector(".header");
	const main = d.querySelector(".main");

	btnChangeMode.addEventListener("click", (e) => {
		if (btnChangeMode.classList.contains("change-mode")) {
			body.classList.remove("change-mode");
			header.classList.remove("change-mode");
			main.classList.remove("change-mode");
			span.forEach((el) => el.classList.remove("change-mode"));
			btnChangeMode.textContent = "light_mode";
		} else {
			body.classList.add("change-mode");
			header.classList.add("change-mode");
			main.classList.add("change-mode");
			span.forEach((el) => el.classList.add("change-mode"));
			btnChangeMode.textContent = "dark_mode";
		}
	});
};
