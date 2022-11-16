valores=[


]



var total = 0;
for(c=1; c<=10; c++){


var sal = Number(prompt(`Digite o °${c} valor` ));
valores.push(sal);

}

for(i=0; i<valores.length; i++){
    var soma = valores[i];
    var total = total +soma;

}



document.write(`<h1>A soma dos valores digitados é ${total}</h1>`)