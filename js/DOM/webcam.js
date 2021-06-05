const d = document;
const n = navigator;
const w = window;
const md = n.mediaDevices;

export const mostrarWebCam = () => {
	const video = d.querySelector("#webcam");
	const limitaciones = { video: true };
	const request = md.getUserMedia(limitaciones);
	request.then((camaraURL) => {
		video.srcObject = camaraURL;
		video.play();
	});
	request.catch((error) => {
		console.log(error);
	});
};
