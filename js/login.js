function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "aluno" && password == "123aluno") {
		alert("Aluno logado com sucesso!");
		window.location.href = "./feed.html";
	} else {
		if (username == "diretor" && password == "123diretor") {
			alert("Direção logada com sucesso!");
			window.location = "./feed-adm.html";
			return false;
		} else {
			alert("Usuário e/ou senha inválidos.");
		}
	}
}
