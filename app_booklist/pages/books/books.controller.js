(function() {
    angular
        .module("booklist")
        .controller("booksController", booksController)

    booksController.$inject = [
        "$scope",
        "apiService",
        "$rootScope"
    ];

    function booksController($scope, apiService, $rootScope) {
        var booksVM = this;
        $scope.booksVM = booksVM;   
      
        $rootScope.pageTitle = "BookList: Books";

        apiService.books()
        .then((result) => {
            
            booksVM.books = result.data;
            console.log(result)
        })

    }
})();