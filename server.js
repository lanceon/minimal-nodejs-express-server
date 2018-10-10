var express = require('express')
var app = express()

var staticPath = './public'

app.set('port', (process.env.PORT || 5000))
app.use(express.static(staticPath))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  console.log("Path to static resources: " + staticPath)
})

