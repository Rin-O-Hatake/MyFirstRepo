'use strict';
function readNumber() 
{
    let num;
  
    while ( isFinite(num) == false )
    {
        num = prompt("Введите число", 0);
    }
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);