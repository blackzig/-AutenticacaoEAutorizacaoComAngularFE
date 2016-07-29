app.controller('produto', ["$scope", 'genericoService', '$location', 'acessoNegado',
    function ($scope, genericoService, $location, acessoNegado) {


        $scope.initProduto = function () {
            genericoService.backend("produto", "GET").then(sucesso, erro);
        };

        var sucesso = function (data) {
            $scope.produtos = data.data;
        };
        var erro = function (data) {
            console.log('Erro ' + data);
            acessoNegado.errosAcessoNegado();
            //localStorage.clear();
            //$location.path('/acessoNegado');
        };

    }]);