// function solve(text) {
//     let result = text.toUpperCase()
//       .match(/\w+/g)
//       .join(', ');
    
//     console.log(result);
//   }

function solve(text){
    let regex= /[\W]+/;
    let result = text.split(regex);
    let printIt = [];
    for (let i = 0; i < result.length; i++) {
        if(result[i].length>0){
       printIt.push(result[i].toUpperCase());
        }
        
    }
    console.log(printIt.join(', '));
}
solve('Hi, how are you?');