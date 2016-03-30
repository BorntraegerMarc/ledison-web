function deCh($translateProvider) {
    $translateProvider.translations('de-ch', {
        navigationComponent: {
            navigation: 'Navigation',
            home: 'Home'
        }
    });
}

export default [
    '$translateProvider',
    deCh
];
