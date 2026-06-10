function calculateScore(
  priorityWeight,
  timestamp
) {
  return (
    priorityWeight * 1000000000000 +
    timestamp
  );
}

function getWeight(type) {

  switch (
    String(type).toLowerCase()
  ) {

    case "placement":
      return 3;

    case "result":
      return 2;

    case "event":
      return 1;

    default:
      return 1;
  }
}

module.exports = {
  calculateScore,
  getWeight
};