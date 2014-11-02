'use strict';

angular.module('Alice').controller('TasksCtrl', function ($scope, taskList) {

    $scope.tasks = taskList;

    $scope.isDone = function (task) {
        return !!task.photo;
    };

    $scope.toggleUnwrapTask = function (task) {
        if (!task.photo) { return; }
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