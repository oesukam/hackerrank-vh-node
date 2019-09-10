/**
 * Event's table queries
 */
exports.createEventsTable = `
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    actor_id INTEGER,
    repo_id INTEGER,
    type TEXT,
    created_at DATE
  )
`;

exports.dropEventsTable = `
  DROP TABLE IF EXISTS events
`;

/**
 * Actor's table queries
 */
exports.createActorsTable = `
  CREATE TABLE IF NOT EXISTS actors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT,
    avatar_url TEXT
  )
`;

exports.dropActorsTable = `
  DROP TABLE IF EXISTS actors
`;

/**
 * Repo's table queries
 */
exports.createReposTable = `
  CREATE TABLE IF NOT EXISTS repos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    url TEXT
  )
`;

exports.dropReposTable = `
  DROP TABLE IF EXISTS repos
`;
