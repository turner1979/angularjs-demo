/*

    Filename:       app/crimes-list/crime-list.component.js
    Description:    Creates the crimesList component, which comprises of a templateUrl reference and the component controller

*/

angular
    .module('crimesList')
    .component('crimesList', {
        templateUrl: 'components/crimes-list/crimes-list.template.html',
        controller: function CrimesListController($http) {

            // create component scoped variables
            var self            = this;
            self.currentPage    = 1;
            self.pageSize       = 5;
            self.category       = '';
            self.month          = '';
            self.monthOrder     = 'month';

            // use $http to retrieve dummy data from crimes.json and on return of promise set to local scope of component 
            $http.get('data/crimes.json').then(function(response) {
                self.crimes = response.data;
            });

            self.sortMonth = function(){
                self.monthOrder === 'month' ? self.monthOrder = '-month' : self.monthOrder = 'month';
            }  

        }
    });