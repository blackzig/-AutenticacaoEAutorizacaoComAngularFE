app.service('gravarLocalStorage', ['localStorageChave', 'localStoragePapel',
    'localStorageUsuario', '$cookieStore',
    function (localStorageChave, localStoragePapel, localStorageUsuario, $cookieStore,
            $rootScope) {

        this.gravarLS = function (data) {
            var guardarNoLocalStorage = data.chave;
            localStorageChave.updateAutorizacao(guardarNoLocalStorage);
            var guardarNoLocalStoragePapel = data.papel;
            localStoragePapel.updateAutorizacaoPapel(guardarNoLocalStoragePapel);
            // var guardarNoLocalStorageUsuario = data;
            //localStorageUsuario.updateAutorizacaoUsuario(guardarNoLocalStorageUsuario);
            localStorage.setItem('usuario', JSON.stringify(data));
//            $cookieStore.put('usuario', data);
//            
//
//            var appData = $cookieStore.get('usuario');
//
//            console.log('appData ' + appData.email);
//
//            $rootScope.usuarioLogado = appData;
        };

    }]);