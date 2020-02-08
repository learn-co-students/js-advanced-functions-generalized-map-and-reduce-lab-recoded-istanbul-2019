// Add your functions here
function map(arr, fn) {
    const newArr = [];
    for (const e of arr) {
        newArr.push(fn(e));
    }
    return newArr;
}

function reduce(arr, fn, startingPoint) {
    let val;
    if (startingPoint !== undefined) {
        val = startingPoint;
        for (const e of arr) {
            val = fn(val, e);
        }
    } else {
        val = arr[0];
        arr = arr.slice(1);
        for (const e of arr) {
            val = fn(val, e);
        }
    }
    return val;
}