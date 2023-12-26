let heading = document.querySelector("h1");
heading.textContent='Hello World!!!'

let image = document.querySelector("img");

image.onclick = () => {
	let mySrc = image.getAttribute("src");
	if(mySrc === "images/cityBlack.jpg") {
		image.setAttribute('src', 'images/cityRed.png');
	} else if (mySrc === "images/cityRed.png") {
		image.setAttribute('src', 'images/car.jpeg');
	} else {
		image.setAttribute('src', 'images/cityBlack.jpg');
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

