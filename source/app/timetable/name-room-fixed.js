import {Floor} from './classes';

window.onload = () => {
    const timeTableWrapper = document.querySelector('.timetable-wrapper');
    const floors = Array.prototype.slice.call(document.querySelectorAll('.table-floor-wrapper.floor-selectable'));
    const leftColumn = timeTableWrapper.querySelector('.left-column');
    const shownElementEvent = document.createEvent('Event');
    const hiddenElementEvent = document.createEvent('Event');

    const house = floors.map((floor) => {
        return new Floor({
            floorElement: floor,
            roomElementClass: 'row-room',
            roomNameElementClass: 'name-room'
        });
    });

    timeTableWrapper.addEventListener('scroll', () => {
        if (leftColumn.getBoundingClientRect().right >= 0) {
            if (shownElementEvent.type !== "shownElement") {

                shownElementEvent.initEvent('shownElement', true, true);
                timeTableWrapper.dispatchEvent(shownElementEvent);

                hiddenElementEvent.initEvent('', true, true);
            }

        } else {
            if (hiddenElementEvent.type !== "hiddenElement") {

                hiddenElementEvent.initEvent('hiddenElement', true, true);
                timeTableWrapper.dispatchEvent(hiddenElementEvent);

                shownElementEvent.initEvent('', true, true);
            }

        }
    });

    document.body.addEventListener('hiddenElement', () => {
        if (floors.length !== 0) {
            house.forEach((floor) => {
                floor.showNamesRooms();
            });
        }
    });

    document.body.addEventListener('shownElement', () => {
        if (floors.length !== 0) {
            house.forEach((floor) => {
                floor.hideNamesRooms();
            });
        }
    });

    window.onscroll = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;

        house.forEach((floor) => {
            floor.scrollWindow(scrolled);
        });
    }
};
