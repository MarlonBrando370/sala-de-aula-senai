
    function calcular(){

    
    
    var nem1 =  document.querySelector('#name1').value
    
    var nem2 = document.querySelector('#name2').value ;
    var nem3 = document.querySelector('#name3').value;
    var nem4 = document.querySelector('#name4').value;
    var nem5 = document.querySelector('#name5').value;
    var nem6 = document.querySelector('#name6').value;
    var nem7 = document.querySelector('#name7').value;
    var nem8 = document.querySelector('#name8').value;
    var nwm9 = document.querySelector('#name9').value;
    var nem10 = document.querySelector('#name10').value;

    var wage1_input =document.querySelector('input#wage1').value;
    var wage2_input =document.querySelector('#wage2').value;
    var wage3_input =document.querySelector('#wage3').value;
    var wage4_input =document.querySelector('#wage4').value;
    var wage5_input =document.querySelector('#wage5').value;
    var wage6_input =document.querySelector('#wage6').value;
    var wage7_input =document.querySelector('#wage7').value;
    var wage8_input =document.querySelector('#wage8').value;
    var wage9_input =document.querySelector('#wage9').value;
    var wage10_input =document.querySelector('#wage10').value;

    var pNeme1 = document.querySelector('#p_neme1');
    var pNeme2 = document.querySelector('#p_neme2');
    var pNeme3 = document.querySelector('#p_neme3');
    var pNeme4 = document.querySelector('#p_neme4');
    var pNeme5 = document.querySelector('#p_neme5');
    var pNeme6 = document.querySelector('#p_neme6');
    var pNeme7 = document.querySelector('#p_neme7');
    var pNeme8 = document.querySelector('#p_neme8');
    var pNeme9 = document.querySelector('#p_neme9');
    var pNeme10 = document.querySelector('#p_neme10');

    var pSalAntigo1 = document.querySelector("p#salario_antigo1");
    var pSalAntigo2 = document.querySelector("#salario_antigo2");
    var pSalAntigo3 = document.querySelector("#salario_antigo3");
    var pSalAntigo4 = document.querySelector("#salario_antigo4");
    var pSalAntigo5 = document.querySelector("#salario_antigo5");
    var pSalAntigo6 = document.querySelector("#salario_antigo6");
    var pSalAntigo7 = document.querySelector("#salario_antigo7");
    var pSalAntigo8 = document.querySelector("#salario_antigo8");
    var pSalAntigo9 = document.querySelector("#salario_antigo9");
    var pSalAntigo10 = document.querySelector("#salario_antigo10");

    var pPorcentagem = document.querySelector('p#porcentagem1');
    var t = document.querySelector('#teste');

    var novoSal = document.querySelector('#salario_novo1');

    cadastro=[
        {
            nome:nem1,
            salario:wage1_input,
           nSal:0,


        },
        {
            nome:nem2,
            salario:wage2_input,
        },
        {
            nome:nem3,
            salario:wage3_input,
        },
        {
            nome:nem4,
            salario:wage4_input,
        },
        {
            nome:nem5,
            salario:wage5_input,
        },
        {
            nome:nem6,
            salario:wage6_input,
        },
        {
            nome:nem7,
            salario:wage7_input,
        },
        {
            nome:nem8,
            salario:wage8_input,
        },
        {
            nome:nem9,
            salario:wage9_input,
        },
        {
            nome:nem10,
            salario:wage10_input,
        }
    ]
var i = 0
   var c=0;
   while(c < cadastro.length){
    var sal = cadastro[c].salario;
    var nem = cadastro[c].nome;
    c++
    if(sal<300){
        cadastro[c].nSal= ((dadastro[c].salario*30)/100)+cadastro[c].salario
    }
   
   }
     
    
    
    pNeme1.innerHTML=dadastro[0].nSal
}
    
    


