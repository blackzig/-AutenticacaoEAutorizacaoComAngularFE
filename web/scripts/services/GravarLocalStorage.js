app.service('gravarLocalStorage', ['localStorageChave', 'localStoragePapel',
    function (localStorageChave, localStoragePapel) {

        this.gravarLS = function (data) {
            var guardarNoLocalStorage = data.chave;
            localStorageChave.updateAutorizacao(guardarNoLocalStorage);
            var guardarNoLocalStoragePapel = data.papel;
            localStoragePapel.updateAutorizacaoPapel(guardarNoLocalStoragePapel);

            localStorage.setItem('usuario', JSON.stringify(data));
        };
    }]);