angular
.module('blog')
.controller('PostShowCrtl', 
[        '$rootScope', '$timeout', '$scope', 'POST', 
function( $rootScope,   $timeout,   $scope,   POST){
    $scope.post = POST;   

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
    hightlight_codes();

}])