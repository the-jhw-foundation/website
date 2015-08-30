(function (){

	var app = angular.module('jhwapplication', ['ngRoute']);

	 // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            //
            .when('/', {
                templateUrl : '/views/homePage.html',
            })
            .when('/homily', {
                templateUrl : '/views/homily.html',
            })

    });


	//Navigation Directive
	app.directive('navigationBar', function (){
		return {
			restrict: 'E',
			templateUrl: '/views/navigation.html',
			controller: [ '$http', function($http){
				var navigationItems = this.navigationItems;
				$http.get('~/data/nagivationItems.json').success(function(data){
					navigationItems = data;
				});
				console.log(navigationItems);
			}],
			controllerAs: 'navItems'
		};
	});

	// app.controller('NavigationController', [ '$http', function($http){
	// 	var navigationItems = this.navigationItems;
	// 	$http.get('~/datasource/nagivationItems.json').success(function(data){
	// 		navigationItems = data;
	// 	});
	// 	console.log(navigationItems);
	// }]);
})();