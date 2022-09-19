// arrays com todos os dados dos funcionários
let colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison'];
let idades = [69, 66, 58, 61, 60, 64, 59, 55];
let temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29];

//declaração da função para validar ou invalidar aposentadoria do funcionário
function verificarAposentadoria(nome) {

// loop para percorrer todos os elementos da array COLABORADORES
    for (let i = 0; i < colaboradores.length; i++) {
        
//checando se o nome recebido pela função existe no array COLABORADORES
        if (colaboradores[i] !== nome) {

//checando se o loop chegou no fim do array
            if (i === colaboradores.length - 1) {
//caso o loop não encontre o nome do colaborador no array COLABORADORES, ESSA MENSAGEM SERÁ IMPRESSA
                console.log(`${nome}, é um Colaborador inválido :|`);
              console.log("");
            }
            //garantindo que o loop verifique todos os elementos da array COLABORADORES e só dê continuidade a leitura do código abaixo caso o elemento recebindo pela função exista na array COLABORADORES
            continue;
        }

        //condição para validação da aposentadoria do colaborador.
        if (idades[i] >= 65 || temposDeTrabalho[i] >= 30 || (idades[i] >= 60 && temposDeTrabalho[i] >= 25)) {
            //mensagem a ser impressa caso o colaborador atenda a alguma das condições acima
            console.log(`Parabéns ${nome}, já pode sair de férias eternas :)`);
          console.log("");
        }
        //caso o colaborar não atenda as condições acima
        else {
            //imprimir essa mensagem
            console.log(`${nome},Infelizmente para você, ainda falta um tempo :(`);
          console.log("");
        }
        break

    }

}

//chamando a função VERIFICARAPOSENTADORIA
verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false 
verificarAposentadoria('Rhoger')      // true 
verificarAposentadoria('Hudnélson')   // inexistente
verificarAposentadoria('Gleysberto')  // true
verificarAposentadoria('Regislane')   // false 
verificarAposentadoria('Cléverson')   // true
verificarAposentadoria('Nádio')       // true 
verificarAposentadoria('Wellison')    // false 
verificarAposentadoria('Florisberto') // inexistente
