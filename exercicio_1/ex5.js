var n1 = Number(prompt('Digite o primeiro valor'));
var n2 = Number(prompt('Digite o segundo valor'));
var n3 = Number(prompt('Digite o terceiro valor'));

while(n1 == n2 || n1 == n3 || n2 == n3){
    alert("Foram digitado valores iguais, infoeme um valor diferente");
    var n1 = Number(prompt('Digite o primeiro valor'));
var n2 = Number(prompt('Digite o segundo valor'));
var n3 = Number(prompt('Digite o terceiro valor'));
}


numeros =[
    n1, n2, n3
]

numeros.sort()
alert(numeros)

 
