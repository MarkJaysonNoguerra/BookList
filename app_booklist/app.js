(function() {
    angular
        .module("booklist", [
            "ui.router",
        ])
        .config(function() {
            angular.lowercase = angular.$$lowercase;
        })

    function config($stateProvider) {

        $stateProvider
            .state("login", {
                url: "/",
                templateUrl: "/app_deps/pages/login/login.view.html"
            })
    }
    angular
        .module("booklist")
        .config(["$stateProvider", "$urlRouterProvider", config])
        .config([
            "$qProvider",
            function($qProvider) {
                $qProvider.errorOnUnhandledRejections(false);
            }
        ])
        .config([
            "$locationProvider",
            function($locationProvider) {
                $locationProvider.html5Mode(true);
            }
        ]);
})();