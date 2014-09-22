(function (ng){
  var
  /**
   * routing config
   * @param  {angular injection} routeProvider [description]
   */
  configurater = function(routeProvider){
    routeProvider
      .when('/home', {
        templateUrl: 'partials/homePage.html',
        controller: 'homeControl'
      })
      .when('/noteManagement', {
        templateUrl: 'partials/noteManPage.html',
        controller: 'noteControl'
      })
      .when('/statusManagement', {
        templateUrl: 'partials/statManPage.html',
        controller: 'statusControl'
      })
      .when('/log', {
        templateUrl: 'partials/logPage.html',
        controller: 'logControl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  },

  /**
   * routing initializer
   */
  init = function(){
    ng
      .module('router',['main','ngRoute','NoteFilter'])
      .config(['$routeProvider', configurater]);
  }
  ;
  return {init: init};
})(window.angular).init();