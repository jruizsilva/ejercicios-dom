const d = document;
const w = window;

export const narrarTexto = () => {
	const $formulario = d.querySelector("form[data-form-voz]");
	const $voces = d.querySelector("select#voz");
	const $text = d.querySelector("textarea#texto");

	let vocesDisponibles = []

	const leerTexto = (e) => {
		e.preventDefault()
		const utterance = new SpeechSynthesisUtterance($text.value);
		utterance.voice = vocesDisponibles[$voces.value]
		alert(utterance.voice.name)
		speechSynthesis.speak(utterance);
	};

	$formulario.addEventListener("submit", leerTexto)

	const mostrarVoces = () => {
		vocesDisponibles = speechSynthesis.getVoices();
		if(vocesDisponibles.length > 0){
			vocesDisponibles = vocesDisponibles.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			})
			const $fragment = d.createDocumentFragment()
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
