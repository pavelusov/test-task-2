import '../assets/less/styles.less';
import './calendar';
import './timetable';
import './popup-windows';
import './header';
import './base-page';
import './timeline';

import {module as popupWindows} from "./popup-windows/module";
import {module as header} from "./header/module";
import {module as basePage} from "./base-page/module";
import {module as timeline} from "./timeline/module";
import {module as timetable} from "./timetable/module";

angular.module('roomsApp', [
    popupWindows.name,
    header.name,
    basePage.name,
    timeline.name,
    timetable.name
]);
