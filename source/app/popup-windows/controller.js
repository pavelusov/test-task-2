import {module} from './module';

module.controller('PopupNewMeetingCtrl', ($scope, $timeout) => {
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

    $scope.isShowListParticipants = false;
    $scope.showListParticipants = () => {
        $scope.isShowListParticipants = true;
    };
    $scope.hideListParticipants = () => {
        $timeout(() => {
            $scope.isShowListParticipants = false;
    }, 200);


    };

    $scope.addParticipant = (participant) => {
        $scope.isShowListParticipants = true;
        $scope.participantsMeetingAdded.push(participant);
    };
    $scope.removeParticipant = (participant) => {
        angular.forEach($scope.participantsMeetingAdded, (item, i) => {
            if (participant.id === item.id) {
                $scope.participantsMeetingAdded.splice(i, 1);
            }
        });
    };
});
