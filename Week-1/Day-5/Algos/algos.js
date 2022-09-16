var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);
// //      var     |       value
// //  fruit1      |      apples                
// //  fruit2      |      oranges , apples
// //              |

// //      console
// //  apples and apples



var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);
// //      var     |       value
// //    fruit1    |   apples , oranges                 
// //    fruit2    |   oranges , apples
// //     temp     |   apples , apples

// //      console
// // apples and oranges 



var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
//      var     |       value
//     start    |         0 , 2 , 4, 6          
//      end     |        12 , 10 , 8 , 6
//              |

//      console
//  start: 0, end: 12
//  start: 2, end: 10
//  start: 4, end: 8


let arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
console.log(reverse(arr));



