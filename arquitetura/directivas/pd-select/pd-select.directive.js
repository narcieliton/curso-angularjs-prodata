(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            restrict: 'E',
            templateUrl:'arquitetura/directivas/pd-select/pd-select.html',
            scope: {
                provider:'=',
                propriedadeDescricao:'@',
                propriedadeValor:'@',
                ngModel: '=',
                classColspan:'@',
                label:'@',
                requerido:'='
            },
            link: link
        };

        function link(scope, element, attrs) {

            scope.idInputSelect = 'pdSelect' + scope.$id;
            scope.classColspan = 'col-md-' +  (scope.colSpan || '3');

            scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';

            scope.propriedadeValor = scope.propriedadeValor || 'valor';

        }

    }




})();