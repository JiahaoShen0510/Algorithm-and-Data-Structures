"use strict";

function RotateArray (arr, n){
    if (n>= arr.length){
        return false
    }
    function prep(arr, start, end){
        while (start < end){
            [arr[start], arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
        
    }

    prep (arr, 0, arr.length-1);
    prep (arr, 0, n-1);
    prep (arr,n, arr.length-1);

    return arr   
}

    

        
    

