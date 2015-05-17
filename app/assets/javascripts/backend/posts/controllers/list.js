angular
.module('blog')
.controller('PostListCrtl', 
[         '$scope', 'POSTS', 
function( $scope,    POSTS){
    $scope.posts = []; 
    $scope.posts = POSTS.query();


    $scope.delete = function (post) {
        post.$remove().then(function(res){

        });
    }
}])