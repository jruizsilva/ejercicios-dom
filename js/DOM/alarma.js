const d = document;

export const alarma = (
	selectorOn,
	selectorOff,
	selectorBell,
	selectorAudio
) => {
	const btnOn = document.querySelector(selectorOn);
	const bell = document.querySelector(selectorBell);
	const audio = document.querySelector(selectorAudio);
	d.addEventListener("click", (e) => {
		if (e.target.matches(selectorOn)) {
			btnOn.disabled = true;
			btnOn.classList.add("opacity-50", "cursor-not-allowed");
			bell.textContent = "notifications_active";
			bell.classList.add("playing");
			audio.play();
		}
		if (e.target.matches(selectorOff)) {
			btnOn.disabled = false;
			btnOn.classList.remove("opacity-50", "cursor-not-allowed");
			bell.textContent = "notifications";
			bell.classList.remove("playing");
			audio.pause();
		}
	});
};
