var senha = 1234;
var senhaFornecida = Number(prompt("Digite a senha"));

if(senhaFornecida == senha){
    alert("Acesso permitido!");
}else{
    alert("Acesso negado!");
}