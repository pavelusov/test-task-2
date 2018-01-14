import {module} from './module';

module.controller('PopupNewMeetingCtrl', ($scope, $timeout, $element) => {
    $scope.participantsMeeting = [
        {
            id: 1,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Люк Бессон',
            room: 7
        },
        {
            id: 2,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Кларк Кент',
            room: 6
        },
        {
            id: 3,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Дарт Вейдер',
            room: 5
        },
        {
            id: 4,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Дарт Вейдер',
            room: 5
        },
        {
            id: 5,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Дарт Вейдер',
            room: 5
        },
        {
            id: 6,
            image: {
                path: 'https://avatars3.githubusercontent.com/u/13864001?s=400&u=2d629036f533c415c76a046defacf39d984d7ff6&v=4',
                alt: 'Pavel'
            },
            name: 'Дарт Вейдер',
            room: 5
        },
    ];
    $scope.participantsMeetingAdded = [];
    $scope.isVisiblePopup = false;
    $scope.isShowListParticipants = false;
    $scope.showListParticipants = () => {
        $scope.isShowListParticipants = true;
    };
    $scope.hideListParticipants = () => {
        $timeout(() => {
            $scope.isShowListParticipants = false;
        }, 200);
    };
    $scope.addParticipant = (participant, index) => {
        $scope.isShowListParticipants = true;
        if (!$scope.participantsMeetingAdded[index]) {
            $scope.participantsMeetingAdded.push(participant);
        }
    };
    $scope.removeParticipant = (index) => {
        $scope.participantsMeetingAdded.splice(index, 1);
    };

    $scope.dateSelected = null;
    $scope.$on('dateSelected', (e, date) => {
        $scope.dateSelected = date;
    });
    $scope.getDate = (date) => {
      $scope.$emit('dateSelected', date);
    };

    $scope.$on('popup.showPopupNewMeeting', () => {
        $scope.isVisiblePopup = true;
    });

    $scope.hidePopup = () => {
        $scope.isVisiblePopup = false;
        $scope.$emit('buttons.hidePopupNewMeeting');
    };

    $scope.saveMeeting = () => {
        //TODO save or update data for the meeting
    }
});
