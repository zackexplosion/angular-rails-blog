angular
.module('blog')
.factory('HightlightCodes', 
[        '$timeout',
function( $timeout){
  var hightlight_codes = function(){
    var codes = document.querySelectorAll('pre code');      
    if(codes.length === 0){
      $timeout(function(){
        // debugger;
        hightlight_codes();
      });
      return;
    }
    angular.forEach(codes,function(block){
      hljs.highlightBlock(block);
    })
  }

  return hightlight_codes;
}])