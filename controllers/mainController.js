(function(){
    'use strict';

    angular
      .module('hatz.controllers')
      .controller('MainController', MainController)

    MainController.$inject = ['$scope','$location'];

    /*
    	QUESTIONS:
    	- What is $location, is that for the routing?
    	- Do I need to instantiate an array before using it?
    */

    function MainController($scope,$location) {
    	var data = createJson();

    	loadProjects(data, $scope);

    };

    function createJson() {

    	var json = '{"test":"test","About Me":{"descriptions":["Hi! My name is Alex Hatzenbuhler. I grew up in Apple Valley MN and am currently a Senior at North Dakota State University. I will be graduating in May 2015 with a Bachelors of Science degree in Computer Science. I have been interested in anything related to technology since I was tall enough to reach the VCR machine. I started coding and developing my freshman year of college and I soon became passionate about computer science. Since then I have developed a strong interest in android and web development.","Outside of my professional interests I listen to a lot of music, discover many unique craft beers, and enjoy staying up to date on all things related to technology. I have developed an interest in some computer hardware as well. I built my own desktop computer a couple years ago, and have helped a few friends with their own. I also enjoy biking, snowboarding, and playing ultimate frisbee in my free time."]},"projects":[{"name":"Counter for Wear","link":"https://github.com/ahatzz11/Counter-for-Wear","descriptions":["A counting application for Android Wear","Language: Java"]},{"name":"Hotel System","link":"https://github.com/ahatzz11/Hotel-System","descriptions":["A parallelized hotel reservation system","Parallelization is achieved by the use semaphores","Language: C++"]},{"name":"k-Means","link":"https://github.com/ahatzz11/k-Means","descriptions":["Implementation of the k-Means algorithm both in serial, and parallel","Language: Python"]},{"name":"PokéDex","link":"https://github.com/ahatzz11/PoxeDex","descriptions":["The web app and backend database for a pokédex","Languages: Java; SQL"]},{"name":"This Site!","link":"https://github.com/ahatzz11/alexhatzenbuhler","descriptions":["his site originally started as an assignment for a class I took in college called Intro to Web Design. I decided to continue to add and polish it into what you see today!","Languages: HTML5; CSS3; JavaScript; jQuery","Interested in some more cool stuff? Enter the konami code anywhere on this page"]}]}';

    	var obj = JSON.parse(json);
    	return obj;
    	console.log("JSON created");
    };

    function loadProjects(data, $scope) {

    	console.log("Loading projects...");

    	// initializing array of projects
    	$scope.projects = [];


    	//loop through each project
    	for(var i = 0; i < data.projects.length; i++) {
    		//each item is an object
    		$scope.projects[i] = {};

    		// description is an array - DO I NEED THIS?
    		$scope.projects[i].descriptions = [];

    		$scope.projects[i].name = data.projects[i].name;
	        $scope.projects[i].link = data.projects[i].link;

	        //loop through each description
	        for(var j = 0; j < data.projects[i].descriptions.length; j++) {
	        	$scope.projects[i].descriptions[j] = data.projects[i].descriptions[j];

	        }
    	}

    	console.log("Projects loaded.");
    };


})();
