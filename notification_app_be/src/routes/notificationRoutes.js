const express =
  require("express");

const router =
  express.Router();

const {
  rankNotifications
} = require(
  "../services/notificationService"
);

router.get(
  "/priority",
  async (req, res) => {

    try {

      const sampleData = [];

      const ranked =
        rankNotifications(
          sampleData
        );

      res.json({
        count:
          ranked.length,
        notifications:
          ranked
      });

    } catch (error) {

      res.status(500).json({
        error:
          error.message
      });
    }
  }
);

module.exports = router;