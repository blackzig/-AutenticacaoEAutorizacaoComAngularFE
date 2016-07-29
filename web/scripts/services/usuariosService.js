app.service('usuariosService', function ($rootScope, $location) {

    this.validaLogin = function () {
        //var usuario = localStorage.getItem('usuario');
        //console.log('usuário ' + usuario);
        //$rootScope.usuarioLogado = usuario;
        // $rootScope.usuarioLogado = usuario;
        $location.path('/home');

    };

    this.logout = function () {
        //$rootScope.usuarioLogado = null;
        localStorage.clear();
        $location.path('/home');
    };
    this.getUsers = function () {
        console.log('getUsers ');
        return [{nome: 'Robson', admin: true},
            {nome: 'Juliano', admin: false},
            {nome: 'Bruno', admin: false}];
    };

});