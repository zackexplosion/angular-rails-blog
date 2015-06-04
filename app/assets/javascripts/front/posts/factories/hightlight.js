angular
.module('blog')
.factory('HightlightCodes', 
[        '$timeout',
function( $timeout){
  var hightlight_codes = function(selector){
    var codes;
    if (selector == null){
      codes = document.querySelectorAll('pre code');
    }else{
      codes = document.querySelectorAll(selector);
    }
    
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