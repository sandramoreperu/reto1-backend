var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req, res) {
  res.send('Mi primer servidor yupi!');
})

app.get('/posts', function (req, res) {
  var randomID = faker.random.uuid()  ;
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.sentence();
  var randomFecha = faker.date.recent();
  var randomImage = faker.image.people();
  
  var posts = {
  	ID : randomID, 
    nombre: randomName,
   	contenido : randomContenido,
    fecha : randomFecha,
    imagen: randomImage, 

  }
  res.json(posts);

})

app.get('/amigos', function (req, res) {
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  var usuario = {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }
  res.json(usuario);
})


app.listen(3000);