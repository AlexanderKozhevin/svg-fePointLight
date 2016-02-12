var app = angular.module('BlankApp', ['ngMaterial', 'mdColorPicker']);


//
// Main directive which takes data and set proper values in svg filter
//
app.directive('lightElement', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: 'filter.svg',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

          var temp = element[0].querySelector('#light');
          var light = angular.element(temp)

          var temp = element[0].querySelector('#gauss');
          var gauss = angular.element(temp)

          var temp = element[0].querySelector('#source');
          var source = angular.element(temp)

          var temp = element[0].querySelector('#rectobject');
          var rect = angular.element(temp)


          scope.init = function(){
            light.attr("x", ngModel.$viewValue.x);
            light.attr("y", ngModel.$viewValue.y);
            light.attr("z", ngModel.$viewValue.z);

            source.attr("surfaceScale", ngModel.$viewValue.surface);
            source.attr("specularConstant", ngModel.$viewValue.constant);
            source.attr("specularExponent", ngModel.$viewValue.exp);

            source.attr("lighting-color", ngModel.$viewValue.light);
            rect.attr("fill", ngModel.$viewValue.square);

            gauss.attr("stdDeviation", ngModel.$viewValue.blur);


          }

          ngModel.$render(function(){
            scope.init()
          })


          scope.$watch(attrs.ngModel, function() {
            scope.init()
          }, true);


        }
    }
});




app.controller('AppCtrl', function($scope, $timeout){

  $scope.data = {
    x: 150,
    y: 100,
    z: 200,
    surface: 6,
    constant: 1,
    exp: 30,
    blur: 20,
    light: "rgba(255,255,255,1)",
    square: "rgba(0,0,0,1)"
  }

})
