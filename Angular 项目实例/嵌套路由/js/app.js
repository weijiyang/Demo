var app = angular.module('newActivity',['ui.router','ai.basic','CommontHead','CommonFoot','ai.loading']);
app.controller('myCtrl',["$scope","$CommonTitleSrv",function($scope,$CommonTitleSrv){
}]);

app.config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider,$scope) {
	$urlRouterProvider.otherwise('/mgmb');
	$stateProvider.state('mgmb',{
		url:'/mgmb',
        views:{
            'commonHead':{
                templateUrl:'/views/common/commonHead.html'
            },
            'commonFoot':{
                templateUrl:'/views/common/commonFoot.html'
            },
            'activeContent':{
            	templateUrl:'view/mgMb/index.html',
            	controller:mgmbController
            }
        }
    });
	$httpProvider.interceptors.push("$httpInterceptor");
	$httpProvider.defaults.transformRequest = function (data) {
		if (data === undefined) {
			return data;
		}
		return $.param(data);
	};
	$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
}]);