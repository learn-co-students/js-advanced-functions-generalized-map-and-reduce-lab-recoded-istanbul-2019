// Add your functions here
function map(soucre, fun) {
    let newArray = []
    soucre.forEach(element => {
        newArray.push(fun(element))
    });
    return newArray
}
function reduce(soucre, fun, startingPoint) {
    let i, result;
    if (startingPoint) {
        i = 0
        result = startingPoint
    }
    else {
        i = 1
        result = soucre[0]
    }
    for (; i < soucre.length; i++) {
        result = fun(soucre[i], result)
    }
    return result;
}


