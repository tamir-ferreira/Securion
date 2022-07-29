function isChecked() {
	const checkbox = document.getElementById("anonymous");
	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const cellphone = document.getElementById("cellphone");
	if (checkbox.checked) {
		// Add disabled attribute
		name.setAttribute("disabled", "");
		if (email && cellphone) {
			email.setAttribute("disabled", "");
			cellphone.setAttribute("disabled", "");
		}
		// clear input fields
		name.value = "";
		if (email && cellphone) {
			email.value = "";
			cellphone.value = "";
		}
	} else {
		name.removeAttribute("disabled");
		if (email && cellphone) {
			email.removeAttribute("disabled");
			cellphone.removeAttribute("disabled");
		}
	}
}
