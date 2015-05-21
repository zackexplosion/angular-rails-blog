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
//= require ui-router
//= require codemirror
//= require codemirror/modes/markdown
//= require angular-ui-codemirror

//= require_self
//= require_tree .

angular
.module('blog', [
    'ui.codemirror',
    'ui.router',
    'ngResource'
])
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
$urlRouterProvider.otherwise("/posts/list");
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

}])
