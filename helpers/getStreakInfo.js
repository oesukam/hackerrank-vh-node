const moment = require('moment');

const getStreakInfo = events => {
  const streaks = {};

  events.forEach(event => {
    let actorId = event.actor_id;
    let createdAt = event.created_at;

    let streak = streaks[actorId];

    if (!streak) {
      streak = {
        login: event.login,
        id: event.actor_id,
        avatar_url: event.avatar_url,
        currentStreak: 0,
        maxStreak: 0,
        dateLastEvent: createdAt,
        dateLatestEvent: moment(createdAt).valueOf(),
        actorData: event.actor
      };
    }

    const dateLastEvent = moment(streak.dateLastEvent, 'YYYY-MM-DD');
    const dateCurrentEvent = moment(createdAt, 'YYYY-MM-DD');
    // const differenceInDays = dateLastEvent.diff(dateCurrentEvent, 'days');
    const differenceInDays = dateCurrentEvent.diff(dateLastEvent, 'days');

    if (differenceInDays > 1) {
      streak.currentStreak = 0;
    } else if (differenceInDays === 1) {
      streak.currentStreak++;

      if (streak.currentStreak > streak.maxStreak) {
        streak.maxStreak = streak.currentStreak;
      }
    }

    streak.dateLastEvent = createdAt;
    streaks[actorId] = streak;
  });

  return streaks;
};

module.exports = getStreakInfo;
