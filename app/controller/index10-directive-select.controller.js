(function () {
    angular.module('pdApp')
        .controller('SelectController', SelectController);

    function SelectController(AlertService) {
        var vm = this;
        vm.entidade = {};

        vm.sexo = [
            {valor:'M', descricao:'Masculino'},
            {valor:'F', descricao:'Feminino'}
        ];

        vm.tipoPessoa = [
            {tipo:'F', nome:'Física'},
            {tipo:'J', nome:'Jurídica'}
        ];

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;

        function salvar() {
            AlertService.success('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            AlertService.error('Registro excluido com sucesso!');
        }


    }
})();


