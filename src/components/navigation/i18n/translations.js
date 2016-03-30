import angular from 'angular';
import 'angular-translate';
import enUs from './en-us';
import deCh from './de-ch';

const dependencies = [
    'pascalprecht.translate'
];

export default angular
    .module('navigation-component-translations', dependencies)
    .config(enUs)
    .config(deCh);
