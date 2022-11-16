var displey = document.querySelector('.displey');
var theme = document.querySelector('.theme');
var body = document.querySelector('#body')

function insertNum(num){



    displey.value += num

}

function insertDel(del){
    
    var dl = document.querySelector('.displey').value
    displey.value = dl.substring(0, dl.length - 1)
    
}

function insertReset(texReset){
   

    displey.value = ""
    
    

}

 
function calc(cal){
    
    var velueCalculate = displey.value

   

    
    velueCalculate = eval(velueCalculate)
    if(velueCalculate == undefined)
    {
        displey.value = ""
    }
    else
    {

    
    displey.value = velueCalculate
    }
    
}

function tema() {
    
    if(theme.checked == true){       
        body.classList.add('theme_2')
        body.classList.remove('theme_1')
    }
    if(theme.checked == false){
        body.classList.add('theme_1')
        body.classList.remove('theme_2')
    }
}
