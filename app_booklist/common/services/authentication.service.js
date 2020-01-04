(function() {
    angular
        .module("alpha")
        .service("authenticationService", authenticationService);

    authenticationService.$inject = ["$window", "$http"];

    function authenticationService($window, $http) {
        function saveToken(token) {
            $window.localStorage["alpha-token"] = token;
        };

        function getToken() {
            return $window.localStorage["alpha-token"];
        };

        function register(user) {
            return $http.post("/api/user/register", user).then(function(data) {
                saveToken(data.data.token);
            });
        };

        function login(user) {
            return $http.post("/api/user/login", user).then(function(data) {
                saveToken(data.data.token);
            });
        };

        function logout() {
            $window.localStorage.removeItem("alpha-token");
        };

        function isLoggedIn() {
            var token = getToken();

            if (token) {
                var payload = JSON.parse($window.atob(token.split(".")[1]));

                return payload.Expiry > Date.now() / 1000;
            } else {
                return false;
            }
        };

        function currentUser() {
            if (isLoggedIn()) {
                var token = getToken();
                var payload = JSON.parse($window.atob(token.split(".")[1]));
                return {
                    Username: payload.Username,
                    Name: payload.Name
                };
            }
        };

        return {
            saveToken: saveToken,
            getToken: getToken,
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            currentUser: currentUser
        };
    }
})();