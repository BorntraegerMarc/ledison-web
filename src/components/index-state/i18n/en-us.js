function enUs($translateProvider) {
    $translateProvider.translations('en-us', {
        foo: 'bar'
    });
}

export default [
    '$translateProvider',
    enUs
];
