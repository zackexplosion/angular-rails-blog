angular
.module('blog')
.controller('PostEditCrtl', 
[         '$scope', 'POST', '$state', 'imgur',
function( $scope,    POST,   $state,   imgur){
   $scope.post = POST;

    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
    };

    $scope.preview = function(){
        $scope.post.$save().then(function(res){
            $state.go('^.preview');
        });
    }

    $scope.save = function () {
        $scope.post.$save();
    }
}])