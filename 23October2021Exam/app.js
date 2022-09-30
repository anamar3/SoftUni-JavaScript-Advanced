window.addEventListener('load', solve);

function solve() {
    let input = document.querySelectorAll('form input');
    let arrayInput = Array.from(input);
    let addButton = document.getElementById('add-btn');
    let allHitsElement = Array.from(document.getElementsByClassName("all-hits-container"))[0];
    let savedConteiner = Array.from(document.getElementsByClassName('saved-container'))[0];
    

    addButton.addEventListener('click',(e)=>{
e.preventDefault();

if(arrayInput.some(x=>x.value==0)){
    return;
}
let genre = arrayInput[0].value;
let name = arrayInput[1].value;
let author = arrayInput[2].value;
let date = arrayInput[3].value;

let divInfo = document.createElement('div');
divInfo.classList.add('hits-info');

let imgElement = document.createElement('img');
imgElement.src = "./static/img/img.png";

let h2Genre = document.createElement('h2');
h2Genre.textContent = `Genre: ${genre}`;

let h2Name = document.createElement('h2');
h2Name.textContent = `Name: ${name}`;

let h2Author = document.createElement('h2');
h2Author.textContent = `Author: ${author}`;

let hh3Date = document.createElement('h3');
hh3Date.textContent = `Date: ${date}`;

let saveButton = document.createElement('button');
let likeButton = document.createElement('button');
let deleteButton = document.createElement('button');

saveButton.classList.add('save-btn');
likeButton.classList.add('like-btn');
deleteButton.classList.add('delete-btn');

saveButton.textContent = 'Save song';
likeButton.textContent = 'Like song';
deleteButton.textContent = 'Delete';

divInfo.appendChild(imgElement);
divInfo.appendChild(h2Genre);
divInfo.appendChild(h2Name);
divInfo.appendChild(h2Author);
divInfo.appendChild(hh3Date);
divInfo.appendChild(saveButton);
divInfo.appendChild(likeButton);
divInfo.appendChild(deleteButton);

allHitsElement.appendChild(divInfo);

arrayInput.forEach(x=>x.value='');


likeButton.addEventListener('click',(e)=>{
    likeButton.disabled = false;
   
    let likeParagraph = document.querySelector('section div.likes p');
   likes = likeParagraph.textContent.split(' ')[2];
   console.log(likes);
   let numberOfLikes = 0;
   numberOfLikes = Number(likes)+1;
   console.log(numberOfLikes);
   likeParagraph.textContent = `Total Likes: ${numberOfLikes}`;
   likeButton.disabled = true;
});


saveButton.addEventListener('click',(e)=>{
e.target.parentElement.remove();
let divInfo2 = document.createElement('div');
divInfo2.className = 'hits-info';
divInfo2.appendChild(imgElement);
divInfo2.appendChild(h2Genre);
divInfo2.appendChild(h2Name);
divInfo2.appendChild(h2Author);
divInfo2.appendChild(hh3Date);

divInfo2.appendChild(deleteButton);
savedConteiner.appendChild(divInfo2);



});
deleteButton.addEventListener('click',(e)=>{
e.target.parentElement.remove();
});
    });
}