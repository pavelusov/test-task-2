import {module} from "./module";

module.controller('timetableCtrl', ($scope, $element) => {
    //create-meeting ng-click="createMeeting()"
    $scope.freeCells = $element.find('.cell-free');
    // angular.forEach($scope.freeCells, (cell) => {
    //     cell.setAttribute('create-meeting', '');
    //     cell.setAttribute('data-ng-click', 'createMeeting()');
    // });
});
