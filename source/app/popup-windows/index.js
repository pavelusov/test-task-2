export {module} from './module';
import './controller';
import './less/popup-windows.less';
import './timepicker';
import './chosen';

const clickButton = document.querySelector('.button__popup-new-meeting');
const main = document.querySelector('.main');
const popupNewMeeting = main.querySelector('.popup__new-meeting');

clickButton.addEventListener('click', () => {
    popupNewMeeting.classList.toggle('toggle-visible-popup');
});
