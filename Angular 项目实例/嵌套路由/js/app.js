var app = angular.module('myApp',['ui.router']);
app.controller('myCtrl',function(){});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/first');
    $stateProvider
    .state('content_first',{
		url:'/first',
        template:"<div style='background:red;font-size:20px;font-weight:bold;color:white;'>parent"+'<div ui-view><div>'// 子View +'</div>'
    })
    .state('content_first.child',{
        url:'/second',
        template:"<div style='background:red;font-size:20px;font-weight:bold;color:white;'>this is content_first child view </div>"
    });
}]);