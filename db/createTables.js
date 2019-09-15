const sqlite3 = require('sqlite3').verbose();
const tables = require('./tablesQueries');
const dbName = process.env.NODE_ENV === 'test' ? 'db_test' : 'DB';

const createTables = () => {
  const db = new sqlite3.Database(`./db/${dbName}.sqlite3`, err => {
    if (err) {
      console.log('Could not connect to database', err);
      process.exit(1);
    } else {
      console.log('Connected to database');
      Promise.all([
        db.run(tables.createEventsTable),
        db.run(tables.createActorsTable),
        db.run(tables.createReposTable)
      ])
        .then(res => {
          setTimeout(() => {
            db.close();
            console.log('Tables created');
            process.exit(0);
          }, 1500);
        })
        .catch(err => {
          console.log("Couldn't create tables");
          process.exit(1);
        });
    }
  });
};

module.exports = createTables;

require('make-runnable');
