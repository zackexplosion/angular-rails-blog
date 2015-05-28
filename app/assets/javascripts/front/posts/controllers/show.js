angular
.module('blog')
.controller('PostShowCrtl', 
[        'SetTitle', 'HightlightCodes', '$scope', 'POST', 
function( SetTitle,   HightlightCodes,   $scope,   POST){
    $scope.post = POST;

    SetTitle(POST.title);

    HightlightCodes();

    $scope.edit = function(p){
        var url = '/backend/#/posts/edit/' + p.id;
        window.open(url);
    }


    /*
    #################################
    ##########    disqus   ##########
    #################################
    */
    
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'zackexplosion';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

}])