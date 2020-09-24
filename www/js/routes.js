angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('menu.99NovoMicroserviO', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/99NovoMicroserviO.html',
        controller: '99NovoMicroserviOCtrl'
      }
    }
  })

  .state('minhasCorridas', {
    url: '/page2',
    templateUrl: 'templates/minhasCorridas.html',
    controller: 'minhasCorridasCtrl'
  })

  .state('menu.minhasPreferNciasDeCorrida', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhasPreferNciasDeCorrida.html',
        controller: 'minhasPreferNciasDeCorridaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/page1',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});
