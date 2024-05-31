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


//Таймер

// var endtime = '01/06/2024';

// function getTimeRemaining(endtime){  
//   var t = Date.parse(endtime) - Date.parse(new Date());  
//   var seconds = Math.floor( (t/1000) % 60 );  
//   var minutes = Math.floor( (t/1000/60) % 60 );  
//   var hours = Math.floor( (t/(1000*60*60)) % 24 );  
//   var days = Math.floor( t/(1000*60*60*24) );  
//   return {  
//    'total': t,  
//    'days': days,  
//    'hours': hours,  
//    'minutes': minutes,  
//    'seconds': seconds  
//   };  
// }


// function initializeClock(id, endtime){  
//   var clock = document.getElementById(id);  
//   function updateClock(){  
// 		var t = getTimeRemaining(endtime); 
		
// 		daysSpan.innerHTML = t.days;  
//   	hoursSpan.innerHTML = t.hours;  
//   	minutesSpan.innerHTML = t.minutes;  
//   	secondsSpan.innerHTML = t.seconds; 

// 		clock.innerHTML = 'days: ' + t.days + ' ' + 'hours: '+ t.hours + ' ' + 'minutes: ' + t.minutes + ' ' + 'seconds: ' + t.seconds;  
// 		if(t.total<=0){  
// 		 clearInterval(timeinterval);  
// 		}  
// 	}  
	
// 	updateClock(); // запустите функцию один раз, чтобы избежать задержки  
// 	var timeinterval = setInterval(updateClock,1000); 
// }

// initializeClock('clockdiv', deadline);

// var daysSpan = clock.querySelector('.days');  
// var hoursSpan = clock.querySelector('.hours');  
// var minutesSpan = clock.querySelector('.minutes');  
// var secondsSpan = clock.querySelector('.seconds');

// let deadline = '01/06/2024';


document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2024, 0o6, 0o1);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});