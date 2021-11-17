var x = 10;

function works(){
    var y=10;
    m= y+x;
    console.log(m);
}

function noWork(){
    p=y+x;
    console.log(p);
}

function time(){
    var d = new Date();
    var timeHours = d.getHours();
    var timeMin = d.getMinutes();
    var AMPM = "am"

    //convert from army time
    if (timeHours > 12){
        timeHours -= 12;
    }
    //change am to pm for afternoon, had to use the d.getHours() instead of timeHours variable because the previous if statement changes the timeHours varriable. I could just switch places but this feels like a better idea.
    if(d.getHours() >= 12){
        AMPM = "pm";
    }
    document.getElementById("timeRequest").innerHTML = timeHours + ":" + timeMin + " " + AMPM;
}


    // this function checks the an input to see if the number is bigger then 10 and if it is will ouput a thank you message, otherwise it will always output an "error" message asking them to try again
function isBigger(){
    if (document.getElementById("inputNum").value >= 10 ){
        document.getElementById("output").innerHTML = "Thank you for following the instructions above."
    }
    else{
        document.getElementById("output").innerHTML = "ERROR: please try again"
    }
    
}

function Time_function(){
    var Time= new Date().getHours();
    var Reply = " this ";


    if(Time < 12 == Time > 0){
        Reply= "it's morning time!";
    }

    else if( Time >= 12 == Time < 18 ){
        Reply= "it's afternoon";
    }

    else{
        Reply = "it's evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

