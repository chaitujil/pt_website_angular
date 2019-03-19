'use strict';

angular.module('pacePtClinicApp.appointment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/appointment', {
    templateUrl: 'appointment.html',
    controller: 'AppointmentCtrl'
  });
}])

.controller('AppointmentCtrl', [function() {

}]);