// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  
  let operation = Number(price.innerHTML) * Number(quantity.value);
 
  subTotal.innerHTML = operation;
  
console.log('Calculating subtotal, yey!');

console.log(price);
console.log(quantity.value);
console.log(subTotal);

return operation;
  
}

function calculateAll() {
  let allElements = document.getElementsByClassName('product');

  let alloperation = 0 ;
  for(let i = 0 ;i <allElements.length ; i++ ){
    alloperation += updateSubtotal(allElements[i]);
    
  }
 const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  
  // ITERATION 2
//... your code goes here
// ITERATION 3

let total = document.querySelector('#total-value span');

total.innerHTML = alloperation;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
