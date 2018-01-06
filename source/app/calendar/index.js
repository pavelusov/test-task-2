import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-ui/themes/base/all.css';
import 'jquery-ui/ui/i18n/datepicker-ru';
import './calendar.less';

$.datepicker.setDefaults($.datepicker.regional['ru']);

let calendar = $('.timetable__calendar-datepicker').datepicker({
    numberOfMonths: 3,
    showButtonPanel: true
}).datepicker('setDate', 'today');

calendar.datepicker('option', 'dateFormat', 'd M.');

$('.rightButtonCalendar').click(function () {
    let calendarShowDate = calendar.datepicker( "getDate" );
    let formatDate = moment(calendarShowDate, 'ddd MMM D YYYY h:mm:ss');
    formatDate.locale('ru');
    formatDate.add(1, 'days');
    let dateNextDay = formatDate.format('DD MMM');
    calendar.datepicker('setDate', dateNextDay);
});

$('.leftButtonCalendar').click(function () {
    let calendarShowDate = calendar.datepicker( "getDate" );
    let formatDate = moment(calendarShowDate, 'ddd MMM D YYYY h:mm:ss');
    formatDate.locale('ru');
    formatDate.subtract(1, 'days');
    let datePrevDay = formatDate.format('DD MMM');
    calendar.datepicker('setDate', datePrevDay);
});
