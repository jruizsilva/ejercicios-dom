import { alarma } from "./DOM/alarma.js";
import { showHamburgerMenu } from "./DOM/menu-hamburger.js";
import { relogDigital } from "./DOM/relog_digital.js";

const d = document;

const initApp = () => {
	showHamburgerMenu(
		"#hamburger-menu__btn",
		"#hamburger-menu",
		".lista-secciones a"
	);
	relogDigital("#showHour", "#hideHour", "#relog");
	alarma("#btnOnAlarm", "#btnOffAlarm", "#alarma", "#audio");
};

d.addEventListener("DOMContentLoaded", initApp);
