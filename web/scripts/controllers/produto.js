app.controller('produto', ["$scope", 'genericoService', 'acessoNegado',
    function ($scope, genericoService, acessoNegado) {


        $scope.initProduto = function () {
            genericoService.backend("produto", "GET").then(sucesso, erro);
        };

        $scope.salvar = function (produto) {
            genericoService.backend("produto", "POST", produto).then(sucessoSalvar, erro);
        };

        var sucesso = function (data) {
            $scope.produtos = data.data;
        };

        var sucessoSalvar = function (data) {
            $scope.produtos = data.data;
            $scope.prod.product = "";
            $scope.prod.price = "";
        };
        var erro = function (data) {
            console.log('Erro ' + data);
            acessoNegado.errosAcessoNegado();
        };

    }]);