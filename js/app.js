'use strict';

// console.log('hello');
const salesheet = document.getElementById ('cities');



let storeArray = [];

function Store (city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgsoldhrarray = [];
  this.sum = 0;
  this.listId = `${this.city} sales`;
  this.hrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  this.dailytotal = 0;

  this.getrandos = function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  };

  this.sold = function(){
    while(this.avgsoldhrarray.length < this.hrs.length){
      let totalsold = Math.ceil(this.avg * this.getrandos());
      this.avgsoldhrarray.push(totalsold);
    }
    for( let i = 0; i < this.avgsoldhrarray.length; i++){
      this.dailytotal += this.avgsoldhrarray[i];
    }
    return this.avgsoldhrarray;
  };
  this.render = function(){
    //render article
    let article = document.createElement('article');
    salesheet.appendChild(article);

    let h = document.createElement('h3');
    h.textContent = this.city;
    article.appendChild(h);

    let ul = document.createElement('ul');
    ul.id = this.listId;
    article.appendChild(ul);

    //create and append to the article

    //fill in the <ul> with <li>:

    this.topage();
  };

  this.topage = function(){
    this.getrandos();
    this.sold();
    let cityList = document.getElementById(this.listId);
    for (let i = 0; i < this.avgsoldhrarray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
      cityList.appendChild(li);
    }
    let totli = document.createElement('li');
    totli.textContent = `Total: ${this.dailytotal}`;
    cityList.appendChild(totli);
  };
  storeArray.push(this);
}

console.log(this.storeArray);
let seattle = new Store ('Seattle',23,65,6.3);
seattle.render();
console.log(seattle);

let tokyo = new Store ('Tokyo', 3, 24, 1.2);
tokyo.render();
console.log(tokyo);

let dubai = new Store ('Dubai', 11, 38, 3.7);
dubai.render();
console.log(dubai);

let paris = new Store ('Paris', 20, 38, 2.3);
paris.render();
console.log(paris);

let lima = new Store ('Lima', 2, 16, 4.6);
lima.render();
console.log(lima);
console.log(storeArray);

const citytable = document.querySelector('table');

Store.prototype.renderTable = function(){
  let tr = document.createElement('tr');
  citytable.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);
  for( let i = 0; i <this.avgsoldhrarray.length; i++){
    let td = document.createElement('td');
    td.textContent = this.cityList[i];
    tr.appendChild(td);
  }
};
seattle.renderTable();

function renderAll(){
  for(let i =0; i < storeArray.length; i++){
    storeArray[i].render();
    storeArray[i].renderTable();
  }

}
renderAll();



// seattle.getrandos();
// seattle.sold();
// seattle.topage();
// // console.log(seattle.dailytotal);
// // console.log(seattle.avgsoldhrarray);
// // console.log(seattle.avgsoldhrarray.length);

// ////Tokyo

// let article2 = document.createElement('article');
// salesheet.appendChild(article2);

// let h2 = document.createElement('h3');
// h2.textContent = 'Tokyo';
// article2.appendChild(h2);

// let ul2 = document.createElement('ul');
// ul2.id = 'tokyo';
// article2.appendChild(ul2);

// let tokyo = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   avgsoldhrarray: [],
//   sum: 0,
//   hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   dailytotal: 0,
//   getrandos: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },
//   sold: function(){
//     while(this.avgsoldhrarray.length < this.hrs.length){
//       let totalsold = Math.ceil(this.avg * this.getrandos());
//       this.avgsoldhrarray.push(totalsold);
//     }
//     for( let i = 0; i < this.avgsoldhrarray.length; i++){
//       this.dailytotal += this.avgsoldhrarray[i];
//     }
//     return this.avgsoldhrarray;
//   },
//   topage: function(){
//     for (let i = 0; i < this.avgsoldhrarray.length; i++){
//       let li2 = document.createElement('li');
//       li2.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
//       ul2.appendChild(li2);
//     }
//     let totli = document.createElement('li');
//     totli.textContent = `Total: ${this.dailytotal}`;
//     ul2.appendChild(totli);
//   },

