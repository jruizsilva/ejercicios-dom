const d = document;

export const observerVideo = () => {
	const $video = d.querySelector(`video[data-video-spy]`);
	console.log($video);

	const cb = (entries) => {
		entries.forEach((el) => {
			if (el.isIntersecting) {
				el.target.play();
			} else {
				el.target.pause();
			}
			d.addEventListener("visibilitychange", (e) => {
				if (d.visibilityState === "visible") {
					$video.play();
				} else {
					$video.pause();
				}
			});
		});
	};

	const options = { threshold: 0.5 };
	const observer = new IntersectionObserver(cb, options);
	observer.observe($video);
};
