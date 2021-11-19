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
        // creates 2 variables seconds and timer, sec
        seconds -= 1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if(seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = " ";
        }
    }
    tick();
}
// I don't need to writh document.getElementById() apparently I can just type in the "id".innerHTML and it will know what to do.
function test(){
    maybe.innerHTML = "Does this work?"
}


