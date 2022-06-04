const fs = require('fs-extra')
const path = require('path')
fs.copySync(path.join(__dirname, 'code','list'), path.join(__dirname, 'dist','list'))
//fs.copySync(path.join(__dirname, 'blog'), path.join(__dirname, 'build','docsdata','blog'))