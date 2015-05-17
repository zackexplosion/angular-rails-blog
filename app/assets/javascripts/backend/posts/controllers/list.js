angular
.module('blog')
.controller('PostListCrtl', 
[         '$scope', 'POSTS', 
function( $scope,    POSTS){
    $scope.posts = []; 
    $scope.posts = POSTS.query();


    $scope.delete = function (post) {
        var mes = '確定要刪除 ' + post.title + ' 嗎?';
        
        if(!confirm(mes)) return;

        post.$remove().then(function(res){
            var index = $scope.posts.indexOf(post);
            $scope.posts.splice(index, 1);
        });
    }
}])