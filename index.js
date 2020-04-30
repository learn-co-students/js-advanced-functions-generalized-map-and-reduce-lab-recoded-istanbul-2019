// // // Add your functions here

const map = function (arr, func) {
    let newArr = [];
    for (let el of arr) {
        newArr.push(func(el));
    }
    return newArr;
}

map([1, 2, 3, -9], function(a){ return -1 * a } )
console.log(map([1, 2, 3, -9], function(a){ return -1 * a } )
)

const reduce = (arr, func, init) => {
    if (init) {
        return arr.reduce(func) + init;
    }else {
        return arr.reduce(func);
    }
}

const sourceArray = [1,2,3]
const init = 100
reduce(sourceArray, function(e, memo){return e + memo});

console.log(reduce(sourceArray, function(e, memo){return e + memo}, init))
