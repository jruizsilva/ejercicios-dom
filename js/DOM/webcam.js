const d = document;
const n = navigator;
const w = window;
const md = n.mediaDevices;

export const mostrarWebCam = () => {
	const video = d.querySelector("#webcam");
	const limitaciones = {
		video: { facingMode: { exact: "environment" } },
		audio: true,
	};
	const request = md.getUserMedia(limitaciones);
	request.then((camaraURL) => {
		video.src = w.URL.createObjectURL(camaraURL);
		video.onloadedmetadata = () => {
			alert("cargo la meta data del video");
		};
	});
	request.catch((error) => {
		console.log(error);
	});
};
