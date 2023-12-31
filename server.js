const express = require('express');
const path = require('path');
const api = require('./routes/index'); 

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// sets static page to index 
app.use(express.static('public'));

// route for notes
app.get('/multiplayer', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/multiplayer.html'))
);

// listening for server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);