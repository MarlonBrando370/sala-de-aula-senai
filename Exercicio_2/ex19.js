




do{



 do{



     alert("A nota não poderá ser menor que zero e maior que dez");
 
    
    var n1 = Number(prompt("Informe a primeira nota"));

    var n2 = Number(prompt("informe a segunda nota"));
    

    
    
    
}while(n1 <0 || n1 > 10 || n2 < 0 || n2 > 10)

var media = (n1+n2)/2
alert(` Á média é ${media}`);

var conf = confirm('Deseja calcular outra média?');

}while(conf == true)

document.write('<h1>Obrigado por usar nossa sistema<h1>');


   




