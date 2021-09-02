'use strict';
let Index = Symbol("Id");
let user = 
{
    Street : 23,
    [Index] : "Key",
};
alert(user?.Street?.Flat);
alert(user[Index]);
for(let Use in user)
{
    alert(Use);
}
