"use strict";

function SameFrequency (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let cal1 = {}
    let cal2 = {}
    for (let i=0; i<arr1.length; i++){
        if (cal1[arr1[i]]>0){
            cal1[arr1[i]]++
        } else{
            cal1[arr1[i]]=1
        }
    }
    for (let i=0; i<arr2.length; i++){
        if (cal2[arr2[i]]>0){
            cal2[arr2[i]]++
        } else {
            cal2[arr2[i]]=1
        }
    }
    for (let key in cal1){
        if (! (key **2 in cal2)){
            return false
        }
        if (cal1[key] != cal2[key **2]){
            return false
        }  
    }
    return true
}
