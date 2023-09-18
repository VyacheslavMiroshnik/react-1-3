export default function createCalendarMonth(currencyDate) {
  const date = new Date(currencyDate);
  const firstDayAtMonth = date.getDay() === 0 ? 7 : date.getDay();
  const activeMonth = date.getMonth();
  const result = [];
  const firstDayAtWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - (firstDayAtMonth - 1)
  );

  for (let weeksIndex = 0; weeksIndex < 5; weeksIndex++) {
    let week = [];
    for (let dayInMonth = 0; dayInMonth < 7; dayInMonth++) {
      let previousDay = result.length ? result[weeksIndex - 1][6] : null;
      let firstDay = previousDay
        ? new Date(
            previousDay.getFullYear(),
            previousDay.getMonth(),
            previousDay.getDate() + 1
          )
        : new Date(firstDayAtWeek);
      week.push(
        new Date(
          firstDay.getFullYear(),
          firstDay.getMonth(),
          firstDay.getDate() + dayInMonth
        )
      );
    }
    result.push(week);
    if (week[6].getMonth() !== activeMonth) {
      break;
    }
  }
  return result;
}
