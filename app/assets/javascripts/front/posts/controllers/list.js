angular
.module('blog')
.controller('PostListCrtl', 
[        '$rootScope', 'SetTitle', '$scope', 'POSTS', 'HightlightCodes', 'LoadDisqus',
function ($rootScope,   SetTitle,   $scope,   POSTS,   HightlightCodes,   LoadDisqus){
    
    // $scope.posts = POSTS.query({page: $scope.current_page});


    SetTitle();  

    HightlightCodes();

    LoadDisqus();

    

    // $scope.$on('$destroy', function(){
    //     // console.log('hello');
    //     $interval.cancel(load_next_page);
    // });

    $scope.loading_next = true;
    $scope.current_page = 1;
    $scope.posts        = [];

    ($scope.loadNextPage = function(load_next_page){        
        $scope.loading_next = true;

        var promise = POSTS.query({page: $scope.current_page}).$promise;
        promise.then(function(res){            
            $scope.current_page++;
            
            if (res.length === 0){
                $scope.loading_next = false;
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

        return promise;
    })();

    $rootScope.$on('scrollToBottom', function(){      
      if ( $rootScope.zackexplosion_loading  || $scope.loading_next === false) return;

      $scope.loadNextPage();
    });
}])