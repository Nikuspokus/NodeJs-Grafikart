let app = require('express')()

app.get('/', (request, response) => {
    response.send('Salut tu es à la racine')
})

app.get('/demo', (request, response) => {
    response.send('Salut tu es sur la demo')
})

app.listen(8080)

// let map = require('lodash/map')

// console.log(map([1,2,3], function(n) {return n * 3;}));

// let app = require('./app').start(8080)
// app.on('root', function (response) {
//     response.write('Je suis à la racine')
// })

// let demo = require('./hello')
// demo.hello()