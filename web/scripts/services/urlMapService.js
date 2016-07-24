app.service('urlMapService', ['URL', function (URL) {

        var mapeamento = {};

        mapeamento.getUrl = function () {
            return URL.url + ":" + URL.porta;
        };

        mapeamento.getController = function (controller, id) {
            if (!id || id === null)
                id = "";

            var controller = "/DefenseAgainstREST/{controller}/{id}".replace("{controller}", controller).replace("{id}", id);
            return mapeamento.getUrl() + controller;
        };

        return mapeamento;
    }]);