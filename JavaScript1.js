'use strict';
// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');
function calculate(str)
{
    let Summ;
    let arr = str.split(" ");
    switch(arr[1])
    {
        case "+": Summ = +arr[0] + +arr[2];
            break;
        case "-": Summ = +arr[0] -+arr[2];
            break;
        case "*": Summ = +arr[0] * +arr[2];
            break;
        case "**": Summ = Math.pow(+arr[0], +arr[2]);
            break;
        case "/": Summ = +arr[0] / +arr[2];
            break;
    }
    alert(Summ);
}
let Prom = prompt("Введите выражение","");
calculate(Prom);
