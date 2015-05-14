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
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require ui-router
//= require_tree .

angular
.module('blog', [
    'ui.router',
    'ngResource'
])
.config(
[       '$stateProvider', '$urlRouterProvider',
function($stateProvider,   $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/posts");
//
// Now set up the states
$stateProvider
.state('posts', {
    url: "/posts",
    template: "<h1>hello</h1>"
    // templateUrl: "partials/state1.html"
})

}])
