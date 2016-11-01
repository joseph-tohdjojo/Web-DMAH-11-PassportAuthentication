angular.module('AuthApp', [ 'ui.router' ] )

	.config( function( $stateProvider, $urlRouterProvider, $compileProvider ) {

		// https://docs.angularjs.org/guide/production
		$compileProvider.debugInfoEnabled( false );

		$urlRouterProvider.otherwise( '/' );

		$stateProvider
			.state( 'Login', {
				url: '/',
				templateUrl: './views/login/login.html',
				controller: 'LoginController',
				controllerAs: 'loginCtrl'
			} );

	} );
