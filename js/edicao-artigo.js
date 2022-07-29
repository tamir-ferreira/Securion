const corpoArt = document.querySelector("#corpoArt");
const tituloArt = document.querySelector("#tituloArt");

//Preenche as caixas de texto editáveis
function fillContent(element, sentence) {
	if (element.innerHTML.length == 0) {
		element.innerHTML = `${sentence}`;
	}
}

//Apaga o texto padrão se o usuário não digitar nada
function toggleContent(element, sentence) {
	element.addEventListener("focus", () => {
		if (element.innerHTML == sentence) {
			element.innerHTML = "";
		}
	});

	element.addEventListener("blur", () => fillContent(element, sentence));
}

fillContent(tituloArt, "Título");
fillContent(corpoArt, "Digite seu texto...");

toggleContent(tituloArt, "Título");
toggleContent(corpoArt, "Digite seu texto...");
