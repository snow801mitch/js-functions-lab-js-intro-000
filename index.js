// write your code below!
var name = you;

function happyHolidays() {
  return("Happy holidays!")
}

function happyHolidaysTo(name) {
  return ("Happy holidays, $(name)!")
}

function happyHolidaysTo(holiday, name) {
  return happyHolidaysTo("Happy $(holiday), $(name)!")
}

function holidayCountdown(holiday, days) {
  return("It's $(days) days until $(holiday)!")
}
