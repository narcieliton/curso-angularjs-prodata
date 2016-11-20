angular.module('pdApp')
    .controller('IndexRouterController', IndexRouterController);

function IndexRouterController($scope, $state) {

    $scope.abrirPagina = abrirPagina;

    function abrirPagina(pagina) {
        $state.go(pagina);
    }
}
