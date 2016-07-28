app.controller('produto', ["$scope", 'genericoService',
    function ($scope, genericoService) {


        $scope.initProduto = function () {
            genericoService.backend("produto", "GET").then(sucesso, erro);
        };

        var sucesso = function (data) {
            console.log(data.data);
            $scope.produtos = data.data;

//             console.log(data.data);
//             usuariosService.validaLogin(data.data);
//
//            var guardarNoLocalStorage = data.data.chave;
//            localStorage.updateAutorizacao(guardarNoLocalStorage);
        };
        var erro = function (data) {
            console.log('Erro ' + data);
        };

    }]);