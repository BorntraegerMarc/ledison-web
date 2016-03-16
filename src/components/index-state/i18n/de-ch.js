function deCh($translateProvider) {
    $translateProvider.translations('de-ch', {
        foo: 'bar'
    });
}

export default [
    '$translateProvider',
    deCh
];
