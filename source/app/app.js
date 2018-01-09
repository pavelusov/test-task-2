import '../assets/less/styles.less';
import './calendar';
import './timetable';
import './popup-windows';

import {module as popupWindows} from "./popup-windows/module";

let roomsApp = angular.module('roomsApp', [
    popupWindows.name
]);

export {roomsApp};
