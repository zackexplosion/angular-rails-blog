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
// require jquery
// require jquery_ujs
//= require ui-router
//= require_self
//= require_tree .

angular
.module('blog', [
    'ngSanitize',
    'ui.router',
    'ngResource'
])
.constant('Path', {
    'template': '/templates?t=front'
})
.factory('LoadingInterceptor', 
[       '$rootScope', 
function($rootScope){
    $rootScope.loading = true;

    return {
        'request': function(config) {
            $rootScope.loading = true;
            return config;
        },
        'response': function(response) {
            $rootScope.loading = false;
            return response;
        }
    };
}])
.config(
[       '$locationProvider', '$httpProvider',
function($locationProvider,   $httpProvider) {    
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('LoadingInterceptor');
}])
.config(
[       '$stateProvider', '$urlRouterProvider', 'Path',
function($stateProvider,   $urlRouterProvider,   Path) {
//
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/p/list");
//
// Now set up the states
$stateProvider
.state('posts', {
    abstract : true,
    url: '/p',
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
    resolve   : {
        POST : ['POSTS', '$stateParams', function(POSTS, $stateParams){
            var id = $stateParams.id;
            return POSTS.get({postId:id});
        }]
    },
    controller: 'PostShowCrtl'    
})

}])
