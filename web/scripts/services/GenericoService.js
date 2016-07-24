app.service('genericoService', ['urlMapService', '$http', '$q', function (urlMapService, $http, $q) {
        var servico = {};

        servico.backendLogin = function (controller, metodo, data, id) {
            var deferred = $q.defer();
            $http({
                method: metodo,
                url: urlMapService.getController(controller.toLowerCase(), id),
                data:$.param({"username":data.username,"password":data.password}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
            }).then(function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return servico;
    }]);