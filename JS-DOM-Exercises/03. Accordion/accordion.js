function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
 let extraText = document.getElementById('extra');
console.log(extraText.textContent);
    if(buttonElement.textContent == 'Less'){
        buttonElement.textContent = 'More';
        extraText.style.display = 'none';
    }else{
        buttonElement.textContent = 'Less';
        extraText.style.display = 'block';
    }
    console.log(buttonElement.textContent);

}