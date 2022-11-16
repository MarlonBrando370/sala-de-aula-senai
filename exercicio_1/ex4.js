var nMaca = Number(prompt("Informe a quantidade de maça que deseja comprar"));

var valorPromo = 0.25;
var valorIntegral = 0.3;

if(nMaca >= 12){
    var valorTotal = valorPromo*nMaca
    alert(`O valor total:${valorTotal} reais`)
}else{
    var valorTotal = valorIntegral*nMaca
    alert(`O valor total: ${valorTotal} reais`)
}