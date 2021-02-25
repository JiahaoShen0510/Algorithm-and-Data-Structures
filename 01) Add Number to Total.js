"use strict";

function AddUpTo (n){
    let total = 0
    let i =1
    while (i<=n){
        total +=i
        i++
    }
    return total
}

function AddEvenTo (n){
    let total = 0
    for (let i=1; i<=n; i++){
        if (i%2 ==0){
            total +=i
        }
    } 
    return total    
}

function AddOddTo(n){
    let total =0
    for (let i=1; i<=n; i++){
        if (i%2 !=0){
            total +=i
        }
    }
    return total 
}
