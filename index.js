// Add your functions here


function  map(arr, fn){return arr.map(fn)
}

function reduce (arr,fn,start="" ){
    if (start === ""){
    return arr.reduce(fn)
    }else{
        return arr.reduce(fn,start)
    }
}

// function reduceToTotal(arr,start = 0){
//     return arr.reduce((t,e)=>t+=e,start)
// }

// function reduceToAllTrue(arr){
//     return arr.reduce((b,e)=>{
//         if (!e) 
//         b = false
//         return b
//     },true)
// }

// function reduceToAnyTrue(arr){
//     return arr.reduce((b,e)=>{
//         if (e) 
//         b = true
//         return b
//     },false)




