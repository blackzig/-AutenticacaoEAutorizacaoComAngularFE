app.config(function ($routeProvider) {
    //http://www.matera.com/br/2016/04/25/controle-de-acesso-com-angular-route/
    $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeController'
            })
            .when('/livros', {
                templateUrl: 'partials/livros.html',
                controller: 'livroController'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'user'
            })
            .when('/usuarios', {
                templateUrl: 'partials/usuarios.html',
                controller: 'usuariosController'
            })
            .when('/acessoNegado', {
                templateUrl: 'partials/acessoNegado.html',
                controller: 'acessoNegadoController'
            })
            .otherwise({redirectTo: '/home'});

});
