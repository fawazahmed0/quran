// This is the main script

// Fix issue for parcel/babel, for async await thing for old browser, or only support new browsers with async await functionality
// https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
// import 'regenerator-runtime/runtime'
// Fix issue for parcel jquery script
// https://github.com/parcel-bundler/parcel/issues/333#issuecomment-504552272
// https://www.npmjs.com/package/jquery
// import $ from 'jquery'
// import Cookies from 'js-cookie'

import './commoncode'

const defaultEdition = 'eng-mustafakhattabg'



let editionsJSON
// Lock to wait for translations to show
let lock = false
// call this only once
async function oneTimeFunc() {
  
  document.querySelector('#mycontainer').insertAdjacentHTML('afterbegin', window.searchBar);
  // Editions JSON from quran api
  [editionsJSON] = await window.getJSON(['editions'])
  // Create the dropdown
  await createDropdown()

  // first set edition, then chapter, then verse
  setInitEditions()
  setInitChapter()
  // show the translations on cookie/link selected values
  await window.showTranslations({initial: true})

  setInitVerse()
    // Add searchable select
  $('select').select2({
      theme: 'bootstrap4',
  });



  let hashValue = getHashTextFragment()
  if(hashValue)
  location = hashValue


  addEventListener('hashchange', async (event) => {
    let [newURLChapter, newURLVerse ]= new URL(event.newURL).hash.substring(1).split(':')
    let [oldURLChapter, oldURLVerse ]= new URL(event.oldURL).hash.substring(1).split(':')
    if(newURLChapter && newURLChapter!=oldURLChapter){
      window.currentVerse = newURLVerse
      $('#chapter option[value="' + newURLChapter + '"]').prop('selected', true)
      $('#chapter').trigger('change'); 
      lock = true
      while(lock){
        await new Promise(r => setTimeout(r, 500));
      }
      if(newURLVerse){
      $('#verse option[value="' + new URL(event.newURL).hash + '"]').prop('selected', true)
      $('#verse').trigger('change'); 
      }
    }
     if(newURLChapter==oldURLChapter && newURLVerse && newURLVerse!= oldURLVerse){
     $('#verse option[value="' + new URL(event.newURL).hash + '"]').prop('selected', true)
    $('#verse').trigger('change'); 
    }
   });

}



function setInitEditions() {
  // Set by url
  const currenturl = new window.URL(window.location)
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

function setInitChapter() {
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

function setInitVerse() {
  // Stores the chapter & verse from link hash , eg: #4:3
  const chapterVerse = window.location.hash.substring(1).split(':')
  // scroll to specific verse if it existed in link hash
  if (chapterVerse.length > 1) 
    $('#verse option[value="' + window.location.hash + '"]').prop('selected', true)
}

// Creates and add listing to the dropdown based on editions.json
async function createDropdown() {
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

window.showTranslations = async function showTranslations(event) {
  lock = true
  // Not a great way to do
  $('#versescolumn').empty()
  // Add the card element, so verses get shown in cards
  $('#versescolumn').append('<div id="verseslist" class="card list-group list-group-flush"></div>')

  const selectedValues = $('#translationdropdown').val().filter(elem => !/^\s*$/.test(elem))

  // Holds chapter & editionName
  let chapEdDirHolder = []
  const chapterNo = $('#chapter').val()
  const endpointsArr = []
  if (chapterNo === '') { return }

  // Set the cookies
  if (selectedValues.length > 0) {
    Cookies.set('editions', JSON.stringify(selectedValues), { expires: 1000, path: '' })
    Cookies.set('chapter', chapterNo, { expires: 1000, path: '' })
    showSpinningWheel('#versescolumn','afterbegin')
  }

  for (const edName of selectedValues) {
    const endpoint = 'editions' + '/' + edName + '/' + chapterNo
    endpointsArr.push(endpoint)
  }
  const chaptersArr = await getChapterArr(endpointsArr)
  chapEdDirHolder = chaptersArr.map((e, i) => [e, selectedValues[i], $('#translationdropdown option[value="' + selectedValues[i] + '"]').attr('data-dir'), $('#translationdropdown option[value="' + selectedValues[i] + '"]').text()])
  // offset by these verses due for better scrolling due to fixed header
  const offset = 1
  // create empty element with verse 1 id , so to avoid issues due to offset
  $('#verseslist').append('<span id="' + chapterNo + ':1"> </span>')
  removeSpinningWheel()
  let classValues
  for (let i = 1; i <= chaplength[chapterNo - 1]; i++) {
    for (const [chapter, edName, dir, dropDownText] of chapEdDirHolder) {
      const id = chapterNo + ':' + (i + offset)
      classValues = edName + ' list-group-item p-2'
      $('#verseslist').append('<div class="' + classValues + '" dir="' + dir + '" id="' + id + '"><span class="badge bg-light text-dark" data-bs-toggle="tooltip" title="' + dropDownText + '">' + i + '</span>' + ' - ' + chapter[i - 1] + '</div>')
    }
  }

  initializeTooltip()
  createVerseDropDown()

  // Add editions in current url
  let currenturl = new window.URL(window.location)
  currenturl.searchParams.set('editions', selectedValues.join(','));
  //let [chapterValue ]= document.querySelector('#verse').value.substring(1).split(':')

  if(event?.id != "translationdropdown")
  currenturl.hash = window.currentVerse ? `${document.querySelector('#chapter').value}:${window.currentVerse}` : document.querySelector('#chapter').value

  //Don't change the url on first page load
  if(event?.initial !== true)
  // Change url without reload
  window.history.pushState({}, "", currenturl);

  // Set variables to initial value
  window.currentVerse=undefined;
  lock = false


}

function initializeTooltip() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new window.bootstrap.Tooltip(tooltipTriggerEl)
  })
}

function createVerseDropDown() {
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
async function getChapterArr(endpointsArr) {
  const transJSON = await window.getJSON(endpointsArr)
  return transJSON.map(e => e.chapter.map(e => e.text))
}

// Hash with Text Fragment
function getHashTextFragment(){
  let hashWithFragment;
  // https://web.dev/text-fragments/#obtaining-text-fragments-for-analytics-purposes
  try{
    hashWithFragment =  new URL(performance.getEntries().find(({ type }) => type === 'navigate').name).hash
  }catch(e){}
  return hashWithFragment || window.location.hash
}





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
