app.controller('pageController', function ($scope, usuariosService) {

    $scope.logout = function () {
        usuariosService.logout();
    };

});