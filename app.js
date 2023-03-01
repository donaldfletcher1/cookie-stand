'use strict';
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm','2pm' ,'3pm', '4pm', '5pm', '6pm', '7pm']
let table = document.getElementById('cookieSales')

// constructor function
function CookieStore(title,minCustomers,maxCustomers,averageCookies){
    this.title = title;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.cookiesPerHour = [];
    this.totalCookies = 0;
}

//prototype functions
CookieStore.prototype.getRandomArbitraryCustomerNumber= function () {
    let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    return Math.round(randomNumber)
};
CookieStore.prototype.getAverageCookies= function () {
    for (let i = 0; i < hoursArray.length; i++) {
        let customerNumber = this.getRandomArbitraryCustomerNumber();
        let cookieNumber = customerNumber * this.averageCookies;
        let roundedCookieNumber = Math.round(cookieNumber)
        this.totalCookies += roundedCookieNumber;
        this.cookiesPerHour.push(roundedCookieNumber)
    }
};

CookieStore.prototype.renderStore= function () {
    this.getAverageCookies()

    let rowElement = document.createElement('tr')
    table.appendChild(rowElement)
    
    let titlecellElement = document.createElement('th')
    titlecellElement.textContent = this.title;
    rowElement.appendChild(titlecellElement)
    
    for (let i = 0; i < hoursArray.length; i++) {
        let tabledataElement = document.createElement('td')
        tabledataElement.textContent = this.cookiesPerHour[i]
        rowElement.appendChild(tabledataElement)
    }

    let totalDataElement = document.createElement('td')
    totalDataElement.textContent = this.totalCookies
    rowElement.appendChild(totalDataElement)

};





let seattle = new CookieStore('seattle',23,65,6.3)
console.log(seattle)

let tokyo = new CookieStore('Tokyo',3,24,1.2)

let dubai = new CookieStore('dubai',11,38,3.7)

let paris = new CookieStore('Paris',20,38,2.3)

let lima = new CookieStore('lima',2,16,4.6)





seattle.renderStore()
tokyo.renderStore()
dubai.renderStore()
paris.renderStore()
lima.renderStore()
