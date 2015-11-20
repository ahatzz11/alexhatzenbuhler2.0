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
		    controller: 'MainController'
		  })
		  .when('/1', {
		    templateUrl: 'templates/test.html',
		    controller: 'MainController'
		  });


		  console.log("Route configured");
	}

})();
