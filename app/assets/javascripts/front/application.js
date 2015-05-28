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

//= require highlightjs
//= require angular
//= require angular-resource
//= require angular-sanitize
//= require angularytics
//= require ui-router
//= require_self
//= require_tree .

angular
.module('blog', [
    'angularytics',
    'ngSanitize',
    'ui.router',
    'ngResource'
])
.config(['AngularyticsProvider', function(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
}])
.run(['Angularytics', function(Angularytics) {
    Angularytics.init();
}])
.run(
[        '$rootScope', '$http',
function( $rootScope,   $http){
    $rootScope.window = {
        width  : Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height : Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };

    // if( $rootScope.window.width >= 768){

    $rootScope.streaming = false;

    $rootScope.is_streaming = function(){
        return $rootScope.streaming;
    }

    var iframe = '<iframe src="http://www.twitch.tv/cstony0917/embed" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/cstony0917?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from csTony0917 on www.twitch.tv</a>';
    var wrapper = angular.element(document.querySelector('#livehouse .video-wrapper'))

    $http.jsonp('https://api.twitch.tv/kraken/streams/cstony0917?callback=JSON_CALLBACK').success(function(res){        
        var streaming = !(res.stream === null);
        $rootScope.changeLiveStatus(streaming);
    });


    $rootScope.changeLiveStatus = function(streaming){
        if(typeof streaming === 'undefined'){
            $rootScope.streaming = !$rootScope.streaming;
        }else{
            $rootScope.streaming = streaming;
        }            

        if(!$rootScope.streaming){
            wrapper.html('');
        }else{
            wrapper.html(iframe);
        }
    }
    // }
    
    
    // debugger;
}])
.constant('Path', {
    'template': '/templates?t=front'
})
.factory('SetTitle',[function(){
    var default_title = "Zack's Blog";
    var _title = angular.element( document.querySelector('title') );

    return function(title){
        if(typeof title === 'undefined'){
            _title.html(default_title);    
        }else{
            _title.html(title + ' | ' + default_title);
        }
        
    }
}])
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
$urlRouterProvider
.when('/p/show/:id', '/p/:id')
.when('/users/sign_in', function(){
    return;
})
.otherwise('/')

// .when('/p/show/:id', 
// [         '$state', 
// function ( $state ){
//     debugger;
// }]);


    // $urlRouterProvider
    //   .when('/app/list', ['$state', 'myService', function ($state, myService) {
    //         $state.go('app.list.detail', {id: myService.Params.id});
    // }])
// .otherwise("");
//
// Now set up the states
$stateProvider
.state('index', {
    url: '/',
    templateUrl: Path.template + "/posts/list.html",
    controller: 'PostListCrtl'
})
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
    url: "/:id",
    templateUrl: Path.template + "/posts/show.html",
    resolve   : {
        POST : ['POSTS', '$stateParams', function(POSTS, $stateParams){
            var id = $stateParams.id;
            return POSTS.get({postId:id}).$promise;
        }]
    },
    controller: 'PostShowCrtl'    
})

}])

