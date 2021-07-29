'use strict';

// console.log('hello');

const salesheet = document.getElementById('cities');
let article = document.createElement('article');
salesheet.appendChild(article);

let h1 = document.createElement('h3');
h1.textContent = 'Seattle';
article.appendChild(h1);

let ul = document.createElement('ul');
ul.id = 'seattle';
article.appendChild(ul);


let seattle = {
  city: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgsoldhrarray: [],
  sum: 0,
  hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  dailytotal: 0,
  getrandos: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  sold: function(){
    while(this.avgsoldhrarray.length < this.hrs.length){
      let totalsold = Math.ceil(this.avg * this.getrandos());
      this.avgsoldhrarray.push(totalsold);
    }
    for( let i = 0; i < this.avgsoldhrarray.length; i++){
      this.dailytotal += this.avgsoldhrarray[i];
    }
    return this.avgsoldhrarray;
  },
  topage: function(){
    for (let i = 0; i < this.avgsoldhrarray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
      ul.appendChild(li);
    }
  },

};

seattle.getrandos();
seattle.sold();
seattle.topage();
// console.log(seattle.dailytotal);
// console.log(seattle.avgsoldhrarray);
// console.log(seattle.avgsoldhrarray.length);

////Tokyo

let article2 = document.createElement('article');
salesheet.appendChild(article2);

let h2 = document.createElement('h3');
h2.textContent = 'Tokyo';
article2.appendChild(h2);

let ul2 = document.createElement('ul');
ul2.id = 'tokyo';
article2.appendChild(ul2);

let tokyo = {
  city: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  avgsoldhrarray: [],
  sum: 0,
  hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  dailytotal: 0,
  getrandos: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  sold: function(){
    while(this.avgsoldhrarray.length < this.hrs.length){
      let totalsold = Math.ceil(this.avg * this.getrandos());
      this.avgsoldhrarray.push(totalsold);
    }
    for( let i = 0; i < this.avgsoldhrarray.length; i++){
      this.dailytotal += this.avgsoldhrarray[i];
    }
    return this.avgsoldhrarray;
  },
  topage: function(){
    for (let i = 0; i < this.avgsoldhrarray.length; i++){
      let li2 = document.createElement('li');
      li2.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
      ul2.appendChild(li2);
    }
  },

};

tokyo.getrandos();
tokyo.sold();
tokyo.topage();

///DUBAI

let article3 = document.createElement('article');
salesheet.appendChild(article3);

let h3 = document.createElement('h3');
h3.textContent = 'Dubai';
article3.appendChild(h3);

let ul3 = document.createElement('ul');
ul3.id = 'dubai';
article3.appendChild(ul3);

let dubai = {
  city: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  avgsoldhrarray: [],
  sum: 0,
  hrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  dailytotal: 0,
  getrandos: function() {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  sold: function(){
    while(this.avgsoldhrarray.length < this.hrs.length){
      let totalsold = Math.ceil(this.avg * this.getrandos());
      this.avgsoldhrarray.push(totalsold);
    }
    for( let i = 0; i < this.avgsoldhrarray.length; i++){
      this.dailytotal += this.avgsoldhrarray[i];
    }
    return this.avgsoldhrarray;
  },
  topage: function(){
    for (let i = 0; i < this.avgsoldhrarray.length; i++){
      let li3 = document.createElement('li');
      li3.textContent = `${this.hrs[i]} : ${this.avgsoldhrarray[i]}`;
      ul3.appendChild(li3);
    }
  },

};

dubai.getrandos();
dubai.sold();
dubai.topage();