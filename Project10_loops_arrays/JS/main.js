
// this uses a while ture loop
function Call_Loop(){
    var x = 0
    var Space = " "
    while( x < 11){
        Space += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Space;
    document.getElementById("StringLength").innerHTML = "the length of this string is " + Space.length + " characters";
    
}
// this uses a for loop
function for_Loop(){
    var Instraments = ["Guitar","Drums","Sax","Clarinet","Bass","Violin", "Piano", "Obo", "Trumpet", "Flute"]
    var NextLine = "<br>"
    printThis = " "

    for(i = 0; i < Instraments.length; i++){
        printThis += Instraments[i] + NextLine;
    }

    document.getElementById("ListOfInstruments").innerHTML = printThis;
}

// this sets an array as empty then adds varriables to the array.
function array_Function(){
    var House = [];
    House[0] = "Walls";
    House[1] = "Doors";
    House[2] = "Foundatoin";
    House[3] = "Windows";
    House[4] = "Roof";
    document.getElementById("Array").innerHTML = "A "+ House[2] + " is just one of the things you need to make a house.";

}
 // this is the const function. Constaints can not be changed
function constant_function(){
    const words = "this is a constent";
    var moreWords = ", this is a variable";

    document.getElementById("Constant").innerHTML = words + moreWords;
}

function Let_Keyword(){
    x = "this is in the function"
    document.getElementById("LetKeywords").innerHTML = "<br>" + x;
    {
        let x = "inisde deeper brackets<br>"
        document.getElementById("InsideBrackets").innerHTML = "<br>" + x;
    }
    document.getElementById("Outsideagain").innerHTML ="<br>" + x;
}


function ReturnFunction(){
    
    let x = 15
    let y = 16
    return x+y
    
}

document.getElementById("Returnhere").innerHTML ="this returns the number " + ReturnFunction();



function CarInfo(){

    let car = {
        make: "Doge",
        model:"Viper",
        color:"Blue",
        year:"1999",
        description: function(){
            return "The car we have is a "+ this.color +" " + this.make + " " +this.model + " made in " + this.year + "."
        }

    };
    CarinfoText.innerHTML = car.description();
}


function BreakFunction(){
    let Breaktext = " "
    for(let i = 0; i <10; i++){
        if (i === 3){break}
        Breaktext += "the number is "+i+"<br>"
    }
    return Breaktext
}

Breakingtext.innerHTML = BreakFunction();

function ContinueFunction(){
    let Bobby = " "
    for(let i = 0; i <10; i++){
        if (i === 3){continue}
        Bobby += "the number is "+i+"<br>"
    }
    document.getElementById("Continuingtext").innerHTML = Bobby;
}

