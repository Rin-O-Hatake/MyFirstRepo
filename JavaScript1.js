'use strict';
// let styles  = ["Джаз", "Блюз"];
// styles.push = ("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)]  = "Классика";
// alert(styles.shift());
// styles.unshift = ("Рэп","Регги")
// alert(styles);



function sumInput()
{
    let Summ = [0];
    let i = 1;
    while(true)
    {
        Summ[i] = +prompt("A?","");
        if(Summ[i] == null || Summ[i] == "" ||  !isFinite(Summ[i]) )
        {
            break;
        }
        else i++;
    }
    let Summa = 0;
    for(let Sum of Summ)
    {
        if(isFinite(Sum))
        {
            Summa += Sum;
        }
        else break;
    }
    alert(Summa);
}
sumInput();