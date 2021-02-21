'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const Seattle = {
    minCost: 23,
    maxCost: 65,
    AvgCookie: 6.3,
    arr: [],
    total: 0,

    cookiesNum: function () {
        for ( let i = 0; i < hours.length; i++ ) {

            this.arr.push( Math.floor( getRandomInt( this.minCost, this.maxCost ) * this.AvgCookie ) );


        }
    },

};



const parentElement = document.getElementById( 'container' );
const articleElement = document.createElement( 'article' ) ;
parentElement.appendChild( articleElement );



const h1Element = document.createElement( 'h1' );
articleElement.appendChild( h1Element );
h1Element.textContent = 'Seattle';


const ulElement = document.createElement( 'ul' );
articleElement.appendChild( ulElement );
Seattle.cookiesNum();

for ( let i = 0; i < hours.length; i++ ) {
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `${hours[i]} : ${Seattle.arr[i]} cookies`;
}



let total = 0;
for ( let i = 0; i < hours.length; i++ ) {
    total = total + Seattle.arr[i];
}
const liElement = document.createElement( 'li' );
ulElement.appendChild( liElement );
liElement.textContent = 'Total:' + ' ' + total + ' ' + 'cookies';


//helperfunction 
function getRandomInt( minCost, maxCost ) {
    minCost = Math.ceil( minCost );
    maxCost = Math.floor( maxCost );
    return Math.floor( Math.random() * ( maxCost - minCost ) + minCost );

}



let hours1 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const Tokyo = {
    minCost1: 3,
    maxCost1: 24,
    AvgCookie1: 1.2,
    arr1: [],
    total1: 0,

    cookiesNum1: function () {
        for ( let i = 0; i < hours1.length; i++ ) {

            this.arr1.push ( Math.floor( getRandomInt1( this.minCost1, this.maxCost1 ) * this.AvgCookie1 ) );


        }
    },

};

const parentElement1 = document.getElementById( 'container1' );
const articleElement1 = document.createElement( 'article' );
parentElement1.appendChild( articleElement1 );


const h1Element1 = document.createElement( 'h1' );
articleElement1.appendChild( h1Element1 );
h1Element1.textContent = 'Tokyo';


const ulElement1 = document.createElement( 'ul' ) ;
articleElement1.appendChild( ulElement1 );
Tokyo.cookiesNum1();

for ( let i = 0; i < hours1.length; i++ ) {
    const liElement1 = document.createElement( 'li' );
    ulElement1.appendChild( liElement1 );
    liElement1.textContent = `${hours1[i]} : ${Tokyo.arr1[i]} cookies`;
}



let total1 = 0;
for ( let i = 0; i < hours1.length; i++ ) {
    total1 = total1 + Tokyo.arr1[i];
}
const liElement1 = document.createElement( 'li' );
ulElement1.appendChild( liElement1 );
liElement1.textContent = 'Total:' + ' ' + total1 + ' ' + 'cookies';


function getRandomInt1( minCost1, maxCost1 ) {
    minCost1 = Math.ceil( minCost1 );
    maxCost1 = Math.floor( maxCost1 );
    return Math.floor( Math.random() * ( maxCost1 - minCost1 ) + minCost1 );

}



let hours2 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const Dubai = {
    minCost2: 11,
    maxCost2: 38,
    AvgCookie2: 3.7,
    arr2: [],
    total2: 0,

    cookiesNum2: function () {
        for ( let i = 0; i < hours2.length; i++ ) {

            this.arr2.push( Math.floor( getRandomInt2( this.minCost2, this.maxCost2 ) * this.AvgCookie2 ) );


        }
    },

};



const parentElement2 = document.getElementById( 'container2' );
const articleElement2 = document.createElement( 'article' );
parentElement2.appendChild( articleElement2 );



const h1Element2 = document.createElement( 'h1' ) ;
articleElement2.appendChild( h1Element2 );
h1Element2.textContent = 'Dubai';


const ulElement2 = document.createElement( 'ul' );
articleElement2.appendChild( ulElement2 );
Dubai.cookiesNum2();

for ( let i = 0; i < hours2.length; i++ ) {
    const liElement2 = document.createElement( 'li' );
    ulElement2.appendChild( liElement2 );
    liElement2.textContent = `${hours2[i]} : ${Dubai.arr2[i]} cookies`;
}



