//O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

let ReceitaLiquida = 1000;

let CustoDosProdutos = 900;

let LucroBruto = ReceitaLiquida - CustoDosProdutos;

let MargemBruta = (LucroBruto / ReceitaLiquida)*100;

console.log(`${MargemBruta}%`);