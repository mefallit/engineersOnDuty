export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function checkWeekend(day, month, year) {
  return new Date(year, month - 1, day).getDay() % 6 === 0;
}
