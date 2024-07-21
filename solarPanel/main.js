 // Переменная для хранения значения input
 let inputValueU = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateInputValueU() {
		 let inputElementU = document.querySelector('.inputU');
		 inputValueU = inputElementU.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputU').addEventListener('input', updateInputValueU);

 // Переменная для хранения значения input
 let inputValueI = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateInputValueI() {
		 let inputElementI = document.querySelector('.inputI');
		 inputValueI = inputElementI.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputI').addEventListener('input', updateInputValueI);

let result = document.querySelector('button');




let res = result.addEventListener('click', function(){
	let R = Number(inputValueU) / Number(inputValueI)
	let Rrev = 10 * R
	let Irev = Number(inputValueU)/(R+Rrev)
	let Wrev = Number(inputValueU)* Irev
	console.log(inputValueU)
	console.log(inputValueI)
	document.querySelector(".resistansResult").innerHTML = R
	document.querySelector(".revResistansResult").innerHTML = Rrev
	document.querySelector(".revCurrentResult").innerHTML = Irev
	document.querySelector(".revPowerResult").innerHTML = Wrev
});