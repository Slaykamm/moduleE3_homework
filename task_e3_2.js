
let number = 0;
let i = 1;
let checkNumber = false;

function numberAnalyze(number) {
        if (number > 3 && number !== 5) {
                if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
                        return true
                } else {
                        return false
                }
        } else {
                return false
        }
}

while (i < 99){
checkNumber = numberAnalyze(i);
if (checkNumber)
        {console.log(`Number ${i} is NOT the prime number`);
        }
else
        {console.log(`Number ${i} is the prime number`);
        }
i++
}
