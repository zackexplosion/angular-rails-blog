angular
.module('blog')
.controller('PostShowCrtl', 
[        'SetTitle', 'HightlightCodes', '$scope', 'POST', 'LoadDisqus',
function( SetTitle,   HightlightCodes,   $scope,   POST,   LoadDisqus){
    $scope.post = POST;

    SetTitle(POST.title);

    HightlightCodes();

    $scope.edit = function(p){
        var url = '/backend/#/posts/edit/' + p.id;
        window.open(url);
    }

    LoadDisqus();

    /*
    #################################
    ##########    disqus   ##########
    #################################
    */
    

}])