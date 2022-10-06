function solve() {
   let firstNameElement = document.getElementById('fname');
   let lastNameElement = document.getElementById('lname');
   let emailElement = document.getElementById('email');
   let birthElement = document.getElementById('birth');
   let positionElement = document.getElementById('position');
   let salaryElement = document.getElementById('salary');
   let buttonHireWorker = document.getElementById('add-worker');
   let tbodyElement = document.getElementById('tbody');
   let budgetElement = document.getElementById('sum');

let arrayAllElements = [firstNameElement,lastNameElement,emailElement,birthElement,positionElement,salaryElement];
let workersDetails = {};
   buttonHireWorker.addEventListener('click',function(e){
e.preventDefault();

workersDetails['fname'] = firstNameElement.value;
workersDetails['lname'] = lastNameElement.value;
workersDetails['email'] = emailElement.value;
workersDetails['birth'] = birthElement.value;
workersDetails['position'] = positionElement.value;
workersDetails['salary'] = salaryElement.value;



if(arrayAllElements.some(el =>el.value == '')){
   return;
}
let trElement = document.createElement('tr');
for (const el of arrayAllElements) {
   let tdElement = document.createElement('td');
   tdElement.textContent = el.value;
   trElement.appendChild(tdElement);
}
let tdButtons = document.createElement('td');

let buttonFired = document.createElement('button');
buttonFired.classList.add('fired');
buttonFired.textContent = 'Fired';

let buttonEdit = document.createElement('button');
buttonEdit.classList.add('edit');
buttonEdit.textContent = 'Edit';

tdButtons.appendChild(buttonFired);
tdButtons.appendChild(buttonEdit);
trElement.appendChild(tdButtons);

budgetElement.textContent = (Number(budgetElement.textContent) + Number(salaryElement.value)).toFixed(2);

tbodyElement.appendChild(trElement);
arrayAllElements.forEach(x=>x.value='');

buttonEdit.addEventListener('click',function(e){
   arrayAllElements.forEach(el=>el.value = workersDetails[el.id]);
   let theOne = Array.from(trElement.querySelectorAll('td'))[5];
console.log(trElement.querySelectorAll('td')[5]);
   budgetElement.textContent = (Number(budgetElement.textContent)- Number(theOne.textContent)).toFixed(2);
   tbodyElement.removeChild(trElement);
});

buttonFired.addEventListener('click',function(e){
   
let theOne = Array.from(trElement.querySelectorAll('td'))[5];
console.log(trElement.querySelectorAll('td')[5]);
   budgetElement.textContent =(Number(budgetElement.textContent)- Number(theOne.textContent)).toFixed(2);
tbodyElement.removeChild(trElement);

});


   });




}
solve()