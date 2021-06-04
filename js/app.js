import { alarma } from "./DOM/alarma.js";
import { atajosTeclado, capturarTecla } from "./DOM/keyboard_events.js";
import { showHamburgerMenu } from "./DOM/menu-hamburger.js";
import { relogDigital } from "./DOM/relog_digital.js";
import { countdown } from "./DOM/countdown.js";
import { arrowUp } from "./DOM/scroll.js";
import { changeMode } from "./DOM/dark_mode.js";

const d = document;

const initApp = () => {
	showHamburgerMenu("#btn-hamburger", "#hamburger-menu", ".lista-secciones a");
	relogDigital("#showClock", "#hideClock", "#clock");
	alarma("#btnOnAlarm", "#btnOffAlarm", "#alarma", "#audio");
	capturarTecla("#circle", "#rectangle");
	atajosTeclado();
	countdown("#countdown", "January 1, 2022 0:0:0", "Feliz año nuevo!!");
	arrowUp("#btn-arrow");
	changeMode("btn-change-mode");
};

d.addEventListener("DOMContentLoaded", initApp);
