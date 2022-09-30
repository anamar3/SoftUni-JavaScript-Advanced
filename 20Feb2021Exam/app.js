function solve(){
   let sectionToAddTo = Array.from(document.querySelectorAll('section'))[1];
   let input = Array.from(document.querySelectorAll('input'));
   let contentElement = document.getElementById('content');
   let buttonCreate = document.getElementsByClassName('btn create')[0];
   
   let asideEl = document.querySelector('aside');


   

   buttonCreate.addEventListener('click',(e)=>{
      e.preventDefault();

      if(input[0].value == ' ' || input[1].value == ' ' || input[2].value == ' ' || contentElement.value == " "){
         return;
      }

    let author = input[0].value;
    let title = input[1].value;
    let category = input[2].value;
    let content = contentElement.value;

    let articleElement = document.createElement('article');
    let h1Title = document.createElement('h1');
    let pCategory = document.createElement('p');
    let strongInCategory = document.createElement('strong');
    let pCreator = document.createElement('p');
    let strongInCreator = document.createElement('strong');
    let pContent = document.createElement('p');
    let divForButtons = document.createElement('div');
    divForButtons.classList.add('buttons');
    let buttonDelete = document.createElement('button');
    let buttonArchive = document.createElement('button');

    h1Title.textContent = title;
    pCategory.textContent ='Category:';
    pCreator.textContent = 'Creator:';
    strongInCategory.textContent =category;
    strongInCreator.textContent = author;
    pContent.textContent = content;
    buttonDelete.textContent = 'Delete';
    buttonDelete.classList.add('btn');
    buttonDelete.classList.add('delete');
    buttonArchive.textContent ='Archive';
    buttonArchive.classList.add('btn');
    buttonArchive.classList.add('archive');

    divForButtons.appendChild(buttonDelete);
    divForButtons.appendChild(buttonArchive);

    pCategory.appendChild(strongInCategory);
    pCreator.appendChild(strongInCreator);

    articleElement.appendChild(h1Title);
    articleElement.appendChild(pCategory);
    articleElement.appendChild(pCreator);
    articleElement.appendChild(pContent);
    articleElement.appendChild(divForButtons);

    sectionToAddTo.appendChild(articleElement);
    input[0].value = '';
    input[1].value = '';
    input[2].value = '';
    contentElement.value = '';


buttonArchive.addEventListener('click',(e)=>{

e.currentTarget.parentElement.parentElement.remove();
let articleToArchive = e.currentTarget.parentElement.parentElement;
let olArchive = document.querySelector('ol');
let archiveLis = Array.from(document.querySelectorAll('li'));
let articleTitle = articleToArchive.querySelector('h1');

let listForTitle = document.createElement('li');
listForTitle.textContent =articleTitle.textContent;

archiveLis.push(listForTitle);
archiveLis.sort((a,b)=> a.textContent.localeCompare(b.textContent))
.forEach(li=>olArchive.appendChild(li));

});

buttonDelete.addEventListener('click',(e)=>{
e.currentTarget.parentElement.parentElement.remove();

});

   });
  }
