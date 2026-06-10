require("dotenv").config();

const express =
  require("express");

const app =
  express();

const routes =
  require(
    "./routes/notificationRoutes"
  );

app.use(express.json());

app.use(
  "/api",
  routes
);

app.listen(
  process.env.PORT,
  () => {

    console.log(
      `Notification server running on port ${process.env.PORT}`
    );
  }
);