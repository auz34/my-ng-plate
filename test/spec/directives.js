'use strict';

describe('directives', function() {
    beforeEach(module('app'));

    describe('app-version', function() {
        it('should print current version', function() {
            module(function($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function($compile, $rootScope) {
                var element = $compile('<app-version></app-version>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });
    });
});
