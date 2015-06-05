angular
.module('blog')
.factory('POSTS', ['$resource', function($resource){
    return $resource('/posts/:postId.json', {postId:'@id'});
}])