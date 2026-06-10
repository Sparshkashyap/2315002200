const Log = require("./logger");

async function run() {

  const result = await Log(
    "backend",
    "info",
    "service",
    "Logger working successfully"
  );

  console.log(result);
}

run();