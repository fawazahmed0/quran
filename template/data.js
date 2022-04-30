

async function ready(){
  document.querySelector('#mycontainer').insertAdjacentHTML('beforeend',searchBar)
  let params = new URLSearchParams(document.location.search);
let chapter = params.get("chapter");
let verse = params.get("verse")

let [editionsJSON, isocodes ]= await getJSON(['editions','isocodes/iso-codes'])
let edtionsLangArr = Object.values(editionsJSON).map(e => [e.name, e.language, e.direction])
let linksArr = []
  // Table of content
  let tableElem = getElementFromHTML(tableContainer).querySelector('.table')
   let uniqueLangs = [...new Set(edtionsLangArr.map(e=>e[1]))]
    for (let lang of uniqueLangs) {
      let aElem = getElement('a', { href: `#${lang.toLowerCase()}` })
      aElem.innerText = lang
      let tr = getElement('tr')
      let td = getElement('td',{class:'text-center'})
      td.appendChild(aElem)
      tr.appendChild(td)
      tableElem.querySelector('tbody').appendChild(tr)
    }
       // Create endpoints for parallel fetch
    for(let [editionName] of edtionsLangArr)
      linksArr.push(`editions/${editionName}/${chapter}/${verse}`)
    
    document.querySelector('#mycontainer').appendChild(tableElem)
    let dataArr = await getJSON(linksArr)
    let count = 0
    let langCheck = []
    for (let [editionName, lang, dirval] of edtionsLangArr) {
            // create language heading only if one doesn't exists
      if(!langCheck.includes(lang)){
      let h2 = getElement('h2', { id: lang.toLowerCase(),'class':'text-center' })
      let aElem = getElement('a',{href:`#${lang.toLowerCase()}`, class:"link-dark"})
      aElem.innerText = lang
      h2.appendChild(aElem)
      document.querySelector('#mycontainer').appendChild(h2)
      }
      document.querySelector('#mycontainer').appendChild(getQuranCardElem(dataArr[count],dirval,lang,isocodes))

      langCheck.push(lang)
      
      count++;
    }



}

document.addEventListener("DOMContentLoaded", ready);
