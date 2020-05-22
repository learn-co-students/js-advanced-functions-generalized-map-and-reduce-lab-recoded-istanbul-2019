// Add your functions here
const map = function (arr, func, a='') {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        console.log(arr[i])
        newArr.push(func(arr[i])) 
    }
    return newArr
}

/* const myArr = [1,2,3]

const myFunc = (e, memo) => e + memo

reduce(myArr, myFunc) */

const reduce = function (source, func, e = 0) {
    if (e > 0) {
        return source.reduce(func) + e
    }else {
        return source.reduce(func)
    }
}