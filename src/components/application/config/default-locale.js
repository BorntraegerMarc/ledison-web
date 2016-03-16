function defaultLanguageConfig($translateProvider) {
    $translateProvider.preferredLanguage('en-us');
}

export default [
    '$translateProvider',
    defaultLanguageConfig
];
