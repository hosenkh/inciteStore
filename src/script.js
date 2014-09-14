(function (ng, _, undefined){
  var
  
  /**
   * the controller for the main page
   * @param  {angular injection} $scope the scope
   */
  mainController = function($scope){
    _.extend($scope, {});
  },

  /**
   * app initializer
   * @return {[type]} [description]
   */
  init = function(){
    ng
      .module('main', [])
      .controller('mainControl', ['$scope', mainController]);
  }
  ;
  return {init: init};
})(window.angular, window._).init();
