app.service('localStorageChave', function (Acesso) {

    this.value = Acesso.getDataAC();
    this.latestDataAutorizacao = function () {
        return Acesso.getDataAC();
    };
    this.updateAutorizacao = function (val) {
        // console.log('val ' + val);
        return Acesso.setDataAC(val);
    };
});
app.factory("Acesso", function ($window, $rootScope) {
    // console.log('LS factory ' + $rootScope);
    //  console.log('event.key  ' + event.key);
    angular.element($window).on('access', function (event) {
        if (event.key === 'my-access') {
            $rootScope.$apply();
        }
    });
    return {
        setDataAC: function (val) {
            //        console.log('val set ' + val);
            $window.localStorage && $window.localStorage.setItem('my-access', val);
            return this;
        },
        getDataAC: function () {
            //      console.log('val get ');
            return $window.localStorage && $window.localStorage.getItem('my-access');
        }
    };
});


