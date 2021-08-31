'use strict';

let calculator = {
    read()
    {
        this.Number1 = +prompt("Значение 1 слогаемого","");
        this.Number2 = +prompt("Значение 2 слогаемого",""); 
    },
    sum()
    {
        return this.Number1 + this.Number2;
    },
    mul()
    {
        return this.Number1 * this.Number2;
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );