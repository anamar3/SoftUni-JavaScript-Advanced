function addItem() {
   let inputElement = document.getElementById('newItemText');
   let newItem = document.createElement('li');
   newItem.textContent = inputElement.value;
   let listElement = document.getElementById('items');
   listElement.appendChild(newItem);
}