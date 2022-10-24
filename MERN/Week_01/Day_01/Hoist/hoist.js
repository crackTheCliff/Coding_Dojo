//  #1

function exercise_1() {

    console.log(hello);
    var hello = 'world';
}

function exercise_1_Interpreted() {

    var hello;
    console.log(hello);
    hello = 'world';
}

console.log("\n" + "Exercise 1");
exercise_1(); // should return "undefined"
exercise_1_Interpreted(); // should return "undefined"

//  #2

function exercise_2() {

    var needle = 'haystack';
    test();
    function test() {
        var needle = 'magnet';
        console.log(needle);
    }
}

function exercise_2_Interpreted() {

    var needle;
    needle = 'haystack';
    test();
    function test() {
        var needle;
        needle = 'magnet';
        console.log(needle);
    }
}

console.log("\n" + "Exercise 2");
exercise_2(); // should return "magnet"
exercise_2_Interpreted(); // should return "magnet"

//  #3

function exercise_3() {

    var brendan = 'super cool';
    function print() {
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
}

function exercise_3_Interpreted() {

    var brendan;
    brendan = 'super cool';
    function print() {
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
}

console.log("\n" + "Exercise 3");
exercise_3(); // should return "super cool"
exercise_3_Interpreted(); // should return "super cool"

//  #4

function exercise_4() {

    var food = 'chicken';
    console.log(food);
    eat();
    function eat() {
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
}

function exercise_4_Interpreted() {

    var food;
    food = 'chicken';
    console.log(food);
    eat();
    function eat() {
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
    }
}

console.log("\n" + "Exercise 4");
exercise_4(); // should return "chicken" and "half-chicken"
exercise_4_Interpreted(); // should return "chicken" and "half-chicken"

//  #5

// function exercise_5() {

//     mean();
//     console.log(food);
//     var mean = function () {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
//     console.log(food);
// }

// function exercise_5_Interpreted() {

//     var mean;
//     mean();
//     console.log(food);
//     mean = function () {
//         var food;
//         food = "chicken";
//         console.log(food);
//         food = "fish";
//         console.log(food);
//     }
//     console.log(food);
// }

console.log("\n" + "Exercise 5");
// exercise_5(); // should return a run time error: "mean is not a function"
// exercise_5_Interpreted(); //should return a run time error: "mean is not a function"

//  #6

function exercise_6() {

    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
}

function exercise_6_Interpreted() {

    var genre;
    console.log(genre);
    genre = "disco";
    rewind();
    function rewind() {
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
}

console.log("\n" + "Exercise 6");
exercise_6(); // should return "undefined", "rock", "r&b" and "disco"
exercise_6_Interpreted(); // should return "undefined", "rock", "r&b" and "disco"

//  #7

function exercise_7() {

    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
}

function exercise_7_Interpreted() {

    var dojo;
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
}

console.log("\n" + "Exercise 7");
exercise_7(); // should return "san jose", "seattle", "burbank" and "san jose"
exercise_7_Interpreted(); // should return "san jose", "seattle", "burbank" and "san jose"

//  #8

function exercise_8() {

    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if (dojo.students > 50) {
            dojo.hiring = true;
        }
        else if (dojo.students <= 0) {
            dojo = "closed for now";
        }
        return dojo;
    }
}

function exercise_8_Interpreted() {

    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students) {
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if (dojo.students > 50) {
            dojo.hiring = true;
        }
        else if (dojo.students <= 0) {
            dojo = "closed for now";
        }
        return dojo;
    }
}

console.log("\n" + "Exercise 8")
exercise_8(); // should return a run time error: "assignment to constant error"
exercise_8_Interpreted(); // should return a run time error: "assignment to constant error"