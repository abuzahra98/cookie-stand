'use strict';
let hours = ['   *time*    ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
let obj = [];
function City( name, minCost, maxCost, AvgCookie ) {
  this.name = name;
  this.minCost = minCost;
  this.maxCost = maxCost;
  this.AvgCookie = AvgCookie;
  this.arr = [name];
  this.total = 0;
  obj.push( this );
}
City.prototype.getRandomInt = function getRandomInt( minCost, maxCost ) {
  minCost = Math.ceil( minCost );
  maxCost = Math.floor( maxCost );
  return Math.floor( Math.random() * ( maxCost - minCost ) + minCost );

};
City.prototype.cookiesNum = function () {
  for ( let i = 0; i < hours.length; i++ ) {

    this.arr.push( Math.floor( this.getRandomInt( this.minCost, this.maxCost ) * this.AvgCookie ) );
    this.total += Math.floor( this.getRandomInt( this.minCost, this.maxCost ) * this.AvgCookie );
  }

};
const parentElement = document.getElementById( 'container' );



const tableElement = document.createElement( 'table' );
parentElement.appendChild( tableElement );
let row = document.createElement( 'tr' );

tableElement.appendChild( row );
for ( let i = 0; i < hours.length; i++ ) {
  const thElement = document.createElement( 'th' );
  row.appendChild( thElement );
  thElement.textContent = `${hours[i]} `;
}

City.prototype.show = function () {

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  let th2Element = document.createElement( 'td' );
  for ( let i = 0; i < hours.length - 1; i++ ) {
    th2Element = document.createElement( 'td' );
    tr1Element.appendChild( th2Element );
    th2Element.textContent = this.arr[i];
  }
  th2Element = document.createElement( 'td' );
  tr1Element.appendChild( th2Element );
  th2Element.textContent = this.total;
};


City.prototype.footer = function () {

  let row = document.createElement( 'tr' );

  tableElement.appendChild( row );

  let thElement = document.createElement( 'th' );
  row.appendChild( thElement );
  thElement.textContent = 'total';
  for ( let i = 1; i < 15; i++ ) {
    let sum = 0;
    for( let y = 0;y < 5;y++ )
    {
      sum = sum + obj[y].arr[i];
    }
    thElement = document.createElement( 'th' );
    row.appendChild( thElement );
    thElement.textContent = sum;
  }
  thElement = document.createElement( 'th' );
  row.appendChild( thElement );
  thElement.textContent = this.total * 12;
};

const Seattle = new City( 'Seattle', 23, 65, 6.3 );
const Tokyo = new City( 'Tokyo', 3, 24, 1.2 );
const Dubai = new City( 'Dubai', 11, 38, 3.7 );
const Paris = new City( 'Paris', 20, 38, 2.3 );
const Lima = new City( 'Lima', 2, 16, 4.6 );

Seattle.cookiesNum();
Seattle.show();

Tokyo.cookiesNum();
Tokyo.show();

Dubai.cookiesNum();
Dubai.show();

Paris.cookiesNum();
Paris.show();

Lima.cookiesNum();
Lima.show();
Lima.footer();
