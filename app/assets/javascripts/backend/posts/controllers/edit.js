angular
.module('blog')
.controller('PostEditCrtl', 
[         '$scope', 'POSTS', 
function( $scope,    POSTS){
   $scope.post = POSTS.get({postId:1});

    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
    };

    $scope.save = function () {
        $scope.post.$save();        
    }
}])