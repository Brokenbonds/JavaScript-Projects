// this function concatenates the little piggy rhyme for kids
function concat(){
    var p1 = "this little piggy went to the market, ";
    var p2 = "this little piggy stayed home, ";
    var p3 = "this little piggy had roast beef, ";
    var p4 = "this little piggy had none, ";
    var p5 = "and this little piggy went we we we we all the way home.  ";
    var whole_sentence = p1.concat(p2,p3,p4,p5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;

}
// this function takes certian parts of a string designated in the slice function with a start and end
function sliceString(){
    var p1 = "this little piggy went to the market, ";
    var slicing= p1.slice(10,20);
    document.getElementById("Slice").innerHTML = slicing;
}
// this function tusn a string all upper case.
function Upper(){
    var p2 = "this little piggy stayed home, ";
    var UpP2= p2.toUpperCase();
    document.getElementById("UpperCase").innerHTML = UpP2;
}
// this searches the string for piggy and outputs the position it is at in the string, this starts at 0. This is Case senstive.
function Searching(){
    var p4 = "this little piggy had none, ";
    var SearchP4 = p4.search("piggy");
    document.getElementById("Searchfor").innerHTML = SearchP4;
}
// this function turns a number into a string
function NumString(){
    var x = 158;
    document.getElementById("numToString").innerHTML = x.toString();
}

// this function turns a long number into a specific length
function FewNum(){
    var x = Math.PI;
    document.getElementById("Pie").innerHTML = x.toPrecision(5);
}

// this function turns a long number into a string and specific length
function PietoString(){
    var x = Math.PI;
    document.getElementById("PieString").innerHTML = x.toFixed(6);
}

// valueOf() method returns the value of a string.
function StringValue(){
    // the let fuction works localy and only for a block of code unlike var
    let p5 = "and this little piggy went we we we we all the way home.  ";
    document.getElementById("SV").innerHTML = p5.valueOf();
}