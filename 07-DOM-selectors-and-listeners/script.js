let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementById("list");
var delButton = "";
var delButtonArray = "";



function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let br = document.createElement("br");
	let btn = document.createElement("img");
	btn.src = "Delete-button.svg";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(br);
	ul.appendChild(li);
	ul.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		refreshListeners();
	}
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		refreshListeners();
	}
	
}

function toggleDoneOnAndOff(e){
	if(e.target.tagName==="LI"){
		e.target.closest("li").classList.toggle("done");
	}
}

function removeLi(e){
	e.target.parentNode.removeChild(e.target.previousSibling);
	e.target.parentNode.removeChild(e.target.previousSibling);
	e.target.remove();
}

function refreshListeners(){
	delButton = document.querySelectorAll("img");
	delButtonArray = [...delButton];
	delButtonArray.forEach((item)=>{
		item.addEventListener("click", removeLi);
		console.log("items refreshed");
	})
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDoneOnAndOff);

refreshListeners();
