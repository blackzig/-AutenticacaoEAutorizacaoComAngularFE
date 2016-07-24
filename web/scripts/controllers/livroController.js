app.controller('livroController', function ($scope, livrosService) {
    $scope.livros = livrosService.getLivros();

});