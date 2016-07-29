app.controller('user', ["$scope", 'genericoService', 'usuariosService', 'gravarLocalStorage',
    function ($scope, genericoService, usuariosService, gravarLocalStorage, $location) {

        $scope.usuario = {};

        $scope.logarUser = function (log) {
            genericoService.backendLogin("user", "POST", log).then(sucessoLogin, erroLogin);
        };

        var sucessoLogin = function (data) {
            //$scope.usuario = data.data;
            console.log(data.data);
            gravarLocalStorage.gravarLS(data.data);
            usuariosService.validaLogin();
        };
        var erroLogin = function (data) {
            $scope.erro = JSON.parse(localStorage.getItem(data));
            console.log('Erro2 ' + $scope.erro);
        };


//        $scope.logar = function (user) {
//            usuariosService.validaLogin(user);
//        };

    }]);