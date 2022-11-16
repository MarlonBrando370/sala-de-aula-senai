var res = document.querySelector('#numbers');

var numbers = [
    1, 5, 3, 4, 2, 6, 7, 8, 10, 9
]

for(let i =0; i < numbers.length; i++){
    var num = numbers[i]
    numbers.sort(function ordenar(a,b){
        return a+b;
    })
    document.write(`<br> 👉${num}`);


}


