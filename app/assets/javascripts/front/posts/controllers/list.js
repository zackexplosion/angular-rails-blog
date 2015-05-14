angular
.module('blog')
.controller('PostListCrtl', 
[         '$scope', 'POSTS', 
function( $scope,    POSTS){
   $scope.posts = []; 
   $scope.posts = POSTS.query();
}])