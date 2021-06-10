const d = document;
const w = window;

export const narrarTexto = () => {
	const $formulario = d.querySelector("form[data-form-voz]");
	const $voces = d.querySelector("select#voz");
	const $text = d.querySelector("textarea#texto");

	let vocesDisponibles = []

	const leerTexto = (e) => {
		e.preventDefault()
		console.log($voces.value)
		console.log($voces.textContent)
		// SpeechSynthesisVoice.voiceURI = "hola"
		// Speech synthesis Utterance
		const utterance = new SpeechSynthesisUtterance($text.value);
		utterance.voice = vocesDisponibles[$voces.value]
		speechSynthesis.speak(utterance);
	};

	$formulario.addEventListener("submit", leerTexto)

	const mostrarVoces = () => {
		vocesDisponibles = speechSynthesis.getVoices();
		if(vocesDisponibles.length > 0){
			const $fragment = d.createDocumentFragment()
			console.log(vocesDisponibles[5])
			vocesDisponibles.forEach((voz,index) => {
				const $option = d.createElement("option")
				$option.textContent = voz.name
				$option.value = index
				$fragment.appendChild($option)
			})
			$voces.appendChild($fragment)
		}
	}

	mostrarVoces()
	if(speechSynthesis.onvoiceschanged !== undefined){
		speechSynthesis.onvoiceschanged = mostrarVoces
	}

};
