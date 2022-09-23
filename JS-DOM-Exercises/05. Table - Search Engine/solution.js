function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById('searchField');
     let listOfPeople = Array.from(document.querySelectorAll('tbody tr'));
     console.log(listOfPeople);
console.log(searchField.value);
for (let i = 0; i < listOfPeople.length; i++) {
  
   if(listOfPeople[i].textContent.includes(searchField.value)){
   listOfPeople[i].className = 'select';
}else{
   listOfPeople[i].classList.remove('select');
}
   }
}
}