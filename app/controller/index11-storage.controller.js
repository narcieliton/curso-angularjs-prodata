(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);

    function IndexController(localStorageService) {

      var vm = this;

      vm.lista = [
          {nome: 'lopes', sexo:'M'}
      ];
      vm.listaAuxiliar = [];

       vm.setarInformacoesNoStorage = setarInformacoesNoStorage;

        iniciar();

        function  iniciar() {
            verificarSuporteAoStorage();
            vm.listaAuxiliar = localStorageService.get('listaTeste')
        }

        function verificarSuporteAoStorage() {
            if(!localStorageService.isSupported){
                alert('Desculpe, mas seu navegador não suporta nossa aplicação');
            }
        }
        function setarInformacoesNoStorage() {
            localStorageService.set('listaTeste', vm.lista);
        }

    }
})();


