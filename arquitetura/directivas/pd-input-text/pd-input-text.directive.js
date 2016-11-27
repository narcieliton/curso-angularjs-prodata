/**
 * Created by Familia Pc2 on 26/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdAppArquitetura')
        .directive('pdInputText', pdInputText);

    function pdInputText() {
        return{
            restrict: 'E',
            templateUrl: 'arquitetura/directivas/pd-input-text/pd-input-text.html',
            scope: {//atributos do elemento
                label:'@', //recebe string, numbers...
                placeHolder:'@',
                ngModel:'=' //recebe objeto

                //onFocusOut:'&', //'&' permite passar function por parametro
            },
            link : link
        };

        function link(scope, element, atrrs) {
            scope.idInputText = 'pdInputText' + scope.$id;
            scope.classColspan = 'col-md-' + (scope.colspan || '3');
        }
    }

})();