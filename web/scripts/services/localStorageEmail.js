app.service('localStorageEmail', function (AcessoEmail) {

    this.value = AcessoEmail.getDataEmail();
    this.latestDataEmail = function () {
        return AcessoEmail.getDataEmail();
    };
    this.updateAutorizacaoEmail = function (val) {
        // console.log('val ' + val);
        return AcessoEmail.setDataEmail(val);
    };
});
app.factory("AcessoEmail", function ($window, $rootScope) {
    // console.log('LS factory ' + $rootScope);
    //  console.log('event.key  ' + event.key);
    angular.element($window).on('email', function (event) {
        if (event.key === 'my-email') {
            $rootScope.$apply();
        }
    });
    return {
        setDataEmail: function (val) {
            //        console.log('val set ' + val);
            $window.localStorage && $window.localStorage.setItem('my-email', val);
            return this;
        },
        getDataEmail: function () {
            //      console.log('val get ');
            return $window.localStorage && $window.localStorage.getItem('my-email');
        }
    };
});


