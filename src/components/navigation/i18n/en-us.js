function enUs($translateProvider) {
    $translateProvider.translations('en-us', {
        navigationComponent: {
            navigation: 'Navigation',
            home: 'Home'
        }
    });
}

export default [
    '$translateProvider',
    enUs
];
