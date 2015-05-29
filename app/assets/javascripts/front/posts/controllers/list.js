angular
.module('blog')
.controller('PostListCrtl', 
[        'SetTitle', '$scope', 'POSTS', 'HightlightCodes', 'LoadDisqus',
function( SetTitle,   $scope,   POSTS,   HightlightCodes,   LoadDisqus){
   $scope.posts = POSTS.query();

   SetTitle();  

   HightlightCodes();

   LoadDisqus();
}])