const htmlQuranContainer =
  `    
<div class="card text-dark bg-light m-5">
<div class="card-body">
<div class="card-text lead m-1"></div>
</div>

<span id="footercontainer">
</span>

</div>
`

const tableContainer =
  `
<table class="table table-hover  table-striped">
  <tbody>

  </tbody>
</table>
`

const searchBar =
  `
<div class="m-3 d-none">
<form class="d-flex" onsubmit="beginSearch(); return false">
  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search Quran Verse" aria-label="Search Quran Verse" />
  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"
        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
      <path fill-rule="evenodd"
        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
    </svg>
  </button>
</form>
</div>
`
const CHAPTER_LENGTH = 114
// Creating line to [chapter,verseNo] mappings
// Array containing number of verses in each chapters
const chaplength = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]
// contains chapter verse mappings for each line
const mappings = []
const mappingsStr = []

for (let i = 1; i <= CHAPTER_LENGTH; i++) {
  for (let j = 1; j <= chaplength[i - 1]; j++) {
    mappings.push([i, j])
    mappingsStr.push(i + ',' + j)
  }
}

const chaptersJSON = { 'Al-Faatiha': 'The Opening', 'Al-Baqara': 'The Cow', 'Aal-i-Imraan': 'The Family of Imraan', 'An-Nisaa': 'The Women', 'Al-Maaida': 'The Table', "Al-An'aam": 'The Cattle', "Al-A'raaf": 'The Heights', 'Al-Anfaal': 'The Spoils of War', 'At-Tawba': 'The Repentance', Yunus: 'Jonas', Hud: 'Hud', Yusuf: 'Joseph', "Ar-Ra'd": 'The Thunder', Ibrahim: 'Abraham', 'Al-Hijr': 'The Rock', 'An-Nahl': 'The Bee', 'Al-Israa': 'The Night Journey', 'Al-Kahf': 'The Cave', Maryam: 'Mary', 'Taa-Haa': 'Taa-Haa', 'Al-Anbiyaa': 'The Prophets', 'Al-Hajj': 'The Pilgrimage', 'Al-Muminoon': 'The Believers', 'An-Noor': 'The Light', 'Al-Furqaan': 'The Criterion', "Ash-Shu'araa": 'The Poets', 'An-Naml': 'The Ant', 'Al-Qasas': 'The Stories', 'Al-Ankaboot': 'The Spider', 'Ar-Room': 'The Romans', Luqman: 'Luqman', 'As-Sajda': 'The Prostration', 'Al-Ahzaab': 'The Clans', Saba: 'Sheba', Faatir: 'The Originator', Yaseen: 'Yaseen', 'As-Saaffaat': 'Those drawn up in Ranks', Saad: 'The letter Saad', 'Az-Zumar': 'The Groups', Ghafir: 'The Forgiver', Fussilat: 'Explained in detail', 'Ash-Shura': 'Consultation', 'Az-Zukhruf': 'Ornaments of gold', 'Ad-Dukhaan': 'The Smoke', 'Al-Jaathiya': 'Crouching', 'Al-Ahqaf': 'The Dunes', Muhammad: 'Muhammad', 'Al-Fath': 'The Victory', 'Al-Hujuraat': 'The Inner Apartments', Qaaf: 'The letter Qaaf', 'Adh-Dhaariyat': 'The Winnowing Winds', 'At-Tur': 'The Mount', 'An-Najm': 'The Star', 'Al-Qamar': 'The Moon', 'Ar-Rahmaan': 'The Beneficent', 'Al-Waaqia': 'The Inevitable', 'Al-Hadid': 'The Iron', 'Al-Mujaadila': 'The Pleading Woman', 'Al-Hashr': 'The Exile', 'Al-Mumtahana': 'She that is to be examined', 'As-Saff': 'The Ranks', "Al-Jumu'a": 'Friday', 'Al-Munaafiqoon': 'The Hypocrites', 'At-Taghaabun': 'Mutual Disillusion', 'At-Talaaq': 'Divorce', 'At-Tahrim': 'The Prohibition', 'Al-Mulk': 'The Sovereignty', 'Al-Qalam': 'The Pen', 'Al-Haaqqa': 'The Reality', "Al-Ma'aarij": 'The Ascending Stairways', Nooh: 'Noah', 'Al-Jinn': 'The Jinn', 'Al-Muzzammil': 'The Enshrouded One', 'Al-Muddaththir': 'The Cloaked One', 'Al-Qiyaama': 'The Resurrection', 'Al-Insaan': 'Man', 'Al-Mursalaat': 'The Emissaries', 'An-Naba': 'The Announcement', "An-Naazi'aat": 'Those who drag forth', Abasa: 'He frowned', 'At-Takwir': 'The Overthrowing', 'Al-Infitaar': 'The Cleaving', 'Al-Mutaffifin': 'Defrauding', 'Al-Inshiqaaq': 'The Splitting Open', 'Al-Burooj': 'The Constellations', 'At-Taariq': 'The Morning Star', "Al-A'laa": 'The Most High', 'Al-Ghaashiya': 'The Overwhelming', 'Al-Fajr': 'The Dawn', 'Al-Balad': 'The City', 'Ash-Shams': 'The Sun', 'Al-Lail': 'The Night', 'Ad-Dhuhaa': 'The Morning Hours', 'Ash-Sharh': 'The Consolation', 'At-Tin': 'The Fig', 'Al-Alaq': 'The Clot', 'Al-Qadr': 'The Power, Fate', 'Al-Bayyina': 'The Evidence', 'Az-Zalzala': 'The Earthquake', 'Al-Aadiyaat': 'The Chargers', "Al-Qaari'a": 'The Calamity', 'At-Takaathur': 'Competition', 'Al-Asr': 'The Declining Day, Epoch', 'Al-Humaza': 'The Traducer', 'Al-Fil': 'The Elephant', Quraish: 'Quraysh', "Al-Maa'un": 'Almsgiving', 'Al-Kawthar': 'Abundance', 'Al-Kaafiroon': 'The Disbelievers', 'An-Nasr': 'Divine Support', 'Al-Masad': 'The Palm Fibre', 'Al-Ikhlaas': 'Sincerity', 'Al-Falaq': 'The Dawn', 'An-Naas': 'Mankind' }
const arabicChapters = Object.keys(chaptersJSON)
const englishChapters = Object.values(chaptersJSON)


