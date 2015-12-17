(function(){
	angular
		.module('hatz', [
			'ngRoute',
			'ngMaterial',

			'hatz.controllers',
		])
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {

		console.log("Configuring route...");

		$routeProvider
	  	  .when('/', {
		    templateUrl: 'templates/main.html',
		    controller: 'MainController',
		  })
		  .when('/advent', {
		    templateUrl: 'templates/advent.html',
		    controller: 'AdventController',
		  });


		  console.log("Route configured");
	};

})();
