function  calcNumber(){
    var number = document.querySelector('#inputNumber').value
    var result = document.querySelector('#res');
   

  var num = [

  ]
  if(number <= 0){
    result.innerHTML="Informe um número maior que zero"
  }else{

  

    for(c =1; c <= number; c++){
       num.push(c);
        
        
    }
   result.innerHTML=(`Resultado: ${num}`);
}
}