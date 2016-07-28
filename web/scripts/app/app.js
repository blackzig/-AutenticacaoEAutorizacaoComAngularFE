var app = angular.module('app', ["ngResource", "ngRoute", "ngCookies", "ngStorage"])
        .constant("URL", {
            "url": "http://localhost",
            "porta": "9091"
        })
        .run(function ($rootScope, $location) {
            //Rotas que necessitam do login
            var rotasBloqueadasUsuariosNaoLogados = ['/usuarios', '/livros', '/produtos'];
            var rotasBloqueadasUsuariosComuns = ['/usuarios'];

            $rootScope.$on('$locationChangeStart', function () { //iremos chamar essa função sempre que o endereço for alterado
                /*  podemos inserir a logica que quisermos para dar ou não permissão ao usuário.
                 Neste caso, vamos usar uma lógica simples. Iremos analisar se o link que o usuário está tentando acessar (location.path())
                 está no Array (rotasBloqueadasUsuariosNaoLogados) caso o usuário não esteja logado. Se o usuário estiver logado, iremos
                 validar se ele possui permissão para acessar os links no Array de strings 'rotasBloqueadasUsuariosComuns'
                 */
                if ($rootScope.usuarioLogado == null && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1) {
                    $location.path('/acessoNegado');
                } else
                if ($rootScope.usuarioLogado != null &&
                        rotasBloqueadasUsuariosComuns.indexOf($location.path()) != -1 &&
                        $rootScope.usuarioLogado.papel != 'ADMIN') {
                    $location.path('/acessoNegado')
                }
            });
        });