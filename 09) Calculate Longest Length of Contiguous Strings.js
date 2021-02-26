"use strict";

function LenofUniqueStr (input){
    if (/[0-9!@#$%\^&*)(+=._-]/.test (input)){
        return false;
    }
    const str = input.toLowerCase()
    let check = {}
    let start =0;
    let len =0;
    for (let i=0; i<str.length; i++){
        let char = str[i];
        if (check[char]){
            start = Math.max (start, check[char]);
        }
        len = Math.max (len, i+1-start);
        check[char]=i+1;
    }
    return len;
}

    

        
    

