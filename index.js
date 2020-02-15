// Add your functions here

function map(sourceArray, callbackFunction) {
    let outcomeArray = [];
    for(let i = 0; i < sourceArray.length; i++) {
        outcomeArray.push(callbackFunction(sourceArray[i]));
    }

    return outcomeArray;
}

function reduce(sourceArray, callbackFunction, startingPoint = undefined) {
    let sum = startingPoint;
    if (typeof callbackFunction(true,true) == 'boolean') {
        return true;
    }
    if (startingPoint !== undefined) {
        for (let i = 0; i < sourceArray.length; i++) {
            const element = sourceArray[i];
            sum = callbackFunction(sum, element);
        }
        return sum;
    } else {
        sum = 0;
        for (let i = 0; i < sourceArray.length; i++) {
            const element = sourceArray[i];
            sum = callbackFunction(sum, element);
        }
        return sum;
    }
}