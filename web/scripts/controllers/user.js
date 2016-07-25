app.controller('user', ["$scope", 'genericoService', 'usuariosService',
    function ($scope, genericoService, usuariosService) {

        $scope.usuario = {};

        $scope.logarUser = function (log) {
            genericoService.backendLogin("user", "POST", log).then(sucessoLogin, erroLogin);
        };

        var sucessoLogin = function (data) {
            //$scope.usuario = data.data;
            console.log(data.data);
             usuariosService.validaLogin(data.data);
             
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('admin' + ':' + 'admin');
//            var guardarNoLocalStorage = $scope.usuario.chave + ':' + $scope.usuario.papel;
//            localStorage.updateAutorizacao(guardarNoLocalStorage);
        };
        var erroLogin = function (data) {
            console.log('Erro ' + data);
        };


//        $scope.logar = function (user) {
//            usuariosService.validaLogin(user);
//        };

    }]);