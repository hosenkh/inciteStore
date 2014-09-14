;(function (ng, _, undefined){
  var
  viewNoteUiOption = {
    tags: [{id: 0, active: false, name: 'دانشگاه'}, {id: 1, active: true, name: 'منزل'}],
    liveNotes: [{text: 'از دانشگاه', tags: [1,2,3]},{text: 'از منزل', tags: [2,3,4]}]
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
