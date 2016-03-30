function deCh($translateProvider) {
    $translateProvider.translations('de-ch', {
        'navigation-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    deCh
];
