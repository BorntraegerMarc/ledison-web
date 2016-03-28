import Paho from 'mqtt';

class MqttClientComponentController {
    constructor() {
        this.client = new Paho.MQTT.Client('m21.cloudmqtt.com', Number(31486), 'doelwjui');
        this.client.onConnectionLost = this.onConnectionLost;
        this.client.onMessageArrived = this.onMessageArrived;
        this.client.connect({
            onSuccess: this.onConnect,
            useSSL: true,
            userName: 'web',
            password: 'web',
            invocationContext: this
        });
    }

    onConnectionLost(responseObject) {
        console.log(responseObject);
    }

    onMessageArrived(message) {
        console.log('Received: ' + message.payloadString);
    }

    onConnect(context) {
        console.log('connected!');
        context.invocationContext.client.subscribe(context.invocationContext.path);
    }
}

export default [
    MqttClientComponentController
];
