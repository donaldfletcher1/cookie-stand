'use strict';
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let table = document.getElementById('cookieSales')
let bodyElement = document.createElement('tbody');
table.appendChild(bodyElement);

// constructor function
function CookieStore(title, minCustomers, maxCustomers, averageCookies) {
    this.title = title;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.cookiesPerHour = [];
    this.totalCookies = 0;
}

//prototype functions
CookieStore.prototype.getRandomArbitraryCustomerNumber = function () {
    let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
    return Math.round(randomNumber)
};
CookieStore.prototype.getAverageCookies = function () {
    for (let i = 0; i < hoursArray.length; i++) {
        let customerNumber = this.getRandomArbitraryCustomerNumber();
        let cookieNumber = customerNumber * this.averageCookies;
        let roundedCookieNumber = Math.round(cookieNumber)
        this.totalCookies += roundedCookieNumber;
        this.cookiesPerHour.push(roundedCookieNumber)
    }
};
CookieStore.prototype.renderStore = function () {
    this.getAverageCookies()
    
    
    let rowElement = document.createElement('tr')
    bodyElement.appendChild(rowElement);
    
    
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



//Functions
function tableheader(hours) {
    //thead
    let headElement = document.createElement('thead');
    table.appendChild(headElement);
    //tr
    let trElement = document.createElement('tr');
    headElement.appendChild(trElement);
    //th
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    for (let i = 0; i < hours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = hours[i];
        trElement.appendChild(thElement);

    }

    thElement = document.createElement('th');
    thElement.textContent = 'Total';
    trElement.appendChild(thElement);

}

function footer(){
    //step1.make a tfoot element,and append it to table
    let tFoot = document.createElement('tfoot');
    table.appendChild(tFoot)
    //step2.make table row element and append to tfoot element
    let row = document.createElement('tr')
    tFoot.appendChild(row);
    //step3.make table heading for row element and append it to row,give it text
    let heading = document.createElement('th')
    heading.textContent = 'Total'
    row.appendChild(heading)
    //step4.in a for loop ,loop over each hr,loop over each store,to generate a total for that hour
    let grandTotal = 0

    //step4B.take the total for hr,make in a TD ,and append it to the row
    for(let h = 0;h < hoursArray.length; h++){
        let hourlyTotal = 0
        console.log(hoursArray[h])
        for(let s = 0;s < storeArray.length; s++){
            let storeCookieNum = storeArray[s].cookiesPerHour[h]
            hourlyTotal += storeCookieNum
            grandTotal += storeCookieNum
            console.log(grandTotal)
        }
        let hourlyTotalCell = document.createElement('td')
        hourlyTotalCell.textContent = hourlyTotal
        row.appendChild(hourlyTotalCell)
    }
    //step 5. add in one final TD for grand total to the row
    let grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal
    row.appendChild(grandTotalCell)

    
}

let storeArray = []
console.log(storeArray)


let seattle = new CookieStore('seattle', 23, 65, 6.3)
storeArray.push(seattle)
console.log(storeArray)

let tokyo = new CookieStore('Tokyo', 3, 24, 1.2)
storeArray.push(tokyo)
console.log(storeArray)

let dubai = new CookieStore('dubai', 11, 38, 3.7)
storeArray.push(dubai)
console.log(storeArray)

let paris = new CookieStore('Paris', 20, 38, 2.3)
storeArray.push(paris)
console.log(storeArray)

let lima = new CookieStore('lima', 2, 16, 4.6)
storeArray.push(lima)
console.log(storeArray)



tableheader(hoursArray);

seattle.renderStore()
tokyo.renderStore()
dubai.renderStore()
paris.renderStore()
lima.renderStore()

footer()
