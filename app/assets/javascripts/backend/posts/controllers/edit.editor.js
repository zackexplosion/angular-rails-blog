angular
.module('blog')
.controller('PostEditorCrtl', 
[        '$scope', 'POST', 'imgur',
function( $scope,   POST,   imgur){  
    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'markdown'
    };
}])