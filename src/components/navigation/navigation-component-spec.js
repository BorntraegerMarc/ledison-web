import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('Navigation Component', () => {
    beforeEach(angular.mock.module(component.name));

    it('should pass the dummy test to verify the karma setup', () => {
        expect(true).toEqual(true);
    });
});
