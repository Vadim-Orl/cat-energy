//mock

let products = [
  {name: "САХАРОЗАМЕНИТЕЛЬ",
  desc: "1 упаковка (100 г)",
  price: "200 р."},
  {name: "ПИТЬЕВАЯ ВОДА",
  desc: "5 литров",
  price: "50р."},
  {name: "МОЛОКО",
  desc: "1 литр",
  price: "100р."},
  {name: "ВИТАМИНЫ",
  desc: "1 упаковка (30 г)",
  price: "300 р."},
  {name: "ВИТАМИНЫ",
  desc: "1 упаковка (30 г)",
  price: "300 р."},
]

let listProducts = document.querySelector('.goods__list');
let template = document.querySelector('#template_product').content.querySelector('.goods__item');

for(let i = 0; i < products.length; i++) {
  let el = template.cloneNode(true);
  el.querySelector('.goods__title').textContent =  products[i].name;
  el.querySelector('.goods__value').textContent =  products[i].desc;
  el.querySelector('.goods__price').textContent =  products[i].price;

  listProducts.appendChild(el);
}




console.log(listProducts)
console.log(products)
console.log(template)