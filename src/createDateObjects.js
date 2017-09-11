import moment from 'moment';

export default function createDateObjects(date, weekOffset = 0) {
  const startOfMonth = date.startOf('month');

  let diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  const prevMonthDays = [];
  for (let i = 0; i < diff; i++) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - i, 'days'),
      classNames: 'prevMonth'
    });
  }

  const currentMonthDays = [];
  for (let i = 1; i < date.daysInMonth() + 1; i++) {
    currentMonthDays.push({
      day: moment([date.year(), date.month(), i])
    });
  }

  const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  const nextMonthDays = [];
  let i = 1;
  while ((daysAdded + i) % 7 !== 0) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day
        .clone()
        .add(i, 'days'),
      classNames: 'nextMonth'
    });

    i = i + 1;
  }

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}
