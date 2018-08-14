'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('network', {
                url: '/network',
                templateUrl: 'templates/network.html'
            })
            .state('openvpn', {
                url: '/openvpn',
                templateUrl: 'templates/openvpn.html'
            });
    }
]);