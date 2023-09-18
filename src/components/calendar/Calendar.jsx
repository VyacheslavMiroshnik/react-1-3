import PropTypes from 'prop-types';
import createCalendarMonth from './createCalendarMonth';

export default function Calendar({ date }) {
  const activeMonth = date.getMonth();
  const activeDay = date.getDate();
  const activeYear = date.getFullYear();
  const firstDayInMonth = new Date(activeYear, activeMonth, 1);
  const allMonthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const weekdayInMonthFull = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  const weekdayInMonthShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'];
  const listAlldayInMonth = createCalendarMonth(firstDayInMonth);
  return (
    <div className='ui-datepicker'>
      <div className='ui-datepicker-material-header'>
        <div className='ui-datepicker-material-activeDay'> </div>
        <div className='ui-datepicker-material-date'>
          <div className='ui-datepicker-material-activeDay-num'>
            {activeDay}
          </div>
          <div className='ui-datepicker-material-activeMonth'>
            {allMonthes[activeMonth]
              .replace(/[йь]/gi, 'я')
              .replace(/т$/gi, 'та')}
          </div>
          <div className='ui-datepicker-material-activeYear'>{activeYear}</div>
        </div>
      </div>
      <div className='ui-datepicker-header'>
        <div className='ui-datepicker-title'>
          <span className='ui-datepicker-activeMonth'>
            {allMonthes[activeMonth]}
          </span>
          &nbsp;
          <span className='ui-datepicker-activeYear'>{activeYear}</span>
        </div>
      </div>
      <table className='ui-datepicker-calendar'>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className='ui-datepicker-week-end' />
          <col className='ui-datepicker-week-end' />
        </colgroup>
        <thead>
          <tr>
            {weekdayInMonthFull.map((activeDay, index) => (
              <th scope='col' key={index} title={activeDay}>
                {weekdayInMonthShort[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listAlldayInMonth.map((week, index) => (
            <tr key={index + new Date()}>
              {week.map((dayInMonth) => (
                <td
                  key={dayInMonth.toUTCString()}
                  className={
                    dayInMonth.getDate() === activeDay &&
                    dayInMonth.getMonth() === activeMonth
                      ? 'ui-datepicker-today'
                      : dayInMonth.getMonth() !== activeMonth
                      ? 'ui-datepicker-other-activeMonth'
                      : ''
                  }
                >
                  {dayInMonth.getDate()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.object,
};
