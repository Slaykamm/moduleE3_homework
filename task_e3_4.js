//Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль,
// начиная от первого и заканчивая вторым. Используйте setInterval.
//
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let i = 0;

const intervalPrint = function recursion(startInterval, endInterval){
    const intervalID = setInterval(function (){console.log(startInterval);}, 1000*(i+1))
    setTimeout(function (){
        clearInterval(intervalID)
    }, 1000*(i+1))

    if (startInterval < endInterval) {
        recursion(startInterval + 1, endInterval, i++);   // решил сделать через рекурсию, хотя через for наверно логичнее.
    }
}
intervalPrint(5, 15)   // сюда вводим интервал