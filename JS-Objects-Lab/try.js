const obj  ={
    name : 'Pesho',
    subject:'math',

}

const copy = Object.assign({},obj);
obj.subject = 'Algebra';

console.log(obj.subject);
console.log(copy.subject);