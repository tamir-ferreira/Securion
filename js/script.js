const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.getElementsByClassName("navbar-links");
toggleButton.addEventListener("click", function () {
	for (let index = 0; index < navbarLinks.length; index++) {
		navbarLinks[index].classList.toggle("active");
	}
});

date.max = new Date().toISOString().split("T")[0];
