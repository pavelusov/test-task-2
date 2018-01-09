import 'jquery-timepicker/jquery.timepicker.css';
import './less/timepicker.less';

let timeInterval = {
    start: {
        min: '8:00',
        max: '22:30'
    },
    end: {
        min: '8:30',
        max: '23:30'
    }
};

$('.inputWrapper__timeStart').timepicker({
    timeFormat: 'H:mm',
    interval: 30,
    minTime: timeInterval.start.min,
    maxTime: timeInterval.start.max,
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
    minTime: timeInterval.end.min,
    maxTime: timeInterval.end.max,
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
