import 'jquery-timepicker/jquery.timepicker.css';
import './timepicker.less';

$('.inputWrapper__timeStart').timepicker({
    timeFormat: 'H:mm',
    interval: 30,
    minTime: '8',
    maxTime: '22:30',
    dynamic: true,
    dropdown: true,
    scrollbar: true,
    zindex: 10,
    change: function (time) {
        let element = $(this),
            timepicker = element.timepicker(),
            selectStartTime = timepicker.format(time);
    }
});

$('.inputWrapper__timeEnd').timepicker({
    timeFormat: 'H:mm',
    interval: 30,
    minTime: '8:30',
    maxTime: '23:30',
    dynamic: true,
    dropdown: true,
    scrollbar: true,
    zindex: 10,
    change: function (time) {
        let element = $(this),
            timepicker = element.timepicker(),
            selectEndTime = timepicker.format(time);
    }
});
