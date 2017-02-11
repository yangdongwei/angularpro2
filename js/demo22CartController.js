app.controller("cartController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){

		var login = localStorage.getItem("isLogin");
		if(login=="ok"){
			alert("adada")
		}else{
			$location.url("/login");
		}
}]);