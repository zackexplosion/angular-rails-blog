angular
.module('blog')
.controller('PostListCrtl', 
[        '$rootScope', '$scope', 'POSTS', 'HightlightCodes',
function( $rootScope,   $scope,   POSTS,   HightlightCodes){
   $scope.posts = POSTS.query();
   
   $rootScope.title = '';

   HightlightCodes();
}])