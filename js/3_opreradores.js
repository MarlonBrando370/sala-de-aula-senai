var n1 = 7;
var n2 = 15;

var soma = n1 + n2;
var subtracao = n1 - n2;
var multiplicacao = n1 * n2;
var divisao = n1 / n2;

document.write(` a soma de ${n1} e ${n2} é igual a ${soma} <br>` );

document.write(` a multiplicação de ${n1} e ${n2} é igual a ${multiplicacao} <br>`);

document.write(` a divisão de ${n1} e ${n2} é igual a ${divisao} <br>`);

document.write(divisao.toFixed(2) `<br>`);
document.write(Math.round(divisao));

