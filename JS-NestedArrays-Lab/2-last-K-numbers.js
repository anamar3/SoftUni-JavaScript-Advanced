// function solve(n,k){
    
//     result=[];
//     result[0] =1;
//     result[1] =1;
//     result[2] =2;

  
//     for (let i = 3; i < n; i++) {
//         let toAdd =0;
//         let curr = i-k;
//         for (let index = i-k; index < k+curr; index++) {
//             toAdd += result[index];
            
//         }
//         result[i] = toAdd;
//     }

//     return result;
// }


function lastKNumbers(n, k) {

    let result = [1];

    for(let i = 1; i < n; i++){

        result[i] = sumLastK(result, k);

    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for(let i = 1; i <= k; i++){

            sum += array[array.length - i];

        }

        return sum;

    }

    return result;

}

console.log(solve(8, 2));