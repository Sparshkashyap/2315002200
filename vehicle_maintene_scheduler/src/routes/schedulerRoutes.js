const express = require("express");

const router = express.Router();

const apiClient =
  require("../utils/apiClient");

const {
  optimizeMaintenance
} = require(
  "../services/schedulerService"
);

const Log = require(
  "../../../logging_middleware/logger"
);

router.get(
  "/schedule/:depotId",
  async (req, res) => {

    try {

      await Log(
        "backend",
        "info",
        "route",
        "schedule endpoint called"
      );

      const depotResponse =
        await apiClient.get(
          "/depots"
        );

        console.log(
  JSON.stringify(
    depotResponse.data,
    null,
    2
  )
);

      const depot =
        depotResponse.data.depots.find(
          d =>
            d.ID ==
            req.params.depotId
        );

      if (!depot) {

        await Log(
          "backend",
          "warn",
          "service",
          "depot not found"
        );

        return res
  .status(404)
  .json({
    message: "Depot not found",
    availableDepots:
      depotResponse.data.depots.map(
        d => d.ID
      )
  });
      }

      const vehicleResponse =
        await apiClient.get(
          "/vehicles"
        );

      const result =
        optimizeMaintenance(
          vehicleResponse.data
            .vehicles,
          depot.MechanicHours
        );

      await Log(
        "backend",
        "info",
        "service",
        "optimization completed"
      );

      res.json({
        depotId: depot.ID,
        mechanicHours:
          depot.MechanicHours,
        totalImpact:
          result.totalImpact,
        selectedTasks:
          result.selectedTasks
      });

    } catch (error) {

      await Log(
        "backend",
        "error",
        "handler",
        error.message
      );

      res
        .status(500)
        .json({
          error:
            error.message
        });
    }
  }
);

module.exports = router;
