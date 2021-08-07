'use strict';


let storeArray = [];
let hourlysale = [];
let hrsopen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store (city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgsoldhrarray = [];
  this.dailytotal = 0;
  this.hrs = hrsopen;
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
    return this.dailytotal;
  };
  this.render = function(){
    this.getrandos();
    this.sold();
  };
  storeArray.push(this);
  hourlysale.push(this.avgsoldhrarray);
}


let seattle = new Store ('Seattle',23,65,6.3);
seattle.render();

let tokyo = new Store ('Tokyo', 3, 24, 1.2);

let dubai = new Store ('Dubai', 11, 38, 3.7);

let paris = new Store ('Paris', 20, 38, 2.3);

let lima = new Store ('Lima', 2, 16, 4.6);

console.log(storeArray);
console.log(hourlysale);


const citytable = document.querySelector('tbody');
const citytime = document.querySelector('thead');
const citytot = document.querySelector('tfoot');

Store.prototype.renderTable = function(){

  let tr = document.createElement('tr');
  tr.id = 'sales';
  citytable.appendChild(tr);

  let thcity = document.createElement('th');
  thcity.textContent = this.city;
  tr.appendChild(thcity);
  this.avgsoldhrarray.push(this.dailytotal);



  for( let i = 0; i <this.avgsoldhrarray.length; i++){
    let td = document.createElement('td');
    td.textContent = this.avgsoldhrarray[i] ;
    tr.appendChild(td);
  }
};

let thtot = document.createElement('th');
thtot.textContent = 'Totals';
citytot.appendChild(thtot);

let thtime = document.createElement('th');
thtime.textContent = 'Time';
citytime.appendChild(thtime);


function renderAll(){
  for(let i =0; i < storeArray.length; i++){
    storeArray[i].render();
    storeArray[i].renderTable();
  }
}
renderAll();

let result = hourlysale.reduce(function (total, a) {
  a.forEach(function (next, i) {
    total[i] = (total[i] || 0) + next;
  });
  return total;
}, []);

// result.pop();
function rendertotal (){
  for(let i = 0; i < result.length; i++){
    let totalsold = document.createElement('td');
    totalsold.textContent = result[i];
    citytot.appendChild(totalsold);
  }
}

function rendertime() {
  for( let i = 0; i < hrsopen.length; i++){
    let hrssold = document.createElement('th');
    hrssold.textContent = hrsopen[i];
    citytime.appendChild(hrssold);
  }
}

rendertotal();
rendertime();

let thloctot = document.createElement('th');
thloctot.textContent = 'Daily Location Total';
citytime.appendChild(thloctot);

function totdailysales(){
  for(let i = 0; i < storeArray.length; i++)
    hourlysale[i].push(storeArray[i].dailytotal);
}
totdailysales();




