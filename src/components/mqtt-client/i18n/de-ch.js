function deCh($translateProvider) {
    $translateProvider.translations('de-ch', {
        'mqtt-client-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    deCh
];
