const d = document;

let lightMode;

const setData = (data) => {
	localStorage.setItem("light-mode", JSON.stringify(data));
};
const getData = () => {
	lightMode = JSON.parse(localStorage.getItem("light-mode")) || false;
};

export function changeMode(selector, dataAttribute) {
	const btnChangeMode = d.getElementById(selector);
	const selectores = d.querySelectorAll(dataAttribute);
	getData();
	function light() {
		selectores.forEach((el) => el.classList.add("light-mode"));
		btnChangeMode.textContent = "dark_mode";
		setData(true);
	}
	function dark() {
		selectores.forEach((el) => el.classList.remove("light-mode"));
		btnChangeMode.textContent = "light_mode";
		setData(false);
	}

	btnChangeMode.addEventListener("click", () => {
		if (lightMode === true) {
			dark();
		} else {
			light();
		}
		getData();
	});

	d.addEventListener("DOMContentLoaded", () => {
		getData();
		if (lightMode === true) {
			light();
		}
	});
}
