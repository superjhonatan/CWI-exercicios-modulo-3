/*Crie uma função mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano*/


//----------variaváveis para comparação---------/
let nomeDoFulano = "maria"
let nomeDoBeltrano = "jose"
//----------------------------------------------/


//----------função para a execução do programa----------/
//função imprimir----------/
function imprimir(item){
    console.log(item)
};



//função de comparação----------/
function mesmoNome(name1,name2){
    let verificar = name1 === name2;
    return verificar;
}


//chamando funções para a execução da aplicação
imprimir(mesmoNome(nomeDoBeltrano,nomeDoBeltrano));
imprimir(mesmoNome(nomeDoFulano,nomeDoBeltrano));


