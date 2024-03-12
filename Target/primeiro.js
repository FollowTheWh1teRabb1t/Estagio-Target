let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

/*O código executa um loop enquanto K for menor que INDICE, que é 13. Ele começa com K = 0 e soma 1 a K a cada iteração.

Na primeira iteração: K = 0, SOMA = 0 + 0 = 0
Na segunda iteração: K = 1, SOMA = 0 + 1 = 1
Na terceira iteração: K = 2, SOMA = 1 + 2 = 3
...
Na décima terceira iteração: K = 12, SOMA = 78 + 13 = 91

Portanto, o valor impresso no terminal será 91.
*/ 