/*

    Filename:       app/app-header/app-header.component.js
    Description:    Creates the appHeader component, which comprises of a templateUrl reference and the component controller

*/

appHeader.component('appHeader', {
    templateUrl: 'components/app-header/app-header.template.html',
    controller: function AppHeaderController() {

        // create component scoped variables
        var self = this; 
        self.title = 'Crimes Viewer App';
        self.author = 'Scott Turner'

    }
});