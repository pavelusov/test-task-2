import {module} from "./module";

module.directive('createMeeting', () => {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        controller: ($scope) => {
            $scope.createMeeting = () => {
                $scope.$emit('buttons.createMeeting');
            };
        }
    };
});
