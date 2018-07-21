var {Song} = require('./db')
var restify = require('restify')
var server = restify.createServer()
var port = 3001

server.use(function (req, res, next) {
  var data = ''
  req.setEncoding('utf8')
  req.on('data', function (chunk) {
    data += chunk
  })
  req.on('end', function () {
    req.body = data
    console.log()
    next()
  })
})

server.get('/songs', (request, response) => {
  response.header('Access-Control-Allow-Origin','*')
  response.header('Access-Control-Allow-Headers','X-Requestred-With')
  Song.findAll().then(function(songs) {
	response.send(songs)
	response.end()
  })
})


server.opts('/songs' , function (req, response, next) {
  response.header('Access-Control-Allow-Origin','*')
  response.header('Access-Control-Allow-Headers','X-Requestred-With , Content-Type')
  response.send(200)
  next()
})

server.post('/songs', (request,response)=>{
  response.header('Access-Control-Allow-Origin','*')
  response.header('Access-Control-Allow-Headers','X-Requestred-With')
  const body = JSON.parse(request.body)
  Song.create(body).then(song=>{
    response.send(body)
    response.end()
  })
})




server.listen(port, () => {
  console.log(`Verizon stub server running on port ${port}`)
})


