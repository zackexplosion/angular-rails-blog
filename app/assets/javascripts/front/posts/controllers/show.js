angular
.module('blog')
.controller('PostShowCrtl', 
[        '$rootScope', 'HightlightCodes', '$scope', 'POST', 
function( $rootScope,   HightlightCodes,   $scope,   POST){
    $scope.post = POST;

    $rootScope.title = POST.title + ' | ';

    HightlightCodes();

}])