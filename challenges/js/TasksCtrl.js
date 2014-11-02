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

});