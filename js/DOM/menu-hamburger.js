const d = document;

export function showHamburgerMenu(selectorBtn, selectorMenu, selectorMenuLink) {
	const menu = d.querySelector(selectorMenu);
	const btn = d.querySelector(selectorBtn);
	d.addEventListener("click", (e) => {
		if (e.target.matches(selectorBtn)) {
			menu.classList.toggle("show-hamburger-menu");
			if (btn.textContent === "menu") {
				btn.textContent = "close";
			} else if (btn.textContent === "close") {
				btn.textContent = "menu";
			}
		}
		if (e.target.matches(selectorMenuLink)) {
			menu.classList.remove("show-hamburger-menu");
			btn.textContent = "menu";
		}
	});
}
