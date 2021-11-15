
// this is how to write functions that are not called through buttons
function getAdd(a1,b1){
  return a1 + b1;
}
document.getElementById("Mathplus").innerHTML = "2 + 5 = " + getAdd(2,5);

  function getMath(a2,b2){
    return a2-b2;
 }
 document.getElementById("Math").innerHTML ="2 - 5 = " +getMath(2,5);


function multiply(){
  return 6 * 8;
}
document.getElementById("multi").innerHTML = "6 * 8 = " + multiply();

function divide(){
  return 40 / 8;
}
document.getElementById("div").innerHTML = "40 / 8 = " + divide();

function Lots(){
  return ( 1 + 2 ) * 10 / 2 - 5;
}
document.getElementById("lots").innerHTML = "( 1 + 2 ) * 10 / 2 - 5 = " + Lots();

function Modulus_Operator(){
  return 5%2;
}
document.getElementById("remain").innerHTML = "5/2 has " + Modulus_Operator() + " remainder";

function negation_Operator(){
  var x = 10;
  x = -x;
  return x;
} //make something negative 
document.getElementById("neg").innerHTML = "10 made into a negative is " + negation_Operator();

function increment(){
  var y = 12;
  y++;
  return y;
}// adds by 1
document.getElementById("incremental").innerHTML = "going up 1 increment from 12 is " + increment();

function decrement(){
  var a=13;
  a--;
  return a;
}
document.getElementById("dec").innerHTML = "going down 1 increment from 13 is " + decrement();

function random(){
  var ran = Math.random() * 100;
  return ran;
}

document.getElementById("random").innerHTML ="here is a random number between 0-100 (" + random() +")";

function circumference(rad){
  return 2*Math.PI*rad;
}
document.getElementById("circumference").innerHTML = "the circumference of a 5\" circle is " + circumference(5) + "\"" ;
