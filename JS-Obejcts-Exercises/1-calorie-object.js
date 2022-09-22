function solve(array){
    let returnObjectOfFoods = {};


    for (let index = 0; index < array.length; index+=2) {
        let curr = array[index];

        returnObjectOfFoods[curr] = Number(array[index+1]);
        
    }

    return returnObjectOfFoods;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));