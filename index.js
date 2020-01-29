function map(arr, callback) {


    return arr.map(callback)


}

function reduce(arr, callback, start = 0) {
    // let newArr = []
    // arr.forEach(element => {
    //     if (!!element) {
    //         newArr.push(element)
    //     }
    // });
    // if (newArr.length > 0) {
    //     return true
    // } else {
    //     return false
    // }
    // return arr.reduce(callback, start)

    let accumulator = start ? start : arr[0];
    let i = start ? 0 : 1;

    for (; i < arr.length; i++) {
        accumulator = callback(arr[i], accumulator);
    }

    return accumulator;
}