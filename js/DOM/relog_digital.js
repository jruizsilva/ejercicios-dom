const d = document;

export const relogDigital = (btnShowRelog, btnHideRelog, selectorRelog) => {
	const btnShow = d.querySelector(btnShowRelog);
	const relog = d.querySelector(selectorRelog);
	d.addEventListener("click", (e) => {
		setInterval(() => {
			const date = new Date();
			relog.querySelector("#hora").textContent = date.getHours();
			relog.querySelector("#minutos").textContent = date.getMinutes();
			relog.querySelector("#segundos").textContent = date.getSeconds();
		}, 1000);
		if (e.target.matches(btnShowRelog)) {
			btnShow.disabled = true;
			btnShow.classList.add("opacity-50", "cursor-not-allowed");
			// Mostramos relog
			relog.classList.remove("hidden");
		}
		if (e.target.matches(btnHideRelog)) {
			btnShow.disabled = false;
			btnShow.classList.remove("opacity-50", "cursor-not-allowed");
			// Ocultamos el relog
			relog.classList.add("hidden");
		}
	});
};
