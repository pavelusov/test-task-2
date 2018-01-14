import {module} from "./module";

const templateRecomendedRooms = require('./templates/recomended-rooms.html');
const dataRecomendedRooms = require('./data/recomended-rooms.yaml');

module.directive('datepicker', () => {
    return {
        restrict: 'A',
        scope: {
            setDate: '='
        },
        link: (scope, element, attr, ctrl) => {
            scope.root = 666;
            element.datepicker({
                showButtonPanel: true,
                onSelect: (date) => {
                    scope.setDate(date);
                }
            });
        }
    }
});

module.directive('recomendedRooms', () => {
    return {
        restrict: 'E',
        replace: true,
        template: templateRecomendedRooms,
        controller: ($scope) => {
            $scope.recomendedRooms = dataRecomendedRooms;
            $scope.selectedRoom = [];
            $scope.isSelectedRoom = () => {
                return $scope.selectedRoom.length !== 0;
            };
            $scope.setRoom = (room) => {
                $scope.selectedRoom.push(room);
            };
            $scope.removeRoom = (index) => {
                $scope.selectedRoom.splice(index, 1);
            }
        }
    };
});
