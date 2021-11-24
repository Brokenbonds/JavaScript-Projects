function getReceipt() {
    // This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName ("size");
    for (var i =0; i < sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    } //Setting the cost of a Person Pizza
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } //Setting the cost of a Kids Pizza
    else if (selectedSize === "Kids Pizza") {
        sizeTotal = 5;
    } //Setting the cost of a Medium Pizza
    else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } //Setting the cost of a Large Pizza
    else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } //Setting the cost of a Extra Large Pizza
    else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    // Give the running total the amount owed from the pizza size selection
    runningTotal = sizeTotal;
    // Send to the console a string of the size choosen and how much it cost as well as the runningTotal up to this point just to check.
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};
    // get the order for the toppings they want on there pizza
function getTopping (runningTotal, text1) {
    // create a toppingTotal so we have a place to keep track of everything
    var toppingTotal = 0;
    // Created an emptey array to hold all the different toppings to be added as well as there total to be charged
    var selectedToppoing = [];
    // An array of all elements in the HTML that have the Class name toppings
    var toppingArray = document.getElementsByClassName("toppings");
    // this loop checks the length of our toppingArray and then sets the variable j to go up 1 everyt time it loops so long as it's less then the length of our array,
    for(var j = 0; j< toppingArray.length; j++){
        // checking if any of the checkboxes in this array have been checked.
        if (toppingArray[j].checked){
            //if they have been we want to take that checkbox and put it's value into the selectedTopping Array.
            selectedToppoing.push(toppingArray[j].value);
            // we also print the toppingArray value in the consol.log for us to see.
            console.log("selected topping item: ("+toppingArray[j].value+")");
            // we then concatenate the toppings into our text1 string
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }

    //comment this later
    var toppingCount = selectedToppoing.length;
    if(toppingCount >1) {
        toppingTotal = (toppingCount - 1);
    }
    else{
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log (toppingCount+" topping - 1 free toppig ="+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    
};