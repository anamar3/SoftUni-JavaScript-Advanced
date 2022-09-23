function solve() {
  let inputArea = document.getElementById('input');
  let outputArea = document.getElementById('output');
let textArea = inputArea.value
.split('.')
.filter(s=>s!=='');

while(textArea.length >0){
let text = textArea.splice(0,3).join('. ')+'.';
let p = document.createElement('p');
p.textContent = text;
outputArea.appendChild(p);
}

//  console.log(inputArea.value);
//   p.innerHTML = inputArea.value;
//   outputArea.appendChild(p);
//   console.log(p.textContent);
// let text ='';
// let count=0;
// let countOfParagraphs=1;
// outputArea.insertAdjacentElement('beforeend',document.createElement('p'));
//   for (let i = 0; i < inputArea.value.length; i++) {
    
//     let currChar = inputArea.value[i];
   
//     if(currChar == '.'){
//       text += currChar;
//       count++;
//       if(Number(count)==3 || i == inputArea.length-1){
//         outputArea.insertAdjacentElement('beforeend',document.createElement('p'));
// count=0;
// countOfParagraphs++;
//       }
//     }else{
//       outputArea:nth-child(countOfParagraphs).append(currChar);

//     }
    
//   }
}