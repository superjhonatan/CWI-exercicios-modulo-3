//O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

// função para imprimir
function imprimir(item) {
    console.log(item)
};

//função para calcular a margem bruta
function CalcularMargemBruta(ReceitaLiquida,CustoDosProdutos){
    //calculo do lucro bruto
    let LucroBruto = ReceitaLiquida - CustoDosProdutos;

    //calculo da margem bruta
    let MargemBruta = (LucroBruto / ReceitaLiquida)*100;

    //retornando valor da margem bruta limitado a duas casas decimais
    return MargemBruta.toFixed(2);
}

//chamando a funcção imprimir para imprimir o resultado da função que irá calcular a margem bruta duas vezes com valores diferentes.
imprimir(CalcularMargemBruta(1000000, 500000));
imprimir(CalcularMargemBruta(528459.11, 632501.87));