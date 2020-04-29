// Add your functions here
const map = function (array, mapper){
let newArr=[]
    for(let i = 0; i < array.length; i++){
        newArr.push(mapper(array[i]))
    }
    return newArr;
}

const reduce = function(array, reducer, starting = 0){
    if(starting>0){
        return array.reduce(reducer)+starting;
    }else{
        return array.reduce(reducer);
    }
    
     
}