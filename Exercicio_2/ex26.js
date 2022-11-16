
 
    var n = Number(prompt('Informe um número de 1 à 10 '));
    
    while(n < 1 || n > 10 ){
         alert('Número inválido, tente novamemte.');
        var n = Number(prompt('Informe um número de 1 à 10 '));
     }
       
    
    
    for(c=1; c<= 10; c++){
        var tab = c*n;
        document.write(`<br>${c} x ${n} = ${tab}`)
    }