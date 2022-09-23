function search() {
   let townsElements = document.getElementsByTagName('li');
   let searchText = document.getElementById('searchText');
   let result = document.getElementById('result');

   
   let townsArray = Array.from(townsElements);
   let matches = 0;
  
for (let i = 0; i < townsArray.length; i++) {
   
   if(townsArray[i].textContent.includes(searchText.value) && searchText.value !== ''){
      townsArray[i].style.fontStyle = 'italic';
      townsArray[i].style.fontWeight = 'bold';

matches++;
   }
   
}
result.textContent = `${matches} matches found`;

}
