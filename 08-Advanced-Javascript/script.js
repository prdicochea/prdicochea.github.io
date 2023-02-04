var printOut = document.getElementById("printOut");


function printKey(e){
    // console.log("pressed key is: ");
    // console.log(e.keyCode);
    
    var keyP = "";
    switch (e.keyCode){

        case 38: keyP = "\u2191";
        break;
        case 40: keyP = "\u2193";
        break;
        case 37: keyP = "\u2190";
        break;
        case 39: keyP = "\u2192";
        break;
        default: keyP = "Read instructions above";
    }
    printOut.value=keyP;
}

printOut.addEventListener("keydown", printKey);