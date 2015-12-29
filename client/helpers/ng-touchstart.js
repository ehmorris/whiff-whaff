angular.module("whiffWhaff").directive("ngTouchstart", function() {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);

      function onTouchStart(event) {
        var method = $element.attr('ng-touchstart');
        event.preventDefault();
        $scope.$apply(method);
      }
    }
  };
});
