'use strict';

angular.module('pacePtClinicApp.version', [
  'pacePtClinicApp.version.interpolate-filter',
  'pacePtClinicApp.version.version-directive'
])

.value('version', '0.1');
