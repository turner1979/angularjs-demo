
angular
    .module('crimesList')
    .component('crimesList', {
        template:   '<ul>' +
                    '   <li ng-repeat="crime in $ctrl.crimes">{{ crime.name }} happened on {{ crime.date }}</li>' +
                    '</ul>',
        controller: function CrimesListController() {
            this.crimes = [
                { name : 'Theft', date: '01/05/2016' },
                { name : 'Arson', date: '10/05/2016' },
                { name : 'Anti Social Behaviour', date: '20/05/2016' }
            ]
        }
    });