/*

    Filename:       app/crimes-list/crime-list.module.js
    Description:    Creates the crimesList module which is then injected into the crimesViewerApp using dependancy injection.
                    A pagination directive is also added into this module as a dependancy.
*/

angular.module('crimesList', [
    'angularUtils.directives.dirPagination'
]);