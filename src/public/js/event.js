canvas.addEventListener("mouseout",function(e){
	dibujando = false;
})
canvas.addEventListener("mousedown",function(e){
	x = e.clientX - rect.left;
	y = e.clientY - rect.top;
	dibujando = true;
});




canvas.addEventListener("mousemove",function(e){
	if (dibujando == true) {

		dibujar(x,y,e.clientX - rect.left , e.clientY - rect.top)
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		
	}


	// setInterval(function(){

	// 	dibujar(x,y,e.clientX - rect.left , e.clientY - rect.top)
	// 	x = e.clientX - rect.left;
	// 	y = e.clientY - rect.top;
		
	// 	},1);
	// }
})

canvas.addEventListener("mouseup",function(e){
	if (dibujando == true) {
		dibujar(x,y,e.clientX - rect.left , e.clientY - rect.top)
		x = 0;
		y = 0;
		dibujando = false;
	}
})




//   ABRIR Y CERRAR LOS MENUES 

open_tool_menu.addEventListener("click",function(){
	if (toolStatus == 0) {
		CloseAllMenu()
		OpenMenu_(tool_menu);
		toolStatus++;
	} else {
		CloseAllMenu();
	}
});



open_color_menu.addEventListener("click",function(){
	if (colorStatus == 0) {
		CloseAllMenu()
		OpenMenu_(color_menu);
		colorStatus++;
	} else {
		CloseAllMenu();
	}
});

function inicializar(){

eraser_stroke.value = 1;
pencil_stroke.value = 1;


// pencil_width = pencil_stroke.value;
// eraser_width = eraser_stroke.value;
}

// STROKE
// var pencil_width = pencil_stroke.value;
// var eraser_width = eraser_stroke.value;
pencil_stroke.addEventListener("input",function(){
	if (tool_selected == 0) {
		grosor = pencil_stroke.value;
		if (pencil_stroke.value == 0) {
			pencil_stroke.value = 1;
			grosor = pencil_stroke.value;
		}
	} 

	if (pencil_stroke.value == 0) {
		pencil_stroke.value = 1;
	}

	document.getElementById("pencil-stroke-value").innerHTML = pencil_stroke.value;
});
eraser_stroke.addEventListener("input",function(){
	if (tool_selected == 1) {
		grosor = eraser_stroke.value;
		if (eraser_stroke.value  == 0) {
			eraser_stroke.value = 1;
			grosor = eraser_stroke.value;
		}
	}

	if (eraser_stroke.value == 0) {
		eraser_stroke.value = 1;
	}
	document.getElementById("eraser-stroke-value").innerHTML = eraser_stroke.value;
});










randomColorButton.addEventListener("click",function(){
	generarColores();
});
newColorButton.addEventListener("click",function(){
	addColor()
	generateMyColors();
});

var myColors = [];

function addColor(){
	if (tool_selected == 0) {
		let x = 0;
		for(let i = 0; i < myColors.length; i++){
			if (myColors[i] == color) {
				x++;
				break;
			}
		}
		if (x == 0) {
			myColors.push(color);
		} 
	}
}



function generateMyColors(){
	my_color_section.innerHTML = "";
	for(let i = 0; i < myColors.length; i++){
		my_color_section.innerHTML += `<div class="bar-icon" style="background:${myColors[i]}" onclick="cambiarColor('${myColors[i]}')"></div>`
	}
}









var tool_selected = 0;
var pencil_color = "#000";
const eraser_color = "#fff";


const pickEraser = () => {
	color = eraser_color;
	tool_selected = 1;
	grosor = eraser_stroke.value;
}


const pickPencil = () => {
	tool_selected = 0;
	color = pencil_color;
	grosor = pencil_stroke.value;
}

const cleanWhiteboard = () => {
	canvas.width = 600;
	canvas.height = 600;
	ctx.fillStyle = "#fff";
	ctx.fillRect(0,0,600,600);
}
