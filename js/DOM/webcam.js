const d = document;
const n = navigator;
const w = window;
const md = n.mediaDevices;

export const mostrarWebCam = () => {
	const video = d.querySelector("#webcam");
	const limitaciones = {
		video: true,
		audio: true,
	};
	const request = md.getUserMedia(limitaciones);
	request.then((camaraURL) => {
		console.log(camaraURL);
		alert(JSON.stringify(camaraURL));
	});
	request.catch((error) => {
		console.log(error);
	});
};
