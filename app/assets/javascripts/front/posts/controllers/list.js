angular
.module('blog')
.controller('PostListCrtl', 
[        '$rootScope', '$scope', 'POSTS', 
function( $rootScope,   $scope,   POSTS){
   $scope.posts = POSTS.query();
   
   $rootScope.title = '';
}])