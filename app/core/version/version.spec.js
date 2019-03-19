'use strict';

describe('pacePtClinicApp.version module', function() {
  beforeEach(module('pacePtClinicApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
