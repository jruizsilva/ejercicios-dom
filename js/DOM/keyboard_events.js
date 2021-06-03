const d = document;

export const capturarTecla = (selectorCircle, selectorRectangle) => {
	const circle = d.querySelector(selectorCircle);
	const rectangle = d.querySelector(selectorRectangle);
	const currentCoordinates = {
		x: 0,
		y: 0,
	};
	let rectCircle = null;
	let rectRectangle = null;

	const moveLeft = (e) => {
		if (rectRectangle.left < rectCircle.left) {
			e.preventDefault();
			currentCoordinates.x -= 10;
		}
	};
	const moveRight = (e) => {
		if (rectRectangle.right > rectCircle.right) {
			e.preventDefault();
			currentCoordinates.x += 10;
		}
	};
	const moveUp = (e) => {
		if (rectCircle.top > rectRectangle.top) {
			e.preventDefault();
			currentCoordinates.y -= 10;
		}
	};
	const moveDown = (e) => {
		if (rectCircle.bottom < rectRectangle.bottom) {
			e.preventDefault();
			currentCoordinates.y += 10;
		}
	};
	d.addEventListener("keydown", (e) => {
		rectCircle = circle.getBoundingClientRect();
		rectRectangle = rectangle.getBoundingClientRect();
		if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft") {
			moveLeft(e);
		}
		if (e.key === "d" || e.key === "D" || e.key === "ArrowRight") {
			moveRight(e);
		}
		if (e.key === "s" || e.key === "S" || e.key === "ArrowDown") {
			moveDown(e);
		}
		if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") {
			moveUp(e);
		}
		circle.setAttribute(
			"style",
			`transform: translate(${currentCoordinates.x}px, ${currentCoordinates.y}px)`
		);
	});
};

export const atajosTeclado = () => {
	d.addEventListener("keydown", (e) => {
		if (e.altKey && (e.key === "a" || e.key === "A")) {
			alert("Atajo presionado:  alt + a");
		}
		if (e.altKey && (e.key === "p" || e.key === "P")) {
			prompt("Atajo presionado:  alt + p");
		}
		if (e.altKey && (e.key === "c" || e.key === "C")) {
			confirm("Atajo presionado:  alt + c");
		}
	});
};
