let heading = document.querySelector("h1");
heading.textContent='Hello World!!!'

let image = document.querySelector("img");

image.onclick = () => {
	let mySrc = image.getAttribute("src");
	if(mySrc === "images/cake0.png") {
		image.setAttribute('src', 'images/cake1.png');
	} else {
		image.setAttribute('src', 'images/cake0.png');
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const setUserName = () => {
	let myName = prompt("Please enter your name");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Hi there " + myName;
}

if (!localStorage.getItem("name")){
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "Hi there " + storedName;
}

myButton.onclick = () =>{
	setUserName();
}

