const sqlite3 = require('sqlite3').verbose();
const tables = require('./tablesQueries');

const dbName = process.env.NODE_ENV === 'test' ? 'db_test' : 'DB';

const dropTables = () => {
  const db = new sqlite3.Database(`./db/${dbName}.sqlite3`, err => {
    if (err) {
      console.log('Could not connect to database', err);
      process.exit(1);
    } else {
      console.log('Connected to database');
      db.run(tables.dropEventsTable);
      db.run(tables.dropActorsTable);
      db.run(tables.dropReposTable);
      process.exit(0);
    }
  });
};

module.exports = dropTables;

require('make-runnable');
