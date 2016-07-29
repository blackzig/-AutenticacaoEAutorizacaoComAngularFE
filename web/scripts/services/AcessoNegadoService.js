app.service('acessoNegado', function ($location) {

    this.errosAcessoNegado = function () {
        localStorage.clear();
        $location.path('/acessoNegado');
    };

});