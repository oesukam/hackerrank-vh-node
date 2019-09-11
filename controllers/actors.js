const db = require('../db');

const getAllActors = async (req, res) => {
  const result = await db.all(`
		SELECT * FROM actors 
	`);

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
  await db.run(
    `
    UPDATE actors
    SET login = ?, avatar_url = ?
  `,
    [body.login || foundActor.login, body.avatar_url || foundActor.avatar_url]
  );

  return res.json({});
};

const getStreak = (req, res) => {
  const actors = [
    {
      id: 4276597,
      login: 'iholloway',
      avatar_url: 'https://avatars.com/4276597'
    },
    {
      id: 2917996,
      login: 'oscarschmidt',
      avatar_url: 'https://avatars.com/2917996'
    },
    {
      id: 2790311,
      login: 'daniel33',
      avatar_url: 'https://avatars.com/2790311'
    },
    {
      id: 2222918,
      login: 'xnguyen',
      avatar_url: 'https://avatars.com/2222918'
    },
    {
      id: 2907782,
      login: 'eric66',
      avatar_url: 'https://avatars.com/2907782'
    },
    {
      id: 3648056,
      login: 'ysims',
      avatar_url: 'https://avatars.com/3648056'
    },
    {
      id: 4864659,
      login: 'katrinaallen',
      avatar_url: 'https://avatars.com/4864659'
    },
    {
      id: 4949434,
      login: 'millerlarry',
      avatar_url: 'https://avatars.com/4949434'
    },
    {
      id: 3698252,
      login: 'daniel51',
      avatar_url: 'https://avatars.com/3698252'
    },
    {
      id: 3466404,
      login: 'khunt',
      avatar_url: 'https://avatars.com/3466404'
    }
  ];

  return res.json(actors);
};

module.exports = {
  updateActor: updateActor,
  getAllActors: getAllActors,
  getStreak: getStreak
};
