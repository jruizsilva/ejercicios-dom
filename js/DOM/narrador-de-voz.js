const d = document;

export const narrarTexto = () => {
	const $formulario = d.querySelector("form[data-form-voz]");
	const $voces = d.querySelector("select#voz");
	const $text = d.querySelector("textarea#texto");

	// Speech synthesis Utterance
	const utterance = new SpeechSynthesisUtterance(
		"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
	);

	speechSynthesis.speak(utterance);
};
