angular.module('pdApp')
    .controller('IndexWatchController', IndexWatchController);

function IndexWatchController($scope) {

    $scope.cor = '';
    $scope.classCss = '';
    $scope.styleDiv = {
        width: '150px',
        height: '150px'
    };

    //primerio é o atributo que sera monitorado, a segunda é a função que executara caso o atributo seja alterado
    $scope.$watch('cor', onWatchCor);

    //primeiro atritubo é para o novo valor digitado no campo, o segundo é o valor antigo que estava
    function onWatchCor(valorNovo, valorAntigo) {

        if(valorNovo === valorAntigo){
            return
        }

        $scope.styleDiv.backgroundColor = valorNovo;
    }

    function dispararEvento(){
        $scope.$emit('testeEnvioEvento', {valor:'Enviando Evento!'})
    }

}

