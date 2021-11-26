const toDay = (num) => {

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	return days[num];
}

const toMonth = (num) => {

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
	
	return months[num];
}

const $day = document.querySelector('.day');
const $month = document.querySelector('.month');
const $numberDay = document.querySelector('.number-day');

const today = new Date();

const day =  toDay(today.getDay());
const month =  toMonth(today.getMonth());
const number = today.getDate();

$day.textContent = day;
$month.textContent = month;
$numberDay.textContent = number;
