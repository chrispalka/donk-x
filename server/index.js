const express = require ('express');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://localhost'
const path = require ('path');
const fs = require ('fs');
const multer = require('multer');
const upload = multer({});
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { insertRow } = require('../db/index.js');
const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();


const app = express();
// app.set('view-engine', 'ejs')
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser('secretcode'));

app.post('/login', upload.none(), (req, res) => {
  let username = req.body.username;

  insertRow(`SELECT id FROM users WHERE username = '${username}'`, (result) => {
    if (result.length === 0) {
      insertRow(`INSERT INTO users (username) VALUES ('${username}')`, (result) => {
        return result;
      });
    } else {
      console.log('Name exists!');
    }
  });

  // res.set(headers);
  res.sendStatus(200);
});
app.post('/register', upload.none(), (req, res) => {

});
app.get('/user', upload.none(), (req, res) => {

});

app.post('/search', upload.none(), (req, res) => {
  let search = req.body.search;

  (async () => {
    try {
      const productList = await stockX.newSearchProducts(search, {
        limit: 20
      });
      res.status(200).json({ productList })
    }
    catch(e){
      console.log('Error: ' + e.message);
    }
  })();
});

app.post('/renderfavorite', upload.none(), (req, res) => {
  let currentuser = req.body.name
  console.log('currentuser: ', currentuser)
  insertRow(`SELECT * FROM FAVORITES WHERE user_id = (SELECT id FROM users WHERE username = '${currentuser}' )`, (result) => {
    result = JSON.parse(JSON.stringify(result));
    res.status(200).json({ result })
  })
});

app.post('/favorite', upload.none(), (req, res) => {
  let favorite = JSON.parse(JSON.stringify(req.body));
  let username = favorite.username
  if (favorite.status === 'true') {
    console.log('****Entry!!****')
    insertRow(`INSERT INTO favorites (name, url, media, highestbid, lastsale, user_id) VALUES ('${favorite.name}', '${favorite.url}', '${favorite.media}', '${favorite.highestBid}', '${favorite.lastSale}', (SELECT id FROM users WHERE username = '${username}'))`, (result) => {
      return result;
    });
  } else if (favorite.status === 'false' ) {
    console.log('****Deletion!!****')
    insertRow(`DELETE FROM favorites WHERE user_id = (SELECT id FROM users WHERE username = '${username}') AND name = '${favorite.name}'`, (result) => {
      return result;
    })
  }
  res.sendStatus(200);
});









app.listen(port, () => {
  console.log(`Express server listening on ${host}:${port}`)
});