angular
.module('blog')
.controller('PostShowCrtl', 
[        '$rootScope', '$timeout', '$scope', 'POST', 
function( $rootScope,   $timeout,   $scope,   POST){
    $scope.post = POST;

    // var a = $scope.post.$promise.then(function(){
    //   debugger;  
    // });
    

    var hightlight_codes = function(){
      var codes = $('pre code');

      if(codes.length == 0){
        $timeout(function(){
          // debugger;
          hightlight_codes();
        });
        return;
      }
      
      codes.each(function(i, block) {
        hljs.highlightBlock(block);
      });
    }

    hightlight_codes();

    // $scope.$watch('post.contet',function(){
    //   debugger;
    // }, true)

    // $timeout(function(){
    //   // debugger;
    //   hightlight_codes();
    // });


    // angular.element(document).ready(function () {
    //   $('pre code').each(function(i, block) {
    //     console.log(block);
    //     hljs.highlightBlock(block);
    //   });
    // });

    // $rootScope.$on('$viewContentLoaded', function (event) {
    //   // console.log('lock & loaded')

    //   hightlight_codes();
    // });



    // var render_highlight = function(){
    //   codes.each(function(i, block) {
    //     console.log(block);
    //     hljs.highlightBlock(block);
    //   });
    // }

    // // var codes = $('pre code');
    // if(codes.length === 0){
    //   setTimeout(function(){
    //     render_highlight();
    //   });
    // }else{
    //   render_highlight()
    // }



}])