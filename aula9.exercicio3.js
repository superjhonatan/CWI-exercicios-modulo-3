/*Crie uma função maiorDeIdade que verifica se idade é de um adulto*/

//variaveis para execução das funções
const IdadeDeAdulto = 18;

//funções para execução da aplicação

// função para imprimir
function imprimir(item){
    console.log(item)
};

//função para comparar as a maioridade

function maiorDeIdade(MinhaIdade){
    let verificar = MinhaIdade >= IdadeDeAdulto;

    return verificar;

}


//chamando funções para a execução da aplicação

imprimir(maiorDeIdade(30));
imprimir(maiorDeIdade(18));
imprimir(maiorDeIdade(5));