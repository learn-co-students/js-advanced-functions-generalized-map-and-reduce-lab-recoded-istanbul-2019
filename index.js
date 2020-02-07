// Add your functions here
// my own map-like methods
function map(array, fn){
    let newArr = [];

    array.forEach(element => {
        newArr.push(fn(element))
    });

    return newArr
}

function reduce(array, fn, start){
    let memo = start || array[0];
    !!start ? null : array.shift() // start false gelmesi durumunda, arrayin ilk elemanini kaldiriyourz ki element undefined olarak kalmasin
    array.forEach(element => {
        memo = fn(memo, element) 
    })

    return memo;
}
