var sal = Number(prompt('Digite o valor do salário'));

var valorAum;
var novoSal;
if(sal <= 280){
    valorAum = (sal*20)/100;
    novoSal = sal+valorAum;
    alert(`Antigo salário: ${sal} \n Porcentual de aumento: 20% \n Valor do aumento:${valorAum} \n Novo salário:${novoSal} `);
}else if(sal > 280 && sal <= 700){
    valorAum = (sal*15)/100;
    novoSal = sal+valorAum;
    alert(`Antigo salário: ${sal} \n Porcentual de aumento: 20% \n Valor do aumento: ${valorAum} \n Novo salário: ${novoSal} `);

}else if(sal > 700 && sal <= 1500){
    valorAum = (sal*10)/100;
    novoSal = sal + valorAum;
    alert(`Antigo salário: ${sal} \n Porcentual de aumento: 20% \n Valor do aumento: ${valorAum} \n Novo salário: ${novoSal} `);
}else if(sal > 1500){
    valorAum = (sal*5)/100;
    novoSal = sal + valorAum;
    alert(`Antigo salário: ${sal} \n Porcentual de aumento: 20% \n Valor do aumento: ${valorAum} \n Novo salário: ${novoSal} `);
}

