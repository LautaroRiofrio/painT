function crearLocalStorage(){
	localStorage.setItem("myColors", JSON.stringify([]))
}

function bajarLocalStorage(){
	if (localStorage.getItem("myColors")) {
		myColors = JSON.parse(localStorage.getItem("myColors"));
	} else {
		crearLocalStorage();
	}
}

function subirLocalStorage(){
	localStorage.setItem("myColors", JSON.stringify(myColors));
}