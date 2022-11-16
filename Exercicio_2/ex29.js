
var pQtd = document.querySelector('#qtd');
var pQtsN = document.querySelector('#qtdNegativo');

valores=[

]

valorNegativo=[

]

var qtdNegativo = 0;
for(c=1; c<=10; c++){


var sal = Number(prompt(`Digite o °${c} valor` ));
valores.push(sal);

}

for(i=0; i<valores.length; i++){
    var n = valores[i];
    if(n < 0){
        qtdNegativo++
        valorNegativo.push(n);
    }
}

document.write(`<h1>A quantidade de números negativo é ${qtdNegativo} <br> São eles ${valorNegativo}`);
pQtsN.innerHTML=(`São eles ${valorNegativo}</h1>`);