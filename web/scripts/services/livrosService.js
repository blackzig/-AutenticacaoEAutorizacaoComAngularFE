app.service('livrosService', function () {
    //busca livros
    this.getLivros = function () {
        return [{nome: 'Como Eu Era Antes de Você', autor: 'Jojo Moyes'},
            {nome: 'A sereia', autor: 'Kiera Cass'},
            {nome: 'Belo Sacrifício - Irmãos Maddox', autor: 'Jamie McGuire'}
        ];
    };
});