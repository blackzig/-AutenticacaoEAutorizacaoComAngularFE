app.controller('usuariosController', function ($scope, usuariosService) {
    $scope.usuarios = usuariosService.getUsers();

});