var X = "Adam"; // these are un-typed string variables
var Y = "Tonya";
var Space = " ";


// this here is a function for out puting text
function text(){
    var dating= X+" and ";
    dating += Y+Space; // this is concatenating 2 strings togther
    var Annoying= dating +"sitting in a tree! K.I.S.S.I.N.G"
    document.getElementById("annoyingKidsSong").innerHTML = Annoying;
}