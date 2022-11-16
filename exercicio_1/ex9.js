var n1 = Number(prompt('Digite o primeiro valor'));
var n2 = Number(prompt('Digite o segundo valor'));
var n3 = Number(prompt('Digite o terceiro valor'));

var valores = [
    n1, n2, n3
]

var max = Math.max(... valores)
alert(`O maior valor digitado é ${max}`);