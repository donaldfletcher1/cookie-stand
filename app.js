'use strict';
let hoursArray = ['6am', '7am', '8am','9am','10am','11am','12pm';'1pm''2pm' '3pm','4pm','5pm','6pm','7pm']
let salesSection = document.getElementById('cookieSales')

let seattle = {
    title: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    averageCookies: 6.3,
    cookiesPerHour:[],
    totalCookies:0,
    getRandomArbitraryCustomerNumber: function () {
        let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
        return Math.round(randomNumber)
    },
    getAverageCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            let customerNumber = this.getRandomArbitraryCustomerNumber();
            let cookieNumber = customerNumber * this.averageCookies;
            let roundedCookieNumber = Math.round(cookieNumber)
            this.totalCookies += roundedCookieNumber;
            this.cookiesPerHour.push(roundedCookieNumber)
        }
    },
    renderStore: function (){
        this.getAverageCookies()

        let titleElement = document.createElement('h1')
        titleElement.textContent= this.title;
        salesSection.appendChild(titleElement)

        let listElement = document.createElement('ul')
        salesSection.appendChild(listElement)

        for (let i = 0; i < hoursArray.length; i++){
            let listItemElement = document.createElement('li')
            listItemElement.textContent=`${hoursArray[i]}: ${this.cookiesPerHour[i]} cookies`
            listElement.appendChild(listItemElement)
        }

        let totalListElement = document.createElement('li')
        totalListElement.textContent=`Total: ${this.totalCookies} Cookies`
        listElement.appendChild(totalListElement)

    }
}






let tokyo = {
    title:"Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    averageCookies: 1.2,
    cookiesPerHour:[],
    totalCookies:0,
    getRandomArbitraryCustomerNumber: function () {
        let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
        return Math.round(randomNumber)
    },
    getAverageCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            let customerNumber = this.getRandomArbitraryCustomerNumber();
            let cookieNumber = customerNumber * this.averageCookies;
            let roundedCookieNumber = Math.round(cookieNumber)
            this.totalCookies += roundedCookieNumber;
            this.cookiesPerHour.push(roundedCookieNumber)
        }
    },
    renderStore: function (){
        this.getAverageCookies()

        let titleElement = document.createElement('h1')
        titleElement.textContent= this.title;
        salesSection.appendChild(titleElement)

        let listElement = document.createElement('ul')
        salesSection.appendChild(listElement)

        for (let i = 0; i < hoursArray.length; i++){
            let listItemElement = document.createElement('li')
            listItemElement.textContent=`${hoursArray[i]}: ${this.cookiesPerHour[i]} cookies`
            listElement.appendChild(listItemElement)
        }

        let totalListElement = document.createElement('li')
        totalListElement.textContent=`Total: ${this.totalCookies} Cookies`
        listElement.appendChild(totalListElement)

    }
}




let dubai = {
    title = "Dubai"
    minCustomers: 11,
    maxCustomers: 38,
    averageCookie: 3.7
    cookiesPerHour:[],
    totalCookies:0,
    getRandomArbitraryCustomerNumber: function () {
        let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
        return Math.round(randomNumber)
    },
    getAverageCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            let customerNumber = this.getRandomArbitraryCustomerNumber();
            let cookieNumber = customerNumber * this.averageCookies;
            let roundedCookieNumber = Math.round(cookieNumber)
            this.totalCookies += roundedCookieNumber;
            this.cookiesPerHour.push(roundedCookieNumber)
        }
    },
    renderStore: function (){
        this.getAverageCookies()

        let titleElement = document.createElement('h1')
        titleElement.textContent= this.title;
        salesSection.appendChild(titleElement)

        let listElement = document.createElement('ul')
        salesSection.appendChild(listElement)

        for (let i = 0; i < hoursArray.length; i++){
            let listItemElement = document.createElement('li')
            listItemElement.textContent=`${hoursArray[i]}: ${this.cookiesPerHour[i]} cookies`
            listElement.appendChild(listItemElement)
        }

        let totalListElement = document.createElement('li')
        totalListElement.textContent=`Total: ${this.totalCookies} Cookies`
        listElement.appendChild(totalListElement)

    }
}




let paris = {
    title = "Paris"
    minCustomers: 20,
    maxCustomers: 38,
    averageCookie: 2.3
    cookiesPerHour:[],
    totalCookies:0,
    getRandomArbitraryCustomerNumber: function () {
        let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
        return Math.round(randomNumber)
    },
    getAverageCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            let customerNumber = this.getRandomArbitraryCustomerNumber();
            let cookieNumber = customerNumber * this.averageCookies;
            let roundedCookieNumber = Math.round(cookieNumber)
            this.totalCookies += roundedCookieNumber;
            this.cookiesPerHour.push(roundedCookieNumber)
        }
    },
    renderStore: function (){
        this.getAverageCookies()

        let titleElement = document.createElement('h1')
        titleElement.textContent= this.title;
        salesSection.appendChild(titleElement)

        let listElement = document.createElement('ul')
        salesSection.appendChild(listElement)

        for (let i = 0; i < hoursArray.length; i++){
            let listItemElement = document.createElement('li')
            listItemElement.textContent=`${hoursArray[i]}: ${this.cookiesPerHour[i]} cookies`
            listElement.appendChild(listItemElement)
        }

        let totalListElement = document.createElement('li')
        totalListElement.textContent=`Total: ${this.totalCookies} Cookies`
        listElement.appendChild(totalListElement)

    }
}





let lima = {
    title = "Lima"
    minCustomers: 2,
    maxCustomers: 16,
    averageCookie: 4.6,
    cookiesPerHour:[],
    totalCookies:0,
    getRandomArbitraryCustomerNumber: function () {
        let randomNumber = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
        return Math.round(randomNumber)
    },
    getAverageCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            let customerNumber = this.getRandomArbitraryCustomerNumber();
            let cookieNumber = customerNumber * this.averageCookies;
            let roundedCookieNumber = Math.round(cookieNumber)
            this.totalCookies += roundedCookieNumber;
            this.cookiesPerHour.push(roundedCookieNumber)
        }
    },
    renderStore: function (){
        this.getAverageCookies()

        let titleElement = document.createElement('h1')
        titleElement.textContent= this.title;
        salesSection.appendChild(titleElement)

        let listElement = document.createElement('ul')
        salesSection.appendChild(listElement)

        for (let i = 0; i < hoursArray.length; i++){
            let listItemElement = document.createElement('li')
            listItemElement.textContent=`${hoursArray[i]}: ${this.cookiesPerHour[i]} cookies`
            listElement.appendChild(listItemElement)
        }

        let totalListElement = document.createElement('li')
        totalListElement.textContent=`Total: ${this.totalCookies} Cookies`
        listElement.appendChild(totalListElement)

    }
}




seattle.renderStore()
tokyo.renderStore()
dubai.renderStore()
paris.renderStore()
lima.renderStore()
