angular
.module('blog')
.controller('PostEditCrtl', 
[         '$scope', 'POST', 'imgur',
function( $scope,    POST,   imgur){
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