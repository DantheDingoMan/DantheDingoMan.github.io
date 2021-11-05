/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

//make sure to have pop up for empty id

const base_url = "http://danthedingo.pythonanywhere.com/api/v1/"

async function getjokes(category, language) {
    let url = base_url + "jokes" + "?" + "category=" + category + '&' + "language=" + language
    return fetch(url)
    .then(response => response.json())

}

async function getjoke(category, language, id) {
    let url = base_url + "joke" + "?" + "category=" + category + '&' + "language=" + language + '&' + "id=" + id
    return fetch(url)
    .then(response => response.json())

}

async function jokes() {

    var divs = document.getElementById("feedback")
    while (divs.firstChild) {
        divs.removeChild(divs.firstChild)
    }
    //needs to get value inside select not just select itself needs to only print out the number of jokes and does one slot per joke 
    let category = document.getElementById('category').value


    let language = document.getElementById('language').value
    
    let number = document.getElementById('number').value

    let numbers = parseInt(number)

    let jokelist = []

    for (let i = 0; i < numbers; i++) {
        let joke = await getjokes(category, language)

        jokelist.push(joke.joke)
    }
    

    for (let i = 0; i < numbers; i++) {
        let createitem = document.createElement("p")
        createitem.setAttribute("class", "text-white")
        createitem.innerHTML = jokelist[i]
        divs.appendChild(createitem)
    }

}
//make sure they need number

async function popupkiller() {
    let popup = document.getElementById('checker')

    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

}

async function joke() {
    var divs = document.getElementById("feedback")

    while (divs.firstChild) {
        divs.removeChild(divs.firstChild)
    }

    let category = document.querySelector('#category').value

    let language = document.querySelector('#language').value

    let idnb = document.querySelector('#idnb').value

    if (idnb == "") {
        
        let popup = document.getElementById('checker')
        
        let warning = document.createElement("p")
        warning.setAttribute("class", "text-center bg-warning p-4")
        warning.innerHTML = "You need a number"
        window.setTimeout(popupkiller, 3000);

        popup.appendChild(warning)
        
    }

    let joke = await getjoke(category, language, idnb)

    let divjokelist = joke.joke


    let createitem = document.createElement("p")
    createitem.setAttribute("class", "text-white")
    createitem.innerHTML = divjokelist
    divs.appendChild(createitem)
}
