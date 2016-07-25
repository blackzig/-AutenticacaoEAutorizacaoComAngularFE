app.service('usuariosService', function ($rootScope, $location) {

////            /*Nesta função, vamos fazer o papel de validação que seria feito no backend */
    this.validaLogin = function (user) {
        //Vamos criar usuários fictícios que possam ser usados pela página e pra validar o login
//        var usuarios = [{username: 'Robson', password: '123', admin: true},
//            {username: 'Juliano', password: '123', admin: false},
//            {username: 'Bruno', password: '123', admin: false}
//        ];

        //Aqui, faremos um for para validar o login
//        angular.forEach(usuarios, function (value, index) {
//            /*if (value.username === user.username &&
//                    value.password === user.password) {*/
//                delete value.password;
//                $rootScope.usuarioLogado = value;
//                $location.path('/home');
//            //}
//        });

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