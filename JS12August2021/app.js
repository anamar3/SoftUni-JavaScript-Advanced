window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');
    let buttonAdd = document.getElementById('add');

    let furnitureList = document.getElementById('furniture-list');
let totalPriceElement = document.querySelector('.total-price');

   

    buttonAdd.addEventListener('click',(e)=>{
e.preventDefault();
if(modelElement.value == '' || descriptionElement.value=='' || yearElement.value <= 0 || priceElement.value <=0){
    return;
}


let trInfoElement = document.createElement('tr');
trInfoElement.classList.add('info');

let tdModelElement = document.createElement('td');
tdModelElement.textContent = modelElement.value;

let tdPriceElement = document.createElement('td');
tdPriceElement.textContent = Number(priceElement.value).toFixed(2);

let tdButtons = document.createElement('td');
let buttonMoreInfo = document.createElement('button');
buttonMoreInfo.classList.add('moreBtn');
buttonMoreInfo.textContent = 'More Info';

let buttonBuy = document.createElement('button');
buttonBuy.classList.add('buyBtn');
buttonBuy.textContent = 'Buy it';

tdButtons.appendChild(buttonMoreInfo);
tdButtons.appendChild(buttonBuy);

trInfoElement.appendChild(tdModelElement);
trInfoElement.appendChild(tdPriceElement);
trInfoElement.appendChild(tdButtons);

let trHide = document.createElement('tr');
trHide.classList.add('hide');
trHide.style.display = 'none';

let tdYear = document.createElement('td');
tdYear.textContent =  `Year: ${Number(yearElement.value)}`;
let tdDescription = document.createElement('td');
tdDescription.textContent = `Description: ${descriptionElement.value}`;
tdDescription.setAttribute('colspan', 3);

trHide.appendChild(tdYear);
trHide.appendChild(tdDescription);

furnitureList.appendChild(trInfoElement);
furnitureList.appendChild(trHide);

modelElement.value = '';
descriptionElement.value = '';
yearElement.value = '';
priceElement.value = '';


buttonMoreInfo.addEventListener('click',(e)=>{
    if(buttonMoreInfo.textContent == 'More Info'){
buttonMoreInfo.textContent = 'Less Info';
trHide.style.display = 'contents';
    }else if(buttonMoreInfo.textContent =='Less Info'){
        buttonMoreInfo.textContent = 'More Info';
        trHide.style.display = 'none';
    }

});

buttonBuy.addEventListener('click', (e)=>{
trInfoElement.remove();
trHide.remove();


totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(tdPriceElement.textContent)).toFixed(2);
});
    });
   
}
