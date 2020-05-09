function map(sourceArray, callback) {
    let newArray = [];
    for(let i = 0; i < sourceArray.length; ++i) {
        let number = sourceArray[i];
        newArray.push(callback(number));
    }
    return newArray;
}

function reduce(sourceArray, callback, start) {
    if(start == null) {
        return sourceArray.reduce(callback);
    } else {
        return sourceArray.reduce(callback, start);
    }
}