(function() {
    angular
        .module("booklist")
        .service("apiService", ajaxService);

    ajaxService.$inject = ["$http"];

    function ajaxService($http) {
        // function uploadFile(file){
        //     var fd = new FormData();
        //     fd.append('file', file);
        //     return $http.post("api/uploadimage/add", fd, {
        //         transformRequest: angular.identity,
        //         headers: {'Content-Type': undefined} 
        //     }); 
        // }  
        // function uploadPdfBig(file){
        //     var fd = new FormData();
        //     fd.append('file', file);
        //     return $http.post("api/uploadpdfbig/add", fd, {
        //         transformRequest: angular.identity,
        //         headers: {'Content-Type': undefined} 
        //     }); 
        // }
        // function awsAI(fileName){
        //     return $http.post("/api/awsai/add?fileName=" + fileName)
        // }
        return {
        //    uploadFile : uploadFile,
        //    uploadPdfBig : uploadPdfBig,
        //    awsAI : awsAI
        }
    }
})();
