;(function (ng, _, undefined){
  var
  homePageUiOption = {
    tags: [{id: 0, active: false, name: 'دانشگاه'}, {id: 1, active: true, name: 'منزل'}, {id: 2, active: true, name: 'مسیر'}],
    notes: [{text: 'از دانشگاه', activeTags: [0], passiveTags: [2]},{text: 'از منزل', activeTags: [1], passiveTags: [0]}]
  },


  /**
   * the controller for the homePage page
   * @param  {angular injection} $scope the scope
   */
  homePageControl = function($scope){
    _.extend($scope, {
      uiOption: homePageUiOption
    });
  },

  managePageUiOption = {},

  /**
   * the controller for the management page
   * @param  {angular injection} $scope the scope
   */
  managePageControl = function($scope, $routeParams){
    var
    action = $routeParams.action;
    _.extend($scope, {
      uiOption: managePageUiOption
    });
  },

  /**
   * app initializer
   * @return {[type]} [description]
   */
  init = function(){
    ng
      .module('main', ['ngRoute'])
      .controller('homeControl', ['$scope', homePageControl])
      .controller('managePageControl', ['$scope', '$routeParams', managePageControl]);
  }
  ;
  return {init: init};
})(window.angular, window._).init();
