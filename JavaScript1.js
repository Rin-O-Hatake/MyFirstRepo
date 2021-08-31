'use strict';
function multiplyNumeric(obj)
{
    for(key in obj)
    {
        if(typeof obj[key] == "Number")
        {
            obj[key] *= 2; 
        }
    }
}