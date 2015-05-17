angular
.module('blog')
.controller('PostShowCrtl', 
[        '$scope', 'POST', 
function( $scope,   POST){
   $scope.post = POST;
}])