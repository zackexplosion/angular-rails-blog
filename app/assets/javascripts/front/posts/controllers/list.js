angular
.module('blog')
.controller('PostListCrtl', 
[        'SetTitle', '$scope', 'POSTS', 'HightlightCodes',
function( SetTitle,   $scope,   POSTS,   HightlightCodes){
   $scope.posts = POSTS.query();

   SetTitle();  

   HightlightCodes();
}])