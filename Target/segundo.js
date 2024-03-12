const entradaDados = require('readline-sync');

function fibonacciSequencia(n) {
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= n) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
}

let numero = parseInt(entradaDados.question('Digite o numero que deseja descobrir a sequencia fibonacci!'));

console.log(`Numero: ${numero}`);
console.log('Sequencia: ', fibonacciSequencia(numero));
