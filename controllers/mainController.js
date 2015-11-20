(function(){
    'use strict';

    angular
      .module('hatz.controllers')
      .controller('MainController', MainController)

    MainController.$inject = ['$scope','$location'];


    function MainController($scope,$location) {
    	$scope.title = "DUDE";


    };

})();
