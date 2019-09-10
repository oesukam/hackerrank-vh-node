const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/db.sqlite3', err => {
  if (err) {
    console.log('Could not connect to database', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;
