angular
.module('blog')
.controller('PostNewCrtl', 
[        'POSTS', '$state',
function( POSTS,   $state){
    var post = new POSTS;
    post.title = 'hello';
    post.content = 'hello world';
    post.$save().then(function(res){
        $state.go('posts.edit.editor',{id : res.id});
    });

}])