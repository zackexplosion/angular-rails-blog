angular
.module('blog')
.controller('PostShowCrtl', 
[        '$rootScope', 'HightlightCodes', '$scope', 'POST', 
function( $rootScope,   HightlightCodes,   $scope,   POST){
    $scope.post = POST;

    $rootScope.title = POST.title + ' | ';

    HightlightCodes();




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