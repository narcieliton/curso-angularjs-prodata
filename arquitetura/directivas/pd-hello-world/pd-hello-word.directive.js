/**
 * Created by Familia Pc2 on 26/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdHelloWorld', pdHelloWorld);

    /* @ngInject */
    function pdHelloWorld() {
        return{
            restrict: 'E',
            template: '<div> Olá mundao </div>'
        };
    }

})();

