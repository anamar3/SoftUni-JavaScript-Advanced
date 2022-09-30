function solution(arr){
    let processor = (function(){
let result = [];

return function processor(data){
    let splitted = data.split(' ');
    let command = splitted[0];
    let value = splitted[1];

    let process = {
        add: () => result.push(value),
        remove: () => {
            let count =0;
           for (let i = 0; i < result.length; i++) {
           if(result[i] == value)
              count++;
           }
            result.splice(result.indexOf(value),count)
        },
        print: () => console.log(result.join(','))

    }
    process[command].call(value);

}
    })();
for (const data of arr) {
    processor(data);    
}
    
}

solution(['add hello', 'add again','add again','add again','add again','add again', 'remove again', 'add again', 'print']);