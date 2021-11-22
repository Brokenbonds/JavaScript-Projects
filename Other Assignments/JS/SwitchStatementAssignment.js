function Color_Function(){
    let ColorOutput; 
    let Colors = document.getElementById("Color_Input").value;
    let ColorString = " is a great color!"
    switch(Colors){
        case "Red":
            ColorOutput = "Red"+ ColorString;
        break;

        case "Blue":
            ColorOutput = "Blue"+ ColorString;
        break;

        case "Yellow":
            ColorOutput = "Yellow"+ ColorString;
        break;

        case "Green":
            ColorOutput = "Green"+ ColorString;
        break;

        case "Pink":
            ColorOutput = "Pink"+ ColorString;
        break;
        
        case "Purple":
            ColorOutput = "Purple"+ ColorString;
        break;

        default:
        ColorOutput = "please choose one of the colors listed above."
    }

    document.getElementById("Output").innerHTML=ColorOutput;
}