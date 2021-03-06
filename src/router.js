(function (ng){
  var
  /**
   * routing config
   * @param  {angular injection} routeProvider [description]
   */
  configurater = function(routeProvider){
    routeProvider
      .when('/viewNote', {
        templateUrl: 'partials/viewNote.html',
        controller: 'viewNoteControl'
      })
      .when('/management/:action', {
        templateUrl: 'partials/management.html',
        controller: 'managePageControl'
      })
      .otherwise({
        redirectTo: '/viewNote'
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