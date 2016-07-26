const PORT = 1234
const SPRITEDIR = __dirname


var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')


app.use(express.static(SPRITEDIR))


app.get('/images', (req, res) => {
  fs.readdir(`${SPRITEDIR}/images`, (err, data) => {
    if (err) throw err

    var iconsname = data.filter(item => /png$/i.test(item))
      .map(item => path.basename(item, path.extname(item)))
    res.json(iconsname)
  })
})


app.listen(PORT, () => console.log(`Open http://localhost:${PORT} to browse the sprite-images collection`))
