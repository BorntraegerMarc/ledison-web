function enUs($translateProvider) {
    $translateProvider.translations('en-us', {
        'mqtt-client-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    enUs
];