let total2 = 0;
for ( let i = 0; i < hours2.length; i++ ) {
    total2 = total2 + Dubai.arr2[i];
}
const liElement2 = document.createElement( 'li' );
ulElement2.appendChild( liElement2 );
liElement2.textContent = 'Total:' + ' ' + total2 + ' ' + 'cookies';


//helperfunction 
function getRandomInt2( minCost2, maxCost2 ) {
    minCost2 = Math.ceil( minCost2 );
    maxCost2 = Math.floor( maxCost2 );
    return Math.floor( Math.random() * ( maxCost2 - minCost2 ) + minCost2 );

}


let hours3 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const Paris = {
    minCost3: 20,
    maxCost3: 38,
    AvgCookie3: 2.3,
    arr3: [],
    total3: 0,

    cookiesNum3: function () {
        for ( let i = 0; i < hours3.length; i++ ) {

            this.arr3.push( Math.floor( getRandomInt3( this.minCost3, this.maxCost3 ) * this.AvgCookie3 ) );


        }
    },

};



const parentElement3 = document.getElementById( 'container3' );
const articleElement3 = document.createElement( 'article' );
parentElement3.appendChild( articleElement3 );



const h1Element3 = document.createElement( 'h1' );
articleElement3.appendChild( h1Element3 );
h1Element3.textContent = 'Paris';


const ulElement3 = document.createElement( 'ul' );
articleElement3.appendChild( ulElement3 );
Paris.cookiesNum3();

for ( let i = 0; i < hours3.length; i++ ) {
    const liElement3 = document.createElement( 'li' );
    ulElement3.appendChild( liElement3 );
    liElement3.textContent = `${hours3[i]} : ${Paris.arr3[i]} cookies`;
}



let total3 = 0;
for ( let i = 0; i < hours3.length; i++ ) {
    total3 = total3 + Paris.arr3[i];
}
const liElement3 = document.createElement( 'li' );
ulElement3.appendChild( liElement3 );
liElement3.textContent = 'Total:' + ' ' + total3 + ' ' + 'cookies';


//helperfunction 
function getRandomInt3( minCost3, maxCost3 ) {
    minCost3 = Math.ceil( minCost3 );
    maxCost3 = Math.floor( maxCost3 ) ;
    return Math.floor( Math.random() * ( maxCost3 - minCost3 ) + minCost3 );

}


let hours4 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const Lima = {
    minCost4: 2,
    maxCost4: 16,
    AvgCookie4: 4.6,
    arr4: [],
    total4: 0,

    cookiesNum4: function () {
        for ( let i = 0; i < hours4.length; i++ ) {

            this.arr4.push( Math.floor( getRandomInt4( this.minCost4, this.maxCost4 ) * this.AvgCookie4 ) );


        }
    },

};



const parentElement4 = document.getElementById( 'container4' );
const articleElement4 = document.createElement( 'article' );
parentElement4.appendChild( articleElement4 );



const h1Element4 = document.createElement( 'h1' );
articleElement4.appendChild( h1Element4 );
h1Element4.textContent = 'Lima';


const ulElement4 = document.createElement( 'ul' );
articleElement4.appendChild( ulElement4 );
Lima.cookiesNum4();

for ( let i = 0; i < hours4.length; i++ ) {
    const liElement4 = document.createElement( 'li' );
    ulElement4.appendChild( liElement4 );
    liElement4.textContent = `${hours4[i]} : ${Lima.arr4[i]} cookies`;
}



let total4 = 0;
for ( let i = 0; i < hours4.length; i++ ) {
    total4 = total4 + Lima.arr4[i];
}
const liElement4 = document.createElement( 'li' );
ulElement4.appendChild( liElement4 );
liElement4.textContent = 'Total:' + ' ' + total4 + ' ' + 'cookies';


//helperfunction 
function getRandomInt4( minCost4, maxCost4 ) {
    minCost4 = Math.ceil( minCost4 );
    maxCost4 = Math.floor( maxCost4 );
    return Math.floor( Math.random() * ( maxCost4 - minCost4 ) + minCost4 );

}

