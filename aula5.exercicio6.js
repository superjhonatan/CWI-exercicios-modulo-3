//Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final do processo (atente-se para utilizar . como separador decimal):

// O saldo da sua conta é R$ 1000,00
let SaldoDaConta = 1000.00;  
// Você decide comprar uma calça por R$ 99,90
let Calca = 99.90; 
// Você recebe o seu salário de R$ 2500,00
let Salario = 2500.00; 
// Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
let Doar = 0.10; 
// saldo da conta menos despezas mais salario
SaldoDaConta = SaldoDaConta-Calca+Salario-Doar;
// Você compra um ar condicionado cujo valor é 25% do seu saldo atual
let ArCondicionado = (SaldoDaConta/100*25); 
//saldo da conta após a compra do ar condicionado
SaldoDaConta = SaldoDaConta - ArCondicionado;
// Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
let Divida = SaldoDaConta/2;
 // Qual o valor do seu saldo? 🤔
 SaldoDaConta = SaldoDaConta - Divida;
 
 console.log(SaldoDaConta);
