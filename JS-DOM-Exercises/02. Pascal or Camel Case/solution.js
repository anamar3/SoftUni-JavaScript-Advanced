function solve() {
 let textElement = document.getElementById("text").value;
 let caseElement = document.getElementById('naming-convention').value;
 let resultElement = document.getElementById('result');
 console.log(textElement);
 let lowerCaseText = textElement.toLowerCase();
 lowerCaseText = lowerCaseText.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
  return index === 0 ? word.toLowerCase() : word.toUpperCase();
}).replace(/\s+/g, '');

if(caseElement == 'Pascal Case'){
  lowerCaseText = lowerCaseText.replace(lowerCaseText.charAt(0)
  ,lowerCaseText.charAt(0).toUpperCase());
}else if(caseElement != 'Pascal Case' && caseElement != 'Camel Case'){
  lowerCaseText = 'Error!';
}
//  let lowerCaseText = textElement.toLowerCase().replace(/ /g,'');
 console.log(lowerCaseText);

resultElement.textContent = lowerCaseText;
}