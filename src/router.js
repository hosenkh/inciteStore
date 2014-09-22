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