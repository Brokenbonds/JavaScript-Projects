function myDictionary(){
    var Person = { // this is a KVP, Key Value Pair varriable, it is holding strings right now
        Name:"Phillip",
        LastName:"Boswell",
        Age:"36",
        BirthdayMonth:"October",
    };
    // this document line works inside the function because we are calling this function onclick
    document.getElementById("dictionary").innerHTML = Person.Name;
}

function myBeerDictionary(){
    var Beer = { // this KVP is also holding strings
        Color:"Silver", // this is a Key with it's Value.
        Name:"budweiser",
        Company:"Anheuser-Busch",
        Introduced:"1876",
       
    };
    delete Beer.Color // this will delte the Color Key and is Value from the dictionary.
    document.getElementById("BeerDictionary").innerHTML = Beer.Color;
}