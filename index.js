// Add your functions here
function map(arr,fn){
    let result = []
    for (let elem of arr){
        result.push(fn(elem))
    }
    return result
}


expect(reduce(sourceArray, function(e, memo){return e + memo})).to.equal(6)

expect(reduce(sourceArray, function(e, memo){return e + memo}, startingPoint)).to.equal(106)

function reduce(arr,fn,startingVal=0){
    let sum = 0
    let memo = 0
    for(let i=1;i<arr.length;i++){
         memo += arr[i-1]
         sum = fn(arr[i],memo+startingVal) 
    }
    return sum 
}


