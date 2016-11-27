(function () {
    angular.module('pdApp')
        .controller('CadastroCarroController', CadastroCarroController);

    function CadastroCarroController(AlertService) {

        var vm = this;

        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;

        function salvar() {
            AlertService.success('Registro salva com sucesso');
        }

        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            AlertService.error('Registro excluido com sucesso');
        }



    }
})();


