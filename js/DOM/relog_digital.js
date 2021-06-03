const d = document;

export const relogDigital = (btnShowRelog, btnHideRelog, selectorRelog) => {
	const btnShow = d.querySelector(btnShowRelog);
	const relog = d.querySelector(selectorRelog);
	let idCurrentTime = null;
	d.addEventListener("click", (e) => {
		if (e.target.matches(btnShowRelog)) {
			idCurrentTime = setInterval(() => {
				const currentTime = new Date().toLocaleTimeString();
				relog.textContent = currentTime;
			}, 1000);
			btnShow.disabled = true;
			btnShow.classList.add("opacity-50", "cursor-not-allowed");
			// Mostramos relog
			relog.classList.remove("hidden");
		}
		if (e.target.matches(btnHideRelog)) {
			clearInterval(idCurrentTime);
			relog.textContent = "";
			btnShow.disabled = false;
			btnShow.classList.remove("opacity-50", "cursor-not-allowed");
			// Ocultamos el relog
			relog.classList.add("hidden");
		}
	});
};
