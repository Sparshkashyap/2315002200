const {
  calculateScore,
  getWeight
} = require(
  "./priorityService"
);

function rankNotifications(
  notifications
) {

  const ranked =
    notifications.map(
      notification => {

        const weight =
          getWeight(
            notification.type
          );

        const score =
          calculateScore(
            weight,
            new Date(
              notification.createdAt
            ).getTime()
          );

        return {
          ...notification,
          score
        };
      }
    );

  ranked.sort(
    (a, b) =>
      b.score - a.score
  );

  return ranked.slice(0, 10);
}

module.exports = {
  rankNotifications
};