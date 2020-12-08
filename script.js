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

let editionsJSON

// call this only once
async function oneTimeFunc () {
  // Editions JSON from quran api
  [editionsJSON] = await getLinksJSON([editionsLink + '.min.json'])
  // Create the dropdown
  createDropdown()
  // Sets the cookie values to settings
  getSetCookies()
  // Stores the chapter & verse from link hash , eg: #4:3
  let chapterVerse = []
  if (window.location.hash !== '') {
    chapterVerse = window.location.hash.substring(1).split(':')
    $('#chapter option[value="' + chapterVerse[0] + '"]').prop('selected', true)
  }
  // show the translations on cookie/link selected values
  await showTranslations()

  // scroll to specific verse if it existed in link hash
  if (chapterVerse.length > 1) {
    window.location = window.location.hash
    $('#verse option[value="' + window.location.hash + '"]').prop('selected', true)
  }
}

// Set to default edition
function setDefaultEdition () {
  $('#translationdropdown option[value="' + defaultEdition + '"]').prop('selected', true)
}

function getSetCookies () {
  const editionCookie = Cookies.get('editions')
  if (editionCookie !== undefined) { JSON.parse(editionCookie).map(e => $('#translationdropdown option[value="' + e + '"]').prop('selected', true)) } else { setDefaultEdition() }

  const chapterCookie = Cookies.get('chapter')
  if (chapterCookie !== undefined) { $('#chapter option[value="' + chapterCookie + '"]').prop('selected', true) }
}

// Creates and add listing to the dropdown based on editions.json
async function createDropdown () {
  // Sorts language & author , edition Name
  const langEdition = []
  for (const value of Object.values(editionsJSON)) {
    let dropdownText
    // check edition name ends with -la, then
    if (/\-la$/i.test(value.name)) { dropdownText = value.language + ' Latin - ' + value.author } else if (/\-lad$/i.test(value.name)) { dropdownText = value.language + ' LatinD - ' + value.author } else { dropdownText = value.language + ' - ' + value.author }

    langEdition.push([dropdownText, value.name])
  }
  // sort by dropdowntext
  langEdition.sort()

  for (const [value, key] of langEdition) { $('#translationdropdown').append('<option value="' + key + '">' + value + '</option>') }

  // Create chapter dropdown
  for (let i = 1; i <= 114; i++) { $('#chapter').append('<option value="' + i + '">' + i + '</option>') }
}

window.showTranslations = async function showTranslations () {
  // Not a great way to do
  $('#versescolumn').empty()
  // Add the card element, so verses get shown in cards
  $('#versescolumn').append('<ul id="verseslist" class="card list-group list-group-flush"></ul>')

  const selectedValues = $('#translationdropdown').val().filter(elem => !/^\s*$/.test(elem))

  // Holds chapter & editionName
  let chapEdHolder = []
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
  chapEdHolder = chaptersArr.map((e, i) => [e, selectedValues[i]])
  // offset by these verses due for better scrolling due to fixed header
let offset = 1
    // create empty element with verse 1 id , so to avoid issues due to offset
    $('#verseslist').append('<span id="' + chapterNo + ':1"> </span>')

  for (let i = 1; i <= chaplength[chapterNo - 1]; i++) {

    for (const [chapter, edName] of chapEdHolder) {
      const id = chapterNo + ':' + (i+offset)
      $('#verseslist').append('<li class="'+edName+' list-group-item p-2" dir="auto" id="' + id + '">' + i + ' - ' + chapter[i - 1] + '</li>')
    }
  }

  createVerseDropDown()
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

for (let i = 1; i <= 114; i++) {
  for (let j = 1; j <= chaplength[i - 1]; j++) {
    mappings.push([i, j])
    mappingsStr.push(i + ',' + j)
  }
}

// Call initializer function in the beginning itself, to fetch all necessary JSON's
let initVar
window.addEventListener('DOMContentLoaded', (event) => {
  initVar = oneTimeFunc()
})


