
function multiply(){
    var num1 = document.querySelector('#number1').value
    var num2 = document.querySelector('#number2').value
    var result = document.querySelector('#pResult')
    
    if(num2 == 0){
      
        result.innerHTML="O segundo número não podera ser igual a zero";

    }else{
        result.innerHTML=(`${num1} X ${num2} = ${num1*num2}`)
    }
}