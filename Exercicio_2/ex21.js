function calcularReajuste(){

    var sal =  Number( document.querySelector('#valorSal').value)

    var resAnt = document.querySelector('#salarioAntigo');
    var resReajuste = document.querySelector('#vReajuste');
    var resNovoSal = document.querySelector('#nSalario');

    var vReajuste =0;
    var nSal =0;

    if(sal <= 300){
        vReajuste = (sal*50)/100;
        nSal = sal + vReajuste;
    }else{
        vReajuste = (sal*30)/100;
        nSal = sal + vReajuste;
    }

    resAnt.innerHTML=(`Salário antigo: ${sal}`);
    resReajuste.innerHTML=(`Valor do reajuste: ${vReajuste}`);
    resNovoSal.innerHTML=(`Novo valor do salário: ${nSal}`);


}
