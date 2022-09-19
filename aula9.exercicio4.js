/*Crie uma função BoletoComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;*/

//funções para execução da aplicação

// função para imprimir
function imprimir(item){
    console.log(item)
};

//função para calcular o valor do boleto com 10% de jutos
function BoletoComJuros(valor){
    let resultado = (valor/100*10)+valor;
    return resultado;
}

//chamando função imprimir para imprirmir o resultado da função BoletoComJuros duas vezes com valores diferentes.

imprimir(BoletoComJuros(100))   
imprimir(BoletoComJuros(984.5)) 
