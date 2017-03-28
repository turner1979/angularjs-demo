
angular
    .module('crimesList')
    .component('crimesList', {
        templateUrl: 'components/crimes-list/crimes-list.template.html',
        controller: function CrimesListController($http) {

            var self = this;

            $http.get('data/crimes.json').then(function(response) {
                self.crimes = response.data;
            });
            
        }
    });