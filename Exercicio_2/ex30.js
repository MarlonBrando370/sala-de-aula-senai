
var pQtd = document.querySelector('#qtd');
var pQtsN = document.querySelector('#qtdNegativo');

valores=[


]



var qtd10e20 = 0;
var fora10e20 = 0;
for(c=1; c<=10; c++){


var sal = Number(prompt(`Digite o °${c} valor` ));
valores.push(sal);

}

for(i=0; i<valores.length; i++){
    var n = valores[i];
    if(n >= 10 && n <=20){
        qtd10e20++
       
    }else{
        fora10e20++
    }
}





document.write(`<h1>A quantidade de números entre 10 e 20 são ${qtd10e20} <br> e a quantidade fora deles é ${fora10e20}</h1>`);