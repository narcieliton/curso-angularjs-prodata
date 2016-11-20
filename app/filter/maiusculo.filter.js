angular.module('pdApp')
    .filter('maiusculo', maiusculo);

function maiusculo() {
    return function (input) {
        if(!input) {
            return input;
        }
        return input.toUpperCase();
    }
}