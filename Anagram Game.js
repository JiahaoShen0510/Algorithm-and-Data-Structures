"use strict";

function Anagram (input1, input2){
    if (input1.length != input2.length){
        return false
    }

    if (/[0-9!@#$%\^&*)(+=._-]/.test (input1) && /[0-9!@#$%\^&*)(+=._-]/.test (input2)){
        return false
    }

    const str1 = input1.toLowerCase();
    const str2 = input2.toLowerCase(); 

    let check ={};
    for (let i=0; i<str1.length; i++){
        let char1 = str1[i]
        if (check[char1]>0){
            check[char1]++
        } else {
            check[char1]=1
        }
    }

    for (let i=0; i<str2.length; i++){
        let char2 = str2[i]
        if (! (check[char2])){
            return false
        } else{
            check[char2]--           
        }
    }

    return true
}
    

        
    

