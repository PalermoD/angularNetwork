(function(){
  angular.module('angularNetwork', ['ui.router'])
         .config(function($stateProvider){

         	$stateProvider
         	    .state('signup', {
         	    	url: "/signup",
         	    	templateUrl: "app/signup/signup/html",
         	    	controller: "SignUpController"
         	    })
         })
}());