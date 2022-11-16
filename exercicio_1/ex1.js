
var nome = prompt("Digite o seu nome");
var dataNasc = Number(prompt('Digite sua data de nascimento'));

var dataAtual = new Date();
var dataAt = dataAtual.getFullYear();
var idade = dataAt - dataNasc;

if(idade >= 16){
    alert(`${nome},Você pode votar`)
}else{
    alert(`${nome},Você não pode votar`)
}