// Slide show start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//Slide show finished

// my count down timer, don't quite understand how it's able to loop though.
function countDown(){
    //creats a varrible called second which is pulled from the input id'ed as second
    var seconds = document.getElementById("seconds").value;
    // starts the function
    function tick(){
        // creates 3 variables seconds and timer
        //seconds subtracts 1 from it's self
        seconds -= 1;
        // timer grabs the variable seconds and puts it into the id location timer
        timer.innerHTML = seconds;

        // the variable time is created witch is going to hold us here for 1 second (1000 milliseconds)
        var time = setTimeout (tick, 1000);
        // we check our seconds, if it has reached -1 we run this code
        if(seconds == -1){
            // show an alert that time is up
            alert("Time's up!");
            // clear out time, or it will continue to count in the background forever until the browser is shut down
            clearTimeout(time);
            //clear the timer id by putting a space
            timer.innerHTML = " ";
        }
    }
    // run the tick function
    tick();
}


// I don't need to writh document.getElementById() apparently I can just type in the "id".innerHTML and it will know what to do.
function test(){
    maybe.innerHTML = "Does this work?"
}


