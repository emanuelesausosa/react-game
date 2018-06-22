import express from 'express';
import path from 'path';

let app = express();

app.get('*/', (req, res) => {
  //res.send('Hola amigos');
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('escuchando en el puerto: 3000'));
