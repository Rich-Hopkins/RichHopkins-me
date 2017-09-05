﻿(function () {
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ngResource']);
  app.config([
    '$routeProvider', '$locationProvider', '$resourceProvider',
    function ($routeProvider, $locationProvider, $resourceProvider) {
      $resourceProvider.defaults.stripTrailingSlashes = false;
      $routeProvider.caseInsensitiveMatch = true;
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/',
        {
          controller: 'Home',
          controllerAs: 'home',
          templateUrl: 'app/views/home/home.html'
        })
        .when('/contact', {
          controller: 'Contact',
          controllerAs: 'contact',
          templateUrl: 'app/views/contact/contact.html'
        })
        .when('/portfolio',
        {
          controller: 'Portfolio',
          controllerAs: 'portfolio',
          templateUrl: 'app/views/portfolio/portfolio.html'
        })
        .when('/netflix',
        {
          controller: 'Netflix',
          controllerAs: 'netflix',
          templateUrl: 'app/views/netflix/netflix.html'
        })
        .when('/calculator',
          {
            controller: 'Calculator',
            controllerAs: 'calculator',
            templateUrl: 'app/views/calculator/calculator.html'
          })
        .otherwise({ redirectTo: '/' });
    }
  ]);
})();