function solve() {
let nameElement = document.getElementById('recipientName');
let titleElement = document.getElementById('title');
let messageElement = document.getElementById('message');
let addButton = document.getElementById('add');
let resetButton = document.getElementById('reset');
let listULMails = document.getElementById('list');
let sendList = document.getElementsByClassName('sent-list')[0];
let ulDeleteList = document.getElementsByClassName('delete-list')[0];

resetButton.addEventListener('click',(e)=>{
e.preventDefault();
titleElement.value ='';
nameElement.value ='';
messageElement.value ='';

});

addButton.addEventListener('click',(e)=>{
e.preventDefault();

let name = nameElement.value;
let title = titleElement.value;
let message = messageElement.value;

if(name == '' || title == '' || message == ''){
    return;
}

let listForMails = document.createElement('li');
let h4Title = document.createElement('h4');
let h4Name = document.createElement('h4');
let spanMessage = document.createElement('span');
let divForButtons = document.createElement('div');
let buttonSend = document.createElement('button');
let buttonDelete = document.createElement('button');

h4Title.textContent = `Title: ${title}`;
h4Name.textContent = `Recipient Name: ${name}`;
spanMessage.textContent = message;
divForButtons.setAttribute('id','list-action');

buttonSend.setAttribute('id','send');
buttonSend.setAttribute('type','submit');
buttonSend.textContent = 'Send';

buttonDelete.setAttribute('id','delete');
buttonDelete.setAttribute('type','submit');
buttonDelete.textContent = 'Delete';

divForButtons.appendChild(buttonSend);
divForButtons.appendChild(buttonDelete);

listForMails.appendChild(h4Title);
listForMails.appendChild(h4Name);
listForMails.appendChild(spanMessage);
listForMails.appendChild(divForButtons);

listULMails.appendChild(listForMails);

titleElement.value ='';
nameElement.value ='';
messageElement.value ='';


listForMails.addEventListener('click',(e)=>{
    
    if(e.target.id == 'send'){
        e.currentTarget.remove();
        listForMails.innerHTML = '';
        let spanName = document.createElement('span');
        let spanTitle = document.createElement('span');
        let divBtn = document.createElement('div');
        let deleteNEWButton = document.createElement('button');

        divBtn.classList.add('btn');
        deleteNEWButton.setAttribute('class','delete');
deleteNEWButton.setAttribute('type','submit');
deleteNEWButton.textContent = 'Delete';
spanName.textContent = `To: ${name}`;
spanTitle.textContent = `Title: ${title}`;

divBtn.appendChild(deleteNEWButton);
listForMails.appendChild(spanName);
listForMails.appendChild(spanTitle);
listForMails.appendChild(divBtn);
sendList.appendChild(listForMails);



    }else if(e.target.id == 'delete' || e.target.classList.contains('delete')){
        e.currentTarget.remove();
        listForMails.innerHTML = '';
        let spanName = document.createElement('span');
        let spanTitle = document.createElement('span');
        spanName.textContent = `To: ${name}`;
spanTitle.textContent = `Title: ${title}`;
listForMails.appendChild(spanName);
listForMails.appendChild(spanTitle);
ulDeleteList.appendChild(listForMails);
    }
})

})

}
solve()