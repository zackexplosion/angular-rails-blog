angular
.module('blog')
.controller('PostShowCrtl', 
[         '$scope', 'POSTS', 
function( $scope,    POSTS){
   $scope.post = POSTS.get({postId:1});
}])