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

  noteManagePageUiOption = {},

  /**
   * the controller for the note management page
   * @param  {angular injection} $scope the scope
   */
  noteManagePageControl = function($scope){
    var
    action = $routeParams.action;
    _.extend($scope, {
      uiOption: notManagePageUiOption
    });
  },
  
  statManagePageUiOption = {},

  /**
   * the controller for the status management page
   * @param  {angular injection} $scope the scope
   */
  statManagePageControl = function($scope){
    var
    action = $routeParams.action;
    _.extend($scope, {
      uiOption: statManagePageUiOption
    });
  },

  logPageUiOption = {},

  /**
   * the controller for the log page
   * @param  {angular injection} $scope the scope
   */
  logPageControl = function($scope){
    var
    action = $routeParams.action;
    _.extend($scope, {
      uiOption: logPageUiOption
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
      .controller('noteManagePageControl', ['$scope', noteManagePageControl])
      .controller('statManagePageControl', ['$scope', statManagePageControl])
      .controller('logPageControl', ['$scope', logPageControl]);
  }
  ;
  return {init: init};
})(window.angular, window._).init();
