function calcular(){
const res = document.querySelector('p#p_resultado');
const p_nota = document.querySelector('p#nota')


const not1 = document.querySelector('input#n1');
const not2 = document.querySelector('input#n2');
const not3 = document.querySelector('input#n3');
    const nota1 = Number(not1.value);
    const nota2 = Number(not2.value);
    const nota3 = Number(not3.value);
    const media = (nota1+nota2+nota3)/3

    if(media >= 5){
        p_nota.innerHTML=  "NOTA:" + Math.round(media);
        res.innerHTML="APROVADO";
        res.style.background="green"

    }else{
        p_nota.innerHTML=", NOTA:" + Math.round(media);
        res.innerHTML="REPROVADO";
        res.style.background="red"

    }
    
}