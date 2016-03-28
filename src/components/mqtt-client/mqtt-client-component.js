import template from './mqtt-client-component.html!text';

export default {
    bindings: {
        path: '<'
    },
    bindToController: true,
    controller: 'MqttClientComponentController',
    require: {},
    template: template
};
