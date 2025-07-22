function slidesToShow() {
    if (window.innerWidth >= 1920) {
        return 3
    }
    if (window.innerWidth >= 1280) {
        return 2
    }
    if (window.innerWidth < 1280) {
        return 1
    }
}

$(".slick-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow(),
    slidesToScroll: slidesToShow()
});

$(document).ready(function() {
    $(".questionsItem").click(function() {
      var $currentItem = $(this);
      var $otherItems = $(".questionsItem").not($currentItem);
      var $secondText = $currentItem.find(".secondText");

      if ($secondText.is(":hidden")) {
        // Закриваємо інші блоки
        $otherItems.find(".secondText").slideUp(300);
        $currentItem.removeClass("active"); // Видаляємо клас active у інших блоків
        $otherItems.css("max-height", "140px");

        // Відкриваємо поточний блок
        $secondText.slideDown(300);
        $otherItems.removeClass("active");
        $currentItem.addClass("active"); // Додаємо клас active до поточного блоку
        $currentItem.css("max-height", "300px");
      } else {
        // При закриванні видаляємо клас active у всіх блоків
        $currentItem.removeClass("active");
        $otherItems.css("max-height", "140px");
        $secondText.slideUp(300);
      }
    });
  });

  window.onscroll = function showHeader(){
    let btn1 = document.querySelector('.btn1');

		let scrollPosition = window.scrollY;
    if(scrollPosition > 50){
        btn1.classList.add('btn4');
    } else{
        btn1.classList.remove('btn4');
    }

}

window.addEventListener('scroll', function () {
	let btn1 = document.querySelector('.btn1');
	let pageHeight = document.documentElement.scrollHeight;
  let scrollPosition = window.scrollY;
	
	if(scrollPosition > (pageHeight -990)){
	btn1.classList.add('hide');
}else if(scrollPosition < (pageHeight -990)){
	btn1.classList.remove('hide');
}
});



//Таймер при обновлении востанавливается (3 часа)

class CountdownTimer {
	constructor(deadline, cbChange, cbComplete) {
		this._deadline = deadline;
		this._cbChange = cbChange;
		this._cbComplete = cbComplete;
		this._timerId = null;
		this._out = {
			// days: '',
			 hours: '', minutes: '', seconds: '',
			// daysTitle: '',
			 hoursTitle: '', minutesTitle: '', secondsTitle: ''
		};
		this._start();
	}
	static declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}
	_start() {
		this._calc();
		this._timerId = setInterval(this._calc.bind(this), 1000);
	}
	_calc() {
		const diff = this._deadline - new Date();
		// const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		// this._out.days = days < 10 ? '0' + days : days;
		this._out.hours = hours < 10 ? '0' + hours : hours;
		this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
		this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
		// this._out.daysTitle = CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']);
		this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['год', 'год', 'год']);
		this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['хв', 'хв', 'хв']);
		this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['сек', 'сек', 'сек']);
		this._cbChange ? this._cbChange(this._out) : null;
		if (diff <= 0) {
			clearInterval(this._timerId);
			this._cbComplete ? this._cbComplete() : null;
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {

	// .timer (на минуту)
	// const elDays = document.querySelector('.timer .timer__days');
	const elHours = document.querySelector('.timer .timer__hours');
	const elMinutes = document.querySelector('.timer .timer__minutes');
	const elSeconds = document.querySelector('.timer .timer__seconds');

	(function timer() {
		const deadline = new Date(Date.now() + ( 3 * 60 * 60 * 1000 + 999)); //изменение времени таймера (Дни * часы * минуты * секунды * милисекунды (последние 2 значения не трогать))
		new CountdownTimer(deadline, (timer) => {
			// elDays.textContent = timer.days;
			elHours.textContent = timer.hours;
			elMinutes.textContent = timer.minutes;
			elSeconds.textContent = timer.seconds;
			// elDays.dataset.title = timer.daysTitle;
			elHours.dataset.title = timer.hoursTitle;
			elMinutes.dataset.title = timer.minutesTitle;
			elSeconds.dataset.title = timer.secondsTitle;
		}, () => {
			timer();
		})
	})();

});




  //   // Функція для форматування часу
	// 	function formatTime(number) {
	// 		return number < 10 ? `0${number}` : number;
	// }
	
	// // Функція для запуску таймера
	// function startTimer(endTime, display) {
	// 		function updateTimer() {
	// 				let now = new Date().getTime();
	// 				let remainingTime = endTime - now;
	
	// 				if (remainingTime < 0) {
	// 						remainingTime = 0;
	// 				}
	
	// 				let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// 				let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	// 				let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
	
	// 				display.hours.textContent = formatTime(hours);
	// 				display.minutes.textContent = formatTime(minutes);
	// 				display.seconds.textContent = formatTime(seconds);
	
	// 				if (remainingTime === 0) {
	// 						clearInterval(interval);
	// 				}
	// 		}
	
	// 		updateTimer();
	// 		const interval = setInterval(updateTimer, 1000);
	// }
	
	// window.onload = function () {
	// 		const duration = 60 * 60 * 3 * 1000; // 3 години в мілісекундах
	// 		const display = {
	// 				hours: document.getElementById('hours'),
	// 				minutes: document.getElementById('minutes'),
	// 				seconds: document.getElementById('seconds')
	// 		};
	
	// 		let endTime = localStorage.getItem('endTime');
			
	// 		if (endTime === null) {
	// 				endTime = new Date().getTime() + duration;
	// 				localStorage.setItem('endTime', endTime);
	// 		}
	
	// 		startTimer(endTime, display);
	// };
			