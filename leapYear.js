const lYear = function (year)
{
    return (year % 100=== 0) ? (year % 400 === 0): (year % 4 === 0);
}

console.log(lYear(1997));
console.log(lYear(1996));
console.log(lYear(1900));
console.log(lYear(2000));

console.log(lYear(1985));
console.log(lYear(1990));
console.log(lYear(2030));
console.log(lYear(2020));


