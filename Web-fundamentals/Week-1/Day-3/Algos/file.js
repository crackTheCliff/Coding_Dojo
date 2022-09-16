var a = 25;
a = a - 13;
console.log(a / 2);

a = "hello";
console.log(a + " hello");
// 6
// hello hello


for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);
// 0
// 4
// 8
// outside of the loop 12


function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
// the current sum is: 2
// the current sum is: 5
// the current sum is: 10
// the total is: 10


var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// I should bring: sunglasses, a coat, and a smile!


for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// ignition!
// 1
// liftoff!


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            countPositives++
        }
    }
    
console.log("there are " + countPositives + " positive values");
// there are 4 positive values