function capitalize(words) {
  return words.toString().toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase()).trim()
}

let htmlparser = new DOMParser();

function getElement(elementName, attributesObj) {
  if (!attributesObj)
    attributesObj = {}
  let element = document.createElement(elementName);
  for (let [key, value] of Object.entries(attributesObj)) {
    element.setAttribute(key, value);
  }
  return element
}

let apiLinks = ["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/", "https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"]
let extensions = [".min.json", ".json"]

// https://www.shawntabrizi.com/code/programmatically-fetch-multiple-apis-parallel-using-async-await-javascript/
// Get links async i.e in parallel
async function getJSON(endpoints, links) {
  let returnSingle = false
  if (!Array.isArray(endpoints)) {
    endpoints = [endpoints]
    returnSingle = true
  }
  let result = await Promise.all(
    endpoints.map(endpoint => fetchWithFallback(getURLs(endpoint, links)).then(response => response.json()))
  ).catch(console.error)
  if (returnSingle)
    return result[0]
  return result
}


async function fetchWithFallback(links, obj) {
  let response;
  for (let link of links) {
    try {
      response = await fetch(link, obj)
      if (response.ok)
        return response
    } catch (e) { }
  }
  return response
}

// convert endpoint into multiple urls, including fallback urls
function getURLs(endpoint, links) {
  links = links || apiLinks
  return extensions.map(ext => links.map(e => e + endpoint + ext)).flat()
}

function getElementFromHTML(htmlString) {
  return htmlparser.parseFromString(htmlString, "text/html");
}

// pass hadith object & get card element with all hadith info in it
function getQuranCardElem(quran, editionName, dirval, lang, isocodes) {
  let lowerLang = lang.toLowerCase()
  let cardElem = getElementFromHTML(htmlQuranContainer).querySelector('.card')
  cardElem.querySelector('.card-text').innerText = quran.text
  let footerDiv = getElement('div', { class: "card-footer" })
  let hrefVal = `quran:${editionName}:${quran.chapter}:${quran.verse}`
  cardElem.querySelector('#footercontainer').appendChild(footerDiv.cloneNode())
  Array.from(cardElem.querySelectorAll('.card-footer'))[0].insertAdjacentHTML("beforeend", `<a href=#${hrefVal} class="link-dark text-decoration-none" >Chapter ${quran.chapter} ${arabicChapters[quran.chapter - 1]}, Verse ${quran.verse}</a> <br>`);
  cardElem.setAttribute('id', hrefVal)

  cardElem.querySelector('.card-text').setAttribute('dir', dirval)
  cardElem.querySelector('.card-text').setAttribute('lang', isocodes[lowerLang].iso1 ? isocodes[lowerLang].iso1 : isocodes[lowerLang].iso2)

  return cardElem
}

window.beginSearch = function () {
  let newparams = new URLSearchParams();
  let searchquery = document.getElementById('searchquery').value
  newparams.set('q', `site:fawazahmed0.github.io/quran ${searchquery}`)
  window.open('https://www.google.com/search?' + newparams.toString(), '_blank');
}


