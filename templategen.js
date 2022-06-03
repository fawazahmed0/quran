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
let htmlFileNames = allFileNames.filter(e => e.endsWith('.html') && !e.endsWith(ignoreHTMLFiles[0]))

let defaultTemplate = fs.readFileSync(path.join(templateDir, ignoreHTMLFiles[0])).toString()


let titles = {'index.html':'Read Quran','data.html':'Quran in Multiple Languages','single.html':'Verses List'}
let footerclassobj = {}

let seoignore = `<meta name="robots" content="noindex">`
let metaheadignore = {}

for (let name of htmlFileNames){
    let innercode = fs.readFileSync(name).toString()
    var rendered = Mustache.render(defaultTemplate, { title: titles[name], footerclass: footerclassobj[name] , containercode:innercode, meta:{filename:name,head:metaheadignore[name]} });
    fs.outputFileSync(name.replace(templateDir,codeDir), rendered)
}

// Copy all files like .js, folders etc to code directory
allFileNames.filter(e=>!e.endsWith('.html')).forEach(e=>fs.copySync(e, e.replace(templateDir,codeDir)))


