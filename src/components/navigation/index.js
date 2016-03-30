import './navigation-component.css!';
import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import NavigationComponentController from './navigation-component-controller';
import navigationComponent from './navigation-component';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('navigation-component', dependencies)
    .controller('NavigationComponentController', NavigationComponentController)
    .component('navigation', navigationComponent);
