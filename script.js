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
    let infoer = JSON.parse(infos)
    let newer = infoer.faction[0]
    console.log(infos)
    console.log(newer)
    //infoer2 = infos[1].description
    
    //info2.innerHTML = infoer2
    info.innerHTML = newer

    div.appendChild(info)
    //div.appendChild(info2)


}

async function allinfo() {


    var div = document.getElementById("info")
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
    let factionname = ""
    let description = ""
    

    let infos = await nabinfo(factionname)
    let x = 2
    for (let i=0;i<=2;i++){
        
        let info = document.createElement("p")
        info.innerHTML = infos.faction[i].factionname
        let infoer = document.createElement("p")
        infoer.innerHTML = infos.description[x].description

        div.appendChild(info)
        div.appendChild(infoer)
  
        x-=1
    }
 
}
