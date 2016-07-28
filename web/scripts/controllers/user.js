app.controller('user', ["$scope", 'genericoService', 'usuariosService', 'localStorage',
    'localStoragePapel',
    function ($scope, genericoService, usuariosService, localStorage, localStoragePapel) {

        $scope.usuario = {};

        $scope.logarUser = function (log) {
            genericoService.backendLogin("user", "POST", log).then(sucessoLogin, erroLogin);
        };

        var sucessoLogin = function (data) {
            //$scope.usuario = data.data;
            console.log(data.data);
            usuariosService.validaLogin(data.data);

            var guardarNoLocalStorage = data.data.chave;
            localStorage.updateAutorizacao(guardarNoLocalStorage);
            var guardarNoLocalStoragePapel = data.data.papel;
            localStoragePapel.updateAutorizacaoPapel(guardarNoLocalStoragePapel);
        };
        var erroLogin = function (data) {
            console.log('Erro ' + data);
        };


//        $scope.logar = function (user) {
//            usuariosService.validaLogin(user);
//        };

    }]);