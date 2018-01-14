import {module} from "./module";

module.controller('HeaderCtrl', ($scope) => {
    $scope.isShowButtonMeeting = true;
    $scope.checkShowButtonMeeting = () => {
        return $scope.isShowButtonMeeting;
    };
    $scope.createMeeting = () => {
        $scope.isShowButtonMeeting = false;
        $scope.$emit('buttons.createMeeting');
    };
    $scope.$on('header.showButtonNewMeeting', () => {
        $scope.isShowButtonMeeting = true;
    });
});
