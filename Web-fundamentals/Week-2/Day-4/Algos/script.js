var arr2d = [[2, 5, 8],
[3, 6, 1],
[5, 7, 7]];


function isPresent(arr2d, value) {
    for (const element of arr2d) {
        if (element.includes(value)) {
            return true;
        }
    }
    return false;
}

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array




// complete the following function
function flattenArray(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            newArray.push(arr[i][j]);
        }
    }
    return newArray;
}

var result = flattenArray([
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

