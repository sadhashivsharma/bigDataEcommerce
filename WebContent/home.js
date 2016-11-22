var app = angular.module("app", ["ngRoute"]);  
           
//Controller Part  
app.controller("homeController", function($scope, $http) {  
   
         
$scope.message = "Big Data";
/* $http({
			method : method,
			url : url,  
			data : angular.toJson($scope.countryForm),  
			headers : {  
			    'Content-Type' : 'application/json'  
			}  
		}).then( _success, _error );  
}; */ 
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home/home.htm"
    })
    .when("/home", {
        templateUrl : "home/home.htm"
    });
});