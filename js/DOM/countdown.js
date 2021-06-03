const d = document;

export const countdown = (selectorStr, dateStr, messageStr) => {
	const $countdown = d.querySelector(selectorStr);
	const date = new Date(dateStr);

	const idInterval = setInterval(() => {
		const now = new Date();
		let dif = date.getTime() - now.getTime();

		const left = {
			days: Math.floor(dif / (1000 * 60 * 60 * 24)),
			hours: (
				"0" + Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			).slice(-2),
			minutes: ("0" + Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60))).slice(
				-2
			),
			seconds: ("0" + Math.floor((dif % (1000 * 60)) / 1000)).slice(-2),
		};

		$countdown.querySelector("#days").textContent = left.days;
		$countdown.querySelector("#hours").textContent = left.hours;
		$countdown.querySelector("#minutes").textContent = left.minutes;
		$countdown.querySelector("#seconds").textContent = left.seconds;

		if (dif < 0) {
			$countdown.innerHTML = `<h3 style="font-size: 24px; font-weight: bold;">${messageStr}</h3>`;
			clearInterval(idInterval);
		}
	}, 1000);
};
