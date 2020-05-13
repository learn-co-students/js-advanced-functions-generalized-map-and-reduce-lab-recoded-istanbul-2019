// Add your functions here
function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, startingPoint) {
    if(startingPoint != undefined) {
        return array.reduce(callback) + startingPoint
    }
    return array.reduce(callback)
}