(function() {
    angular
        .module("booklist")
        .controller("loginController", mainPageController)

    mainPageController.$inject = [
        "$scope",
        "apiService",
        "$rootScope"
    ];

    function mainPageController($scope, apiService, $rootScope) {
        var loginVM = this;
        $scope.loginVM = loginVM;   
      
        $rootScope.pageTitle = "BookList: Login";

        loginVM.formError = "";
        loginVM.credentials = {
            Name: "",
            Username: "",
            Password: ""
        };

        // loginVM.returnPage = routeLocationService.getRouteLocation() || "/alpha";

        loginVM.doLogin = function() {
            loginVM.formError = "";
            authenticationService.login(loginVM.credentials).then(
                // success function
                function() {
                    $location.search("page", null);
                    $location.path(loginVM.returnPage);
                },
                // error function
                function(err) {
                    loginVM.formError = err.data.message;
                }
            );
        };

        loginVM.onSubmit = function() {
            loginVM.formError = "";
            if (!loginVM.credentials.Username || !loginVM.credentials.Password) {
                loginVM.formError = "All fields required, please try again";
            } else {
                loginVM.doLogin();
            }
        };
    }
})();