'use strict';

angular.module('Alice').controller('TasksCtrl', function ($scope, $window, taskList) {

    // High resolution display, e.g. "retina":
    var isHighResDisplay = $window.devicePixelRatio > 1;

    $scope.tasks = taskList;

    $scope.getPhoto = function (task) {
        return (isHighResDisplay ? task.photo2x : task.photo1x) || task.photo;
    };

    $scope.isDone = function (task) {
        return $scope.getPhoto(task) ? true : false;
    };

    $scope.toggleUnwrapTask = function (task) {
        if (!$scope.isDone(task)) { return; }
        task.isUnwrapped = task.isUnwrapped ? false : true;
    };

}).directive('aliceTapAnimation', function ($timeout) {
    return {
        restrict: 'C',
        link: function (scope, element) {

            function stopAnimation() {
                element.removeClass('alice-tap-animation-running');
            }

            function runAnimation() {
                element.addClass('alice-tap-animation-running');
                $timeout(stopAnimation, 1000);
            }

            element.on('touchstart', runAnimation);
            scope.$on('$destroy', function () {
                element.off('touchstart', runAnimation);
                stopAnimation();
            });
        }
    };
});
