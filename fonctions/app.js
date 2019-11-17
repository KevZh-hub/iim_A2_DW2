/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */
function test(argument){
    console.log(argument);

}
test( 'salut ca va?');
/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */
function multiply (b,c) {
    return b*c
}
console.log(multiply(4,2));


/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */
function modulo(nb) {
    if (nb% 2) {
        return "Impair";
    } else {
        return "Pair";
    }
}
console.log(modulo(3));
console.log(modulo(4));

/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */
(function bonjour(a) {
    console.log('bonjour :', a);
})(1)
/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */
function displayArg(a, b, c) {
    console.log(arguments);
}
displayArg(1, 2, 3);
/**
 * Exercice 6 :
 * Reproduire la suite de fibonnacci : 1-1-2-3-5-8-13-21
 */
function fibonacci(nb) {
    if(nb < 2) {
        return nb;
    }
        //console.log('fib :', nb);
        return fibonacci(nb -1) + fibonacci(nb -2);
}
console.log(fibonacci(8));

//new Array(new Array(10).length)