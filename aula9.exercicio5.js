/*criar uma função para calcular a média aritmética de uma array, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.*/

let valores = [10,10,10,10,10,10,10,10];
//funções para execução da aplicação

// função para imprimir
function imprimir(item) {
    console.log(item)
};

//função para realizar o calculo dos elementos da array
function MediaAritimetica(itens) {
    let soma = 0;

    for (let i = 0; i < itens.length; i++) {
        soma = itens[i] + soma;
    }

    for (let i = 0; i < itens.length; i++) {
        soma = itens[i] + soma;
    }
    return soma / itens.length;
}

//criando variavel que vai receber o resultado do calculo da media aritimetica da array
let resultado = MediaAritimetica(valores);

//imprimindo o resultado do calculo limitado a duas casas decimais para facilitar o entendimento.
imprimir(resultado.toFixed(2));



