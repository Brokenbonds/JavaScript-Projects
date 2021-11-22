function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms ["myForm"]["lname"].value;
  
    if (x == "" && y == "") {
        let FnameReturn = "please fill in your name";
        let LnameReturn = "please fill in your last name"
        document.getElementById("FnameError").innerHTML = FnameReturn.fontcolor("red");
        document.getElementById("LnameError").innerHTML = LnameReturn.fontcolor("red");
        
        return false;
    }

    if(x==""){
        let FnameReturn = "please fill in your name";
        document.getElementById("FnameError").innerHTML = FnameReturn.fontcolor("red");
        return false;
    }

    if(y==""){
        let LnameReturn = "please fill in your last name"
        document.getElementById("LnameError").innerHTML = LnameReturn.fontcolor("red");
        return false;
    }

    

    

}

