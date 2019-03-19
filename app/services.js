'use strict';

angular.module('pacePtClinicApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services.html',
    controller: 'ServicesCtrl'
  });
}])

.controller('ServicesCtrl', [function() {

}]);