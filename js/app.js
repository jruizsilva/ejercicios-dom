import { alarma } from "./DOM/alarma.js";
import { atajosTeclado, capturarTecla } from "./DOM/keyboard_events.js";
import { showHamburgerMenu } from "./DOM/menu-hamburger.js";
import { relogDigital } from "./DOM/relog_digital.js";
import { countdown } from "./DOM/countdown.js";
import { arrowUp } from "./DOM/scroll.js";
import { changeMode } from "./DOM/dark_mode.js";
import { mediaResponsive } from "./DOM/responsive.js";
import { testerResponsive } from "./DOM/page-tester.js";
import { statusConexion } from "./DOM/comprobarConexion.js";
import { mostrarWebCam } from "./DOM/webcam.js";

const d = document;

const initApp = () => {
	showHamburgerMenu("#btn-hamburger", "#hamburger-menu", ".lista-secciones a");
	relogDigital("#showClock", "#hideClock", "#clock");
	alarma("#btnOnAlarm", "#btnOffAlarm", "#alarma", "#audio");
	capturarTecla("#circle", "#rectangle");
	atajosTeclado();
	countdown("#countdown", "January 1, 2022 0:0:0", "Feliz año nuevo!!");
	arrowUp("#btn-arrow");
	mediaResponsive(
		"video-hello-world",
		"(min-width: 768px)",
		`<a href="https://youtu.be/brSnSPJqrfY" target="__blank" rel="noopener noreferrer">Ver video</a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/0RNxdrcsHgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	);
	mediaResponsive(
		"mapa-argentina",
		"(min-width: 768px)",
		`<a href="https://goo.gl/maps/yo9zCVd3XdWxX9v86" target="__blank rel="noopener noreferrer">Ver mapa</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26097506.631993342!2d-81.6605056674067!3d-37.01621831000189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses-419!2sar!4v1622816605172!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
	);
	testerResponsive("formulario");
	statusConexion();
	mostrarWebCam();
};
changeMode("btn-change-mode", "[data-light]");
d.addEventListener("DOMContentLoaded", initApp);
