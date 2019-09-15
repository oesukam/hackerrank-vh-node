const db = require('../db');
const { orderBy } = require('lodash');
const moment = require('moment');
const getStreakInfo = require('../helpers/getStreakInfo');

const getAllActors = async (req, res) => {
  let result = await db.all(`
    SELECT actors.*, COUNT(events.id) total_events, events.created_at FROM actors
    INNER JOIN events ON events.actor_id = actors.id
    GROUP BY actors.id
    ORDER BY total_events DESC, created_at DESC, login DESC;
	`);

  result = result.map(item => {
    delete item.total_events;
    delete item.created_at;
    return item;
  });

  return res.json(result);
};

const updateActor = async (req, res) => {
  const { body } = req;
  const foundActor = await db.get(
    `
    SELECT * FROM actors
    WHERE id = ?
  `,
    [body.id]
  );

  if (!foundActor) {
    return res.status(404).json({ message: 'Actor not found ' });
  }
  const updatedActor = await db.run(
    `
    UPDATE actors
    SET login = ?, avatar_url = ?
    WHERE id = ?
  `,
    [
      body.login || foundActor.login,
      body.avatar_url || foundActor.avatar_url,
      body.id
    ]
  );

  return res.json({});
};

const getStreak = async (req, res) => {
  /*
  SELECT actors.*, COUNT(events.id) total_events, events.created_at FROM actors
    JOIN events ON events.actor_id = actors.id
    GROUP BY actors.id
    ORDER BY total_events
  */
  let result = await db.all(`
    SELECT events.*, actors.login, actors.avatar_url FROM actors
    JOIN events ON events.actor_id = actors.id
    ORDER BY created_at
	`);

  // result = orderBy(result, ['created_at', 'login'], ['desc', 'asc']);
  result = orderBy(
    getStreakInfo(result),
    ['maxStreak', 'dateLastEvent', 'login'],
    ['desc', 'desc', 'asc']
  );
  const cleanResult = result.map(item => {
    delete item.currentStreak;
    delete item.maxStreak;
    delete item.dateLastEvent;
    delete item.dateLatestEvent;
    return item;
  });

  return res.json(cleanResult);
};

module.exports = {
  updateActor: updateActor,
  getAllActors: getAllActors,
  getStreak: getStreak
};
