// This is the main script

// Fix issue for parcel/babel, for async await thing for old browser, or only support new browsers with async await functionality
// https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import 'regenerator-runtime/runtime'
// Fix issue for parcel jquery script
// https://github.com/parcel-bundler/parcel/issues/333#issuecomment-504552272
// https://www.npmjs.com/package/jquery
import $ from 'jquery'
import Cookies from 'js-cookie'

const apiLink = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1'
const editionsLink = apiLink + '/editions'

const defaultEdition = 'eng-miraneesuddin'

const CHAPTER_LENGTH = 114

let editionsJSON

// call this only once
async function oneTimeFunc () {
  // Editions JSON from quran api
  [editionsJSON] = await getLinksJSON([editionsLink + '.min.json'])
  // Create the dropdown
  createDropdown()

  // first set edition, then chapter, then verse
  setInitEditions()
  setInitChapter()
  // show the translations on cookie/link selected values
  await window.showTranslations()
  setInitVerse()
}

function setInitEditions () {
  // Set by url
  const currenturl = new URL(window.location)
  const urlparams = currenturl.searchParams

  if (urlparams.get('editions') !== null) {
    urlparams.get('editions').split(',').map(e => $('#translationdropdown option[value="' + e + '"]').prop('selected', true))
    return
  }

  // Set editions by cookie
  const editionCookie = Cookies.get('editions')
  if (editionCookie !== undefined) {
    JSON.parse(editionCookie).map(e => $('#translationdropdown option[value="' + e + '"]').prop('selected', true))
    return
  }
  // set to default edition
  $('#translationdropdown option[value="' + defaultEdition + '"]').prop('selected', true)
}

function setInitChapter () {
  // Set chapter by url
  if (window.location.hash !== '') {
    const chapterVerse = window.location.hash.substring(1).split(':')
    $('#chapter option[value="' + chapterVerse[0] + '"]').prop('selected', true)
    return
  }
  // Set chapter by cookie
  const chapterCookie = Cookies.get('chapter')
  if (chapterCookie !== undefined) {
    $('#chapter option[value="' + chapterCookie + '"]').prop('selected', true)
    return
  }

  // Set chapter to 1 if all the above doesn't work
  $('#chapter option[value="1"]').prop('selected', true)
}

function setInitVerse () {
  // Stores the chapter & verse from link hash , eg: #4:3
  const chapterVerse = window.location.hash.substring(1).split(':')
  // scroll to specific verse if it existed in link hash
  if (chapterVerse.length > 1) {
    window.location = window.location.hash
    $('#verse option[value="' + window.location.hash + '"]').prop('selected', true)
  }
}

// Creates and add listing to the dropdown based on editions.json
async function createDropdown () {
  // Sorts language & author , edition Name
  const langEdition = []
  for (const value of Object.values(editionsJSON)) {
    let dropdownText
    // check edition name ends with -la, then
    if (/\-la$/i.test(value.name)) { dropdownText = value.language + ' Latin - ' + value.author } else if (/\-lad$/i.test(value.name)) { dropdownText = value.language + ' LatinD - ' + value.author } else { dropdownText = value.language + ' - ' + value.author }

    langEdition.push([dropdownText, value.name, value.direction])
  }
  // sort by dropdowntext
  langEdition.sort()

  for (const [value, key, dir] of langEdition) { $('#translationdropdown').append('<option value="' + key + '" data-dir="' + dir + '">' + value + '</option>') }

  // Create chapter dropdown
  for (let i = 1; i <= CHAPTER_LENGTH; i++) { $('#chapter').append('<option value="' + i + '">' + i + ' - ' + arabicChapters[i - 1] + ' (' + englishChapters[i - 1] + ')</option>') }
}

