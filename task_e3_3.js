//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число
// как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function getSum(firstMember, secondMember){

    let sum = firstMember() + secondMember();
    return sum
}

function getFirstArrg() {
    number = Math.floor(Math.random( ) * (100 - 0 + 1)) + 0;
    console.log('NUmber 1 is', number);
    return number
}

function getSecondArrg() {
    number = Math.floor(Math.random( ) * (100 - 0 + 1)) + 0;
    console.log('NUmber 2 is', number);
    return number
}


const resultSum = getSum(getFirstArrg, getSecondArrg);
console.log(`The result of the above numbers is ${resultSum}`);