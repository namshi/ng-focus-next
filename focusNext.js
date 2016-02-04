(function () {
  'use strict';

  angular.module('focus-next', []).directive('focusNext', function () {
    return {
      restrict: 'A',
      link:     function ($scope, elem) {

        elem.bind('keypress', function (e) {
          var code = e.keyCode || e.which;

          if (code === 13) {
            e.preventDefault();
            elem.next().focus();
          }
        });
      }
    }
  });
})();
