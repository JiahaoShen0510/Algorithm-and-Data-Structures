"use strict";

function MaxSubarray (arr, num){
    if (num>= arr.length){
        return ("invalid input")
    }

    let max1=0
    for (let i=0; i<num; i++){
        max1 += arr[i];
    }

    let max2=max1
    let FinalMax = 0
    for (let i=num; i<arr.length; i++){
        max2 = max2-arr[i-num]+arr[i];
        FinalMax = Math.max (max1, max2);
    }

    return FinalMax   
}
    

        
    

