const toDay = (num) => {

	let day;
	
	switch (num) {
		case 0:
			day = 'Sunday';
			break;
		case 1:
			day = 'Monday';
			break;
			case 2:
		day = 'Tuesday';
		break;
		case 3:
			day = 'Wednesday';
		break;
		case 4:
			day = 'Thusday';
			break;
		case 5:
			day = 'Friday';
			break;
			case 6:
				day = 'Saturday';
				break;
			}
	return day;
}

const toMonth = (num) => {

	let month;
	
	switch (num) {
		case 0:
			month = 'January';
			break;
		case 1:
			month = 'February';
			break;
			case 2:
		month = 'March';
		break;
		case 3:
			month = 'april';
		break;
		case 4:
			month = 'May';
			break;
		case 5:
			month = 'June';
			break;
		case 6:
			month = 'July';
			break;
		case 7:
			month = 'August';
			break;
		case 8:
			month = 'September';
			break;
		case 9:
			month = 'Octuber';
			break;
		case 10:
			month = 'November';
			break;
		case 11:
			month = 'December';
			break;	
			}
	return month;
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
