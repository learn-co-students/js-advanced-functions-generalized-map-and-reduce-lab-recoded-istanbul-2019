// Add your functions here

const array = [1,2,3];

function map(array , fnc){
    let newArray = []
    for(let i =0; i< array.length; i++){
        newArray.push(fnc(array[i]));
    }

    return newArray;
}

function reduce(array , fnc , str){
    let newArray = array.reduce(fnc)
    if(str){
        return newArray + str;
    }else{
        return newArray;
    }
    
}