window.showTranslations = async function showTranslations () {
  // Not a great way to do
  $('#versescolumn').empty()
  // Add the card element, so verses get shown in cards
  $('#versescolumn').append('<ul id="verseslist" class="card list-group list-group-flush"></ul>')

  const selectedValues = $('#translationdropdown').val().filter(elem => !/^\s*$/.test(elem))

  // Holds chapter & editionName
  let chapEdDirHolder = []
  const chapterNo = $('#chapter').val()
  const linksArr = []
  if (chapterNo === '') { return }

  // Set the cookies
  if (selectedValues.length > 0) {
    Cookies.set('editions', JSON.stringify(selectedValues), { expires: 1000, path: '' })
    Cookies.set('chapter', chapterNo, { expires: 1000, path: '' })
  }

  for (const edName of selectedValues) {
    const linkFormed = editionsLink + '/' + edName + '/' + chapterNo + '.min.json'
    linksArr.push(linkFormed)
  }
  const chaptersArr = await getChapterArr(linksArr)
  chapEdDirHolder = chaptersArr.map((e, i) => [e, selectedValues[i], $('#translationdropdown option[value="' + selectedValues[i] + '"]').attr('data-dir'), $('#translationdropdown option[value="' + selectedValues[i] + '"]').text()])
  // offset by these verses due for better scrolling due to fixed header
  const offset = 1
  // create empty element with verse 1 id , so to avoid issues due to offset
  $('#verseslist').append('<span id="' + chapterNo + ':1"> </span>')
  let classValues
  for (let i = 1; i <= chaplength[chapterNo - 1]; i++) {
    for (const [chapter, edName, dir, dropDownText] of chapEdDirHolder) {
      const id = chapterNo + ':' + (i + offset)
      if (dir === 'rtl') { classValues = edName + ' text-right list-group-item p-2' } else { classValues = edName + ' list-group-item p-2' }
      $('#verseslist').append('<li class="' + classValues + '" dir="auto" id="' + id + '"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="' + dropDownText + '">' + i + '</span>' + ' - ' + chapter[i - 1] + '</li>')
    }
  }

  initializeTooltip()
  createVerseDropDown()
}

function initializeTooltip () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

function createVerseDropDown () {
  $('#verse').empty()

  $('#verse').append('<option value="" selected>Verse</option>')
  const chapterNo = $('#chapter').val()
  for (let i = 1; i <= chaplength[chapterNo - 1]; i++) {
    const anchor = '#' + chapterNo + ':' + i
    $('#verse').append('<option value="' + anchor + '">' + i + '</option>')
  }
}

// Fetches the translationLinks and returns the translations in optimized array form
// Also assigns it to global translationsArr
async function getChapterArr (linksarr) {
  const transJSON = await getLinksJSON(linksarr)
  return transJSON.map(e => e.chapter.map(e => e.text))
}

// https://www.shawntabrizi.com/code/programmatically-fetch-multiple-apis-parallel-using-async-await-javascript/
// Get links async i.e in parallel
async function getLinksJSON (urls) {
  return await Promise.all(
    urls.map(url => fetch(url).then(response => response.json()))
  ).catch(console.error)
}

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

// Call initializer function in the beginning itself, to fetch all necessary JSON's
let initVar
window.addEventListener('DOMContentLoaded', (event) => {
  initVar = oneTimeFunc()
})
/*
function getDirection (str) {
  const divelem = document.createElement('div')
  divelem.dir = 'auto'
  divelem.innerHTML = str
  divelem.style.display = 'none'
  document.body.appendChild(divelem)
  const direction = window.getComputedStyle(divelem).getPropertyValue('direction')
  divelem.remove()
  return direction
}
async function getFont(url) {

  let fontName = url.replace(/\.[^\.]*$/,"").replace(/.*\//,"")

  const font = new FontFace(fontName, 'url('+url+')');
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);

  return fontName

}

const fontsLink = apiLink + '/fonts';
let fontEdition={
  'ara-quranindopak': 'nastaleeq-v10-full',
  'ara-qurannastaleeqn': 'hafs-nastaleeq-ver10',
  'ara-quranbazzi': 'bazzi-v7-full',
  'ara-qurandoori': 'doori-v8-full',
  'ara-qurandoorinonun': 'uthmanic-doori1-ver08',
  'ara-quranuthmanihaf': 'hafs-uthmanic-v14-full',
  'ara-quranqaloon': 'qaloon-v8-full',
  'ara-quranqumbul': 'qumbul-v7-full',
  'ara-quranshouba': 'shouba-v7-full',
  'ara-quransoosi': 'soosi-v8-full',
  'ara-quransoosinonun': 'uthmanic-soosi1-ver08',
  'ara-quranwarsh': 'warsh-v8-full'
};

for(const [key , value] of Object.entries(fontEdition))
      fontEdition[key] = fontsLink+'/'+value+'.woff2'

*/
