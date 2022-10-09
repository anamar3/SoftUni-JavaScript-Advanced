function solve() {
  let textAreaElement = document.querySelector('textarea');
  let buttonElements = document.getElementsByClassName('add-product');
  let productElement = document.querySelectorAll('.product');
  let checkOutButtonElement = document.querySelector('.checkout');
  let totalMoney=0;
let products = [];

  Array.from(productElement).forEach(p=>
     Array.from(p.querySelectorAll('button')).forEach(b=>
      b.addEventListener('click', clickedButton))
      );
      
      checkOutButtonElement.addEventListener('click', checkOutClicked);

     function clickedButton(e){
      let name = e.target.parentNode.parentNode
         .querySelector(".product-title").textContent;
         if(!products.includes(name)){
         products.push(name);
         }
      let price = Number(e.target.parentNode.parentNode
      .querySelector(".product-line-price").textContent).toFixed(2);
      totalMoney+=Number(price);
      textAreaElement.value+=`Added ${name} for ${price} to the cart.\n`;
     }

     function checkOutClicked(e){
      textAreaElement.value+=`You bought ${products.join(', ')} for ${Number(totalMoney.toFixed(2))}.`;
     checkOutButtonElement.disabled = true;
buttonElements.forEach(b=>
   b.disabled = true);
   }
      
}


// function solve() {
//    let textArea = document.querySelector('body > div > textarea');
//    let totalPrice = 0;
//    let listOfUniqueThings = [];
//    let addBtn = document.getElementsByClassName('add-product');
//    let arrayAddBtn = Array.from(addBtn);
   
// console.log(document.querySelector(`body > div >`));
//    for (let i = 0; i < arrayAddBtn.length; i++) {
//        arrayAddBtn[i].addEventListener('click', function one() {
         
//            let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
//            let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
//            if (!listOfUniqueThings.includes(name)) {
//                listOfUniqueThings.push(name);
//            }
//            let result = `Added ${name} for ${price} to the cart.\n`;
//            totalPrice += Number(price);
//            textArea.value += result;
//        });
//    }
//    let checkOut = document.querySelector('body > div > button');
//    checkOut.addEventListener('click', function final() {
//        let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
//        textArea.value += finalSting;
//        disableButtons();
//    });

//    function disableButtons() {
//       let buttons = Array.from(document.querySelectorAll('button'));
//       buttons.forEach(button => button.disabled = true);
//    }
// }




