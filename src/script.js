;(function (ng, _, undefined){
  var
  viewNoteUiOption = {
    tags: [{id: 0, active: false, name: 'دانشگاه'}, {id: 1, active: true, name: 'منزل'}, {id: 2, active: true, name: 'مسیر'}],
    notes: [{text: 'از دانشگاه', activeTags: [0], passiveTags: [2]},{text: 'از منزل', activeTags: [1], passiveTags: [0]}]
  },


  /**
   * the controller for the viewNote page
   * @param  {angular injection} $scope the scope
   */
  viewNoteControl = function($scope){
    _.extend($scope, {
      uiOption: viewNoteUiOption
    });
  },

  /**
   * app initializer
   * @return {[type]} [description]
   */
  init = function(){
    ng
      .module('main', [])
      .controller('viewNoteControl', ['$scope', viewNoteControl]);
  }
  ;
  return {init: init};
})(window.angular, window._).init();
