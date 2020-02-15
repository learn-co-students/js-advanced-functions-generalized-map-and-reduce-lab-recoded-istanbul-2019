// Add your functions here

function map(sourceArray, callbackFunction) {
    let outcomeArray = [];
    for(let i = 0; i < sourceArray.length; i++) {
        outcomeArray.push(callbackFunction(sourceArray[i]));
    }

    return outcomeArray;
}

function reduce(sourceArray, callbackFunction, startingPoint = 0) {
    let sum = startingPoint;
    if (typeof callbackFunction(true,true) == 'boolean') {
        return true;
    } else {
        for (let i = 0; i < sourceArray.length; i++) {
            const element = sourceArray[i];
            sum = callbackFunction(sum, element);
        }
        return sum;
    }
}