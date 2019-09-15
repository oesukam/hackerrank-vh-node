const sqlite3 = require('sqlite3').verbose();

const dbName = process.env.NODE_ENV === 'test' ? 'db_test' : 'DB';

const db = new sqlite3.Database(`./db/${dbName}.sqlite3`, err => {
  if (err) {
    console.log('Could not connect to database', err);
  } else {
    console.log('Connected to database');
  }
});

const DB = {
  run: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql);
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  get: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql);
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  all: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql);
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
};

module.exports = DB;
