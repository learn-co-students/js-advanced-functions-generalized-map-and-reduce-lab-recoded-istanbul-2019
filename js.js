let outerFunction  = function(){
   // debugger
       let x = 5;
       //console.log(y); //line 1, ReferenceError: y not defined
    let nestedFunction = function() {
 
       if(true){
          let y = 7;
          console.log(x); 
          //line 2, x will still be known prints 5
       }
 
       if(true){
         //  console.log(y); 
         //line 3, prints 7
        }
         //  console.log(y); 

    }
    return nestedFunction;
 }
 
 

//  console.log(outerFunction());
 


















//  function hackerSpeker(str){
//     let string = str.split("")
//     string = string.map(e=>{
//        if (e==="a"){
//           return "4"
//        }else if(e=== "e"){
//           return "3"
//        }else if(e=== "i"){
//          return "1"
//       }else if(e=== "o"){
//          return "0"
//       }else if(e=== "s"){
//          return "5"
//       }else{
//          return e
//       }
//     })

//     return string.join("")
//  }


//  function hackerSpeker(str){
   //    let string = str.split("")
   //    string = string.map(e=>{
      //      switch (e){
         //         case "a": return "4"; break
         //         case "e": return "3"; break
         //         case "i": return "1"; break
         //         case "o": return "0"; break
         //         case "s": return "5"; break
         //         default: return e 
         
         //      }
         //    })
         
         //    return string.join("")
         // }
         
         function hackerSpeker(str){
            let obj = {
               'a':'5',
               'e':'3',
               'i':'1',
               'o':'0',
               's':'5'
            }
            
            return str.replace(/[aeios]/gi,lett=>obj[lett])
         }
         
         console.log(hackerSpeker("programming is fun"));