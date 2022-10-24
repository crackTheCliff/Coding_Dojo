//  #1
function exercise_1() {

    const cars = ['Tesla', 'Mercedes', 'Honda']
    const [randomCar] = cars
    const [, otherRandomCar] = cars
    //Predict the output
    console.log(randomCar)
    console.log(otherRandomCar)
}

console.log("\n" + "Exercise 1");
exercise_1();
// should return for randomCar -> "Tesla" and otherRandomCar -> "Mercedes"

// #2
function exercise_2() {

    const employee = {
        name: 'Elon',
        age: 47,
        company: 'Tesla'
    }
    const { name: otherName } = employee;
    //Predict the output
    console.log(name);
    console.log(otherName);
}

console.log("\n" + "Exercise 2");
// exercise_2();
// should return error for name -> "name is not defined" and otherName -> "Elon"

//  #3
function exercise_3() {

    const person = {
        name: 'Phil Smith',
        age: 47,
        height: '6 feet'
    }
    const password = '12345';
    const { password: hashedPassword } = person;
    //Predict the output
    console.log(password);
    console.log(hashedPassword);
}

console.log("\n" + "Exercise 3");
exercise_3();
// should return error for password -> "12345" and hashedPassword -> "undefined"

//  #4
function exercise_4() {

    const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
    const [, first] = numbers;
    const [, , , second] = numbers;
    const [, , , , , , , , third] = numbers;
    //Predict the output
    console.log(first == second);
    console.log(first == third);
}

console.log("\n" + "Exercise 4");
exercise_4();
// should return "false" and "true" 

//  #5
function exercise_5() {

    const lastTest = {
        key: 'value',
        secondKey: [1, 5, 1, 8, 3, 3]
    }
    const { key } = lastTest;
    const { secondKey } = lastTest;
    const [, willThisWork] = secondKey;
    //Predict the output
    console.log(key);
    console.log(secondKey);
    console.log(secondKey[0]);
    console.log(willThisWork);
}

console.log("\n" + "Exercise 5");
exercise_5();
// should return error for key -> "value", for secondKey -> "[1,5,1,8,3,3]", for secondKey[0] -> "1" and willThisWork -> "5"
