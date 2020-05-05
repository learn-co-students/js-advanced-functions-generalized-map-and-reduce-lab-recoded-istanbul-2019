
function map(src, func) {
    let r = [];
    for (let i = 0; i < src.length; i++) {
        r.push(func(src[i]))
    }
    return r;
}

/*////////// reduce ////////*/

function reduce(array, func, startPoint = 0) {
    let sum = startPoint;
    if (typeof func(true, true) == 'boolean') {
        sum = true;
    }
    for (let i = 0; i < array.length; i++) {
        sum = func(sum, array[i]);
    }
    return sum;
};
