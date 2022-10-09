function validate() {
    let emailBoxElement = document.getElementById('email');
    let emailBox = emailBoxElement.value;
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
console.log(emailBox);
emailBoxElement.addEventListener('change', changeEmail)

function changeEmail(e){
if(reg.test(e.target.value)){
   
    e.target.removeAttribute('class');
    return;
}
e.target.className = 'error';

}

}