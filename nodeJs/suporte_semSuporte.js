/*globals define*/
// Assume que todos os métodos de instância String fornecidos
// já presentes (podem ser usadas implementações para este se não disponível)
(function () {
    'use strict';

    var i,
        // Nós também poderíamos construir o array de métodos com os seguintes,
        // mas o método getOwnPropertyNames() não é implementável:
        // Object.getOwnPropertyNames(String).filter(function (methodName)
        //  {return typeof String[methodName] === 'function'});
        methods = [
            'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
            'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
            'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
            'toLocaleUpperCase', 'localeCompare', 'match', 'search',
            'replace', 'split', 'substr', 'concat', 'slice'
        ],
        methodCount = methods.length,
        assignStringGeneric = function (methodName) {
            var method = String.prototype[methodName];
            String[methodName] = function (arg1) {
                return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
            };
        };

    for (i = 0; i < methodCount; i++) {
        assignStringGeneric(methods[i]);
    }

}());
console.log(i)