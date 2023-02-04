var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("background");
var randomizer=document.getElementById("randomize");
var randomColor="";

function changeGradient(){
    body.style.background="linear-gradient(to right, "+color1.value+", "+ color2.value+")";
    h3.textContent="linear-gradient(to right, "+color1.value+", "+ color2.value+")";
}

function getRandoms(){
    randomColor=Math.floor(Math.random()*16777215).toString(16);
    return randomColor;    
}

function setRandoms(){
    color1.value="#"+getRandoms();
    color2.value="#"+getRandoms();
    changeGradient();
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
randomizer.addEventListener("click", setRandoms);

changeGradient();

