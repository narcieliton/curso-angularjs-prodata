(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);

    function IndexController($http) {
      var vm = this;
      vm.listaDados = [];
      vm.carregarDados = carregarDados;
      vm.gridOptions = {
          data: 'vm.listaDeDados'
      };
      //não faça isso em produção
      //coloque a chamada http no service
       function carregarDados() {
           $http.get('https://jsonplaceholder.typicode.com/photos')
               .then(onPesquisarResult,onPesquisarFault);
       }
       function onPesquisarResult(response) {
           vm.listaDados = response.data;
       }
       function onPesquisarFault(rejection) {

       }

    }
})();


