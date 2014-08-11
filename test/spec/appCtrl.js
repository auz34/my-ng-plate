'use strict';

describe('Controller: appCtrl: can create', function() {
    beforeEach(module('app'));

    // Check whether controller is defined
    it('should ....', inject(function($controller) {
        //spec body
        var ctrl = $controller('AppCtrl', { $scope: {} });
        expect(ctrl).toBeDefined();
    }));
});

describe('Controller: appCtrl: logic', function () {

    // load the controller's module
    beforeEach(module('app'));

    var appCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        appCtrl = $controller('AppCtrl', {
            $scope: scope
        });
    }));

    it('should attach a message to the scope', function () {
        expect(appCtrl.message).toBe('Simplest Angular Application');
    });
});