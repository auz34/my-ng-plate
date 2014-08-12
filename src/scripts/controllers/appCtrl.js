'use strict';

angular.module('app').controller('AppCtrl', function ($scope) {
    var app = this;

    app.message = 'Simplest Angular Application';
    $scope.message = 'Scope of the simplest angular application';

    $scope.items = [
        {
            rtype: 'firstLeaf',
            text: 'a'
        },
        {
            rtype: 'composite',
            items: [{
                rtype: 'firstLeaf',
                text: 'b'
            },{
                rtype: 'secondLeaf',
                text: 'c'
            }]
        },
        {
            rtype: 'secondLeaf',
            text: 'd'
        }
    ];
});
