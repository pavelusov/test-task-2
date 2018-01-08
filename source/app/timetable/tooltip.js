const templateTooltip = require('./templates/template-tooltip.html');

const timeTable = document.querySelector('.timetable');

timeTable.addEventListener('click', (e) => {

    if (e.target.classList.contains('cell-busy')) {

        let cellBusy = e.target;

        cellBusy.classList.add('cell-busy_show-description');
        cellBusy.innerHTML = templateTooltip;
        cellBusy.addEventListener('click', () => {
            cellBusy.innerHTML = '';
        })
    }
});
