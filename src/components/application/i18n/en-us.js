function enUs($translateProvider) {
    $translateProvider.translations('en-us', {
        projectTitle: 'Project Ledison'
    });
}

export default [
    '$translateProvider',
    enUs
];
