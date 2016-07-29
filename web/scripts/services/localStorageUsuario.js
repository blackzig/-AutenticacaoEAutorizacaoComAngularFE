app.service('localStorageUsuario', function (AcessoUsuario) {

    this.value = AcessoUsuario.getDataUsuario();
    this.latestDataUsuario = function () {
        return AcessoUsuario.getDataUsuario();
    };
    this.updateAutorizacaoUsuario = function (val) {
        return AcessoUsuario.setDataUsuario(val);
    };
});
app.factory("AcessoUsuario", function ($window, $rootScope) {
    angular.element($window).on('usuario', function (event) {
        if (event.key === 'my-usuario') {
            $rootScope.$apply();
        }
    });
    return {
        setDataUsuario: function (val) {
            //        console.log('val set ' + val);
            $window.localStorage && $window.localStorage.setItem('my-usuario', val);
            return this;
        },
        getDataUsuario: function () {
            //      console.log('val get ');
            return $window.localStorage && $window.localStorage.getItem('my-usuario');
        }
    };
});


