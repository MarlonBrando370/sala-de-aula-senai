

var qtdAluno = Number(prompt('Quantos alunos São? '));
var total =0;
for(i=1; i<= qtdAluno; i++){
    var nota = Number(prompt(`Informe a °${i} nota`));
    total=total+nota;
}
var media = total/qtdAluno

document.write(`<h1>A média da sala é ${media.toFixed(1)}</h1>`);