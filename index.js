var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile('/Users/kwambui/Desktop/david/Node/index.html')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})