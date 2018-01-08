var app = angular.module('myApp',['ui.router']);
app.controller('myCtrl',function(){});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/first');
    $stateProvider
    .state('content_first',{
		url:'/first',
        views:{
            'commonHead':{
                templateUrl:'head.html'
            },
            'commonFoot':{
                templateUrl:'footer.html'
            },
            'commonContent':{
            	templateUrl:'content_first.html',
            	controller:firstController
            }
        }
    })
    .state('content_second',{
        url:'/second',
        views:{
            'commonHead':{
                templateUrl:'head.html'
            },
            'commonFoot':{
                templateUrl:'footer.html'
            },
            'commonContent':{
                templateUrl:'content_second.html',
                controller:secondController
            }
        }
    });
}]);