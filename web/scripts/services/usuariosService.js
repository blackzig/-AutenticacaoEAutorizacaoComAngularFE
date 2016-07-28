app.service('usuariosService', function ($rootScope, $location) {

    this.validaLogin = function (user) {
        $rootScope.usuarioLogado = user;
        $location.path('/home');

    };

    this.logout = function () {
        $rootScope.usuarioLogado = null;
        $location.path('/home');
    };
    this.getUsers = function () {
        console.log('getUsers ');
        return [{nome: 'Robson', admin: true},
            {nome: 'Juliano', admin: false},
            {nome: 'Bruno', admin: false}];
    };

});