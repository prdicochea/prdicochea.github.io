var clickMe = document.getElementsByClassName("enter")[0];

clickMe.addEventListener("click", function(){
    
    let newLi=document.createElement("li");
    console.log(newLi);
    
    let inputs=document.getElementById("newItems");
    console.log(inputs);
    let newValue=inputs.innerText;
    console.log(newValue);
    newLi.innerHTML=(newValue);
    console.log(newLi);
    document.getElementById("toDo").appendChild;
});