require("dotenv").config({
  path: require("path").join(
    __dirname,
    ".env"
  )
});

const express =
  require("express");

const app = express();

const schedulerRoutes =
  require(
    "./routes/schedulerRoutes"
  );

app.use(express.json());

app.use(
  "/api",
  schedulerRoutes
);

app.listen(
  process.env.PORT,
  () => {

    console.log(
      `Server running on port ${process.env.PORT}`
    );
  }
);