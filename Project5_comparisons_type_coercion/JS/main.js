
document.write("this should show 105 when concatenating a string 10 and the number 5<br>")
document.write("10"+5+"<br><br>");// the plus will concatenate the 2 variables together. This will not add them together.
document.write("this should show number as 5 with out quotations is a number <br>")
document.write(typeof 5+"<br><br>");// type of will search this to see if it's a number or a string

document.write("this should say string <br>")
document.write(typeof "this" + "<br><br>");// type of will search this to see if it's a number or a string

document.write("this should show true as 10 is greater than 2<br>")
document.write(10>2);// this will use a boolean logic operator to see if this is true or fasle

document.write("<br><br>")// put this here to break up content

document.write(" this is should show false as 10 is not less than 2<br>")
document.write(10<2); //this will use a boolean logic operator to see if this is true or false

document.write("<br><br>")// put this here to break up content

document.getElementById("Inf").innerHTML = "<br>"+ 2E310;

document.getElementById("negInf").innerHTML = "<br>"+ -3E309;

function my_function(){
    document.getElementById("nan").innerHTML = 0/0;
}
// this will use the NaN function to see if it's a number or not
function notaNan(){
    document.getElementById("thisisNan").innerHTML = isNaN("this shows true");
}
// this will use the NaN function and come up false
function isaNan(){
    document.getElementById("notNan").innerHTML = isNaN("5");
}

console.log(2+2);// this will show up only in the console when pressing F12 then looking at the console section of a page.

console.log(20<5); // this should show up as false in the console   

console.log(10==(8+2));// this should show up as true in the console

document.write("<br> this should show false as 9 does not equal 10 <br>");
document.write(9==10);

document.write("<br><br>");
document.write("this should show true for the === because the values and the data type are the same<br>")
document.write(10===10);// this should show true because the data type and the valuse are the same

document.write("<br><br>");
document.write("this should show false for due to different data and variable types <br>");
document.write("this"===5);// this should show false

document.write("<br><br>");
document.write("this will show falls for different data types but the same value<br>");
document.write("10"===10);//this should show false

document.write("<br><br>");
document.write("this will show falls for the same data type but different values<br>");
document.write("this"==="that");// this should show falls

document.write("<br><br>");// && operator True
document.write("this is using an && operator to see if 10 is greater then 2 and 6 is equal to 6<br>");
document.write(10>2 && 6==6);

document.write("<br><br>");// && operator False
document.write("this is using && to see if 11 less than 3 and 6 is equal to 6<br>");
document.write(11<3 && 6==6);

document.write("<br><br>"); // || (or) operator True
document.write("this is using || (or) to see if 10 is greater than 2 or 6 equals 7<br>");
document.write(10>2 || 6==7);

document.write("<br><br>"); // || (or) operator False
document.write("this is looking to see if 7 equals 8 and 10 equals \"this\"<br>");
document.write(7==8 || 10 === "this");


document.write("<br><br>");// using the NOT operator to return a true which means this IS FALSE
document.write("this is the NOT operator that will return true because 10 is not equal to 20<br> ");
document.write(!(10==20));

document.write("<br><br>");// using the NOT operator to return a false which means this IS TRUE
document.write("this is the NOT operator that will return false becasue 10 is less than 100<br>");
document.write(!(10<100));