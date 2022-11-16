var lados = Number(prompt('Digite o números de lados'));

var area ;


 if(lados == 3){
    var tbase = Number(prompt('Digite o tamanho da basse em cm', 'Ex: 20'));
    var tAltura = Number(prompt('Digite a altura em cm', 'Ex: 10'));
    area = (tbase*tAltura)/2
    alert(`Tipo: TRIÂNGULO \n ${area}`);

}else if(lados == 4){
    var tlado = Number(prompt('Digite o tamanho de um lado em cm', 'Ex 4'));
    lados = tlado*tlado;
    alert(`Tipo: TRIÂNGULO \n ${lados}m²`);

}else if(lados == 5){
    alert(`Tipo: PENTÁGONO`);

}else if (lados < 3){
    alert(`Não é um polígono`);

}else if(lados > 5){
    alert(`POLÍGONO NÃO IDENTIFICADO`);
}