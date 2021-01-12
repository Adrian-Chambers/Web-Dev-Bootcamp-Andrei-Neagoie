var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");

// initialize by adding event listener to first 6 btns in HTML file
for(var i = 0; i < deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click", removeParent, false);
}

// return input length
function inputLength() {
	return input.value.length;
}

// add list element
function createListElement() {
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(button);
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// delete list element
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }

// cross out list element
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

// event listeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);

