angular
.module('blog')
.controller('PostEditorCrtl', 
[        '$scope', 'POST', 'imgur',
function( $scope,   POST,   imgur){  
    $scope.editorOptions = {
        styleActiveLine: true,
        lineWrapping : true,
        lineNumbers: true,
        autofocus: true,
        mode: 'markdown',
    };


}])