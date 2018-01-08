var app = angular.module('myApp',['ui.router']);
app.controller('myCtrl',function(){});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/topic','/first');//topic页面为公共头尾部分 但是并没有内容所以需要重定向页面
    $urlRouterProvider.otherwise('/first');
    //这里嵌套一层ui-view子视图来进行页面切换   尝试用views 和 template及相关属性好像并不能同时使用，所以我们尝试使用嵌套来进行视图切换
    $stateProvider
    .state('topic',{
		url:'/topic',
        views:{
            'commonHead':{
                templateUrl:'head.html'
            },
            'commonFoot':{
                templateUrl:'footer.html'
            },
            'commonContent':{
              template:'<div><div ui-view></div></div>' 
            }    
        }
    })
    .state('topic.content_first',{
        url:'^/first',
        templateUrl:'content_first.html',
        controller:firstController
    })
    .state('topic.content_second',{
        url:'^/second',
        templateUrl:'content_second.html',
        controller:secondController
    })
    
}]);