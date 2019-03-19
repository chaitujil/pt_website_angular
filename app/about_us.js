'use strict';

angular.module('pacePtClinicApp.about_us', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about_us', {
    templateUrl: 'about_us.html',
    controller: 'AboutUsCtrl'
  });
}])

.controller('AboutUsCtrl', [function() {

}]);