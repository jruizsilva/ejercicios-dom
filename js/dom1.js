const $hamburgerBtn = document.querySelector("#hamburger-menu__btn");

const showHamburgerMenu = () => {
	const $menuHamburger = document.querySelector("#hamburger-menu");
	$menuHamburger.classList.toggle("show-hamburger-menu");
	if ($hamburgerBtn.textContent === "menu") {
		$hamburgerBtn.textContent = "close";
		return;
	}
	if ($hamburgerBtn.textContent === "close") {
		$hamburgerBtn.textContent = "menu";
		return;
	}
};

const initApp = () => {};
const loadEventListeners = () => {
	document.addEventListener("DOMContentLoaded", initApp);
	$hamburgerBtn.addEventListener("click", showHamburgerMenu);
};
loadEventListeners();
