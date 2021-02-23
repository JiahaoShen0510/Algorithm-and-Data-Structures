"use strict";

function CalChar (str){
    let total = {}
    for (let i=0; i<str.length; i++){
        let char =str[i].toLowerCase()
        if (/[a-z0-9]/.test (char)){
            if (total[char]>0){
                total[char]++;
            }else {
                total[char]=1;
            }
            }
        }
    return total;
    }
