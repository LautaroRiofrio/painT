let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let rect = canvas.getBoundingClientRect();

canvas.width = 600;
canvas.height = 600;

ctx.fillStyle = "#fff";
ctx.fillRect(0,0,600,600);

let x = 0;
let y = 0;
let color = "#000"
let dibujando = false;
generarColores()

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
})

canvas.addEventListener("mouseup",function(e){
	if (dibujando == true) {
		dibujar(x,y,e.clientX - rect.left , e.clientY - rect.top)
		x = 0;
		y = 0;
		dibujando = false;
	}
})

function dibujar(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 2;
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	ctx.closePath();
}

function generarColores(){
	var div = document.querySelector(".colores");
	div.innerHTML = ''
	for(let i = 0; i < 20; i++){
		const randomR = PasarDecimalAHexa(Math.round(Math.random()*255))
		const randomG = PasarDecimalAHexa(Math.round(Math.random()*255))
		const randomB = PasarDecimalAHexa(Math.round(Math.random()*255))
		var r = String(randomR).length - 1 ? randomR : `0${randomR}`;
		var g = String(randomG).length - 1 ? randomG : `0${randomG}`;
		var b = String(randomB).length - 1 ? randomB : `0${randomB}`;
		const hexa = `#${r}${g}${b}`
		div.innerHTML += `<div class="color" style="background:${hexa}" onclick="cambiarColor('${hexa}')"></div>`
	}
}

function cambiarColor(hexa){
	color =hexa;
}

const pickEraser = () => {
	color = "#FFF"
}

const pickPencil = () => {
	color = "#000"
}

function PasarDecimalAHexa(number){
	if (number < 0) {
		number = 0xFFFFFFFF + number + 1;
	}
	return number.toString(16).toUpperCase();
}

function download(){
	var c = canvas;
	let filename = prompt("Guardar como",""),
	link = document.createElement('a');
	if (filename.length == 0) {
		link.download = "Sin título";
		link.href = c.toDataURL("image/png");
	} else {
		link.download = filename;
		link.href = c.toDataURL("image/png");
	}
	link.click();
}

const cleanWhiteboard = () => {
	canvas.width = 600;
	canvas.height = 600;
	ctx.fillStyle = "#fff";
	ctx.fillRect(0,0,600,600);
}

function cargarImagen(){
	var input = document.getElementById("cargar");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("img");
        img.src = event.target.result;
        ctx.drawImage(img, 10, 10, 510, 510);
    }
}