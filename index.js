//map callback

//with map
//let map = (arr, func) => arrNew = arr.map(func)

//with map-like
const map = (arr, func) => {
    let newArr = [];
    for (let item of arr) newArr.push(func(item));
    return newArr;
}
//map([1, 2, 3, -9], (e) => e * -1);


//reduce callback
//with reduce
//const reduce = (arr, func, start = 0) => arr.reduce((func), start) (0 is a falsy value)
const reduce = (arr, func, start) => (!!start) ? arr.reduce((func), start) : arr.reduce((func))

//with reduce-like
/*const reduce = (arr, func, start) => {
    let total;
    for (let item of arr) (!!start) ? total += func(item, start) : total += func(item);
    return total;
}*/
//reduce([1, 2, 3, -9], func(acc, curr) => acc + curr);
