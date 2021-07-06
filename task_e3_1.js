let randomArray = [0, 2, 0, 2, 3, 5, 8, 12, 21, 34, 55, 55, 55, 89, 144, 89, 77, 0, 0, 4, null, "2", 2, "sd1f", "sdf", NaN, undefined, true, false];
let zeroItem = 0;
let oddItem = 0;
let evenItem = 0;
let notNumberItem = 0;
let checkNumber = 0;

function checkArrayNumber(item){
    if(typeof item === "number" && item === item){
        if (item === 0) {return 0}
        else if (item % 2) {return 1}
        else {return 2}
    }
}


randomArray.forEach(function(item) {

    checkNumber = checkArrayNumber(item);

    if (checkNumber === 0){zeroItem++}
    else if (checkNumber === 1){oddItem++}
    else if (checkNumber === 2){evenItem++}
    else (notNumberItem++)
});

console.log(`Zero items in array are ${zeroItem}, odd items in array are ${oddItem}, even items in array are ${evenItem}, not number members are ${notNumberItem}`)

