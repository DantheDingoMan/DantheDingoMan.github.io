/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

let base_url = "http://danthedingo.pythonanywhere.com/factioninfo/"

async function nabinfo(factionname) {

    let url = base_url + factionname
    return fetch(url)
    .then(response => response.json())
}

async function info() {

    var div = document.getElementById("info")
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
    let factionname = document.getElementById('query').value
    let info = document.createElement("p")
    let info2 = document.createElement("p")
    let infos = await nabinfo(factionname)
    infoer = infos.factionname
    infoer2 = infos.description
    
    info2.innerHTML = infoer2
    info.innerHTML = infoer

    div.appendChild(info)


}

async function allinfo() {


    var div = document.getElementById("info")
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
    let factionname = ""
    let info = document.createElement("p")

    let infos = await nabinfo(factionname)

    info.innerHTML = infos

    div.appendChild(info)

}
