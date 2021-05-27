const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

app.set("port",3000);
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname,"views/index.html"));
})


app.listen(app.get("port"),function(){
	console.log("server on port",app.get("port"));
})


function hola(){
	console.log(hola)
}



// hola 