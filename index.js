// write your code below!
let name=’you’;
let holiday=’Independence Day’;
let number=20;
let mother=”Mother’s Day”;

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, $(name)!"
}

function happyHolidaysTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday, days) {
  return "It\'s ${days} days until ${holiday}!"
}
