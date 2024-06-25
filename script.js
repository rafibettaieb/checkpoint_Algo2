function insertionSort(T)  
{    
    let n = T.length;
    for (let i = 1;i<n;i++) {  
        let val = T[i];  
        let j = i - 1;  
        while (j>=0 && T[j]>val) {  
            T[j + 1] = T[j];  
            j--; 
        }  
        T[j + 1] = val;  
    }  
} 

const T = [1,5,4,6,3,4];  
insertionSort(T);
console.log(T);

