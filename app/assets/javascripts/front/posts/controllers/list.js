angular
.module('blog')
.controller('PostListCrtl', 
[        '$interval', 'SetTitle', '$scope', 'POSTS', 'HightlightCodes', 'LoadDisqus',
function( $interval,   SetTitle,   $scope,   POSTS,   HightlightCodes,   LoadDisqus){
    $scope.current_page = 1;
    $scope.posts = POSTS.query({page: $scope.current_page});


    SetTitle();  

    HightlightCodes();

    LoadDisqus();

    var load_next_page = $interval(function(){
        if ( window.outerHeight + document.body.scrollTop > document.body.offsetHeight){
            $scope.loadNextPage(load_next_page);
        }        
    }, 100);

    $scope.$on('$destroy', function(){
        // console.log('hello');
        $interval.cancel(load_next_page);
    });

    $scope.loadNextPage = function(load_next_page){

        $scope.current_page++;
        POSTS.query({page: $scope.current_page}).$promise.then(function(res){
            if (res.length === 0){
                $interval.cancel(load_next_page);
            }else{
                $scope.posts = $scope.posts.concat(res);
                var selector = '';

                for (var i = res.length - 1; i >= 0; i--) {
                    selector += '.post-' + res[i].id + ',';
                };

                selector = selector.substring(0,selector.length-1);

                HightlightCodes(selector);
            }            
        });
    }
}])