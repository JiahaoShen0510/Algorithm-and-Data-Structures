"use strict";

function FirstPairZeroSortArray (arr){
    const sorted = arr.sort ((a, b)=> a-b);
    let left =0
    let right = sorted.length-1
    while (left < right){
       let sum = sorted[left] + sorted[right]
       if (sum ===0){
           return [sorted [left], sorted[right]];  
       } else if (sum >0){
           right --;
       } else{
           left ++;
       }
    }
    console.log (total)
}
    

        
    

