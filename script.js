let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("nav-list");
let menuBg = document.getElementById("nav-list-mobile-bg");

escClose = (e) => {
	if (e.key == "Escape") {
		close(menuIcon, menu, menuBg);
		console.log(e);
	}
};

let close = (menuIcon, menu, menuBg) => {
	menuIcon.src = "./images/icon-menu.svg";
	menuIcon.classList.remove("opened");
	menu.style.display = "none";
	menuBg.style.display = "none";
	window.removeEventListener("keyup", escClose);
};

let open = (menuIcon, menu, menuBg) => {
	menuIcon.src = "./images/icon-menu-close.svg";
	menuIcon.classList.add("opened");
	menu.style.display = "flex";
	menuBg.style.display = "block";
	window.addEventListener("keyup", escClose);
};

menuIcon.addEventListener("click", () => {
	if (menuIcon.classList.contains("opened")) {
		close(menuIcon, menu, menuBg);
		// menuIcon.classList.add("closed");
	} else {
		open(menuIcon, menu, menuBg);
	}
	// console.log(menuIcon.src);
});
