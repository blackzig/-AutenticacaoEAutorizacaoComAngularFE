app.controller("MaintCtrl", function (LS) {
    //https://www.undefinednull.com/2014/02/25/angularjs-real-time-model-persistence-using-local-storage/
    this.greeting = "This is a localstorage demo app";
    this.value = LS.getData();
    this.latestData = function () {
        return LS.getData();
    };
    this.update = function (val) {
       // console.log('val ' + val);
        return LS.setData(val);
    };
});
app.factory("LS", function ($window, $rootScope) {
   // console.log('LS factory ' + $rootScope);
  //  console.log('event.key  ' + event.key);
    angular.element($window).on('storage', function (event) {
        if (event.key === 'my-storage') {
            $rootScope.$apply();
        }
    });
    return {
        setData: function (val) {
    //        console.log('val set ' + val);
            $window.localStorage && $window.localStorage.setItem('my-storage', val);
            return this;
        },
        getData: function () {
      //      console.log('val get ');
            return $window.localStorage && $window.localStorage.getItem('my-storage');
        }
    };
});