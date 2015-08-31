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
            .when('/projects', {
                templateUrl : '/views/projects.html',
            })
            .when('/aboutus', {
                templateUrl : '/views/aboutus.html',
            })            
			.when('/events', {
                templateUrl : '/views/events.html',
            })       
            .when('/board', {
                templateUrl : '/views/board.html',
            })      
            .when('/youngprofessionalboard', {
                templateUrl : '/views/youngprofessionalboard.html',
            })
            .when('/contact', {
                templateUrl : '/views/youngprofessionalboard.html',
            })           
    });


	//Navigation Directive
	app.directive('navigationBar', function (){
		return {
			restrict: 'E',
			templateUrl: '/views/navigation.html',
			/*TODO - fix as json
			controller: [ '$http', function($http){
				var navigationItems = this.navigationItems;
				$http.get('~/data/nagivationItems.json').success(function(data){
					navigationItems = data;
				});
				console.log(navigationItems);
			}],
			*/
			controllerAs: 'navItems'
		};
	});

	//Contact Us Directive
	app.directive('contactUs', function (){
		return {
			restrict: 'E',
			templateUrl: '/views/contactus.html'
		};
	});

	//Donate Directive
	app.directive('donateElement', function (){
		return {
			restrict: 'E',
			templateUrl: '/views/donate.html'
		};
	});

	//Footer Directive
	app.directive('customFooter', function (){
		return {
			restrict: 'E',
			templateUrl: '/views/footer.html'
		};
	});


})();