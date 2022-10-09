function addItem() {
    let newTextElement = document.getElementById("newItemText");
    let listParent = document.getElementById("items");

console.log(newTextElement.value);
    let newElementTotheList = document.createElement('li');
    newElementTotheList.textContent = newTextElement.value;
    console.log(newElementTotheList.textContent);
    listParent.appendChild(newElementTotheList);

    let remove = document.createElement('a');
    let textNode = document.createTextNode('[Delete]');
    remove.appendChild(textNode);
    remove.href = '#';
    remove.addEventListener('click', ()=>{
        newElementTotheList.parentNode.removeChild(newElementTotheList);
    })
    newElementTotheList.appendChild(remove);
    listParent.appendChild(newElementTotheList);
}