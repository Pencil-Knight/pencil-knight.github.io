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

    if(window.scrollY > 50){
        btn1.classList.add('btn4');
    } else{
        btn1.classList.remove('btn4');

    }
}


//Таймер с конечной датой

// document.addEventListener('DOMContentLoaded', function() {
//   // конечная дата, например 1 июля 2021
//   const deadline = new Date(2024, 0o5, 0o1); //дата задается со значением: месяц -1 (11-й месяц декабрь)
//   // id таймера
//   let timerId = null;
//   // склонение числительных
//   function declensionNum(num, words) {
//     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//   }
//   // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//   function countdownTimer() {
//     const diff = deadline - new Date();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }
//     const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//     const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     $days.textContent = days < 10 ? '0' + days : days;
//     $hours.textContent = hours < 10 ? '0' + hours : hours;
//     $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//     $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//     $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//     $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//     $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//     $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//   }
//   // получаем элементы, содержащие компоненты даты
//   const $days = document.querySelector('.timer__days');
//   const $hours = document.querySelector('.timer__hours');
//   const $minutes = document.querySelector('.timer__minutes');
//   const $seconds = document.querySelector('.timer__seconds');
//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   timerId = setInterval(countdownTimer, 1000);
// });


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