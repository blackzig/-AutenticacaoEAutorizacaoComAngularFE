app.service('localStoragePapel', function (AcessoPapel) {

    this.value = AcessoPapel.getDataPapel();
    this.latestDataPapel = function () {
        return AcessoPapel.getDataPapel();
    };
    this.updateAutorizacaoPapel = function (val) {
        // console.log('val ' + val);
        return AcessoPapel.setDataPapel(val);
    };
});
app.factory("AcessoPapel", function ($window, $rootScope) {
    // console.log('LS factory ' + $rootScope);
    //  console.log('event.key  ' + event.key);
    angular.element($window).on('papel', function (event) {
        if (event.key === 'my-papel') {
            $rootScope.$apply();
        }
    });
    return {
        setDataPapel: function (val) {
            //        console.log('val set ' + val);
            $window.localStorage && $window.localStorage.setItem('my-papel', val);
            return this;
        },
        getDataPapel: function () {
            //      console.log('val get ');
            return $window.localStorage && $window.localStorage.getItem('my-papel');
        }
    };
});


