(function() {
    angular
        .module("booklist")
        .service("apiService", ajaxService);

    ajaxService.$inject = ["$http"];

    function ajaxService($http) {
        function books(){
            return $http.get("api/books/get");
        }
       
        return {
            books
        }
    }
})();
