/*Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e altura.

Exiba o valor do IMC e a classificação obtida. Se houver algum grau de obesidade, exiba também a mensagem: Cuidado! Você está acima do peso recomendado pela OMS.

Se o grau de obesidade for 3, adicione também a seguinte mensagem: É importante procurar um médico para avaliar sua saúde. */

/*IMC	Classificação	Grau de Obesidade*/
// Menor do que 18,50	Magreza	0
// Entre 18,50 e 24,99	Normal	0
// Entre 25,00 e 29,99	Sobrepeso	1
// Entre 30,00 e 39,99	Obesidade	2
// Maior ou igual a 40,00	Obesidade grave	3

let Magreza = 0;
let Normal = 0;
let SobrePeso = 1;
let Obesidade = 2;
let ObesidadeGrave = 3;
let Paciente = "Ricardo";
let Altura = 1.60;
let Peso = 120.00

let Imc = Peso/(Altura*Altura);

if(Imc < 18.50){
    console.log(`${Paciente}, seu IMC é: ${Imc.toFixed(2)}, seu grau de obesidade é: ${Magreza},você precisa se alimentar melhor`);
}

else if(Imc >= 18.5 && Imc <= 24.99){
    console.log(`${Paciente}, seu IMC é: ${Imc.toFixed(2)}, seu grau de obesidade é: ${Normal}`);
}

else if( Imc >= 25.00 && Imc <= 29.99){
    console.log(`${Paciente}, seu IMC é: ${Imc.toFixed(2)}, seu grau de obesidade é: ${SobrePeso}."Cuidado! Você está acima do peso recomendado pela OMS.`);
}

else if(Imc >= 30.00 && Imc <= 39.99){
    console.log(`${Paciente}, seu IMC é: ${Imc.toFixed(2)}, seu grau de obesidade é: ${Obesidade}. Cuidado! Você está acima do peso recomendado pela OMS.`);
}

else{
    console.log(`${Paciente}, seu IMC é: ${Imc.toFixed(2)}, seu grau de obesidade é: ${ObesidadeGrave}. Cuidado! Você está muito acima do peso recomendado pela OMS. É importante procurar um médico para avaliar sua saúde.`);
}



/*FUNÇÃO*/
/*let NomeDoPaciente = "Jhonatan";
let PesoDoPaciente = 110;
let AlturaDoPaciente = 1.6;

let classificacao = ['Magro(a)', 'Normal', 'Sobrepeso', 'Obesidade', 'Obesidade Grave'];

function imc(peso, altura) {
  imc = peso / (altura * altura);

  if (imc < 18.50) {
    console.log(`Paciente: ${NomeDoPaciente}.`);
    console.log(`Altura: ${AlturaDoPaciente}.`);
    console.log(`Peso: ${PesoDoPaciente}.`);
    console.log(`IMC: ${imc.toFixed(2)}.`);
    console.log(`Classifição: ${classificacao[0]}.`);
    console.log(`Grau de obesidade: 0.`)
    console.log(`${NomeDoPaciente},Você está abaixo do peso ideal.`)
  } else if (imc < 24.99) {
    console.log(`Paciente: ${NomeDoPaciente}`);
    console.log(`Altura: ${AlturaDoPaciente}`);
    console.log(`Peso: ${PesoDoPaciente}`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classifição: ${classificacao[1]}`);
    console.log(`Grau de obesidade: 0.`)
    console.log(`${NomeDoPaciente}, Você está no peso ideal.`)
  } else if (imc <= 29.99) {
    console.log(`Paciente: ${NomeDoPaciente}`);
    console.log(`Altura: ${AlturaDoPaciente}`);
    console.log(`Peso: ${PesoDoPaciente}`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classifição: ${classificacao[2]}`);
    console.log(`Grau de obesidade: 1.`)
    console.log(`${NomeDoPaciente}, Cuidado! Você está acima do peso recomendado pela OMS.`)

  } else if (imc <= 39.99) {
    console.log(`Paciente: ${NomeDoPaciente}`);
    console.log(`Altura: ${AlturaDoPaciente}`);
    console.log(`Peso: ${PesoDoPaciente}`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classifição: ${classificacao[3]}`);
    console.log(`Grau de obesidade: 2.`)
    console.log(`${NomeDoPaciente}, Cuidado! Você está muito acima do peso recomendado pela OMS.`)
  } else if (imc >= 40) {
    console.log(`Paciente: ${NomeDoPaciente}`);
    console.log(`Altura: ${AlturaDoPaciente}`);
    console.log(`Peso: ${PesoDoPaciente}`);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classifição: ${classificacao[4]}`);
    console.log(`Grau de obesidade: 3.`)
    console.log(`${NomeDoPaciente}, Cuidado! Você está muito acima do peso recomendado pela OMS.`)
    console.log(`É importante procurar um médico para avaliar sua saúde.`)

  }
}

imc(PesoDoPaciente, AlturaDoPaciente);
*/