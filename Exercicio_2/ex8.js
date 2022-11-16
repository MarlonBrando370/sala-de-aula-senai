var res = document.querySelector('#p');

var numbers = [
    1, 5, 3, 4, 2, 6, 7, 8, 10, 9
]

numbers.sort(function ordenar(a,b){
    return b-a;
})
for(let i =0; i < numbers.length; i++){
    var num = numbers[i]
   
    document.write(`<br> 👉${num}`)
}