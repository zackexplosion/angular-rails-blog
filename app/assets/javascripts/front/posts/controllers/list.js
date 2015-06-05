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

    $scope.loading_next = false;
    var load_next_page = $interval(function(){
        // var threshold = window.outerHeight + document.body.scrollTop;

        // cross browser offset height
        // http://stackoverflow.com/questions/3012668/get-the-window-height

        var window_height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 

        var threshold = window_height + window.pageYOffset;
        
        var offset_height = document.body.offsetHeight * 0.9;

        // minimal offset_height
        if( offset_height < window_height) offset_height = window_height;

        // console.log('threshold : ' + threshold);
        // console.log('offset_height : ' + offset_height);

        if ( threshold > offset_height && $scope.loading_next === false){
            $scope.loadNextPage(load_next_page);
        }        
    }, 1);

    $scope.$on('$destroy', function(){
        // console.log('hello');
        $interval.cancel(load_next_page);
    });

    $scope.loadNextPage = function(load_next_page){

        $scope.current_page++;
        $scope.loading_next = true;
        POSTS.query({page: $scope.current_page}).$promise.then(function(res){
            $scope.loading_next = false;
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