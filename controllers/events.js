const db = require('../db');

const getAllEvents = (req, res) => {
  db.all(
    `
		SELECT 
			events.*,
			actors.login,
			actors.avatar_url,
			repos.name,
			repos.url
		FROM events
		JOIN actors on events.actor_id = actors.id
		JOIN repos on events.repo_id = repos.id
	`,
    (error, rows) => {
      if (error) {
        return res.status(500).json({
          error: error.message
        });
      }
      const data = [];
      rows.forEach(row => {
        const column = {
          id: row.id,
          type: row.type
        };
        if (row.actor_id) {
          column.actor = {
            id: row.actor_id,
            login: row.login,
            avatar_url: row.avatar_url
          };
        }
        if (row.repo_id) {
          column.repo = {
            id: row.repo_id,
            name: row.name,
            url: row.url
          };
        }
        column.created_at = row.created_at;
        data.push(column);
      });
      return res.json(data || []);
    }
  );
};

const addEvent = (req, res) => {};

const getByActor = (req, res) => {};

const eraseEvents = (req, res) => {};

module.exports = {
  getAllEvents: getAllEvents,
  addEvent: addEvent,
  getByActor: getByActor,
  eraseEvents: eraseEvents
};
