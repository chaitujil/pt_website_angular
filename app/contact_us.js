'use strict';

angular.module('pacePtClinicApp.contact_us', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact_us', {
    templateUrl: 'contact_us.html',
    controller: 'ContactUsCtrl'
  });
}])

.controller('ContactUsCtrl', [function() {

}]);