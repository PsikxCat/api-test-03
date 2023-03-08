const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;


const cantantes = {
  1: {
    nombre: 'Eric Clapton',
    edad: 74,
    pais: 'Reino Unido',
    genero: 'Rock',
  },
  2: {
    nombre: 'Jimi Hendrix',
    edad: 27,
    pais: 'Estados Unidos',
    genero: 'Rock',
  },
  3: {
    nombre: 'John Lennon',
    edad: 40,
    pais: 'Reino Unido',
    genero: 'Rock',
  },
  4: {
    nombre: 'Freddie Mercury',
    edad: 45,
    pais: 'Reino Unido',
    genero: 'Rock',
  },
  5: {
    nombre: 'Michael Jackson',
    edad: 50,
    pais: 'Estados Unidos',
    genero: 'Pop',
  },
  6: {
    nombre: 'Elvis Presley',
    edad: 42,
    pais: 'Estados Unidos',
    genero: 'Rock',
  },
  7: {
    nombre: 'Bob Dylan',
    edad: 77,
    pais: 'Estados Unidos',
    genero: 'Rock',
  },
  8: {
    nombre: 'Janis Joplin',
    edad: 27,
    pais: 'Estados Unidos',
    genero: 'Rock',
  },
  9: {
    nombre: 'David Bowie',
    edad: 69,
    pais: 'Reino Unido',
    genero: 'Rock',
  },
  10: {
    nombre: 'Elton John',
    edad: 73,
    pais: 'Reino Unido',
    genero: 'Rock',
  },
}

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/cantantes/:id', (req, res) => {
  const id = req.params.id;

  if (!cantantes[id]) {
    res.status(404).send('No se ha encontrado el cantante');
  } else {
    res.send(cantantes[id]);
  }

});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