// };

// tokyo.getrandos();
// tokyo.sold();
// tokyo.topage();

// ///DUBAI

// let article3 = document.createElement('article');
// salesheet.appendChild(article3);

// let h3 = document.createElement('h3');
// h3.textContent = 'Dubai';
// article3.appendChild(h3);

// let ul3 = document.createElement('ul');
// ul3.id = 'dubai';
// article3.appendChild(ul3);

// let dubai = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   avgsoldhrarray: [],
//   sum: 0,
//   hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   dailytotal: 0,
//   getrandos: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },
//   sold: function(){
//     while(this.avgsoldhrarray.length < this.hrs.length){
//       let totalsold = Math.ceil(this.avg * this.getrandos());
//       this.avgsoldhrarray.push(totalsold);
//     }
//     for( let i = 0; i < this.avgsoldhrarray.length; i++){
//       this.dailytotal += this.avgsoldhrarray[i];
//     }
//     return this.avgsoldhrarray;
//   },
//   topage: function(){
//     for (let i = 0; i < this.avgsoldhrarray.length; i++){
//       let li3 = document.createElement('li');
//       li3.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
//       ul3.appendChild(li3);
//     }
//     let totli = document.createElement('li');
//     totli.textContent = `Total: ${this.dailytotal}`;
//     ul3.appendChild(totli);
//   },

// };

// dubai.getrandos();
// dubai.sold();
// dubai.topage();

// ///Paris

// let article4 = document.createElement('article');
// salesheet.appendChild(article4);

// let h4 = document.createElement('h3');
// h4.textContent = 'Paris';
// article4.appendChild(h4);

// let ul4 = document.createElement('ul');
// ul4.id = 'paris';
// article4.appendChild(ul4);

// let paris = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   avgsoldhrarray: [],
//   sum: 0,
//   hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   dailytotal: 0,
//   getrandos: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },
//   sold: function(){
//     while(this.avgsoldhrarray.length < this.hrs.length){
//       let totalsold = Math.ceil(this.avg * this.getrandos());
//       this.avgsoldhrarray.push(totalsold);
//     }
//     for( let i = 0; i < this.avgsoldhrarray.length; i++){
//       this.dailytotal += this.avgsoldhrarray[i];
//     }
//     return this.avgsoldhrarray;
//   },
//   topage: function(){
//     for (let i = 0; i < this.avgsoldhrarray.length; i++){
//       let li4 = document.createElement('li');
//       li4.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
//       ul4.appendChild(li4);
//     }
//     let totli = document.createElement('li');
//     totli.textContent = `Total: ${this.dailytotal}`;
//     ul4.appendChild(totli);
//   },

// };

// paris.getrandos();
// paris.sold();
// paris.topage();

// ///Lima

// let article5 = document.createElement('article');
// salesheet.appendChild(article5);

// let h5 = document.createElement('h3');
// h5.textContent = 'Lima';
// article5.appendChild(h5);

// let ul5 = document.createElement('ul');
// ul5.id = 'lima';
// article5.appendChild(ul5);

// let lima = {
//   city: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   avgsoldhrarray: [],
//   sum: 0,
//   hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   dailytotal: 0,
//   getrandos: function() {
//     return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
//   },
//   sold: function(){
//     while(this.avgsoldhrarray.length < this.hrs.length){
//       let totalsold = Math.ceil(this.avg * this.getrandos());
//       this.avgsoldhrarray.push(totalsold);
//     }
//     for( let i = 0; i < this.avgsoldhrarray.length; i++){
//       this.dailytotal += this.avgsoldhrarray[i];
//     }
//     return this.avgsoldhrarray;
//   },
//   topage: function(){
//     for (let i = 0; i < this.avgsoldhrarray.length; i++){
//       let li5 = document.createElement('li');
//       li5.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
//       ul5.appendChild(li5);
//     }
//     let totli = document.createElement('li');
//     totli.textContent = `Total: ${this.dailytotal}`;
//     ul5.appendChild(totli);
//   },

// };

// lima.getrandos();
// lima.sold();
// lima.topage();