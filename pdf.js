const fs = require('fs');
const path = require('path');

const markdownpdf = require('markdown-pdf');

fs.createReadStream(path.join(__dirname, 'README.md'))
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream('agseco.pdf'));
