const tool_menu = document.getElementById("tool-menu");
const color_menu = document.getElementById("color-menu");

const close_tool_menu = document.getElementById("close-tool-menu");
const open_tool_menu = document.getElementById("open-tool-menu");

const open_color_menu = document.getElementById("open-color-menu");
const close_color_menu = document.getElementById("close-color-menu");


const pencil_stroke = document.getElementById("pencil-stroke");
const eraser_stroke = document.getElementById("eraser-stroke");

const randomColorButton = document.getElementById("randomColorButton");
const newColorButton = document.getElementById("newColorButton");


const my_color_section = document.getElementById("my-color-section");

let toolStatus = 0;
let colorStatus = 0;
let fileStatus = 0;









function CloseAllMenu(){
	CloseMenu_(tool_menu);
	CloseMenu_(color_menu);

	toolStatus = 0;
	colorStatus = 0;
	fileStatus = 0;
}

function OpenMenu_(menu){
	menu.style.marginLeft  ="70px";
}

function CloseMenu_(menu){
	menu.style.marginLeft = "-400px";
}

