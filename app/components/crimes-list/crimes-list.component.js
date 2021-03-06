/*

    Filename:       app/crimes-list/crime-list.component.js
    Description:    Creates the crimesList component, which comprises of a templateUrl reference and the component controller

*/

crimesList.component('crimesList', {
    templateUrl: 'components/crimes-list/crimes-list.template.html',
    controller: function CrimesListController($http) {

        // create component scoped variables
        var self            = this;
        self.currentPage    = 1;
        self.pageSize       = 20;

        self.monthFilters = [
            { name : 'November 2016', value : '2016-11' },
            { name : 'December 2016', value : '2016-12' }
        ];

        self.categoryFilters = [
            { name : 'Anti Social Behaviour', value : 'anti-social-behaviour' },
            { name : 'Other Crime', value : 'other-crime' },
            { name : 'Shoplifting', value : 'shoplifting' },
            { name : 'Theft From The Person', value : 'theft-from-the-person' },
            { name : 'Violent Crime', value : 'violent-crime' }
        ];

        // use $http to retrieve dummy data from crimes.json and on return of promise set to local scope of component 
        $http.get('data/crimes.json').then(function(response) {
            self.crimes = response.data;
        });

        self.sortMonth = function(){
            self.monthOrder === 'month' ? self.monthOrder = '-month' : self.monthOrder = 'month';
        }  

    }
});