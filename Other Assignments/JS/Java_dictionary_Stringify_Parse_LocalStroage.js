
/*This is a Javascript dictionary, object with key/value pairs*/
var obj = {"name":"John","age":30,"city":"New York"};
/*convert JavaScript objects to string format*/
var myJSON = JSON.stringify(obj);
document.getElementById("stringifyThis").innerHTML= myJSON+"<br>";

/*Convert JSON strings to JavaScript obvjects*/
personParse = JSON.parse(myJSON)
document.getElementById("parsing").innerHTML = personParse.name + " is " +personParse.age + " years old and he lives in the city of " + personParse.city;

/* this sets the data as a key/value pair to be saved locally in your browser*/
localStorage.setItem("name","Dax");
/*then uses the key "Name" to returen it's value "Dax"*/
document.getElementById("myDog").innerHTML= localStorage.getItem("name")