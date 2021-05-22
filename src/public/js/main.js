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
	for(let i = 0; i < 20; i++){
		var r = PasarDecimalAHexa(Math.round(Math.random()*255));
		var g = PasarDecimalAHexa(Math.round(Math.random()*255));
		var b = PasarDecimalAHexa(Math.round(Math.random()*255));
		var hexa = `#${r}${g}${b}`;
		console.log(hexa)
		div.innerHTML += `<div class="color" style="background:${hexa}" onclick="cambiarColor('${hexa}')"></div>`
	}
}

function cambiarColor(hexa){
	color =hexa;
}

function PasarDecimalAHexa(num){
	var decimal = num;
	var hexa = 0;

	for(let i = 0; i < 16; i++){
		if (  (i*16**1) > decimal) {
			hexa = pasarNumeroALetra(i-1);
			decimal = decimal - ((i-1)*16**1);
			break;			
		}
		if (i == 15) {
			hexa = pasarNumeroALetra(15);
			decimal = decimal - (15*16**1);
		}

	}
	for(let i = 0; i < 16; i++){
		if (  (i) > decimal) {
			if (i != 15) {				
				hexa += pasarNumeroALetra(i-1);
				break;
			}
		}	
		if ( i == 15) {
			if (i >= decimal) {
				hexa += pasarNumeroALetra(i-1);
			} else {
				hexa += pasarNumeroALetra(15);
			}
		}
	}
	return hexa;
}

function pasarNumeroALetra(num){
	var letras = ["A","B","C","D","E","F"];
	if (num >= 10) {
		num = num - 10;
		return letras[num];
	} else {
		return num;
	}
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

function cargarImagen(){
	var input = document.getElementById("cargar");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("img");
        img.src = event.target.result;
		console.log(typeof img)
		console.log(img)
        ctx.drawImage(img, 10, 10, 510, 510);
    }
}