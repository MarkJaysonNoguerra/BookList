(function() {
    angular
        .module("booklist")
        .controller("loginController", mainPageController)

    mainPageController.$inject = [
        "$scope",
        "apiService",
    ];

    function mainPageController($scope, apiService) {
        var loginVM = this;
        $scope.loginVM = loginVM;   
      
    }
})();