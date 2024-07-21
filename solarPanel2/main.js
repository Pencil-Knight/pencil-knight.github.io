 // Переменная для хранения значения input
 let inputValueVoc = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateInputValueVoc() {
		 let inputElementVoc = document.querySelector('.inputVoc');
		 inputValueVoc = inputElementVoc.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputVoc').addEventListener('input', updateInputValueVoc);
 //----------------------------------------------------
 // Переменная для хранения значения input
 let inputValueVmp = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateinputValueVmp() {
		 let inputElementVmp = document.querySelector('.inputVmp');
		 inputValueVmp = inputElementVmp.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputVmp').addEventListener('input', updateinputValueVmp);
//--------------------------------------------------------
 // Переменная для хранения значения input
 let inputValueIsc = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateInputValueIsc() {
		 let inputElementIsc = document.querySelector('.inputIsc');
		 inputValueIsc = inputElementIsc.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputIsc').addEventListener('input', updateInputValueIsc);
//--------------------------------------------------------
 // Переменная для хранения значения input
 let inputValueImp = '';
 // Функция для обновления значения inputValue при изменении значения input
 function updateInputValueImp() {
		 let inputElementImp = document.querySelector('.inputImp');
		 inputValueImp = inputElementImp.value;
 }
 // Добавление обработчика событий для обновления значения inputValue
 document.querySelector('.inputImp').addEventListener('input', updateInputValueImp);

let result = document.querySelector('button');




let res = result.addEventListener('click', function(){
	let R = Number(inputValueVmp) / Number(inputValueImp)
	let Rrev = (Number(inputValueVoc)-Number(inputValueVmp))/(Number(inputValueIsc)-Number(inputValueImp))
	let Irev = Number(inputValueVmp)/(R+Rrev)
	let Wrev = Number(inputValueVmp)* Irev
	console.log(inputValueVoc)
	console.log(inputValueVmp)
	console.log(inputValueIsc)
	console.log(inputValueImp)
	document.querySelector(".resistansResult").innerHTML = R
	document.querySelector(".revResistansResult").innerHTML = Rrev
	document.querySelector(".revCurrentResult").innerHTML = Irev
	document.querySelector(".revPowerResult").innerHTML = Wrev
});