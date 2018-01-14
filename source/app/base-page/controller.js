import {module} from "./module";

module.controller('BasePageCtrl', ($scope) => {
    $scope.$on('buttons.createMeeting', () => {
        $scope.$broadcast('popup.showPopupNewMeeting');
    });
    $scope.$on('buttons.hidePopupNewMeeting', () => {
        $scope.$broadcast('header.showButtonNewMeeting');
    });
});
