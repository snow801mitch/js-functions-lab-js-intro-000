// write your code below!
var name=’you’
var holiday=’Independence Day’
var number=20
var mother=”Mother’s Day”

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
