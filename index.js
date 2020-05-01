// Add your functions here
////////////////my own map-like methods/////////////
const map=(array,fn)=>{
    let myArray= array.map(fn);
    return myArray;
}

//////////////// my own reduce-like methods/////////////
const reduce=(array,fn,startingPoint=0)=>{
    let resault;
    if(startingPoint>0){
        resault= array.reduce(fn,startingPoint);
    }
    else{
        resault= array.reduce(fn);
    } 
    return resault;
}


