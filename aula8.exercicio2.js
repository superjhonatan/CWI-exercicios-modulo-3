//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

let valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

let i = 0;
let soma = 0;

while(i < valores.length){
 soma = valores[i]+soma;
    i++
}

console.log(soma/valores.length);