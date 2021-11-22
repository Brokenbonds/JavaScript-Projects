// draw a circle
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250,125,80,0,2*Math.PI);
ctx.stroke();

//gradient
var grd = ctx.createLinearGradient(0,0,200,0)
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,230);

