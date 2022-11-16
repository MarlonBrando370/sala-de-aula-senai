
    var n1 =  Number( prompt("Digite o primeiro número"));
    var n2 = Number(prompt("Digite o segundo número"));
    
    while(n1 == n2){
        alert()
        var n1 =  Number( prompt("Digite o primeiro número"));
        var n2 = Number(prompt("Digite o segundo número"));
}

if(n1 == n2){
    alert("Por favor, não insira números iguais");
}else if(n1 > n2){
    alert(`O número maior é ${n1}.`);
}else{
    alert(` O número maior é ${n2}.`);
}