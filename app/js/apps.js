"use strict";

var mainmodule = angular.module('dashboard', ['ngRoute','ui.bootstrap','angularFileUpload']);

mainmodule.config(function($routeProvider/*, $locationProvider*/) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'template/pages/dashboard.html'
			})

            .when('/grid', {
				templateUrl : 'template/pages/grid.html'
			})


            .when('/search', {
				templateUrl : 'template/pages/search.html',
				controller  : 'searchcontroller'
			})
			 .when('/feedback', {
				templateUrl : 'template/pages/feedback.html',
				controller  : 'feedbackcontroller'
			})

			.when('/product/:pID', {
				templateUrl : 'template/pages/product.html',
				controller  : 'profileeditproductCtrls'
			})
			 
			.when('/inbox', {
				templateUrl : 'template/pages/inbox.html'
			})
			.when('/profile/:pID', {
				templateUrl : 'template/pages/profile.html',
				controller  : 'profileeditproductCtrls',
				data:  'pID'
			})
            .when('/searchcompany', {
				templateUrl : 'template/pages/searchcompany.html',
				controller  : 'companysearchcontroller'
			})
			.when('/company/:pID', {
				templateUrl : 'template/pages/company.html',
				controller  : 'companycontroller'
			})
			
			.when('/edit', {
				templateUrl : 'template/pages/edit.html',
				controller  : 'profileeditproductCtrls'
			})
			 
			.when('/timeline', {
				templateUrl : 'template/pages/time.html'
			})
			.when('/upload', {
				templateUrl : 'template/pages/upload.html'
			})
			.otherwise({
				redirectTo: '/'
			});

			/*$locationProvider.html5Mode(true);*/
	});
