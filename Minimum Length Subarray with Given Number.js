"use strict";

function MinLenSubArray (arr, num){
    let total =0
    let start =0
    let end =0
    let MinLen = Infinity

    while (start < arr.length){
        if (total < num && end<arr.length){
            total += arr[end];
            end ++;
        } else if (total >= num){
            MinLen = Math.min (MinLen, end-start);
            total -= arr[start];
            start ++;
        } else{
            break;
        }
    }

    return MinLen == Infinity? "invalid input": MinLen
}
    

        
    

