// Add your functions here
function map(sourceArray, fn) {
    let newArray = [];
    for (let elements of sourceArray) {
        newArray.push(fn(elements));
    };
    return newArray;
};

function reduce(sourceArray, fn, startingPoint) {
    if (startingPoint  !== undefined) {
        return sourceArray.reduce(fn) + startingPoint;
    } else {
        return sourceArray.reduce(fn);
    };
};