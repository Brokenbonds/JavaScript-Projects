

function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;// this grabs the value from the input id "Height"

    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //This uses a Ternary operator to checks to see if the value given is less then 52 and then outputs one of the 2 depending on True or False

    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";// this is where it outputs the Ternary result back to the html doc, looking for "Ride". It also concatenates " to ride" on the end.
}

function VotersEligibility_Function(){
    var Age,CanVote;
    Age = document.getElementById("Age").value;
    CanVote = (Age < 18) ? "You are not old enough to vote":"You can vote";
    document.getElementById("Vote").innerHTML = CanVote;
}
// this is an Object Constructors, it currently only holds the state of the vehicle.
function Vehicle (Make,Model,Year,Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
// here we have created new Objects and have put variables to each state
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// this function, when called, uses the Erik Object and calles different states that are attached to fill in information about his Car, then sends it back to "Keywords_and_Constructors" to be placed in the HTML
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myOtherFunction(){
    document.getElementById("New_and_this").innerHTML = "Jack's car is a " + Jack.Vehicle_Color+ "-colored " + Jack.Vehicle_Make +" "+ Jack.Vehicle_Model + ".<br> Which just so happens to have been my favoirte car as a child.<br> His car was made in "+Jack.Vehicle_Year;

}

function Assignment(reseved,notreseved){
    this.Assignment_reserved=reseved;
    this.Assignment_notreseved=notreseved;

}
// apparently oopsy is te identifyier and the new Assignment object is the literal
var oopsy = new Assignment("try","not a reseved word");

function oopsypoopsy(){
    document.getElementById("thisone").innerHTML= "here is the reseved word \""+oopsy.Assignment_reserved+"\" and here is the non-reserved word \""+oopsy.Assignment_notreseved+"\"";

}// My guess was correct... or I didn't quite understand the assignment.


// this is my nested function
function Funception(){
    document.getElementById("Nested_Function").innerText = sentence();
    function sentence(){
        var word = "I can't belive"
        function concatenate() { word += " it's not butter.";}
        concatenate();
        return word;
    }

}