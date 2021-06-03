import { alarma } from "./DOM/alarma.js";
import { atajosTeclado, capturarTecla } from "./DOM/keyboard_events.js";
import { showHamburgerMenu } from "./DOM/menu-hamburger.js";
import { relogDigital } from "./DOM/relog_digital.js";
import { countdown } from "./DOM/countdown.js";
import { arrowUp } from "./DOM/scroll.js";
import { changeMode } from "./DOM/dark_mode.js";

const d = document;

const initApp = () => {
	showHamburgerMenu(
		"#hamburger-menu__btn",
		"#hamburger-menu",
		".lista-secciones a"
	);
	relogDigital("#showHour", "#hideHour", "#relog");
	alarma("#btnOnAlarm", "#btnOffAlarm", "#alarma", "#audio");
	capturarTecla("#circle", "#rectangle");
	atajosTeclado();
	countdown("#countdown", "January 1, 2022 0:0:0", "Feliz cumpleaños!!");
	arrowUp("#arrow-up");
	changeMode("btn-change-mode");
};

d.addEventListener("DOMContentLoaded", initApp);
