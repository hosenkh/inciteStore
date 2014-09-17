(function (_, ng){
  var
  /**
   * the main filter function
   * @param  {Array} notes the array to be filtered
   * @param  {Array} tags  the array in which there is information how to filter notes
   * @return {Array}       filtered notes
   */
  noteFilter = function (notes, tags){
    if (notes.length > 0){
      return _.filter (notes, function(note){
        var
        activeTagsAreActive = true,
        passiveTagsArePassive = true;
        _.each(note.activeTags, function(tagId){
          activeTagsAreActive = activeTagsAreActive && tags[tagId]['active'];
        });
        _.each(note.passiveTags, function(tagId){
          passiveTagsArePassive = passiveTagsArePassive && !tags[tagId]['active'];
        });
        return activeTagsAreActive && passiveTagsArePassive;
      });
    }
  },

  /**
   * filter setup
   * @return {Function} the filter function
   */
  noteFilterSetup = function(){
    return noteFilter;
  },

  /**
   * introduce noteFilter the function as an angular filter
   * @return {[type]} [description]
   */
  init = function(){
    ng
      .module('NoteFilter', [])
      .filter('noteFilter', [noteFilterSetup]);
  }
  ;
  return {init: init};
})(window._, window.angular).init();