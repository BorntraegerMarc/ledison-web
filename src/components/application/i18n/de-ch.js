function deCh($translateProvider) {
    $translateProvider.translations('de-ch', {
        projectTitle: 'Project Ledison'
    });
}

export default [
    '$translateProvider',
    deCh
];
