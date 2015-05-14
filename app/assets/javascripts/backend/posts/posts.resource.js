angular
.module('blog')
.factory('POSTS', ['$resource', function($resource){
    return $resource('/backend/posts/:postId.json', {postId:'@id'});
}])

