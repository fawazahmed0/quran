const path = require('path')
const Mustache = require('mustache');
const fs = require('fs-extra');
const fg = require('fast-glob');
let templateDir = path.join(__dirname,'template')
let codeDir = path.join(__dirname,'code')
fs.mkdirSync(codeDir, {
    recursive: true
  })
let ignoreHTMLFiles = ['default.html']
let allFileNames = fg.sync(path.join(templateDir,'**'), { onlyFiles: true, dot:true}); 
// All HTML files,except the ignored html files
const chaptersJSON = { 'Al-Faatiha': 'The Opening', 'Al-Baqara': 'The Cow', 'Aal-i-Imraan': 'The Family of Imraan', 'An-Nisaa': 'The Women', 'Al-Maaida': 'The Table', "Al-An'aam": 'The Cattle', "Al-A'raaf": 'The Heights', 'Al-Anfaal': 'The Spoils of War', 'At-Tawba': 'The Repentance', Yunus: 'Jonas', Hud: 'Hud', Yusuf: 'Joseph', "Ar-Ra'd": 'The Thunder', Ibrahim: 'Abraham', 'Al-Hijr': 'The Rock', 'An-Nahl': 'The Bee', 'Al-Israa': 'The Night Journey', 'Al-Kahf': 'The Cave', Maryam: 'Mary', 'Taa-Haa': 'Taa-Haa', 'Al-Anbiyaa': 'The Prophets', 'Al-Hajj': 'The Pilgrimage', 'Al-Muminoon': 'The Believers', 'An-Noor': 'The Light', 'Al-Furqaan': 'The Criterion', "Ash-Shu'araa": 'The Poets', 'An-Naml': 'The Ant', 'Al-Qasas': 'The Stories', 'Al-Ankaboot': 'The Spider', 'Ar-Room': 'The Romans', Luqman: 'Luqman', 'As-Sajda': 'The Prostration', 'Al-Ahzaab': 'The Clans', Saba: 'Sheba', Faatir: 'The Originator', Yaseen: 'Yaseen', 'As-Saaffaat': 'Those drawn up in Ranks', Saad: 'The letter Saad', 'Az-Zumar': 'The Groups', Ghafir: 'The Forgiver', Fussilat: 'Explained in detail', 'Ash-Shura': 'Consultation', 'Az-Zukhruf': 'Ornaments of gold', 'Ad-Dukhaan': 'The Smoke', 'Al-Jaathiya': 'Crouching', 'Al-Ahqaf': 'The Dunes', Muhammad: 'Muhammad', 'Al-Fath': 'The Victory', 'Al-Hujuraat': 'The Inner Apartments', Qaaf: 'The letter Qaaf', 'Adh-Dhaariyat': 'The Winnowing Winds', 'At-Tur': 'The Mount', 'An-Najm': 'The Star', 'Al-Qamar': 'The Moon', 'Ar-Rahmaan': 'The Beneficent', 'Al-Waaqia': 'The Inevitable', 'Al-Hadid': 'The Iron', 'Al-Mujaadila': 'The Pleading Woman', 'Al-Hashr': 'The Exile', 'Al-Mumtahana': 'She that is to be examined', 'As-Saff': 'The Ranks', "Al-Jumu'a": 'Friday', 'Al-Munaafiqoon': 'The Hypocrites', 'At-Taghaabun': 'Mutual Disillusion', 'At-Talaaq': 'Divorce', 'At-Tahrim': 'The Prohibition', 'Al-Mulk': 'The Sovereignty', 'Al-Qalam': 'The Pen', 'Al-Haaqqa': 'The Reality', "Al-Ma'aarij": 'The Ascending Stairways', Nooh: 'Noah', 'Al-Jinn': 'The Jinn', 'Al-Muzzammil': 'The Enshrouded One', 'Al-Muddaththir': 'The Cloaked One', 'Al-Qiyaama': 'The Resurrection', 'Al-Insaan': 'Man', 'Al-Mursalaat': 'The Emissaries', 'An-Naba': 'The Announcement', "An-Naazi'aat": 'Those who drag forth', Abasa: 'He frowned', 'At-Takwir': 'The Overthrowing', 'Al-Infitaar': 'The Cleaving', 'Al-Mutaffifin': 'Defrauding', 'Al-Inshiqaaq': 'The Splitting Open', 'Al-Burooj': 'The Constellations', 'At-Taariq': 'The Morning Star', "Al-A'laa": 'The Most High', 'Al-Ghaashiya': 'The Overwhelming', 'Al-Fajr': 'The Dawn', 'Al-Balad': 'The City', 'Ash-Shams': 'The Sun', 'Al-Lail': 'The Night', 'Ad-Dhuhaa': 'The Morning Hours', 'Ash-Sharh': 'The Consolation', 'At-Tin': 'The Fig', 'Al-Alaq': 'The Clot', 'Al-Qadr': 'The Power, Fate', 'Al-Bayyina': 'The Evidence', 'Az-Zalzala': 'The Earthquake', 'Al-Aadiyaat': 'The Chargers', "Al-Qaari'a": 'The Calamity', 'At-Takaathur': 'Competition', 'Al-Asr': 'The Declining Day, Epoch', 'Al-Humaza': 'The Traducer', 'Al-Fil': 'The Elephant', Quraish: 'Quraysh', "Al-Maa'un": 'Almsgiving', 'Al-Kawthar': 'Abundance', 'Al-Kaafiroon': 'The Disbelievers', 'An-Nasr': 'Divine Support', 'Al-Masad': 'The Palm Fibre', 'Al-Ikhlaas': 'Sincerity', 'Al-Falaq': 'The Dawn', 'An-Naas': 'Mankind' };
const arabicChapters = Object.keys(chaptersJSON).map(e=>e.replace("'",""))
let htmlFileNames = allFileNames.filter(e => e.endsWith('.html') && !e.endsWith(ignoreHTMLFiles[0]))

let defaultTemplate = fs.readFileSync(path.join(templateDir, ignoreHTMLFiles[0])).toString()


let titles = {}
titles[path.join('list','index.html')] = 'Verses List'
titles['index.html'] = 'Read Quran'



const CHAPTER_LENGTH = 114
// Creating line to [chapter,verseNo] mappings
// Array containing number of verses in each chapters
const chaplength = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]


for (let i = 1; i <= CHAPTER_LENGTH; i++) {
  for (let j = 1; j <= chaplength[i - 1]; j++) {
    titles[`${i}${path.sep}${j}.html`] = `Chapter ${i} ${arabicChapters[i - 1]} Verse ${j}`
  }
}


let metaheadignore = {}
let titleKeys = Object.keys(titles)
for (let name of htmlFileNames){
    let innercode = fs.readFileSync(name).toString()
    let titleVal = titles[titleKeys.find(e=>name.endsWith(e))]
    var rendered = Mustache.render(defaultTemplate, { title: titleVal || path.parse(name).name , containercode:innercode, meta:{filename:name.replace(templateDir,"").replaceAll(path.sep,'/')} });
    fs.outputFileSync(name.replace(templateDir,codeDir), rendered)
}

// Copy all files like .js, folders etc to code directory
allFileNames.filter(e=>!e.endsWith('.html')).forEach(e=>fs.copySync(e, e.replace(templateDir,codeDir)))


