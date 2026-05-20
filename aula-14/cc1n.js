var issoeumastring = 'Isso e uma string';
let issoeumnumero = 4;
let issotbmeumnumero = 5;
const issoeumboleano = true;
let issotbmeumastring = '4';

console.log(issoeumastring == issoeumnumero); 
console.log(issoeumnumero == issotbmeumastring);
console.log(issoeumnumero === issotbmeumastring);
console.log(issoeumnumero === issotbmeumnumero);

console.log(typeof issoeumastring == typeof issoeumnumero);
console.log(typeof issoeumastring)
console.log(typeof issoeumboleano)
console.log(typeof issoeumnumero)
console.log(issoeumnumero + issotbmeumastring);

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;
console.log(sum.toPrecision(1))

for (let i = 0; i <= 10; i += 2) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

let j = 0
while (j <= 10) {
    if (j % 2 !== 0) {
        console.log(j)
    }
    j++
}

let J = 1
while(J <= 10) {
    {
        console.log(J);
    }
    J+=2;
}
console.log(J);