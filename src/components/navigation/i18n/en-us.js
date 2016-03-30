function enUs($translateProvider) {
    $translateProvider.translations('en-us', {
        'navigation-component.foo': 'bar'
    });
}

export default [
    '$translateProvider',
    enUs
];
