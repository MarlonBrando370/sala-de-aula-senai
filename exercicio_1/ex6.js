var genero = prompt("Informe seu sexo: M / F");
var altura = Number(prompt("Digite a sua altura", "Ex: 1.70"));


if(genero == "f"){
    
    var pesoIdeal = (62.1*altura) - 44.7;
    alert(`Seu peso ideal é ${pesoIdeal}`)
}else if(genero == "m"){
    
   var pesoIdeal = (72.7 * altura)-58;
   alert(`Seu peso ideal é ${pesoIdeal}`)
   
}else{
    alert("genero inválido")
}


