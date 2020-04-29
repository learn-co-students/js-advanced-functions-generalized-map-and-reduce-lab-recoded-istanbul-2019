// Add your functions here
function mapToNegativize(Array){
    let negArr= Array.map(function(element){
         return -1*element;
     });
     return negArr;
 }
 function mapToNoChange(Array){
     let noCh= Array.map(function(element){
          return element;
      });
      return noCh;
  }
  function mapToDouble(Array){
     let double= Array.map(function(element){
          return element*2;
      });
      return double;
  }
  function mapToSquare(Array){
     let square= Array.map(function(element){
          return element**2;
      });
      return square;
  }
 
 let reduceToTotal = function(sourceArray,startingPoint){
 
     let total=sourceArray.reduce(function (sum,sum1){
     return sum+sum1;
 },startingPoint);
 return total;
 }
 