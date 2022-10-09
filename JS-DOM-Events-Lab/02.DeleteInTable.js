function deleteByEmail() {
    let result = document.getElementById('result');
    let inputElement =  document.querySelector('input[type="text"]');

    let emails = document.getElementsByTagName('tr');
    console.log(emails);

    let emailsArray = Array.from(emails);
    let found = false;
    for (const item of emailsArray) {
       console.log(item.textContent);
        if(item.textContent.includes(inputElement.value)){      
result.textContent = 'Deleted.';
console.log(result.textContent);
item.parentNode.removeChild(item);
found=true;
        }

    }
    if(found== false){
        result.textContent = 'Not found.'
    }
}