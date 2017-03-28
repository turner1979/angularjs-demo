
angular
    .module('crimesList')
    .component('crimesList', {
        templateUrl: 'components/crimes-list/crimes-list.template.html',
        controller: function CrimesListController($http) {

            // create component scoped variables
            var self            = this;
            self.currentPage    = 1;
            self.pageSize       = 5;
            self.category       = null;
            self.month          = null;

            // use $http to retrieve dummy data from crimes.json and on return of promise set to local scope of component 
            $http.get('data/crimes.json').then(function(response) {
                self.crimes = response.data;
                self.totalPages = response.data.length / self.pageSize;
            });

            self.pageChangeHandler = function(num) {
                console.log('on page ' + num);
            };

        }
    });