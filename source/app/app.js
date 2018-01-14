import '../assets/less/styles.less';
import './calendar';
import './timetable';
import './popup-windows';
import './header';
import './base-page';

import {module as popupWindows} from "./popup-windows/module";
import {module as header} from "./header/module";
import {module as basePage} from "./base-page/module";

let roomsApp = angular.module('roomsApp', [
    popupWindows.name,
    header.name,
    basePage.name
]);

export {roomsApp};
