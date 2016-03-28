import angular from 'angular';
import 'angular-translate';
import translationsModule from './i18n/translations';
import MqttClientComponentController from './mqtt-client-component-controller';
import mqttClientComponent from './mqtt-client-component';

const dependencies = [
    'pascalprecht.translate',
    translationsModule.name
];

export default angular
    .module('mqtt-client-component', dependencies)
    .controller('MqttClientComponentController', MqttClientComponentController)
    .component('mqttClient', mqttClientComponent);
