// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require ng-imgur.js
//= require ui-router
//= require codemirror
//= require codemirror/modes/markdown
//= require angular-ui-codemirror

//= require_self
//= require_tree .

angular
.module('blog', [
    'ngImgur',
    'ui.codemirror',
    'ui.router',
    'ngResource'
])
.run(
[        '$rootScope', '$state',
function( $rootScope,   $state){
    
    $rootScope.isActive = function(token){
        var path = $state.current.name;
        var m = path.indexOf(token) != -1;        
        return m;
    }
}])
.constant('Path', {
    'template': '/templates?t=backend'
})
.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name=csrf-token]').content;
}])
.config(
[       '$stateProvider', '$urlRouterProvider', 'Path',
function($stateProvider,   $urlRouterProvider,   Path) {
//
// For any unmatched url, redirect to /state1
$urlRouterProvider
.when('/posts/edit/:id','/posts/edit/:id/editor')
.otherwise("/posts/list");
//
// Now set up the states
$stateProvider
.state('posts', {
    abstract : true,
    url: '/posts',
    template: '<ui-view></ui-view>'
})
.state('posts.list', {
    url: "/list",
    templateUrl: Path.template + "/posts/list.html",
    controller: 'PostListCrtl'
})
.state('posts.show', {
    url: "/show/:id",
    templateUrl: Path.template + "/posts/show.html",
    controller: 'PostShowCrtl'    
})
.state('posts.new', {
    url: "/new",
    controller: 'PostNewCrtl'
})
.state('posts.edit', {
    url: "/edit/:id",
    templateUrl: Path.template + "/posts/edit.html",
    resolve   : {
        POST : ['POSTS', '$stateParams', function(POSTS, $stateParams){
            var id = $stateParams.id;
            // debugger;
            return POSTS.get({postId:id});
        }]
    },
    controller: 'PostEditCrtl'    
})
.state('posts.edit.editor', {
    url: "/editor",
    // templateUrl: Path.template + "/posts/edit.html",
    template   : '<ui-codemirror ng-model="post.content" ui-codemirror-opts="editorOptions"></ui-codemirror>',
    controller : 'PostEditorCrtl'
})
.state('posts.edit.preview', {
    url: "/preview",
    templateUrl: Path.template + "/posts/edit.preview.html",
    // template   : '<ui-codemirror ng-model="post.content" ui-codemirror-opts="editorOptions"></ui-codemirror>',
    controller : 'PostPreviewCrtl'
})


}])
