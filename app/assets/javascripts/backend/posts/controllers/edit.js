angular
.module('blog')
.controller('PostEditCrtl', 
[         '$scope', 'POST', 
function( $scope,    POST){
   $scope.post = POST;

    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
    };

    $scope.save = function () {
        $scope.post.$save();        
    }
}])